#include <windows.h>
#include <iostream>
#include "memutil.hpp"
#include "game.hpp"
#include "lua.hpp"
#include "webview/webview.h"
#include "../resource/resource.h"
#include "lua_shellcode.hpp"
#include <json.hpp>
#include "file_helper.hpp"
#include <fstream>
#include <thread>
#include "version.hpp"

using namespace memutil;
using namespace nlohmann;

#ifdef _DEBUG
#define WEBVIEW2_DEBUG 1
#else
#define WEBVIEW2_DEBUG 0
#endif

static std::string load_html_resource() {
    HRSRC res = FindResource(nullptr, MAKEINTRESOURCE(IDR_UI_HTML), RT_RCDATA);
    if (!res) return "";

    HGLOBAL data = LoadResource(nullptr, res);
    if (!data) return "";

    DWORD size = SizeofResource(nullptr, res);
    void* ptr = LockResource(data);

    return std::string((char*)ptr, size);
}


static json build_script_array() {
    json result = json::array();

    game::c_context ctx = game::c_context::instance();
    if (!ctx.address) return result;

    game::c_scene scene = ctx.scene;
    if (!scene.address) return result;

    game::c_scripts_vector scripts = scene.scripts;
    if (!scripts.address || scripts.count <= 0) return result;

    for (int i = 0; i < scripts.count; i++) {
        json script_object{};

        game::c_script script = scripts.get(i);
        if (!script.address) continue;

        std::filesystem::path script_path = script.resolved_path;
        if (!script_path.is_absolute()) {
            // append teardown path because of relative path (usually script is teardown/data/...)
            script_path = (c_mem::instance()->get_process_path().parent_path() / script_path).generic_string();
        }



        script_object["index"] = std::to_string(i);
        script_object["path"] = script_path;
        script_object["has_client"] = (script.local_core.address ? true : false);
        script_object["has_server"] = (script.server_core.address ? true : false);
        result.push_back(script_object);
    }

    return result;
}

static json build_game_structure() {
    json result = json::object();

    result["scripts"] = build_script_array();
    result["attached_message"] = !c_mem::instance()->valid() ? "Failed to open process" : (!lua::g_initialized ? "Failed to initialize Lua" : "Unknown");
    result["attached"] = c_mem::instance()->valid() && lua::g_initialized;
    return result;
}

static json get_build_info() {
    json result = json::object();
    result["version"] = VERSION_STRING;
    result["build_type"] = (WEBVIEW2_DEBUG ? "Debug" : "Release");
    return result;
}

static void update() {
    for (;;) {
        c_mem::instance()->attach("teardown.exe", PROCESS_ALL_ACCESS);
        lua::initialize();
        std::this_thread::sleep_for(std::chrono::milliseconds(500));
    }
}

static HWND init_window(webview::webview& w) {
    HWND hwnd = static_cast<HWND>(w.window().value());
    HICON icon = LoadIconA(GetModuleHandleA(nullptr), MAKEINTRESOURCEA(IDI_ICON1));
    SendMessageA(hwnd, WM_SETICON, ICON_SMALL, (LPARAM)icon);
    SendMessageA(hwnd, WM_SETICON, ICON_BIG, (LPARAM)icon);
    return hwnd;
}

static bool open_in_editor(const std::string& path) {
    auto result = (int64_t)ShellExecuteA(nullptr, "open", path.c_str(), nullptr, nullptr, SW_SHOWNORMAL);

    // fallback to notepad
    if (result <= 32) {
        return (int64_t)ShellExecuteA(nullptr, "open", "notepad.exe", path.c_str(), nullptr, SW_SHOWNORMAL) > 32;
    }

    return true;
}

