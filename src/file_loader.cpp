#include "file_loader.hpp"
#include <Windows.h>
#include <iostream>

std::string c_file_loader::load_file()
{
    OPENFILENAMEA ofn{};
    char file_buffer[260]{'\0'};

    // Initialize OPENFILENAME
    ofn.lStructSize = sizeof(ofn);
    ofn.hwndOwner = nullptr;
    ofn.lpstrFile = file_buffer;
    ofn.nMaxFile = sizeof(file_buffer);
    ofn.lpstrFilter = "Lua Files\0*.LUA\0All\0*.*\0";
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
