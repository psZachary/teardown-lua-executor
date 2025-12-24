#pragma once

#include <cstdint>

namespace lua {
    using lua_state = void;
    using getfield_t = void(*)(lua_state*, int, const char*);
    using pushstring_t = void(*)(lua_state*, const char*);
    using pcall_t = int(*)(lua_state*, int, int, int);
    using tostring_t = char* (*)(lua_state*, int index, size_t* len);
    using setfield_t = void(*)(lua_state*, int idx, const char*);
    using createtable_t = void(*)(lua_state*, int narr, int nrec);

    extern getfield_t getfield;
    extern pushstring_t pushstring;
    extern pcall_t pcall;
    extern tostring_t tolstring;
    extern setfield_t setfield;
    extern createtable_t createtable;

    bool initialize();
}