#include "file_loader.hpp"
#include <Windows.h>
#include <iostream>

std::string c_file_loader::load_lua_file()
{
    OPENFILENAMEA ofn{};
    char file_buffer[260]{'\0'};

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
