#pragma once

#include <string>

class c_file_helper
{
public:
	static std::string load_lua_file();
	static bool save_file(const std::string& data);
};

