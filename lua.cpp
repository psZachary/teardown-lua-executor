#include "lua.hpp"
#include "memutil.hpp"

using namespace memutil;

lua::getfield_t lua::getfield = nullptr;
lua::pushstring_t lua::pushstring = nullptr;
lua::pcall_t lua::pcall = nullptr;
lua::tostring_t lua::tolstring = nullptr;
lua::type_t lua::type = nullptr;
lua::settop_t lua::settop = nullptr;


bool lua::initialize()
{
	if (!c_mem::instance()->valid()) return false;

	lua::getfield = c_mem::instance()->sig_scan("Teardown.exe", "48 89 5C 24 ? 57 48 83 EC ? 4D 8B D0 48 8B D9 E8 ? ? ? ? 48 8B F8 49 C7 C0 ? ? ? ? 90 49 FF C0 43 80 3C 02 ? 75 ? 49 8B D2 48 8B CB E8 ? ? ? ? 4C 8B 4B ? 4C 8D 44 24 ? 48 8B D7"
	).get<lua::getfield_t>();

	lua::pushstring = c_mem::instance()->sig_scan("Teardown.exe", "48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 4C 8B 49 ? 49 8B F8"
	).get<lua::pushstring_t>();

	lua::pcall = c_mem::instance()->sig_scan("Teardown.exe", "48 89 5C 24 ? 57 48 83 EC ? 41 8B F8 44 8B D2"
	).get<lua::pcall_t>();

	lua::tolstring = c_mem::instance()->sig_scan("Teardown.exe", "48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 49 8B D8 8B F2 48 8B F9 E8"
	).get<lua::tostring_t>();

	lua::type = c_mem::instance()->sig_scan("Teardown.exe", "48 83 EC ? E8 ? ? ? ? 48 8D 0D ? ? ? ? 48 3B C1 75"
	).get<lua::type_t>();

	lua::settop = c_mem::instance()->sig_scan("Teardown.exe", "85 D2 78 ? 4C 8B 41 ? 4C 63 CA"
	).get<lua::settop_t>();

	return lua::getfield && lua::pushstring && lua::pcall && lua::type && lua::settop;
}
