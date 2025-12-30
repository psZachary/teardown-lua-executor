#ifndef MEMUTIL_HPP
#define MEMUTIL_HPP
#include <Windows.h>
#include <string>
#include <cstdint>
#include <filesystem>

namespace memutil {
    struct section_info {
        uintptr_t base;
        size_t size;
    };

    class c_mem;

    class pattern_result {
    public:
        uintptr_t address;

        pattern_result(uintptr_t addr) : address(addr) {}

        operator bool() const { return address != 0; }

        template<typename T = uintptr_t>
        T get() const {
            return (T)address;
        }

        template<typename T = uintptr_t>
        T rip(size_t offset = 3) const;

        pattern_result add(intptr_t off) const {
            return pattern_result(address + off);
        }
    };

    class c_mem {
    private:
        static c_mem* g_instance;
        HANDLE h;
        DWORD pid;
    public:
        static c_mem* instance() {
            if (!g_instance) 
                g_instance = new c_mem;
            return g_instance;
        }

        bool is_valid_utf8_win(const std::string& str) {
            if (str.empty()) return true;
            int result = MultiByteToWideChar(CP_UTF8, MB_ERR_INVALID_CHARS, str.c_str(), (int)str.size(), nullptr, 0);
            return result != 0 || GetLastError() != ERROR_NO_UNICODE_TRANSLATION;
        }

        c_mem() : h(nullptr), pid(0) {}
        c_mem(HANDLE handle, DWORD process_id) : h(handle), pid(process_id) {}

        bool valid() const { return h != nullptr && h != INVALID_HANDLE_VALUE && pid != 0; }
        HANDLE handle() const { return h; }
        DWORD process_id() const { return pid; }

        void set_handle(HANDLE _h) { h = _h; }
        void set_process_id(DWORD _pid) { pid = _pid; }

        HANDLE attach(const std::string& application, uint32_t access);
        std::filesystem::path get_process_path();
        std::optional<std::filesystem::path> get_temp_path();

        bool rpm(uintptr_t addr, void* out, size_t size) const;
        bool wpm(uintptr_t addr, const void* buffer, size_t size) const;

        bool rpm(void* addr, void* out, size_t size) const {
            return rpm(reinterpret_cast<uintptr_t>(addr), out, size);
        }  
        bool wpm(void* addr, const void* buffer, size_t size) const {
            return wpm(reinterpret_cast<uintptr_t>(addr), buffer, size);
        }

        template<typename T>
        T read(uintptr_t addr) const {
            T val{};
            rpm(addr, &val, sizeof(T));
            return val;
        }
        template<typename T>
        bool write(uintptr_t addr, const T& val) const {
            return wpm(addr, &val, sizeof(T));
        }

        void* alloc(void* addr, size_t size, uint32_t alloc_type, uint32_t protect);
        int free(void* addr, size_t size, uint32_t free_type);

        uint32_t wait_for_single_object(HANDLE h, unsigned int milliseconds);
        int close_handle(HANDLE h);

        HANDLE create_remote_thread(
            LPSECURITY_ATTRIBUTES lp_thread_attributes,
            size_t stack_size,
            void* start_addr,
            void* param,
            uint32_t creation_flags,
            unsigned long* p_thread_id
        );

        uintptr_t get_module_base(const std::string& module_name) const;
        bool get_section_info(uintptr_t image_base, const char* section_name, section_info* p_sinfo) const;
        pattern_result sig_scan(uintptr_t base, size_t size, const char* signature);
        pattern_result sig_scan(std::string module_name, const char* signature);
    };

    template<typename T>
    T pattern_result::rip(size_t offset) const {
        if (!address || !c_mem::instance()->valid()) return 0;
        int32_t rip_offset = 0;
        c_mem::instance()->rpm(address + offset, &rip_offset, sizeof(int32_t));
        return (T)(address + offset + sizeof(int32_t) + rip_offset);
    }
}

#endif