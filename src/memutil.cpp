#include "memutil.hpp"
#include <vector>
#include <tlhelp32.h>

memutil::c_mem* memutil::c_mem::g_instance = nullptr;

HANDLE memutil::c_mem::attach(const std::string& application, uint32_t access)
{
    HANDLE snap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
    if (snap == INVALID_HANDLE_VALUE) return nullptr;

    PROCESSENTRY32W entry{};
    entry.dwSize = sizeof(entry);
    std::wstring wide_name(application.begin(), application.end());

    if (Process32FirstW(snap, &entry)) {
        do {
            if (_wcsicmp(entry.szExeFile, wide_name.c_str()) == 0) {
                pid = entry.th32ProcessID;
                h = OpenProcess(access, false, pid);
                CloseHandle(snap);
                return h;
            }
        } while (Process32NextW(snap, &entry));
    }

    pid = 0;
    h = 0;
    CloseHandle(snap);
    return nullptr;
}

bool memutil::c_mem::rpm(uintptr_t addr, void* out, size_t size) const {
    size_t bytes_read = 0;
    return ReadProcessMemory(h, (LPCVOID)addr, out, size, &bytes_read) && bytes_read == size;
}

bool memutil::c_mem::wpm(uintptr_t addr, const void* buffer, size_t size) const {
    size_t bytes_written = 0;
    return WriteProcessMemory(h, (LPVOID)addr, buffer, size, &bytes_written) && bytes_written == size;
}

void* memutil::c_mem::alloc(void* addr, size_t size, uint32_t alloc_type, uint32_t protect)
{
    return VirtualAllocEx(h, addr, size, alloc_type, protect);
}

int memutil::c_mem::free(void* addr, size_t size, uint32_t free_type)
{
    return VirtualFreeEx(h, addr, size, free_type);
}

uint32_t memutil::c_mem::wait_for_single_object(HANDLE h, unsigned int milliseconds)
{
    return WaitForSingleObject(h, milliseconds);
}

int memutil::c_mem::close_handle(HANDLE h)
{
    return CloseHandle(h);
}

HANDLE memutil::c_mem::create_remote_thread(LPSECURITY_ATTRIBUTES lp_thread_attributes, size_t stack_size, void* start_addr, void* param, uint32_t creation_flags, unsigned long* p_thread_id)
{
    return CreateRemoteThread(h, lp_thread_attributes, stack_size, reinterpret_cast<LPTHREAD_START_ROUTINE>(start_addr), param, creation_flags, p_thread_id);
}

uintptr_t memutil::c_mem::get_module_base(const std::string& module_name) const {
    HANDLE snap = CreateToolhelp32Snapshot(TH32CS_SNAPMODULE | TH32CS_SNAPMODULE32, pid);
    if (snap == INVALID_HANDLE_VALUE) return 0;

    MODULEENTRY32W entry{};
    entry.dwSize = sizeof(entry);

    std::wstring wide_name(module_name.begin(), module_name.end());

    if (Module32FirstW(snap, &entry)) {
        do {
            if (_wcsicmp(entry.szModule, wide_name.c_str()) == 0) {
                CloseHandle(snap);
                return (uintptr_t)entry.modBaseAddr;
            }
        } while (Module32NextW(snap, &entry));
    }

    CloseHandle(snap);
    return 0;
}

