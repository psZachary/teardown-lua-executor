#pragma once
#include <iostream>
#include <cstdint>
#include "memutil.hpp"
#include "lua.hpp"

#define PROPERTY(name, type, offset) \
    __declspec(property(get = _get_##name)) type name; \
    type _get_##name() const { \
        uintptr_t ptr = memutil::c_mem::instance()->read<uintptr_t>(address + offset); \
        return type(ptr); \
    }

#define PROPERTY_VALUE(name, type, offset) \
    __declspec(property(get = _get_##name)) type name; \
    type _get_##name() const { \
        return memutil::c_mem::instance()->read<type>(address + offset); \
    }

#define PROPERTY_STRING(name, offset) \
    __declspec(property(get = _get_##name)) std::string name; \
    std::string _get_##name() const { \
        return read_string(address + offset); \
    }

namespace game {
    static std::string read_string(uintptr_t pstring) {
        auto mem = memutil::c_mem::instance();

        uint8_t is_heap{};
        mem->rpm(pstring + 31, &is_heap, 1);

        if (is_heap) {
            uintptr_t ptr{};
            mem->rpm(pstring, &ptr, 8);
            if (!ptr) return "";

            char buf[256]{'\0'};
            mem->rpm(ptr, buf, 255);
            return std::string(buf);
        }
        else {
            char buf[31]{'\0'};
            mem->rpm(pstring, buf, 31);
            return std::string(buf);
        }
    }

    class c_base {
    public:
        uintptr_t address;

        c_base() : address(0) {}
        c_base(uintptr_t addr) : address(addr) {}

        operator bool() const { return address != 0; }
        operator uintptr_t() const { return address; }
    };

    class c_lua_state : public c_base {
    public:
        using c_base::c_base;
    };

    class c_lua_wrapper : public c_base {
    public:
        using c_base::c_base;
        PROPERTY_VALUE(lua_state, lua::lua_state*, 0x0)
    };

    class c_script_core : public c_base {
    public:
        using c_base::c_base;

        PROPERTY_STRING(path, 0x10)
        PROPERTY(lua_wrapper, c_lua_wrapper, 0xA0)
    };

    class c_script : public c_base {
    public:
        using c_base::c_base;

        PROPERTY(local_core, c_script_core, 0x40)
        PROPERTY(server_core, c_script_core, 0x48)
        PROPERTY_STRING(resolved_path, 0xA8)
    };

    class c_scripts_vector : public c_base {
    public:
        using c_base::c_base;

        PROPERTY_VALUE(count, int32_t, 0x0)
        PROPERTY_VALUE(data, uintptr_t, 0x8)

        c_script get(int index) const {
            if (index >= count || !data || !count) return c_script(0);
            uintptr_t ptr = memutil::c_mem::instance()->read<uintptr_t>(data + (index * sizeof(uintptr_t)));
            return c_script(ptr);
        }

        c_script operator[](int index) const { return get(index); }
    };

    class c_scene : public c_base {
    public:
        using c_base::c_base;

        PROPERTY(scripts, c_scripts_vector, 0x280)
    };

    class c_context : public c_base {
    public:
        using c_base::c_base;

        PROPERTY(scene, c_scene, 0x50)

        static c_context instance() {
            static memutil::pattern_result result{0};
            game::c_context out{};

            if (!memutil::c_mem::instance()->valid()) {
                result = memutil::pattern_result{ 0 };
                return out;
            }
             
            if (!result.get())
                result = memutil::c_mem::instance()->sig_scan("Teardown.exe",
                    "48 8B 05 ? ? ? ? 48 8B 48 ? C6 44 24 ? ? C6 44 24 ? ? 48 8D 45");

            if (!result.get()) return out;

            if (!memutil::c_mem::instance()->rpm(result.rip<uintptr_t>(), &out.address, 8))
                return out;

            return out;
        }
    };
}