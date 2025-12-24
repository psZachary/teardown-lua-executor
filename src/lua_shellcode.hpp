#pragma once

#include "lua.hpp"
#include <string>

#define MAX_LUA_CODE_LEN    (2 << 15)   // 65536
#define LOADSTRING_FIELD    11          // loadstring

extern int g_using_script_index;

struct lua_execution_data_t {
    char loadstring_field[11]{ 0 };
    char code[LOADSTRING_FIELD]{ 0 };
    char error_msg[256]{ 0 };
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

__declspec(noinline)
void __stdcall lua_execution_shellcode(lua_execution_data_t* data);

int execute_lua_remote_sync(const std::string& code);