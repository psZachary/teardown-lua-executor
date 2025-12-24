#pragma once

#include <cstdint>

namespace lua {
    using lua_state = void;
    using getfield_t = void(*)(lua_state*, int, const char*);
    using pushstring_t = void(*)(lua_state*, const char*);
    using pcall_t = int(*)(lua_state*, int, int, int);
    using tostring_t = char* (*)(lua_state*, int, size_t*);
    using type_t = int(*)(lua_state*, int);
    using settop_t = void(*)(lua_state*, int);


    enum e_lua_type {
        LUA_TNIL = 0,
        LUA_TBOOLEAN = 1,
        LUA_TLIGHTUSERDATA = 2,
        LUA_TNUMBER = 3,
        LUA_TSTRING = 4,
        LUA_TTABLE = 5,
        LUA_TFUNCTION = 6,
        LUA_TUSERDATA = 7,
        LUA_TTHREAD = 8,
        LUA_TBUFFER = 9,
        UNKNOWN = -1
    };

    extern getfield_t getfield;
    extern pushstring_t pushstring;
    extern pcall_t pcall;
    extern tostring_t tolstring;
    extern type_t type;
    extern settop_t settop;

    bool initialize();
}