#include <windows.h>
#include <iostream>
#include "memutil.hpp"
#include "game.hpp"
#include "lua.hpp"
#include "webview/webview.h"
#include "resource/resource.h"
#include "lua_shellcode.hpp"
#include <json.hpp>

using namespace memutil;

static std::string load_html_resource() {
    HRSRC res = FindResource(nullptr, MAKEINTRESOURCE(IDR_UI_HTML), RT_RCDATA);
    if (!res) return "";

    HGLOBAL data = LoadResource(nullptr, res);
    if (!data) return "";

    DWORD size = SizeofResource(nullptr, res);
    void* ptr = LockResource(data);

    return std::string((char*)ptr, size);
}



int main() {
    c_mem::instance()->attach("teardown.exe", PROCESS_ALL_ACCESS);

    if (!c_mem::instance()->valid())
        return -1;

    if (!lua::initialize())
        return -2;

    webview::webview w(true, nullptr);
    w.set_title("Teardown Lua Executor");
    w.set_size(400, 300, WEBVIEW_HINT_MIN);
    w.set_size(1600, 900, WEBVIEW_HINT_NONE);
    w.set_html(load_html_resource());

    w.bind("cpp_execute", [&](const std::string& req) -> std::string {
        nlohmann::json parsed_request = nlohmann::json::parse(req, nullptr, false);
        if (parsed_request.is_discarded()) return "";

        std::string code = parsed_request[0].get<std::string>();
        execute_lua_remote_sync(code);
        return "world";
    });

    w.run();
}