static int entry() {
    c_mem::instance()->attach("teardown.exe", PROCESS_ALL_ACCESS);
    lua::initialize();

    bool debug_mode = 1;
    webview::webview w(WEBVIEW2_DEBUG, nullptr);
    init_window(w);
    w.set_title("Teardown Lua Executor");
    w.set_size(400, 300, WEBVIEW_HINT_MIN);
    w.set_size(1600, 900, WEBVIEW_HINT_NONE);

    if (WEBVIEW2_DEBUG)
        w.navigate("http://localhost:5173");
    else if (not WEBVIEW2_DEBUG)
        w.set_html(load_html_resource());

    w.bind("cpp_execute", [&](const std::string& req) -> std::string {
        nlohmann::json return_object{};
        return_object["error"] = "Success";

        nlohmann::json parsed_request = nlohmann::json::parse(req, nullptr, false);
        if (parsed_request.is_discarded()) return "";

        std::string code = parsed_request[0].get<std::string>();
        bool use_server_core = parsed_request[1].get<bool>();

        auto [execution_result, err_message] = execute_lua_remote_sync(code, use_server_core);
        if (execution_result != 0) {
            if (err_message.has_value())
                return_object["error"] = err_message.value();
            else
                return_object["error"] = "Critical error during execution! Error reference: " + std::to_string(execution_result);
            return return_object.dump();
        }

        return return_object.dump();
    });

    w.bind("cpp_load_file", [&](const std::string& req) -> std::string {
        nlohmann::json return_object{};
        return_object["error"] = "Success";

        std::filesystem::path path = c_file_helper::load_lua_file();
        if (path.empty() || !std::filesystem::exists(path)) {
            return_object["error"] = "File not found";
            return return_object.dump();
        }

        if (path.empty()) {
            return_object["error"] = "No file chosen";
            return return_object.dump();
        }

        std::ifstream f(path);
        if (!f.is_open()) {
            return_object["error"] = "Failed to open file";
            return return_object.dump();
        }

        std::stringstream buf{};
        buf << f.rdbuf();
        f.close();
        if (!c_mem::instance()->is_valid_utf8_win(buf.str())) {
            return_object["error"] = "Invalid file encoding";
            return return_object.dump();
        }
        return_object["code"] = buf.str();

        return return_object.dump();
    });

    w.bind("cpp_get_build_info", [&](const std::string& req) -> std::string {
        return get_build_info().dump();
    });

    w.bind("cpp_save_file", [&](const std::string& req) -> std::string {
        nlohmann::json return_object{};
        return_object["error"] = "Success";

        nlohmann::json parsed_request = nlohmann::json::parse(req, nullptr, false);
        if (parsed_request.is_discarded()) {
            return_object["error"] = "Failed to parse incoming data";
            return return_object.dump();
        }

        std::string lua_code = parsed_request[0].get<std::string>();
        if (lua_code.empty()) {
            return_object["error"] = "File empty";
            return return_object.dump();
        }

        if (!c_file_helper::save_file(lua_code)) {
            return_object["error"] = "Failed to save file";
            return return_object.dump();
        }

        return return_object.dump();
    });

    w.bind("cpp_open_file", [&](const std::string& req) -> std::string {
        nlohmann::json return_object{};
        return_object["error"] = "Success";

        nlohmann::json parsed_request = nlohmann::json::parse(req, nullptr, false);
        if (parsed_request.is_discarded()) {
            return_object["error"] = "Failed to parse incoming data";
            return return_object.dump();
        }

        std::filesystem::path path = parsed_request[0].get<std::string>();
        if (path.empty() || !std::filesystem::exists(path)) {
            return_object["error"] = "Invalid path";
            return return_object.dump();
        }

        if (!open_in_editor(path.generic_string())) {
            return_object["error"] = "Failed to open file";
            return return_object.dump();
        }

        return return_object.dump();
    });

    w.bind("cpp_get_game_structure", [&](const std::string& req) -> std::string {
        return build_game_structure().dump();
    });

    w.bind("cpp_update_script_index", [&](const std::string& req) -> std::string {
        nlohmann::json parsed_request = nlohmann::json::parse(req, nullptr, false);
        if (parsed_request.is_discarded()) return "";
        std::cout << parsed_request.dump();
        // first argument passed from js
        int index = parsed_request[0].get<int>();
        g_using_script_index = index;

        return "";
    });

    std::thread(update).detach();
    w.run();

    return 0;
}

#ifdef NDEBUG
int APIENTRY WinMain(HINSTANCE h_inst, HINSTANCE h_inst_prefv, PSTR cmdline, int cmdshow) {
    return entry();
}
#endif

#ifdef _DEBUG
int main() {
    return entry();
}
#endif