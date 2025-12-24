#include "lua_shellcode.hpp"
#include "game.hpp"

/*
    JMC Debugging is disabled in the project for Debug to
    prevent position dependent code from running
    in the shellcode(__CheckForDebuggerJustMyCode).

    /INCREMENTAL linking is disabled for Debug as well, this
    prevents jump tables for each function (position dependent code).
*/

__declspec(noinline)
void __stdcall lua_execution_shellcode(lua_execution_data_t* data) {
    // get loadstring function from _G (-10002)
    data->lua_getfield(data->state, -10002, data->loadstring_field);
    // push code onto stack
    data->lua_pushstring(data->state, data->code);
    // compile loadstring
    data->compile_error = data->lua_pcall(data->state, 1, 1, 0);

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

    // call compiled loadstring function
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

int execute_lua_remote_sync(const std::string& code) {
    lua_execution_data_t lua_exec_data{};
    void* remote_data = nullptr;
    void* remote_code = nullptr;
    const char* sz_loadstring_field = "loadstring";
    game::c_context ctx{};

    ctx = game::c_context::instance();
    if (!ctx.address) return 1;

    auto script = ctx.scene.scripts.get(4);

    // copy lua code to buffer in data
    memcpy(lua_exec_data.code, code.data(), code.length() + 1);
    // copy loadstring for lua_getfield usage
    memcpy(lua_exec_data.loadstring_field, sz_loadstring_field, strlen(sz_loadstring_field) + 1);
    // copy the pointers to the lua functions
    lua_exec_data.lua_getfield = lua::getfield;
    lua_exec_data.lua_pcall = lua::pcall;
    lua_exec_data.lua_pushstring = lua::pushstring;
    lua_exec_data.lua_tolstring = lua::tolstring;

    // dynamic state grabbing TODO
    lua_exec_data.state = (lua::lua_state*)ctx.scene.scripts.get(2).server_core.lua_wrapper.lua_state.address;

    // allocate data & shellcode
    remote_data = memutil::c_mem::instance()->alloc(nullptr, sizeof(lua_exec_data), MEM_COMMIT, PAGE_READWRITE);
    remote_code = memutil::c_mem::instance()->alloc(nullptr, 0x1000, MEM_COMMIT, PAGE_EXECUTE_READWRITE);
    if (!remote_data || !remote_code) return 2;

    // fill in data & shellcode
    memutil::c_mem::instance()->wpm(remote_data, &lua_exec_data, sizeof(lua_exec_data));
    memutil::c_mem::instance()->wpm(remote_code, &lua_execution_shellcode, 0x1000);

    // start the execution
    HANDLE thread = memutil::c_mem::instance()->create_remote_thread(nullptr, 0, remote_code, remote_data, 0, nullptr);
    if (!thread) return 3;
    
    // wait for shellcode to return
    if (memutil::c_mem::instance()->wait_for_single_object(thread, INFINITE) == WAIT_FAILED)
        return 4;

    lua_execution_data_t result{};
    memutil::c_mem::instance()->rpm(remote_data, &result, sizeof(result));

    printf("compile_error: %d\n", result.compile_error);
    printf("run_error: %d\n", result.run_error);
    if (result.compile_error != 0 || result.run_error != 0) {
        printf("error message: %s\n", result.error_msg);
    }

    // free data / shellcode
    memutil::c_mem::instance()->free(remote_data, 0, MEM_RELEASE);
    memutil::c_mem::instance()->free(remote_code, 0, MEM_RELEASE);

    // cleanup
    memutil::c_mem::instance()->close_handle(thread);
}