bool memutil::c_mem::get_section_info(uintptr_t image_base, const char* section_name, section_info* p_sinfo) const {
    IMAGE_DOS_HEADER dos{};
    if (!rpm(image_base, &dos, sizeof(dos))) return false;
    if (dos.e_magic != IMAGE_DOS_SIGNATURE) return false;

    struct {
        DWORD signature;
        IMAGE_FILE_HEADER file_header;
    } nt_header{};

    uintptr_t nt_addr = image_base + dos.e_lfanew;
    if (!rpm(nt_addr, &nt_header, sizeof(nt_header))) return false;
    if (nt_header.signature != IMAGE_NT_SIGNATURE) return false;

    uintptr_t sections_addr = nt_addr + sizeof(DWORD) + sizeof(IMAGE_FILE_HEADER) + nt_header.file_header.SizeOfOptionalHeader;

    for (WORD i = 0; i < nt_header.file_header.NumberOfSections; i++) {
        IMAGE_SECTION_HEADER sh{};
        if (!rpm(sections_addr + i * sizeof(IMAGE_SECTION_HEADER), &sh, sizeof(sh))) return false;

        if (strncmp((char*)sh.Name, section_name, 8) == 0) {
            p_sinfo->base = image_base + sh.VirtualAddress;
            p_sinfo->size = sh.Misc.VirtualSize;
            return true;
        }
    }

    return false;
}

static bool match_signature(const uint8_t* data, const std::vector<int>& pattern) {
    for (size_t i = 0; i < pattern.size(); i++) {
        if (pattern[i] != -1 && data[i] != pattern[i])
            return false;
    }
    return true;
}

static std::vector<int> parse_signature(const char* sig) {
    std::vector<int> pattern;
    const char* p = sig;
    while (*p) {
        while (*p == ' ') p++;
        if (!*p) break;
        if (*p == '?') {
            pattern.push_back(-1);
            p++;
            if (*p == '?') p++;
        }
        else {
            pattern.push_back(strtol(p, nullptr, 16));
            p += 2;
        }
    }
    return pattern;
}

memutil::pattern_result memutil::c_mem::sig_scan(uintptr_t base, size_t size, const char* signature)
{
    pattern_result out{ 0 };
    auto pattern = parse_signature(signature);
    if (pattern.empty()) return out;

    constexpr size_t chunk_size = 0x10000;
    size_t overlap = pattern.size() - 1;
    std::vector<uint8_t> buffer(chunk_size);

    for (size_t offset = 0; offset < size;) {
        size_t to_read = min(chunk_size, size - offset);
        if (!this->rpm(base + offset, buffer.data(), to_read)) {
            return out;
        }

        size_t scan_end = (offset + to_read >= size) ? to_read - pattern.size() + 1 : to_read - overlap;
        for (size_t i = 0; i < scan_end; i++) {
            if (match_signature(&buffer[i], pattern)) {
                out.address = base + offset + i;
                return out;
            }
        }
        offset += to_read - overlap;
    }

    return out;
}

memutil::pattern_result memutil::c_mem::sig_scan(std::string module_name, const char* signature)
{
    pattern_result out{ 0 };
    if (!this->valid())
        return out;

    uintptr_t base = this->get_module_base(module_name);
    if (!base) return out;

    memutil::section_info text{};
    if (!get_section_info(base, ".text", &text) || text.base <= 0 || text.size <= 0)
        return out;

    auto pattern = parse_signature(signature);
    if (pattern.empty()) return out;

    // pattern larger than section
    if (pattern.size() > text.size)
        return out;

    constexpr size_t chunk_size = 0x10000;
    size_t overlap = pattern.size() - 1;
    std::vector<uint8_t> buffer(chunk_size);

    for (size_t offset = 0; offset < text.size;) {
        size_t to_read = min(chunk_size, text.size - offset);

        // not enough bytes left to match pattern
        if (to_read < pattern.size())
            break;

        if (!this->rpm(text.base + offset, buffer.data(), to_read))
            return out;

        bool is_last_chunk = (offset + to_read >= text.size);
        size_t scan_end = is_last_chunk ? (to_read - pattern.size() + 1) : (to_read - overlap);

        for (size_t i = 0; i < scan_end; i++) {
            if (match_signature(&buffer[i], pattern)) {
                out.address = text.base + offset + i;
                return out;
            }
        }

        size_t advance = to_read - overlap;
        if (advance == 0) advance = 1;
        offset += advance;
    }
    return out;
}

