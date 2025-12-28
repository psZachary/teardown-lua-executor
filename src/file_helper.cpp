#include "file_helper.hpp"
#include <Windows.h>
#include <iostream>
#include <fstream>

std::string c_file_helper::load_lua_file()
{
    OPENFILENAMEA ofn{};
    char file_buffer[260]{ '\0' };

    ofn.lStructSize = sizeof(ofn);
    ofn.hwndOwner = nullptr;
    ofn.lpstrFile = file_buffer;
    ofn.nMaxFile = sizeof(file_buffer);
    ofn.lpstrFilter = "Lua files (*.lua)\0*.lua;\0All files (*.*)\0*.*\0";
    ofn.nFilterIndex = 0;
    ofn.lpstrFileTitle = NULL;
    ofn.nMaxFileTitle = 0;
    ofn.lpstrInitialDir = NULL;
    ofn.Flags = OFN_PATHMUSTEXIST | OFN_FILEMUSTEXIST;

    if (GetOpenFileNameA(&ofn) != 0) {
        return ofn.lpstrFile;
    }

    return "";
}

bool c_file_helper::save_file(const std::string& data) {
    OPENFILENAMEA ofn{};
    char file_buffer[260]{ '\0' };

    ofn.lStructSize = sizeof(ofn);
    ofn.hwndOwner = nullptr;
    ofn.lpstrFile = file_buffer;
    ofn.nMaxFile = sizeof(file_buffer);
    ofn.lpstrFilter = "Lua files (*.lua)\0*.lua\0All files (*.*)\0*.*\0";
    ofn.nFilterIndex = 1;
    ofn.lpstrDefExt = "lua";
    ofn.Flags = OFN_OVERWRITEPROMPT;

    if (GetSaveFileNameA(&ofn) == 0)
        return false;

    std::ofstream file(ofn.lpstrFile);
    if (!file)
        return false;

    file << data;
    return true;
}