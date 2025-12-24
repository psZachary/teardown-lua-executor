#include <windows.h>
#include <iostream>
#include "memutil.hpp"
#include "game.hpp"
#include "lua.hpp"
#include "webview/webview.h"
#include "../resource/resource.h"
#include "lua_shellcode.hpp"
#include <json.hpp>
#include "file_loader.hpp"
#include <fstream>
#include <thread>

using namespace memutil;
using namespace nlohmann;

#ifndef _DEBUG
#define _DEBUG 0
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

        script_object["index"] = std::to_string(i);
        script_object["path"] = script.resolved_path.c_str();
        script_object["has_client"] = (script.local_core.address ? true : false);
        script_object["has_server"] = (script.server_core.address ? true : false);
        result.push_back(script_object);
    }

    return result;
}

static json build_game_structure() {
    json result = json::object();

    result["scripts"] = build_script_array();
    result["attached"] = c_mem::instance()->valid() && lua::g_initialized;
    return result;
}

static void update() {
    for (;;) {
        c_mem::instance()->attach("teardown.exe", PROCESS_ALL_ACCESS);
        lua::initialize();
        std::this_thread::sleep_for(std::chrono::milliseconds(500));
    }
}

int main() {
    c_mem::instance()->attach("teardown.exe", PROCESS_ALL_ACCESS);
    lua::initialize();

    webview::webview w(_DEBUG, nullptr);
    w.set_title("Teardown Lua Executor");
    w.set_size(400, 300, WEBVIEW_HINT_MIN);
    w.set_size(1600, 900, WEBVIEW_HINT_NONE);
    w.set_html(load_html_resource());
 
    w.bind("cpp_execute", [&](const std::string& req) -> std::string {
        nlohmann::json return_object{};
        return_object["error"] = "Success";

        nlohmann::json parsed_request = nlohmann::json::parse(req, nullptr, false);
        if (parsed_request.is_discarded()) return "";

        std::string code = parsed_request[0].get<std::string>();
        int execution_result = execute_lua_remote_sync(code);
        if (execution_result != 0) {
            return_object["error"] = "Critical error during execution! Error reference: " + std::to_string(execution_result);
            return return_object.dump();;
        }

        return return_object.dump();
    });

    w.bind("cpp_load_file", [&](const std::string& req) -> std::string {
        nlohmann::json return_object{};
        return_object["error"] = "Success";

        std::filesystem::path path = c_file_loader::load_file();
        if (path.empty() || !std::filesystem::exists(path)) {
            return_object["error"] = "File not found";
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
        return_object["code"] = buf.str();
        
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
}