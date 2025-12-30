#pragma once

#include "lua.hpp"
#include <string>
#include <optional>

#define MAX_LUA_CODE_LEN    (2 << 15)   // 65536
#define LOADSTRING_FIELD    11          // loadstring

extern int g_using_script_index;
extern char g_lua_code[MAX_LUA_CODE_LEN];

// lua code is poiter to allocated and written lua code in target process to avoid large stack size by inlining the buffer into the struct
#pragma pack(push, 1)
struct lua_execution_data_t {
    char loadstring_field[LOADSTRING_FIELD]{ 0 };
    char* lua_code = nullptr;
    char error_msg[1024]{ 0 };
    lua::lua_state* state = nullptr;
    lua::getfield_t lua_getfield = nullptr;
    lua::pushstring_t lua_pushstring = nullptr;
    lua::pcall_t lua_pcall = nullptr;
    lua::tostring_t lua_tolstring = nullptr;
    lua::type_t lua_type = nullptr;
    lua::settop_t lua_settop = nullptr;
    int compile_error = 0;
    int run_error = 0;
};
#pragma pack(pop)
__declspec(noinline)
void __stdcall lua_execution_shellcode(lua_execution_data_t* data);

std::pair<int, std::optional<std::string>> execute_lua_remote_sync(const std::string& code, bool use_server_core = false);