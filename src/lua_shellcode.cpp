#include "lua_shellcode.hpp"
#include "game.hpp"
#include <optional>

/*
    JMC Debugging is disabled in the project for Debug to
    prevent position dependent code from running
    in the shellcode(__CheckForDebuggerJustMyCode).

    /INCREMENTAL linking is disabled for Debug as well, this
    prevents jump tables for each function (position dependent code).
*/

int g_using_script_index = 0;

__declspec(noinline)
void __stdcall lua_execution_shellcode(lua_execution_data_t* data) {
    // get loadstring
    data->lua_getfield(data->state, -10002, data->loadstring_field);
    // push code
    data->lua_pushstring(data->state, data->code);
    // call loadstring(code) -> returns function or nil, errmsg
    data->compile_error = data->lua_pcall(data->state, 1, 2, 0);

    if (data->compile_error != 0) {
        const char* err = data->lua_tolstring(data->state, -1, nullptr);
        if (err) {
            int i = 0;
            while (err[i] && i < 255) {
                data->error_msg[i] = err[i];
                i++;
            }
            data->error_msg[i] = 0;
        }
        return;
    }

    // check if first return is nil (compile failed)
    int type = data->lua_type(data->state, -2);
    if (type == 0) {  // LUA_TNIL
        // error message is at -1
        const char* err = data->lua_tolstring(data->state, -1, nullptr);
        if (err) {
            int i = 0;
            while (err[i] && i < 255) {
                data->error_msg[i] = err[i];
                i++;
            }
            data->error_msg[i] = 0;
        }
        data->compile_error = -1;
        return;
    }

    // pop error message (or nil), keep function
    data->lua_settop(data->state, -2);

    // call the compiled function
    data->run_error = data->lua_pcall(data->state, 0, 0, 0);
    if (data->run_error != 0) {
        const char* err = data->lua_tolstring(data->state, -1, nullptr);
        if (err) {
            int i = 0;
            while (err[i] && i < 255) {
                data->error_msg[i] = err[i];
                i++;
            }
            data->error_msg[i] = 0;
        }
    }
}

void initialize_execution_data(
    lua_execution_data_t& data,
    lua::lua_state* state,
    const std::string& code
) {
    memset(&data, 0, sizeof(data));
    const char* sz_loadstring_field = "loadstring";

    // copy lua code to buffer in data
    memcpy(data.code, code.data(), code.length() + 1);
    // copy loadstring for lua_getfield usage
    memcpy(data.loadstring_field, sz_loadstring_field, strlen(sz_loadstring_field) + 1);
    // copy the pointers to the lua functions
    data.lua_getfield = lua::getfield;
    data.lua_pcall = lua::pcall;
    data.lua_pushstring = lua::pushstring;
    data.lua_tolstring = lua::tolstring;
    data.lua_type = lua::type;
    data.lua_settop = lua::settop;

    // dynamic state grabbing TODO
    data.state = (lua::lua_state*)state;
}
void sanitize_execution_data(lua_execution_data_t& data) {
    data.error_msg[sizeof(data.error_msg) - 1] = '\0';

    for (int i = 0; i < sizeof(data.error_msg) - 1; i++) {
        unsigned char c = data.error_msg[i];
        if (c != '\0' && (c < 0x20 || c >= 0x7F)) {
            data.error_msg[i] = '\0';
            break;
        }
    }
}

std::pair<int, std::optional<std::string>> execute_lua_remote_sync(const std::string& code) {
    lua_execution_data_t lua_exec_data{};
    void* remote_data = nullptr;
    void* remote_code = nullptr;
    game::c_context ctx{};
    game::c_scene scene{};
    game::c_scripts_vector scripts{};
    game::c_script using_script{};
    game::c_script_core using_core{};

    if (!memutil::c_mem::instance() || !memutil::c_mem::instance()->valid())
        return { -1, "Not attached" };

    ctx = game::c_context::instance();
    if (!ctx) return { 1, "Game context invalid"};

    scene = ctx.scene;
    if (!scene) return { 2, "Invalid scene"};

    scripts = scene.scripts;
    if (!scripts) return { 3, "Scripts list invalid" };

    using_script = scripts.get(g_using_script_index);
    if (!using_script) return { 4, "Invalid using script index "};

    using_core = using_script.server_core;

    initialize_execution_data(lua_exec_data, using_core.lua_wrapper.lua_state, code);

    // allocate data & shellcode
    remote_data = memutil::c_mem::instance()->alloc(nullptr, sizeof(lua_exec_data), MEM_COMMIT, PAGE_READWRITE);
    remote_code = memutil::c_mem::instance()->alloc(nullptr, 0x1000, MEM_COMMIT, PAGE_EXECUTE_READWRITE);
    if (!remote_data || !remote_code) return { 5, std::nullopt };

    // fill in data & shellcode
    memutil::c_mem::instance()->wpm(remote_data, &lua_exec_data, sizeof(lua_exec_data));
    memutil::c_mem::instance()->wpm(remote_code, &lua_execution_shellcode, 0x1000);

    // start the execution
    HANDLE thread = memutil::c_mem::instance()->create_remote_thread(nullptr, 0, remote_code, remote_data, 0, nullptr);
    if (!thread) return { 6, "Failed to create remote thread"};
    
    // wait for shellcode to return
    if (memutil::c_mem::instance()->wait_for_single_object(thread, 10000) == WAIT_FAILED) {
        memutil::c_mem::instance()->free(remote_data, 0, MEM_RELEASE);
        memutil::c_mem::instance()->free(remote_code, 0, MEM_RELEASE);
        return { 7, "Failed to wait for thread"};
    }

    lua_execution_data_t result{};
    memutil::c_mem::instance()->rpm(remote_data, &result, sizeof(result));
    sanitize_execution_data(result);

    if (result.compile_error != 0 || result.run_error != 0) {
        memutil::c_mem::instance()->free(remote_data, 0, MEM_RELEASE);
        memutil::c_mem::instance()->free(remote_code, 0, MEM_RELEASE);
        memutil::c_mem::instance()->close_handle(thread);

        return { 8, result.error_msg };
    }

    // free data / shellcode / cleanup
    memutil::c_mem::instance()->free(remote_data, 0, MEM_RELEASE);
    memutil::c_mem::instance()->free(remote_code, 0, MEM_RELEASE);
    memutil::c_mem::instance()->close_handle(thread);

    return { 0, "Success"};
}