export const teardown_api_completions: {
  label: string;
  kind: string;
  detail: string;
  documentation: string;
  insertText: string;
  insertTextRules: string;
}[] = [
  {
    "label": "GetIntParam",
    "kind": "Function",
    "detail": "(name: string, default: number) -> number",
    "documentation": "@param name string - Parameter name\n@param default number - Default parameter value\n@return value number - Parameter value",
    "insertText": "GetIntParam(${1:name}, ${2:default})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetFloatParam",
    "kind": "Function",
    "detail": "(name: string, default: number) -> number",
    "documentation": "@param name string - Parameter name\n@param default number - Default parameter value\n@return value number - Parameter value",
    "insertText": "GetFloatParam(${1:name}, ${2:default})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBoolParam",
    "kind": "Function",
    "detail": "(name: string, default: boolean) -> boolean",
    "documentation": "@param name string - Parameter name\n@param default boolean - Default parameter value\n@return value boolean - Parameter value",
    "insertText": "GetBoolParam(${1:name}, ${2:default})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetStringParam",
    "kind": "Function",
    "detail": "(name: string, default: string) -> string",
    "documentation": "@param name string - Parameter name\n@param default string - Default parameter value\n@return value string - Parameter value",
    "insertText": "GetStringParam(${1:name}, ${2:default})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetColorParam",
    "kind": "Function",
    "detail": "(name: string, default: number) -> number",
    "documentation": "@param name string - Parameter name\n@param default number - Default parameter value\n@return value number - Parameter value",
    "insertText": "GetColorParam(${1:name}, ${2:default})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVersion",
    "kind": "Function",
    "detail": "() -> string",
    "documentation": "@return version string - Dot separated string of current version of the game",
    "insertText": "GetVersion()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "HasVersion",
    "kind": "Function",
    "detail": "(version: string) -> boolean",
    "documentation": "@param version string - Reference version\n@return match boolean - True if current version is at least provided one",
    "insertText": "HasVersion(${1:version})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetTime",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return time number - The time in seconds since level was started",
    "insertText": "GetTime()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetTimeStep",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return dt number - The timestep in seconds",
    "insertText": "GetTimeStep()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "InputLastPressedKey",
    "kind": "Function",
    "detail": "(playerId?: number) -> string",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return name string - Name of last pressed key, empty if no key is pressed",
    "insertText": "InputLastPressedKey()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "InputPressed",
    "kind": "Function",
    "detail": "(input: string, playerId?: number) -> boolean",
    "documentation": "@param input string - The input identifier\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return pressed boolean - True if input was pressed during last frame",
    "insertText": "InputPressed(${1:input})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "InputReleased",
    "kind": "Function",
    "detail": "(input: string, playerId?: number) -> boolean",
    "documentation": "@param input string - The input identifier\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return pressed boolean - True if input was released during last frame",
    "insertText": "InputReleased(${1:input})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "InputDown",
    "kind": "Function",
    "detail": "(input: string, playerId?: number) -> boolean",
    "documentation": "@param input string - The input identifier\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return pressed boolean - True if input is currently held down",
    "insertText": "InputDown(${1:input})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "InputValue",
    "kind": "Function",
    "detail": "(input: string, playerId?: number) -> number",
    "documentation": "@param input string - The input identifier\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return value number - Depends on input type",
    "insertText": "InputValue(${1:input})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "InputClear",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "InputClear()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "InputResetOnTransition",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "InputResetOnTransition()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "LastInputDevice",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return value number - Last device id",
    "insertText": "LastInputDevice()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetValue",
    "kind": "Function",
    "detail": "(variable: string, value: number, transition?: string, time?: number)",
    "documentation": "@param variable string - Name of number variable in the global context\n@param value number - The new value\n@param transition (optional) string - Transition type. See description.\n@param time (optional) number - Transition time (seconds)",
    "insertText": "SetValue(${1:variable}, ${2:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetValueInTable",
    "kind": "Function",
    "detail": "(tableId: table, memberName: string, newValue: number, type: string, length: number)",
    "documentation": "@param tableId table - Id of the table\n@param memberName string - Name of the member\n@param newValue number - New value\n@param type string - Transition type\n@param length number - Transition length",
    "insertText": "SetValueInTable(${1:tableId}, ${2:memberName}, ${3:newValue}, ${4:type}, ${5:length})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PauseMenuButton",
    "kind": "Function",
    "detail": "(title: string, location?: string, disabled?: bool) -> boolean",
    "documentation": "@param title string - Text on button\n@param location (optional) string - Button location. If 'bottom_bar' - bottom bar, if 'main_bottom' - below 'Main menu' button, if 'main_top' - above 'Main menu' button. Default 'bottom_bar'.\n@param disabled (optional) bool - Disable button. Button will be rendered as grayed out. Default is false. Only available when used with 'bottom_bar'.\n@return clicked boolean - True if clicked, false otherwise",
    "insertText": "PauseMenuButton(${1:title})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "HasFile",
    "kind": "Function",
    "detail": "(path: string) -> boolean",
    "documentation": "@param path string - Path to file\n@return exists boolean - True if file exists",
    "insertText": "HasFile(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "StartLevel",
    "kind": "Function",
    "detail": "(mission: string, path: string, layers?: string, passThrough?: boolean)",
    "documentation": "@param mission string - An identifier of your choice\n@param path string - Path to level XML file\n@param layers (optional) string - Active layers. Default is no layers.\n@param passThrough (optional) boolean - If set, loading screen will have no text and music will keep playing",
    "insertText": "StartLevel(${1:mission}, ${2:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPaused",
    "kind": "Function",
    "detail": "(paused: boolean)",
    "documentation": "@param paused boolean - True if game should be paused",
    "insertText": "SetPaused(${1:paused})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Restart",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "Restart()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Menu",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "Menu()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ClientCall",
    "kind": "Function",
    "detail": "(playerId: number, function: string, param1, param2, .., paramN?: any)",
    "documentation": "@param playerId number - Player ID of the recipient. Use 0 to broadcast to every player.\n@param function string - Name of the function to be invoked. This function must exist within issuing script.\n@param param1, param2, .., paramN (optional) any - Optional parameters to send to the recipent(s). Arguments should match the signature of the specified function.",
    "insertText": "ClientCall(${1:playerId}, ${2:function})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ServerCall",
    "kind": "Function",
    "detail": "(function: string, param1, param2, .., paramN?: any)",
    "documentation": "@param function string - Name of the function to be invoked. This function must exist within issuing script.\n@param param1, param2, .., paramN (optional) any - Optional parameters to send to the server. Arguments should match the signature of the specified function.",
    "insertText": "ServerCall(${1:function})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ClearKey",
    "kind": "Function",
    "detail": "(key: string)",
    "documentation": "@param key string - Registry key to clear",
    "insertText": "ClearKey(${1:key})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ListKeys",
    "kind": "Function",
    "detail": "(parent: string) -> table",
    "documentation": "@param parent string - The parent registry key\n@return children table - Indexed table of strings with child keys",
    "insertText": "ListKeys(${1:parent})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "HasKey",
    "kind": "Function",
    "detail": "(key: string) -> boolean",
    "documentation": "@param key string - Registry key\n@return exists boolean - True if key exists",
    "insertText": "HasKey(${1:key})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetInt",
    "kind": "Function",
    "detail": "(key: string, value: number, sync?: boolean)",
    "documentation": "@param key string - Registry key\n@param value number - Desired value\n@param sync (optional) boolean - Synchronize to clients",
    "insertText": "SetInt(${1:key}, ${2:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetInt",
    "kind": "Function",
    "detail": "(key: string) -> number",
    "documentation": "@param key string - Registry key\n@return value number - Integer value of registry node or zero if not found",
    "insertText": "GetInt(${1:key})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetFloat",
    "kind": "Function",
    "detail": "(key: string, value: number, sync?: boolean)",
    "documentation": "@param key string - Registry key\n@param value number - Desired value\n@param sync (optional) boolean - Synchronize to clients",
    "insertText": "SetFloat(${1:key}, ${2:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetFloat",
    "kind": "Function",
    "detail": "(key: string) -> number",
    "documentation": "@param key string - Registry key\n@return value number - Float value of registry node or zero if not found",
    "insertText": "GetFloat(${1:key})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetBool",
    "kind": "Function",
    "detail": "(key: string, value: boolean, sync?: boolean)",
    "documentation": "@param key string - Registry key\n@param value boolean - Desired value\n@param sync (optional) boolean - Synchronize to clients",
    "insertText": "SetBool(${1:key}, ${2:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBool",
    "kind": "Function",
    "detail": "(key: string) -> boolean",
    "documentation": "@param key string - Registry key\n@return value boolean - Boolean value of registry node or false if not found",
    "insertText": "GetBool(${1:key})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetString",
    "kind": "Function",
    "detail": "(key: string, value: string, sync?: boolean)",
    "documentation": "@param key string - Registry key\n@param value string - Desired value\n@param sync (optional) boolean - Synchronize to clients",
    "insertText": "SetString(${1:key}, ${2:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetString",
    "kind": "Function",
    "detail": "(key: string) -> string",
    "documentation": "@param key string - Registry key\n@return value string - String value of registry node or '' if not found",
    "insertText": "GetString(${1:key})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetColor",
    "kind": "Function",
    "detail": "(key: string, r: number, g: number, b: number, a?: number)",
    "documentation": "@param key string - Registry key\n@param r number - Desired red channel value\n@param g number - Desired green channel value\n@param b number - Desired blue channel value\n@param a (optional) number - Desired alpha channel value",
    "insertText": "SetColor(${1:key}, ${2:r}, ${3:g}, ${4:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetColor",
    "kind": "Function",
    "detail": "(key: string) -> number, number, number, number",
    "documentation": "@param key string - Registry key\n@return r number - Desired red channel value\n@return g number - Desired green channel value\n@return b number - Desired blue channel value\n@return a number - Desired alpha channel value",
    "insertText": "GetColor(${1:key})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetTranslatedStringByKey",
    "kind": "Function",
    "detail": "(key: string, default?: string) -> string",
    "documentation": "@param key string - Translation key\n@param default (optional) string - Default value\n@return value string - Translation",
    "insertText": "GetTranslatedStringByKey(${1:key})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "HasTranslationByKey",
    "kind": "Function",
    "detail": "(key: string) -> boolean",
    "documentation": "@param key string - Translation key\n@return value boolean - True if translation exists",
    "insertText": "HasTranslationByKey(${1:key})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "LoadLanguageTable",
    "kind": "Function",
    "detail": "(id: number)",
    "documentation": "@param id number - Language id (enum)",
    "insertText": "LoadLanguageTable(${1:id})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetUserNickname",
    "kind": "Function",
    "detail": "(id?: number) -> string",
    "documentation": "@param id (optional) number - User id\n@return value string - User nickname",
    "insertText": "GetUserNickname()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetEventCount",
    "kind": "Function",
    "detail": "(type: string) -> number",
    "documentation": "@param type string - Event type\n@return value number - Number of event available",
    "insertText": "GetEventCount(${1:type})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PostEvent",
    "kind": "Function",
    "detail": "(eventName: string, param1, param2, .., paramN?: any)",
    "documentation": "@param eventName string - Event name\n@param param1, param2, .., paramN (optional) any - Optional parameters to send with the event.",
    "insertText": "PostEvent(${1:eventName})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetEvent",
    "kind": "Function",
    "detail": "(type: string, index: number) -> varying",
    "documentation": "@param type string - Event type\n@param index number - Event index (starting with one)\n@return returnValues varying - Return values depending on event type",
    "insertText": "GetEvent(${1:type}, ${2:index})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Vec",
    "kind": "Function",
    "detail": "(x?: number, y?: number, z?: number) -> TVec",
    "documentation": "@param x (optional) number - X value\n@param y (optional) number - Y value\n@param z (optional) number - Z value\n@return vec TVec - New vector",
    "insertText": "Vec()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecCopy",
    "kind": "Function",
    "detail": "(org: TVec) -> TVec",
    "documentation": "@param org TVec - A vector\n@return new TVec - Copy of org vector",
    "insertText": "VecCopy(${1:org})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecStr",
    "kind": "Function",
    "detail": "(vector: TVec) -> string",
    "documentation": "@param vector TVec - Vector\n@return str string - String representation",
    "insertText": "VecStr(${1:vector})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecLength",
    "kind": "Function",
    "detail": "(vec: TVec) -> number",
    "documentation": "@param vec TVec - A vector\n@return length number - Length (magnitude) of the vector",
    "insertText": "VecLength(${1:vec})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecNormalize",
    "kind": "Function",
    "detail": "(vec: TVec) -> TVec",
    "documentation": "@param vec TVec - A vector\n@return norm TVec - A vector of length 1.0",
    "insertText": "VecNormalize(${1:vec})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecScale",
    "kind": "Function",
    "detail": "(vec: TVec, scale: number) -> TVec",
    "documentation": "@param vec TVec - A vector\n@param scale number - A scale factor\n@return norm TVec - A scaled version of input vector",
    "insertText": "VecScale(${1:vec}, ${2:scale})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecAdd",
    "kind": "Function",
    "detail": "(a: TVec, b: TVec) -> TVec",
    "documentation": "@param a TVec - Vector\n@param b TVec - Vector\n@return c TVec - New vector with sum of a and b",
    "insertText": "VecAdd(${1:a}, ${2:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecSub",
    "kind": "Function",
    "detail": "(a: TVec, b: TVec) -> TVec",
    "documentation": "@param a TVec - Vector\n@param b TVec - Vector\n@return c TVec - New vector representing a-b",
    "insertText": "VecSub(${1:a}, ${2:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecDot",
    "kind": "Function",
    "detail": "(a: TVec, b: TVec) -> number",
    "documentation": "@param a TVec - Vector\n@param b TVec - Vector\n@return c number - Dot product of a and b",
    "insertText": "VecDot(${1:a}, ${2:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecCross",
    "kind": "Function",
    "detail": "(a: TVec, b: TVec) -> TVec",
    "documentation": "@param a TVec - Vector\n@param b TVec - Vector\n@return c TVec - Cross product of a and b (also called vector product)",
    "insertText": "VecCross(${1:a}, ${2:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "VecLerp",
    "kind": "Function",
    "detail": "(a: TVec, b: TVec, t: number) -> TVec",
    "documentation": "@param a TVec - Vector\n@param b TVec - Vector\n@param t number - fraction (usually between 0.0 and 1.0)\n@return c TVec - Linearly interpolated vector between a and b, using t",
    "insertText": "VecLerp(${1:a}, ${2:b}, ${3:t})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Quat",
    "kind": "Function",
    "detail": "(x?: number, y?: number, z?: number, w?: number) -> TQuat",
    "documentation": "@param x (optional) number - X value\n@param y (optional) number - Y value\n@param z (optional) number - Z value\n@param w (optional) number - W value\n@return quat TQuat - New quaternion",
    "insertText": "Quat()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatCopy",
    "kind": "Function",
    "detail": "(org: TQuat) -> TQuat",
    "documentation": "@param org TQuat - Quaternion\n@return new TQuat - Copy of org quaternion",
    "insertText": "QuatCopy(${1:org})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatAxisAngle",
    "kind": "Function",
    "detail": "(axis: TVec, angle: number) -> TQuat",
    "documentation": "@param axis TVec - Rotation axis, unit vector\n@param angle number - Rotation angle in degrees\n@return quat TQuat - New quaternion",
    "insertText": "QuatAxisAngle(${1:axis}, ${2:angle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatDeltaNormals",
    "kind": "Function",
    "detail": "(normal0: TVec, normal1: TVec) -> TQuat",
    "documentation": "@param normal0 TVec - Unit vector\n@param normal1 TVec - Unit vector\n@return quat TQuat - New quaternion",
    "insertText": "QuatDeltaNormals(${1:normal0}, ${2:normal1})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatDeltaVectors",
    "kind": "Function",
    "detail": "(vector0: TVec, vector1: TVec) -> TQuat",
    "documentation": "@param vector0 TVec - Vector\n@param vector1 TVec - Vector\n@return quat TQuat - New quaternion",
    "insertText": "QuatDeltaVectors(${1:vector0}, ${2:vector1})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatEuler",
    "kind": "Function",
    "detail": "(x: number, y: number, z: number) -> TQuat",
    "documentation": "@param x number - Angle around X axis in degrees, sometimes also called roll or bank\n@param y number - Angle around Y axis in degrees, sometimes also called yaw or heading\n@param z number - Angle around Z axis in degrees, sometimes also called pitch or attitude\n@return quat TQuat - New quaternion",
    "insertText": "QuatEuler(${1:x}, ${2:y}, ${3:z})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatAlignXZ",
    "kind": "Function",
    "detail": "(xAxis: TVec, zAxis: TVec) -> TQuat",
    "documentation": "@param xAxis TVec - X axis\n@param zAxis TVec - Z axis\n@return quat TQuat - Quaternion",
    "insertText": "QuatAlignXZ(${1:xAxis}, ${2:zAxis})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetQuatEuler",
    "kind": "Function",
    "detail": "(quat: TQuat) -> number, number, number",
    "documentation": "@param quat TQuat - Quaternion\n@return x number - Angle around X axis in degrees, sometimes also called roll or bank\n@return y number - Angle around Y axis in degrees, sometimes also called yaw or heading\n@return z number - Angle around Z axis in degrees, sometimes also called pitch or attitude",
    "insertText": "GetQuatEuler(${1:quat})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatLookAt",
    "kind": "Function",
    "detail": "(eye: TVec, target: TVec) -> TQuat",
    "documentation": "@param eye TVec - Vector representing the camera location\n@param target TVec - Vector representing the point to look at\n@return quat TQuat - New quaternion",
    "insertText": "QuatLookAt(${1:eye}, ${2:target})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatSlerp",
    "kind": "Function",
    "detail": "(a: TQuat, b: TQuat, t: number) -> TQuat",
    "documentation": "@param a TQuat - Quaternion\n@param b TQuat - Quaternion\n@param t number - fraction (usually between 0.0 and 1.0)\n@return c TQuat - New quaternion",
    "insertText": "QuatSlerp(${1:a}, ${2:b}, ${3:t})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatStr",
    "kind": "Function",
    "detail": "(quat: TQuat) -> string",
    "documentation": "@param quat TQuat - Quaternion\n@return str string - String representation",
    "insertText": "QuatStr(${1:quat})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatRotateQuat",
    "kind": "Function",
    "detail": "(a: TQuat, b: TQuat) -> TQuat",
    "documentation": "@param a TQuat - Quaternion\n@param b TQuat - Quaternion\n@return c TQuat - New quaternion",
    "insertText": "QuatRotateQuat(${1:a}, ${2:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QuatRotateVec",
    "kind": "Function",
    "detail": "(a: TQuat, vec: TVec) -> TVec",
    "documentation": "@param a TQuat - Quaternion\n@param vec TVec - Vector\n@return vec TVec - Rotated vector",
    "insertText": "QuatRotateVec(${1:a}, ${2:vec})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Transform",
    "kind": "Function",
    "detail": "(pos?: TVec, rot?: TQuat) -> TTransform",
    "documentation": "@param pos (optional) TVec - Vector representing transform position\n@param rot (optional) TQuat - Quaternion representing transform rotation\n@return transform TTransform - New transform",
    "insertText": "Transform()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TransformCopy",
    "kind": "Function",
    "detail": "(org: TTransform) -> TTransform",
    "documentation": "@param org TTransform - Transform\n@return new TTransform - Copy of org transform",
    "insertText": "TransformCopy(${1:org})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TransformStr",
    "kind": "Function",
    "detail": "(transform: TTransform) -> string",
    "documentation": "@param transform TTransform - Transform\n@return str string - String representation",
    "insertText": "TransformStr(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TransformToParentTransform",
    "kind": "Function",
    "detail": "(parent: TTransform, child: TTransform) -> TTransform",
    "documentation": "@param parent TTransform - Transform\n@param child TTransform - Transform\n@return transform TTransform - New transform",
    "insertText": "TransformToParentTransform(${1:parent}, ${2:child})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TransformToLocalTransform",
    "kind": "Function",
    "detail": "(parent: TTransform, child: TTransform) -> TTransform",
    "documentation": "@param parent TTransform - Transform\n@param child TTransform - Transform\n@return transform TTransform - New transform",
    "insertText": "TransformToLocalTransform(${1:parent}, ${2:child})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TransformToParentVec",
    "kind": "Function",
    "detail": "(t: TTransform, v: TVec) -> TVec",
    "documentation": "@param t TTransform - Transform\n@param v TVec - Vector\n@return r TVec - Transformed vector",
    "insertText": "TransformToParentVec(${1:t}, ${2:v})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TransformToLocalVec",
    "kind": "Function",
    "detail": "(t: TTransform, v: TVec) -> TVec",
    "documentation": "@param t TTransform - Transform\n@param v TVec - Vector\n@return r TVec - Transformed vector",
    "insertText": "TransformToLocalVec(${1:t}, ${2:v})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TransformToParentPoint",
    "kind": "Function",
    "detail": "(t: TTransform, p: TVec) -> TVec",
    "documentation": "@param t TTransform - Transform\n@param p TVec - Vector representing position\n@return r TVec - Transformed position",
    "insertText": "TransformToParentPoint(${1:t}, ${2:p})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TransformToLocalPoint",
    "kind": "Function",
    "detail": "(t: TTransform, p: TVec) -> TVec",
    "documentation": "@param t TTransform - Transform\n@param p TVec - Vector representing position\n@return r TVec - Transformed position",
    "insertText": "TransformToLocalPoint(${1:t}, ${2:p})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetRandomSeed",
    "kind": "Function",
    "detail": "(seed: number)",
    "documentation": "@param seed number - Random seed",
    "insertText": "SetRandomSeed(${1:seed})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRandomBool",
    "kind": "Function",
    "detail": "() -> boolean",
    "documentation": "@return result boolean - Random true/false",
    "insertText": "GetRandomBool()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRandomInt",
    "kind": "Function",
    "detail": "(min: number, max: number) -> number",
    "documentation": "@param min number - Lower number\n@param max number - Upper number\n@return result number - Random number in given range, including max.",
    "insertText": "GetRandomInt(${1:min}, ${2:max})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRandomFloat",
    "kind": "Function",
    "detail": "(min: number, max: number) -> number",
    "documentation": "@param min number - Lower number\n@param max number - Upper number\n@return result number - Random number in given range, including max.",
    "insertText": "GetRandomFloat(${1:min}, ${2:max})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRandomDirection",
    "kind": "Function",
    "detail": "(length?: number) -> Vec3",
    "documentation": "@param length (optional) number - Optional length use to scale the generated direction.\n@return vector Vec3 - Random direction with unit length",
    "insertText": "GetRandomDirection()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindEntity",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean, type?: string) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@param type (optional) string - Entity type ('body', 'shape', 'light', 'location' etc.)\n@return handle number - Handle to first entity with specified tag or zero if not found",
    "insertText": "FindEntity()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindEntities",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean, type?: string) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@param type (optional) string - Entity type ('body', 'shape', 'light', 'location' etc.)\n@return list table - Indexed table with handles to all entities with specified tag",
    "insertText": "FindEntities()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetEntityChildren",
    "kind": "Function",
    "detail": "(handle: number, tag?: string, recursive?: boolean, type?: string) -> table",
    "documentation": "@param handle number - Entity handle\n@param tag (optional) string - Tag name\n@param recursive (optional) boolean - Search recursively\n@param type (optional) string - Entity type ('body', 'shape', 'light', 'location' etc.)\n@return list table - Indexed table with child elements of the entity",
    "insertText": "GetEntityChildren(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetEntityParent",
    "kind": "Function",
    "detail": "(handle: number, tag?: string, type?: string) -> number",
    "documentation": "@param handle number - Entity handle\n@param tag (optional) string - Tag name\n@param type (optional) string - Entity type ('body', 'shape', 'light', 'location' etc.)\n@return handle number - ",
    "insertText": "GetEntityParent(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetTag",
    "kind": "Function",
    "detail": "(handle: number, tag: string, value?: string)",
    "documentation": "@param handle number - Entity handle\n@param tag string - Tag name\n@param value (optional) string - Tag value",
    "insertText": "SetTag(${1:handle}, ${2:tag})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "RemoveTag",
    "kind": "Function",
    "detail": "(handle: number, tag: string)",
    "documentation": "@param handle number - Entity handle\n@param tag string - Tag name",
    "insertText": "RemoveTag(${1:handle}, ${2:tag})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "HasTag",
    "kind": "Function",
    "detail": "(handle: number, tag: string) -> boolean",
    "documentation": "@param handle number - Entity handle\n@param tag string - Tag name\n@return exists boolean - Returns true if entity has tag",
    "insertText": "HasTag(${1:handle}, ${2:tag})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetTagValue",
    "kind": "Function",
    "detail": "(handle: number, tag: string) -> string",
    "documentation": "@param handle number - Entity handle\n@param tag string - Tag name\n@return value string - Returns the tag value, if any. Empty string otherwise.",
    "insertText": "GetTagValue(${1:handle}, ${2:tag})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ListTags",
    "kind": "Function",
    "detail": "(handle: number) -> table",
    "documentation": "@param handle number - Entity handle\n@return tags table - Indexed table of tags on entity",
    "insertText": "ListTags(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetDescription",
    "kind": "Function",
    "detail": "(handle: number) -> string",
    "documentation": "@param handle number - Entity handle\n@return description string - The description string",
    "insertText": "GetDescription(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetDescription",
    "kind": "Function",
    "detail": "(handle: number, description: string)",
    "documentation": "@param handle number - Entity handle\n@param description string - The description string",
    "insertText": "SetDescription(${1:handle}, ${2:description})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Delete",
    "kind": "Function",
    "detail": "(handle: number)",
    "documentation": "@param handle number - Entity handle",
    "insertText": "Delete(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsHandleValid",
    "kind": "Function",
    "detail": "(handle: number) -> boolean",
    "documentation": "@param handle number - Entity handle\n@return exists boolean - Returns true if the entity pointed to by handle still exists",
    "insertText": "IsHandleValid(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetEntityType",
    "kind": "Function",
    "detail": "(handle: number) -> string",
    "documentation": "@param handle number - Entity handle\n@return type string - Type name of the provided entity",
    "insertText": "GetEntityType(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetProperty",
    "kind": "Function",
    "detail": "(handle: number, property: string) -> any",
    "documentation": "@param handle number - Entity handle\n@param property string - Property name\n@return value any - Property value",
    "insertText": "GetProperty(${1:handle}, ${2:property})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetProperty",
    "kind": "Function",
    "detail": "(handle: number, property: string, value: any)",
    "documentation": "@param handle number - Entity handle\n@param property string - Property name\n@param value any - Property value",
    "insertText": "SetProperty(${1:handle}, ${2:property}, ${3:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindBody",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first body with specified tag or zero if not found",
    "insertText": "FindBody()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindBodies",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return list table - Indexed table with handles to all bodies with specified tag",
    "insertText": "FindBodies()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyTransform",
    "kind": "Function",
    "detail": "(handle: number) -> TTransform",
    "documentation": "@param handle number - Body handle\n@return transform TTransform - Transform of the body",
    "insertText": "GetBodyTransform(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetBodyTransform",
    "kind": "Function",
    "detail": "(handle: number, transform: TTransform)",
    "documentation": "@param handle number - Body handle\n@param transform TTransform - Desired transform",
    "insertText": "SetBodyTransform(${1:handle}, ${2:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyMass",
    "kind": "Function",
    "detail": "(handle: number) -> number",
    "documentation": "@param handle number - Body handle\n@return mass number - Body mass. Static bodies always return zero mass.",
    "insertText": "GetBodyMass(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsBodyDynamic",
    "kind": "Function",
    "detail": "(handle: number) -> boolean",
    "documentation": "@param handle number - Body handle\n@return dynamic boolean - Return true if body is dynamic",
    "insertText": "IsBodyDynamic(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetBodyDynamic",
    "kind": "Function",
    "detail": "(handle: number, dynamic: boolean)",
    "documentation": "@param handle number - Body handle\n@param dynamic boolean - True for dynamic. False for static.",
    "insertText": "SetBodyDynamic(${1:handle}, ${2:dynamic})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetBodyVelocity",
    "kind": "Function",
    "detail": "(handle: number, velocity: TVec)",
    "documentation": "@param handle number - Body handle (should be a dynamic body)\n@param velocity TVec - Vector with linear velocity",
    "insertText": "SetBodyVelocity(${1:handle}, ${2:velocity})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyVelocity",
    "kind": "Function",
    "detail": "(handle: number) -> TVec",
    "documentation": "@param handle number - Body handle (should be a dynamic body)\n@return velocity TVec - Linear velocity as vector",
    "insertText": "GetBodyVelocity(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyVelocityAtPos",
    "kind": "Function",
    "detail": "(handle: number, pos: TVec) -> TVec",
    "documentation": "@param handle number - Body handle (should be a dynamic body)\n@param pos TVec - World space point as vector\n@return velocity TVec - Linear velocity on body at pos as vector",
    "insertText": "GetBodyVelocityAtPos(${1:handle}, ${2:pos})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetBodyAngularVelocity",
    "kind": "Function",
    "detail": "(handle: number, angVel: TVec)",
    "documentation": "@param handle number - Body handle (should be a dynamic body)\n@param angVel TVec - Vector with angular velocity",
    "insertText": "SetBodyAngularVelocity(${1:handle}, ${2:angVel})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyAngularVelocity",
    "kind": "Function",
    "detail": "(handle: number) -> TVec",
    "documentation": "@param handle number - Body handle (should be a dynamic body)\n@return angVel TVec - Angular velocity as vector",
    "insertText": "GetBodyAngularVelocity(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsBodyActive",
    "kind": "Function",
    "detail": "(handle: number) -> boolean",
    "documentation": "@param handle number - Body handle\n@return active boolean - Return true if body is active",
    "insertText": "IsBodyActive(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetBodyActive",
    "kind": "Function",
    "detail": "(handle: number, active: boolean)",
    "documentation": "@param handle number - Body handle\n@param active boolean - Set to tru if body should be active (simulated)",
    "insertText": "SetBodyActive(${1:handle}, ${2:active})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ApplyBodyImpulse",
    "kind": "Function",
    "detail": "(handle: number, position: TVec, impulse: TVec)",
    "documentation": "@param handle number - Body handle (should be a dynamic body)\n@param position TVec - World space position as vector\n@param impulse TVec - World space impulse as vector",
    "insertText": "ApplyBodyImpulse(${1:handle}, ${2:position}, ${3:impulse})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyShapes",
    "kind": "Function",
    "detail": "(handle: number) -> table",
    "documentation": "@param handle number - Body handle\n@return list table - Indexed table of shape handles",
    "insertText": "GetBodyShapes(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyVehicle",
    "kind": "Function",
    "detail": "(body: number) -> number",
    "documentation": "@param body number - Body handle\n@return handle number - Get parent vehicle for body, or zero if not part of vehicle",
    "insertText": "GetBodyVehicle(${1:body})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyAnimator",
    "kind": "Function",
    "detail": "(body: number) -> number",
    "documentation": "@param body number - Body handle\n@return handle number - Get parent animator for body, or zero if not part of an animator hierarchy",
    "insertText": "GetBodyAnimator(${1:body})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyPlayer",
    "kind": "Function",
    "detail": "(body: number) -> number",
    "documentation": "@param body number - Body handle\n@return playerId number - Get parent player for body, or zero if not part of a player animator hierarchy",
    "insertText": "GetBodyPlayer(${1:body})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyBounds",
    "kind": "Function",
    "detail": "(handle: number) -> TVec, TVec",
    "documentation": "@param handle number - Body handle\n@return min TVec - Vector representing the AABB lower bound\n@return max TVec - Vector representing the AABB upper bound",
    "insertText": "GetBodyBounds(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyCenterOfMass",
    "kind": "Function",
    "detail": "(handle: number) -> TVec",
    "documentation": "@param handle number - Body handle\n@return point TVec - Vector representing local center of mass in body space",
    "insertText": "GetBodyCenterOfMass(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsBodyVisible",
    "kind": "Function",
    "detail": "(handle: number, maxDist: number, rejectTransparent?: boolean, playerId?: number) -> boolean",
    "documentation": "@param handle number - Body handle\n@param maxDist number - Maximum visible distance\n@param rejectTransparent (optional) boolean - See through transparent materials. Default false.\n@param playerId (optional) number - Player ID. On player, zero means local player.\n@return visible boolean - Return true if body is visible",
    "insertText": "IsBodyVisible(${1:handle}, ${2:maxDist})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsBodyBroken",
    "kind": "Function",
    "detail": "(handle: number) -> boolean",
    "documentation": "@param handle number - Body handle\n@return broken boolean - Return true if body is broken",
    "insertText": "IsBodyBroken(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsBodyJointedToStatic",
    "kind": "Function",
    "detail": "(handle: number) -> boolean",
    "documentation": "@param handle number - Body handle\n@return result boolean - Return true if body is in any way connected to a static body",
    "insertText": "IsBodyJointedToStatic(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DrawBodyOutline",
    "kind": "Function",
    "detail": "(handle: number, r?: number, g?: number, b?: number, a?: number)",
    "documentation": "@param handle number - Body handle\n@param r (optional) number - Red\n@param g (optional) number - Green\n@param b (optional) number - Blue\n@param a (optional) number - Alpha",
    "insertText": "DrawBodyOutline(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DrawBodyHighlight",
    "kind": "Function",
    "detail": "(handle: number, amount: number)",
    "documentation": "@param handle number - Body handle\n@param amount number - Amount",
    "insertText": "DrawBodyHighlight(${1:handle}, ${2:amount})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBodyClosestPoint",
    "kind": "Function",
    "detail": "(body: number, origin: TVec) -> boolean, TVec, TVec, number",
    "documentation": "@param body number - Body handle\n@param origin TVec - World space point\n@return hit boolean - True if a point was found\n@return point TVec - World space closest point\n@return normal TVec - World space normal at closest point\n@return shape number - Handle to closest shape",
    "insertText": "GetBodyClosestPoint(${1:body}, ${2:origin})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ConstrainVelocity",
    "kind": "Function",
    "detail": "(bodyA: number, bodyB: number, point: TVec, dir: TVec, relVel: number, min?: number, max?: number)",
    "documentation": "@param bodyA number - First body handle (zero for static)\n@param bodyB number - Second body handle (zero for static)\n@param point TVec - World space point\n@param dir TVec - World space direction\n@param relVel number - Desired relative velocity along the provided direction\n@param min (optional) number - Minimum impulse (default: -infinity)\n@param max (optional) number - Maximum impulse (default: infinity)",
    "insertText": "ConstrainVelocity(${1:bodyA}, ${2:bodyB}, ${3:point}, ${4:dir}, ${5:relVel})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ConstrainAngularVelocity",
    "kind": "Function",
    "detail": "(bodyA: number, bodyB: number, dir: TVec, relAngVel: number, min?: number, max?: number)",
    "documentation": "@param bodyA number - First body handle (zero for static)\n@param bodyB number - Second body handle (zero for static)\n@param dir TVec - World space direction\n@param relAngVel number - Desired relative angular velocity along the provided direction\n@param min (optional) number - Minimum angular impulse (default: -infinity)\n@param max (optional) number - Maximum angular impulse (default: infinity)",
    "insertText": "ConstrainAngularVelocity(${1:bodyA}, ${2:bodyB}, ${3:dir}, ${4:relAngVel})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ConstrainPosition",
    "kind": "Function",
    "detail": "(bodyA: number, bodyB: number, pointA: TVec, pointB: TVec, maxVel?: number, maxImpulse?: number)",
    "documentation": "@param bodyA number - First body handle (zero for static)\n@param bodyB number - Second body handle (zero for static)\n@param pointA TVec - World space point for first body\n@param pointB TVec - World space point for second body\n@param maxVel (optional) number - Maximum relative velocity (default: infinite)\n@param maxImpulse (optional) number - Maximum impulse (default: infinite)",
    "insertText": "ConstrainPosition(${1:bodyA}, ${2:bodyB}, ${3:pointA}, ${4:pointB})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ConstrainOrientation",
    "kind": "Function",
    "detail": "(bodyA: number, bodyB: number, quatA: TQuat, quatB: TQuat, maxAngVel?: number, maxAngImpulse?: number)",
    "documentation": "@param bodyA number - First body handle (zero for static)\n@param bodyB number - Second body handle (zero for static)\n@param quatA TQuat - World space orientation for first body\n@param quatB TQuat - World space orientation for second body\n@param maxAngVel (optional) number - Maximum relative angular velocity (default: infinite)\n@param maxAngImpulse (optional) number - Maximum angular impulse (default: infinite)",
    "insertText": "ConstrainOrientation(${1:bodyA}, ${2:bodyB}, ${3:quatA}, ${4:quatB})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetWorldBody",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return body number - Handle to the static world body",
    "insertText": "GetWorldBody()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindShape",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first shape with specified tag or zero if not found",
    "insertText": "FindShape()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindShapes",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return list table - Indexed table with handles to all shapes with specified tag",
    "insertText": "FindShapes()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeLocalTransform",
    "kind": "Function",
    "detail": "(handle: number) -> TTransform",
    "documentation": "@param handle number - Shape handle\n@return transform TTransform - Return shape transform in body space",
    "insertText": "GetShapeLocalTransform(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetShapeLocalTransform",
    "kind": "Function",
    "detail": "(handle: number, transform: TTransform)",
    "documentation": "@param handle number - Shape handle\n@param transform TTransform - Shape transform in body space",
    "insertText": "SetShapeLocalTransform(${1:handle}, ${2:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeWorldTransform",
    "kind": "Function",
    "detail": "(handle: number) -> TTransform",
    "documentation": "@param handle number - Shape handle\n@return transform TTransform - Return shape transform in world space",
    "insertText": "GetShapeWorldTransform(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeBody",
    "kind": "Function",
    "detail": "(handle: number) -> number",
    "documentation": "@param handle number - Shape handle\n@return handle number - Body handle",
    "insertText": "GetShapeBody(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeJoints",
    "kind": "Function",
    "detail": "(shape: number) -> table",
    "documentation": "@param shape number - Shape handle\n@return list table - Indexed table with joints connected to shape",
    "insertText": "GetShapeJoints(${1:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeLights",
    "kind": "Function",
    "detail": "(shape: number) -> table",
    "documentation": "@param shape number - Shape handle\n@return list table - Indexed table of lights owned by shape",
    "insertText": "GetShapeLights(${1:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeBounds",
    "kind": "Function",
    "detail": "(handle: number) -> TVec, TVec",
    "documentation": "@param handle number - Shape handle\n@return min TVec - Vector representing the AABB lower bound\n@return max TVec - Vector representing the AABB upper bound",
    "insertText": "GetShapeBounds(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetShapeEmissiveScale",
    "kind": "Function",
    "detail": "(handle: number, scale: number)",
    "documentation": "@param handle number - Shape handle\n@param scale number - Scale factor for emissiveness",
    "insertText": "SetShapeEmissiveScale(${1:handle}, ${2:scale})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetShapeDensity",
    "kind": "Function",
    "detail": "(handle: number, density: number)",
    "documentation": "@param handle number - Shape handle\n@param density number - New density for the shape",
    "insertText": "SetShapeDensity(${1:handle}, ${2:density})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeMaterialAtPosition",
    "kind": "Function",
    "detail": "(handle: number, pos: TVec, includeUnphysical?: boolean) -> string, number, number, number, number, number",
    "documentation": "@param handle number - Shape handle\n@param pos TVec - Position in world space\n@param includeUnphysical (optional) boolean - Include unphysical voxels in the search. Default false.\n@return type string - Material type\n@return r number - Red\n@return g number - Green\n@return b number - Blue\n@return a number - Alpha\n@return entry number - Palette entry for voxel (zero if empty)",
    "insertText": "GetShapeMaterialAtPosition(${1:handle}, ${2:pos})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeMaterialAtIndex",
    "kind": "Function",
    "detail": "(handle: number, x: number, y: number, z: number) -> string, number, number, number, number, number",
    "documentation": "@param handle number - Shape handle\n@param x number - X integer coordinate\n@param y number - Y integer coordinate\n@param z number - Z integer coordinate\n@return type string - Material type\n@return r number - Red\n@return g number - Green\n@return b number - Blue\n@return a number - Alpha\n@return entry number - Palette entry for voxel (zero if empty)",
    "insertText": "GetShapeMaterialAtIndex(${1:handle}, ${2:x}, ${3:y}, ${4:z})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeSize",
    "kind": "Function",
    "detail": "(handle: number) -> number, number, number, number",
    "documentation": "@param handle number - Shape handle\n@return xsize number - Size in voxels along x axis\n@return ysize number - Size in voxels along y axis\n@return zsize number - Size in voxels along z axis\n@return scale number - The size of one voxel in meters (with default scale it is 0.1)",
    "insertText": "GetShapeSize(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeVoxelCount",
    "kind": "Function",
    "detail": "(handle: number) -> number",
    "documentation": "@param handle number - Shape handle\n@return count number - Number of voxels in shape",
    "insertText": "GetShapeVoxelCount(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsShapeVisible",
    "kind": "Function",
    "detail": "(handle: number, maxDist: number, rejectTransparent?: boolean, playerId?: number) -> boolean",
    "documentation": "@param handle number - Shape handle\n@param maxDist number - Maximum visible distance\n@param rejectTransparent (optional) boolean - See through transparent materials. Default false.\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server(host) player.\n@return visible boolean - Return true if shape is visible",
    "insertText": "IsShapeVisible(${1:handle}, ${2:maxDist})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsShapeBroken",
    "kind": "Function",
    "detail": "(handle: number) -> boolean",
    "documentation": "@param handle number - Shape handle\n@return broken boolean - Return true if shape is broken",
    "insertText": "IsShapeBroken(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DrawShapeOutline",
    "kind": "Function",
    "detail": "(handle: number, r?: number, g?: number, b?: number, a: number)",
    "documentation": "@param handle number - Shape handle\n@param r (optional) number - Red\n@param g (optional) number - Green\n@param b (optional) number - Blue\n@param a number - Alpha",
    "insertText": "DrawShapeOutline(${1:handle}, ${2:a})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DrawShapeHighlight",
    "kind": "Function",
    "detail": "(handle: number, amount: number)",
    "documentation": "@param handle number - Shape handle\n@param amount number - Amount",
    "insertText": "DrawShapeHighlight(${1:handle}, ${2:amount})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetShapeCollisionFilter",
    "kind": "Function",
    "detail": "(handle: number, layer: number, mask: number)",
    "documentation": "@param handle number - Shape handle\n@param layer number - Layer bits (0-255)\n@param mask number - Mask bits (0-255)",
    "insertText": "SetShapeCollisionFilter(${1:handle}, ${2:layer}, ${3:mask})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeCollisionFilter",
    "kind": "Function",
    "detail": "(handle: number) -> number, number",
    "documentation": "@param handle number - Shape handle\n@return layer number - Layer bits (0-255)\n@return mask number - Mask bits (0-255)",
    "insertText": "GetShapeCollisionFilter(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "CreateShape",
    "kind": "Function",
    "detail": "(body: number, transform: TTransform, refShape: number or string) -> number",
    "documentation": "@param body number - Body handle\n@param transform TTransform - Shape transform in body space\n@param refShape number or string - Handle to reference shape or path to vox file\n@return newShape number - Handle of new shape",
    "insertText": "CreateShape(${1:body}, ${2:transform}, ${3:refShape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ClearShape",
    "kind": "Function",
    "detail": "(shape: number)",
    "documentation": "@param shape number - Shape handle",
    "insertText": "ClearShape(${1:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ResizeShape",
    "kind": "Function",
    "detail": "(shape: number, xmi: number, ymi: number, zmi: number, xma: number, yma: number, zma: number) -> boolean, TVec",
    "documentation": "@param shape number - Shape handle\n@param xmi number - Lower X coordinate\n@param ymi number - Lower Y coordinate\n@param zmi number - Lower Z coordinate\n@param xma number - Upper X coordinate\n@param yma number - Upper Y coordinate\n@param zma number - Upper Z coordinate\n@return resized boolean - Resized successfully\n@return offset TVec - Offset vector in shape local space",
    "insertText": "ResizeShape(${1:shape}, ${2:xmi}, ${3:ymi}, ${4:zmi}, ${5:xma}, ${6:yma}, ${7:zma})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetShapeBody",
    "kind": "Function",
    "detail": "(shape: number, body: number, transform?: TTransform)",
    "documentation": "@param shape number - Shape handle\n@param body number - Body handle\n@param transform (optional) TTransform - New local shape transform. Default is existing local transform.",
    "insertText": "SetShapeBody(${1:shape}, ${2:body})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "CopyShapeContent",
    "kind": "Function",
    "detail": "(src: number, dst: number)",
    "documentation": "@param src number - Source shape handle\n@param dst number - Destination shape handle",
    "insertText": "CopyShapeContent(${1:src}, ${2:dst})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "CopyShapePalette",
    "kind": "Function",
    "detail": "(src: number, dst: number)",
    "documentation": "@param src number - Source shape handle\n@param dst number - Destination shape handle",
    "insertText": "CopyShapePalette(${1:src}, ${2:dst})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapePalette",
    "kind": "Function",
    "detail": "(shape: number) -> table",
    "documentation": "@param shape number - Shape handle\n@return entries table - Palette material entries",
    "insertText": "GetShapePalette(${1:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeMaterial",
    "kind": "Function",
    "detail": "(shape: number, entry: number) -> string, number, number, number, number, number, number, number, number",
    "documentation": "@param shape number - Shape handle\n@param entry number - Material entry\n@return type string - Type\n@return red number - Red value\n@return green number - Green value\n@return blue number - Blue value\n@return alpha number - Alpha value\n@return reflectivity number - Range 0 to 1\n@return shininess number - Range 0 to 1\n@return metallic number - Range 0 to 1\n@return emissive number - Range 0 to 32",
    "insertText": "GetShapeMaterial(${1:shape}, ${2:entry})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetBrush",
    "kind": "Function",
    "detail": "(type: string, size: number, index or path: number or string, object?: string)",
    "documentation": "@param type string - One of 'sphere', 'cube' or 'noise'\n@param size number - Size of brush in voxels (must be in range 1 to 16)\n@param index or path number or string - Material index or path to brush vox file\n@param object (optional) string - Optional object in brush vox file if brush vox file is used",
    "insertText": "SetBrush(${1:type}, ${2:size}, ${3:index or path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DrawShapeLine",
    "kind": "Function",
    "detail": "(shape: number, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, paint?: boolean, noOverwrite?: boolean)",
    "documentation": "@param shape number - Handle to shape\n@param x0 number - Start X coordinate\n@param y0 number - Start Y coordinate\n@param z0 number - Start Z coordinate\n@param x1 number - End X coordinate\n@param y1 number - End Y coordinate\n@param z1 number - End Z coordinate\n@param paint (optional) boolean - Paint mode. Default is false.\n@param noOverwrite (optional) boolean - Only fill in voxels if space isn't already occupied. Default is false.",
    "insertText": "DrawShapeLine(${1:shape}, ${2:x0}, ${3:y0}, ${4:z0}, ${5:x1}, ${6:y1}, ${7:z1})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DrawShapeBox",
    "kind": "Function",
    "detail": "(shape: number, x0: number, y0: number, z0: number, x1: number, y1: number, z1: number)",
    "documentation": "@param shape number - Handle to shape\n@param x0 number - Start X coordinate\n@param y0 number - Start Y coordinate\n@param z0 number - Start Z coordinate\n@param x1 number - End X coordinate\n@param y1 number - End Y coordinate\n@param z1 number - End Z coordinate",
    "insertText": "DrawShapeBox(${1:shape}, ${2:x0}, ${3:y0}, ${4:z0}, ${5:x1}, ${6:y1}, ${7:z1})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ExtrudeShape",
    "kind": "Function",
    "detail": "(shape: number, x: number, y: number, z: number, dx: number, dy: number, dz: number, steps: number, mode: string)",
    "documentation": "@param shape number - Handle to shape\n@param x number - X coordinate to extrude\n@param y number - Y coordinate to extrude\n@param z number - Z coordinate to extrude\n@param dx number - X component of extrude direction, should be -1, 0 or 1\n@param dy number - Y component of extrude direction, should be -1, 0 or 1\n@param dz number - Z component of extrude direction, should be -1, 0 or 1\n@param steps number - Length of extrusion in voxels\n@param mode string - Extrusion mode, one of 'exact', 'material', 'geometry'. Default is 'exact'",
    "insertText": "ExtrudeShape(${1:shape}, ${2:x}, ${3:y}, ${4:z}, ${5:dx}, ${6:dy}, ${7:dz}, ${8:steps}, ${9:mode})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TrimShape",
    "kind": "Function",
    "detail": "(shape: number) -> TVec",
    "documentation": "@param shape number - Source handle\n@return offset TVec - Offset vector in shape local space",
    "insertText": "TrimShape(${1:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SplitShape",
    "kind": "Function",
    "detail": "(shape: number, removeResidual: boolean) -> table",
    "documentation": "@param shape number - Source handle\n@param removeResidual boolean - Remove residual shapes (default false)\n@return newShapes table - List of shape handles created",
    "insertText": "SplitShape(${1:shape}, ${2:removeResidual})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "MergeShape",
    "kind": "Function",
    "detail": "(shape: number) -> number",
    "documentation": "@param shape number - Input shape\n@return shape number - Shape handle after merge",
    "insertText": "MergeShape(${1:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsShapeDisconnected",
    "kind": "Function",
    "detail": "(shape: number) -> boolean",
    "documentation": "@param shape number - Input shape\n@return disconnected boolean - True if shape disconnected (has detached parts)",
    "insertText": "IsShapeDisconnected(${1:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsStaticShapeDetached",
    "kind": "Function",
    "detail": "(shape: number) -> boolean",
    "documentation": "@param shape number - Input shape\n@return disconnected boolean - True if static shape has detached parts",
    "insertText": "IsStaticShapeDetached(${1:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetShapeClosestPoint",
    "kind": "Function",
    "detail": "(shape: number, origin: TVec) -> boolean, TVec, TVec",
    "documentation": "@param shape number - Shape handle\n@param origin TVec - World space point\n@return hit boolean - True if a point was found\n@return point TVec - World space closest point\n@return normal TVec - World space normal at closest point",
    "insertText": "GetShapeClosestPoint(${1:shape}, ${2:origin})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsShapeTouching",
    "kind": "Function",
    "detail": "(a: number, b: number) -> boolean",
    "documentation": "@param a number - Handle to first shape\n@param b number - Handle to second shape\n@return touching boolean - True is shapes a and b are touching each other",
    "insertText": "IsShapeTouching(${1:a}, ${2:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindLocation",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first location with specified tag or zero if not found",
    "insertText": "FindLocation()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindLocations",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return list table - Indexed table with handles to all locations with specified tag",
    "insertText": "FindLocations()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetLocationTransform",
    "kind": "Function",
    "detail": "(handle: number) -> TTransform",
    "documentation": "@param handle number - Location handle\n@return transform TTransform - Transform of the location",
    "insertText": "GetLocationTransform(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindJoint",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first joint with specified tag or zero if not found",
    "insertText": "FindJoint()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindJoints",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return list table - Indexed table with handles to all joints with specified tag",
    "insertText": "FindJoints()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsJointBroken",
    "kind": "Function",
    "detail": "(joint: number) -> boolean",
    "documentation": "@param joint number - Joint handle\n@return broken boolean - True if joint is broken",
    "insertText": "IsJointBroken(${1:joint})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetJointType",
    "kind": "Function",
    "detail": "(joint: number) -> string",
    "documentation": "@param joint number - Joint handle\n@return type string - Joint type",
    "insertText": "GetJointType(${1:joint})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetJointOtherShape",
    "kind": "Function",
    "detail": "(joint: number, shape: number) -> number",
    "documentation": "@param joint number - Joint handle\n@param shape number - Shape handle\n@return other number - Other shape handle",
    "insertText": "GetJointOtherShape(${1:joint}, ${2:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetJointShapes",
    "kind": "Function",
    "detail": "(joint: number) -> number",
    "documentation": "@param joint number - Joint handle\n@return shapes number - Shape handles",
    "insertText": "GetJointShapes(${1:joint})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetJointMotor",
    "kind": "Function",
    "detail": "(joint: number, velocity: number, strength?: number)",
    "documentation": "@param joint number - Joint handle\n@param velocity number - Desired velocity\n@param strength (optional) number - Desired strength. Default is infinite. Zero to disable.",
    "insertText": "SetJointMotor(${1:joint}, ${2:velocity})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetJointMotorTarget",
    "kind": "Function",
    "detail": "(joint: number, target: number, maxVel?: number, strength?: number)",
    "documentation": "@param joint number - Joint handle\n@param target number - Desired movement target\n@param maxVel (optional) number - Maximum velocity to reach target. Default is infinite.\n@param strength (optional) number - Desired strength. Default is infinite. Zero to disable.",
    "insertText": "SetJointMotorTarget(${1:joint}, ${2:target})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetJointLimits",
    "kind": "Function",
    "detail": "(joint: number) -> number, number",
    "documentation": "@param joint number - Joint handle\n@return min number - Minimum joint limit (angle or distance)\n@return max number - Maximum joint limit (angle or distance)",
    "insertText": "GetJointLimits(${1:joint})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetJointMovement",
    "kind": "Function",
    "detail": "(joint: number) -> number",
    "documentation": "@param joint number - Joint handle\n@return movement number - Current joint position or angle",
    "insertText": "GetJointMovement(${1:joint})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetJointedBodies",
    "kind": "Function",
    "detail": "(body: number) -> table",
    "documentation": "@param body number - Body handle (must be dynamic)\n@return bodies table - Handles to all dynamic bodies in the jointed structure. The input handle will also be included.",
    "insertText": "GetJointedBodies(${1:body})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DetachJointFromShape",
    "kind": "Function",
    "detail": "(joint: number, shape: number)",
    "documentation": "@param joint number - Joint handle\n@param shape number - Shape handle",
    "insertText": "DetachJointFromShape(${1:joint}, ${2:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRopeNumberOfPoints",
    "kind": "Function",
    "detail": "(joint: number) -> number",
    "documentation": "@param joint number - Joint handle\n@return amount number - Number of points in a rope or zero if invalid",
    "insertText": "GetRopeNumberOfPoints(${1:joint})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRopePointPosition",
    "kind": "Function",
    "detail": "(joint: number, index: number) -> TVec",
    "documentation": "@param joint number - Joint handle\n@param index number - The point index, starting at 1\n@return pos TVec - World position of the point, or nil, if invalid",
    "insertText": "GetRopePointPosition(${1:joint}, ${2:index})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRopeBounds",
    "kind": "Function",
    "detail": "(joint: number) -> TVec, TVec",
    "documentation": "@param joint number - Joint handle\n@return min TVec - Lower point of rope bounds in world space\n@return max TVec - Upper point of rope bounds in world space",
    "insertText": "GetRopeBounds(${1:joint})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "BreakRope",
    "kind": "Function",
    "detail": "(joint: number, point: TVec)",
    "documentation": "@param joint number - Rope type joint handle\n@param point TVec - Point of break as world space vector",
    "insertText": "BreakRope(${1:joint}, ${2:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetAnimatorPositionIK",
    "kind": "Function",
    "detail": "(handle: number, begname: string, endname: string, target: TVec, weight?: number, history?: number, flag?: boolean)",
    "documentation": "@param handle number - Animator handle\n@param begname string - Name of the start-bone of the chain\n@param endname string - Name of the end-bone of the chain\n@param target TVec - World target position that the 'endname' bone should reach\n@param weight (optional) number - Weight [0,1] of this animation, default is 1.0\n@param history (optional) number - How much of the previous frames result [0,1] that should be used when start the IK search, default is 0.0\n@param flag (optional) boolean - TRUE if constraints should be used, default is TRUE",
    "insertText": "SetAnimatorPositionIK(${1:handle}, ${2:begname}, ${3:endname}, ${4:target})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetAnimatorTransformIK",
    "kind": "Function",
    "detail": "(handle: number, begname: string, endname: string, transform: TTransform, weight?: number, history?: number, locktarget?: boolean, useconstraints?: boolean)",
    "documentation": "@param handle number - Animator handle\n@param begname string - Name of the start-bone of the chain\n@param endname string - Name of the end-bone of the chain\n@param transform TTransform - World target transform that the 'endname' bone should reach\n@param weight (optional) number - Weight [0,1] of this animation, default is 1.0\n@param history (optional) number - How much of the previous frames result [0,1] that should be used when start the IK search, default is 0.0\n@param locktarget (optional) boolean - TRUE if the end-bone should be fixed to the target-transform, FALSE if IK solution is used\n@param useconstraints (optional) boolean - TRUE if constraints should be used, default is TRUE",
    "insertText": "SetAnimatorTransformIK(${1:handle}, ${2:begname}, ${3:endname}, ${4:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBoneChainLength",
    "kind": "Function",
    "detail": "(handle: number, begname: string, endname: string) -> number",
    "documentation": "@param handle number - Animator handle\n@param begname string - Name of the start-bone of the chain\n@param endname string - Name of the end-bone of the chain\n@return length number - Length of the bone chain between 'start-bone' and 'end-bone'",
    "insertText": "GetBoneChainLength(${1:handle}, ${2:begname}, ${3:endname})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindAnimator",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first animator with specified tag or zero if not found",
    "insertText": "FindAnimator()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindAnimators",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return list table - Indexed table with handles to all animators with specified tag",
    "insertText": "FindAnimators()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetAnimatorTransform",
    "kind": "Function",
    "detail": "(handle: number) -> TTransform",
    "documentation": "@param handle number - Animator handle\n@return transform TTransform - World space transform of the animator",
    "insertText": "GetAnimatorTransform(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetAnimatorAdjustTransformIK",
    "kind": "Function",
    "detail": "(handle: number, name: string) -> TTransform",
    "documentation": "@param handle number - Animator handle\n@param name string - Name of the location node\n@return transform TTransform - World space transform of the animator",
    "insertText": "GetAnimatorAdjustTransformIK(${1:handle}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetAnimatorTransform",
    "kind": "Function",
    "detail": "(handle: number, transform: TTransform)",
    "documentation": "@param handle number - Animator handle\n@param transform TTransform - Desired transform",
    "insertText": "SetAnimatorTransform(${1:handle}, ${2:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "MakeRagdoll",
    "kind": "Function",
    "detail": "(handle: number)",
    "documentation": "@param handle number - Animator handle",
    "insertText": "MakeRagdoll(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UnRagdoll",
    "kind": "Function",
    "detail": "(handle: number, time?: number)",
    "documentation": "@param handle number - Animator handle\n@param time (optional) number - Transition time",
    "insertText": "UnRagdoll(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlayAnimation",
    "kind": "Function",
    "detail": "(handle: number, name: string, weight?: number, filter?: string) -> number",
    "documentation": "@param handle number - Animator handle\n@param name string - Animation name\n@param weight (optional) number - Weight [0,1] of this animation, default is 1.0\n@param filter (optional) string - Name of the bone and its subtree that will be affected\n@return handle number - Handle to the instance that can be used with PlayAnimationInstance, zero if clip reached its end",
    "insertText": "PlayAnimation(${1:handle}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlayAnimationLoop",
    "kind": "Function",
    "detail": "(handle: number, name: string, weight?: number, filter?: string)",
    "documentation": "@param handle number - Animator handle\n@param name string - Animation name\n@param weight (optional) number - Weight [0,1] of this animation, default is 1.0\n@param filter (optional) string - Name of the bone and its subtree that will be affected",
    "insertText": "PlayAnimationLoop(${1:handle}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlayAnimationInstance",
    "kind": "Function",
    "detail": "(handle: number, instance: number, weight?: number, speed?: number) -> number",
    "documentation": "@param handle number - Animator handle\n@param instance number - Instance handle\n@param weight (optional) number - Weight [0,1] of this animation, default is 1.0\n@param speed (optional) number - Weight [0,1] of this animation, default is 1.0\n@return handle number - Handle to the instance that can be used with PlayAnimationInstance, zero if clip reached its end",
    "insertText": "PlayAnimationInstance(${1:handle}, ${2:instance})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "StopAnimationInstance",
    "kind": "Function",
    "detail": "(handle: number, instance: number)",
    "documentation": "@param handle number - Animator handle\n@param instance number - Instance handle",
    "insertText": "StopAnimationInstance(${1:handle}, ${2:instance})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlayAnimationFrame",
    "kind": "Function",
    "detail": "(handle: number, name: string, time: number, weight?: number, filter?: string)",
    "documentation": "@param handle number - Animator handle\n@param name string - Animation name\n@param time number - Time in the animation\n@param weight (optional) number - Weight [0,1] of this animation, default is 1.0\n@param filter (optional) string - Name of the bone and its subtree that will be affected",
    "insertText": "PlayAnimationFrame(${1:handle}, ${2:name}, ${3:time})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "BeginAnimationGroup",
    "kind": "Function",
    "detail": "(handle: number, weight?: number, filter?: string)",
    "documentation": "@param handle number - Animator handle\n@param weight (optional) number - Weight [0,1] of this group, default is 1.0\n@param filter (optional) string - Name of the bone and its subtree that will be affected",
    "insertText": "BeginAnimationGroup(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "EndAnimationGroup",
    "kind": "Function",
    "detail": "(handle: number)",
    "documentation": "@param handle number - Animator handle",
    "insertText": "EndAnimationGroup(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlayAnimationInstances",
    "kind": "Function",
    "detail": "(handle: number)",
    "documentation": "@param handle number - Animator handle",
    "insertText": "PlayAnimationInstances(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetAnimationClipNames",
    "kind": "Function",
    "detail": "(handle: number) -> table",
    "documentation": "@param handle number - Animator handle\n@return list table - Indexed table with animation names",
    "insertText": "GetAnimationClipNames(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetAnimationClipDuration",
    "kind": "Function",
    "detail": "(handle: number, name: string) -> number",
    "documentation": "@param handle number - Animator handle\n@param name string - Animation name\n@return time number - Total duration of the animation",
    "insertText": "GetAnimationClipDuration(${1:handle}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetAnimationClipFade",
    "kind": "Function",
    "detail": "(handle: number, name: string, fadein: number, fadeout: number)",
    "documentation": "@param handle number - Animator handle\n@param name string - Animation name\n@param fadein number - Fadein time of the animation\n@param fadeout number - Fadeout time of the animation",
    "insertText": "SetAnimationClipFade(${1:handle}, ${2:name}, ${3:fadein}, ${4:fadeout})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetAnimationClipSpeed",
    "kind": "Function",
    "detail": "(handle: number, name: string, speed: number)",
    "documentation": "@param handle number - Animator handle\n@param name string - Animation name\n@param speed number - Sets the speed factor of the animation",
    "insertText": "SetAnimationClipSpeed(${1:handle}, ${2:name}, ${3:speed})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TrimAnimationClip",
    "kind": "Function",
    "detail": "(handle: number, name: string, begoffset: number, endoffset?: number)",
    "documentation": "@param handle number - Animator handle\n@param name string - Animation name\n@param begoffset number - Time offset from the beginning of the animation\n@param endoffset (optional) number - Time offset, positive value means from the beginning and negative value means from the end, zero(default) means at end",
    "insertText": "TrimAnimationClip(${1:handle}, ${2:name}, ${3:begoffset})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetAnimationClipLoopPosition",
    "kind": "Function",
    "detail": "(handle: number, name: string) -> number",
    "documentation": "@param handle number - Animator handle\n@param name string - Animation name\n@return time number - Time of the current playposition in the animation",
    "insertText": "GetAnimationClipLoopPosition(${1:handle}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetAnimationInstancePosition",
    "kind": "Function",
    "detail": "(handle: number, instance: number) -> number",
    "documentation": "@param handle number - Animator handle\n@param instance number - Instance handle\n@return time number - Time of the current playposition in the animation",
    "insertText": "GetAnimationInstancePosition(${1:handle}, ${2:instance})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetAnimationClipLoopPosition",
    "kind": "Function",
    "detail": "(handle: number, name: string, time: number)",
    "documentation": "@param handle number - Animator handle\n@param name string - Animation name\n@param time number - Time in the animation",
    "insertText": "SetAnimationClipLoopPosition(${1:handle}, ${2:name}, ${3:time})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetBoneRotation",
    "kind": "Function",
    "detail": "(handle: number, name: string, quat: TQuat, weight?: number)",
    "documentation": "@param handle number - Animator handle\n@param name string - Bone name\n@param quat TQuat - Orientation of the bone\n@param weight (optional) number - Weight [0,1] default is 1.0",
    "insertText": "SetBoneRotation(${1:handle}, ${2:name}, ${3:quat})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetBoneLookAt",
    "kind": "Function",
    "detail": "(handle: number, name: string, point: table, weight?: number)",
    "documentation": "@param handle number - Animator handle\n@param name string - Bone name\n@param point table - World space point as vector\n@param weight (optional) number - Weight [0,1] default is 1.0",
    "insertText": "SetBoneLookAt(${1:handle}, ${2:name}, ${3:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "RotateBone",
    "kind": "Function",
    "detail": "(handle: number, name: string, quat: TQuat, weight?: number)",
    "documentation": "@param handle number - Animator handle\n@param name string - Bone name\n@param quat TQuat - Additive orientation\n@param weight (optional) number - Weight [0,1] default is 1.0",
    "insertText": "RotateBone(${1:handle}, ${2:name}, ${3:quat})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBoneNames",
    "kind": "Function",
    "detail": "(handle: number) -> table",
    "documentation": "@param handle number - Animator handle\n@return list table - Indexed table with bone-names",
    "insertText": "GetBoneNames(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBoneBody",
    "kind": "Function",
    "detail": "(handle: number, name: string) -> number",
    "documentation": "@param handle number - Animator handle\n@param name string - Bone name\n@return handle number - Handle to the bone's body, or zero if no bone is present.",
    "insertText": "GetBoneBody(${1:handle}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBoneWorldTransform",
    "kind": "Function",
    "detail": "(handle: number, name: string) -> TTransform",
    "documentation": "@param handle number - Animator handle\n@param name string - Bone name\n@return transform TTransform - World space transform of the bone",
    "insertText": "GetBoneWorldTransform(${1:handle}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBoneBindPoseTransform",
    "kind": "Function",
    "detail": "(handle: number, name: string) -> TTransform",
    "documentation": "@param handle number - Animator handle\n@param name string - Bone name\n@return transform TTransform - Local space transform of the bone in bindpose",
    "insertText": "GetBoneBindPoseTransform(${1:handle}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindLight",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first light with specified tag or zero if not found",
    "insertText": "FindLight()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindLights",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return list table - Indexed table with handles to all lights with specified tag",
    "insertText": "FindLights()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetLightEnabled",
    "kind": "Function",
    "detail": "(handle: number, enabled: boolean)",
    "documentation": "@param handle number - Light handle\n@param enabled boolean - Set to true if light should be enabled",
    "insertText": "SetLightEnabled(${1:handle}, ${2:enabled})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetLightColor",
    "kind": "Function",
    "detail": "(handle: number, r: number, g: number, b: number)",
    "documentation": "@param handle number - Light handle\n@param r number - Red value\n@param g number - Green value\n@param b number - Blue value",
    "insertText": "SetLightColor(${1:handle}, ${2:r}, ${3:g}, ${4:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetLightIntensity",
    "kind": "Function",
    "detail": "(handle: number, intensity: number)",
    "documentation": "@param handle number - Light handle\n@param intensity number - Desired intensity of the light",
    "insertText": "SetLightIntensity(${1:handle}, ${2:intensity})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetLightTransform",
    "kind": "Function",
    "detail": "(handle: number) -> TTransform",
    "documentation": "@param handle number - Light handle\n@return transform TTransform - World space light transform",
    "insertText": "GetLightTransform(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetLightShape",
    "kind": "Function",
    "detail": "(handle: number) -> number",
    "documentation": "@param handle number - Light handle\n@return handle number - Shape handle or zero if not attached to shape",
    "insertText": "GetLightShape(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsLightActive",
    "kind": "Function",
    "detail": "(handle: number) -> boolean",
    "documentation": "@param handle number - Light handle\n@return active boolean - True if light is currently emitting light",
    "insertText": "IsLightActive(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPointAffectedByLight",
    "kind": "Function",
    "detail": "(handle: number, point: TVec) -> boolean",
    "documentation": "@param handle number - Light handle\n@param point TVec - World space point as vector\n@return affected boolean - Return true if point is in light cone and range",
    "insertText": "IsPointAffectedByLight(${1:handle}, ${2:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetFlashlight",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Handle of the player's flashlight",
    "insertText": "GetFlashlight()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetFlashlight",
    "kind": "Function",
    "detail": "(handle: number, playerId?: number)",
    "documentation": "@param handle number - Handle of the light\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "SetFlashlight(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindTrigger",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first trigger with specified tag or zero if not found",
    "insertText": "FindTrigger()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindTriggers",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return list table - Indexed table with handles to all triggers with specified tag",
    "insertText": "FindTriggers()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetTriggerTransform",
    "kind": "Function",
    "detail": "(handle: number) -> TTransform",
    "documentation": "@param handle number - Trigger handle\n@return transform TTransform - Current trigger transform in world space",
    "insertText": "GetTriggerTransform(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetTriggerTransform",
    "kind": "Function",
    "detail": "(handle: number, transform: TTransform)",
    "documentation": "@param handle number - Trigger handle\n@param transform TTransform - Desired trigger transform in world space",
    "insertText": "SetTriggerTransform(${1:handle}, ${2:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetTriggerBounds",
    "kind": "Function",
    "detail": "(handle: number) -> TVec, TVec",
    "documentation": "@param handle number - Trigger handle\n@return min TVec - Lower point of trigger bounds in world space\n@return max TVec - Upper point of trigger bounds in world space",
    "insertText": "GetTriggerBounds(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsBodyInTrigger",
    "kind": "Function",
    "detail": "(trigger: number, body: number) -> boolean",
    "documentation": "@param trigger number - Trigger handle\n@param body number - Body handle\n@return inside boolean - True if body is in trigger volume",
    "insertText": "IsBodyInTrigger(${1:trigger}, ${2:body})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsVehicleInTrigger",
    "kind": "Function",
    "detail": "(trigger: number, vehicle: number) -> boolean",
    "documentation": "@param trigger number - Trigger handle\n@param vehicle number - Vehicle handle\n@return inside boolean - True if vehicle is in trigger volume",
    "insertText": "IsVehicleInTrigger(${1:trigger}, ${2:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsShapeInTrigger",
    "kind": "Function",
    "detail": "(trigger: number, shape: number) -> boolean",
    "documentation": "@param trigger number - Trigger handle\n@param shape number - Shape handle\n@return inside boolean - True if shape is in trigger volume",
    "insertText": "IsShapeInTrigger(${1:trigger}, ${2:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPointInTrigger",
    "kind": "Function",
    "detail": "(trigger: number, point: TVec) -> boolean",
    "documentation": "@param trigger number - Trigger handle\n@param point TVec - Word space point as vector\n@return inside boolean - True if point is in trigger volume",
    "insertText": "IsPointInTrigger(${1:trigger}, ${2:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPointInBoundaries",
    "kind": "Function",
    "detail": "(point: TVec) -> boolean, number",
    "documentation": "@param point TVec - Point\n@return value boolean - True if point is inside scene boundaries or if there are no boundaries\n@return dist number - Distance to the scene boundaries. Zero if there are no boundaries or if point is outside.",
    "insertText": "IsPointInBoundaries(${1:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsTriggerEmpty",
    "kind": "Function",
    "detail": "(handle: number, demolision?: boolean) -> boolean, TVec",
    "documentation": "@param handle number - Trigger handle\n@param demolision (optional) boolean - If true, small debris and vehicles are ignored\n@return empty boolean - True if trigger is empty\n@return maxpoint TVec - World space point of highest point (largest Y coordinate) if not empty",
    "insertText": "IsTriggerEmpty(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetTriggerDistance",
    "kind": "Function",
    "detail": "(trigger: number, point: TVec) -> number",
    "documentation": "@param trigger number - Trigger handle\n@param point TVec - Word space point as vector\n@return distance number - Positive if point is outside, negative if inside",
    "insertText": "GetTriggerDistance(${1:trigger}, ${2:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetTriggerClosestPoint",
    "kind": "Function",
    "detail": "(trigger: number, point: TVec) -> TVec",
    "documentation": "@param trigger number - Trigger handle\n@param point TVec - Word space point as vector\n@return closest TVec - Closest point in trigger as vector",
    "insertText": "GetTriggerClosestPoint(${1:trigger}, ${2:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindScreen",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first screen with specified tag or zero if not found",
    "insertText": "FindScreen()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindScreens",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return list table - Indexed table with handles to all screens with specified tag",
    "insertText": "FindScreens()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetScreenEnabled",
    "kind": "Function",
    "detail": "(screen: number, enabled: boolean)",
    "documentation": "@param screen number - Screen handle\n@param enabled boolean - True if screen should be enabled",
    "insertText": "SetScreenEnabled(${1:screen}, ${2:enabled})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsScreenEnabled",
    "kind": "Function",
    "detail": "(screen: number) -> boolean",
    "documentation": "@param screen number - Screen handle\n@return enabled boolean - True if screen is enabled",
    "insertText": "IsScreenEnabled(${1:screen})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetScreenShape",
    "kind": "Function",
    "detail": "(screen: number) -> number",
    "documentation": "@param screen number - Screen handle\n@return shape number - Shape handle or zero if none",
    "insertText": "GetScreenShape(${1:screen})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetScreenPlayer",
    "kind": "Function",
    "detail": "(screen: number, playerId?: number)",
    "documentation": "@param screen number - Screen handle\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "GetScreenPlayer(${1:screen})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindVehicle",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first vehicle with specified tag or zero if not found",
    "insertText": "FindVehicle()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindVehicles",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> table",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return list table - Indexed table with handles to all vehicles with specified tag",
    "insertText": "FindVehicles()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleTransform",
    "kind": "Function",
    "detail": "(vehicle: number) -> TTransform",
    "documentation": "@param vehicle number - Vehicle handle\n@return transform TTransform - Transform of vehicle",
    "insertText": "GetVehicleTransform(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleExhaustTransforms",
    "kind": "Function",
    "detail": "(vehicle: number) -> table",
    "documentation": "@param vehicle number - Vehicle handle\n@return transforms table - Transforms of vehicle exhausts",
    "insertText": "GetVehicleExhaustTransforms(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleVitalTransforms",
    "kind": "Function",
    "detail": "(vehicle: number) -> table",
    "documentation": "@param vehicle number - Vehicle handle\n@return transforms table - Transforms of vehicle vitals",
    "insertText": "GetVehicleVitalTransforms(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleBodies",
    "kind": "Function",
    "detail": "(vehicle: number) -> table",
    "documentation": "@param vehicle number - Vehicle handle\n@return transforms table - Vehicle bodies handles",
    "insertText": "GetVehicleBodies(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleBody",
    "kind": "Function",
    "detail": "(vehicle: number) -> number",
    "documentation": "@param vehicle number - Vehicle handle\n@return body number - Main body of vehicle",
    "insertText": "GetVehicleBody(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleHealth",
    "kind": "Function",
    "detail": "(vehicle: number) -> number",
    "documentation": "@param vehicle number - Vehicle handle\n@return health number - Vehicle health (zero to one)",
    "insertText": "GetVehicleHealth(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleParams",
    "kind": "Function",
    "detail": "(vehicle: number) -> table",
    "documentation": "@param vehicle number - Vehicle handle\n@return params table - Vehicle params",
    "insertText": "GetVehicleParams(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetVehicleParam",
    "kind": "Function",
    "detail": "(handle: number, param: string, value: number)",
    "documentation": "@param handle number - Vehicle handler\n@param param string - Param name\n@param value number - Param value",
    "insertText": "SetVehicleParam(${1:handle}, ${2:param}, ${3:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleDriverPos",
    "kind": "Function",
    "detail": "(vehicle: number) -> TVec",
    "documentation": "@param vehicle number - Vehicle handle\n@return pos TVec - Driver position as vector in vehicle space",
    "insertText": "GetVehicleDriverPos(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleAvailableSeatPos",
    "kind": "Function",
    "detail": "(vehicle: number) -> TVec",
    "documentation": "@param vehicle number - Vehicle handle\n@return pos TVec - World space position of the next available seat. {0, 0, 0} if none is available.",
    "insertText": "GetVehicleAvailableSeatPos(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleSteering",
    "kind": "Function",
    "detail": "(vehicle: number) -> number",
    "documentation": "@param vehicle number - Vehicle handle\n@return steering number - Driver steering value -1 to 1",
    "insertText": "GetVehicleSteering(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleDrive",
    "kind": "Function",
    "detail": "(vehicle: number) -> number",
    "documentation": "@param vehicle number - Vehicle handle\n@return drive number - Driver drive value -1 to 1",
    "insertText": "GetVehicleDrive(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DriveVehicle",
    "kind": "Function",
    "detail": "(vehicle: number, drive: number, steering: number, handbrake: boolean)",
    "documentation": "@param vehicle number - Vehicle handle\n@param drive number - Reverse/forward control -1 to 1\n@param steering number - Left/right control -1 to 1\n@param handbrake boolean - Handbrake control",
    "insertText": "DriveVehicle(${1:vehicle}, ${2:drive}, ${3:steering}, ${4:handbrake})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehicleLocationWorldTransform",
    "kind": "Function",
    "detail": "(vehicle: number, name: string) -> TTransform",
    "documentation": "@param vehicle number - Vehicle handle\n@param name string - Name of location\n@return transform TTransform - World transform",
    "insertText": "GetVehicleLocationWorldTransform(${1:vehicle}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetVehiclePassengerCount",
    "kind": "Function",
    "detail": "(vehicle: number) -> number, number, bool",
    "documentation": "@param vehicle number - Vehicle handle\n@return count number - Number of passengers\n@return seats number - Number of seats\n@return hasDriver bool - If vehicle has a driver",
    "insertText": "GetVehiclePassengerCount(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetVehicleHealth",
    "kind": "Function",
    "detail": "(vehicle: number, health: number)",
    "documentation": "@param vehicle number - Vehicle handle\n@param health number - Set vehicle health (between zero and one)",
    "insertText": "SetVehicleHealth(${1:vehicle}, ${2:health})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "FindRig",
    "kind": "Function",
    "detail": "(tag?: string, global?: boolean) -> number",
    "documentation": "@param tag (optional) string - Tag name\n@param global (optional) boolean - Search in entire scene\n@return handle number - Handle to first rig with specified tag or zero if not found",
    "insertText": "FindRig()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRigWorldTransform",
    "kind": "Function",
    "detail": "(rig: number) -> TTransform",
    "documentation": "@param rig number - Rig handle\n@return transform TTransform - World transform, nil if rig is missing",
    "insertText": "GetRigWorldTransform(${1:rig})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetRigWorldTransform",
    "kind": "Function",
    "detail": "(rig: number, transform: TTransform)",
    "documentation": "@param rig number - Rig handle\n@param transform TTransform - New world transform",
    "insertText": "SetRigWorldTransform(${1:rig}, ${2:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRigLocationWorldTransform",
    "kind": "Function",
    "detail": "(rig: number, name: string) -> TTransform",
    "documentation": "@param rig number - Rig handle\n@param name string - Name of location\n@return transform TTransform - World transform, nil if rig is missing or location is missing",
    "insertText": "GetRigLocationWorldTransform(${1:rig}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetRigLocationWorldTransform",
    "kind": "Function",
    "detail": "(rig: number, name: string, transform: TTransform)",
    "documentation": "@param rig number - Rig handle\n@param name string - Name of location\n@param transform TTransform - New world transform",
    "insertText": "SetRigLocationWorldTransform(${1:rig}, ${2:name}, ${3:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRigLocationLocalTransform",
    "kind": "Function",
    "detail": "(rig: number, name: string) -> TTransform",
    "documentation": "@param rig number - Rig handle\n@param name string - Name of location\n@return transform TTransform - Local transform, nil if rig is missing or location is missing",
    "insertText": "GetRigLocationLocalTransform(${1:rig}, ${2:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetRigLocationLocalTransform",
    "kind": "Function",
    "detail": "(rig: number, name: string, transform: TTransform)",
    "documentation": "@param rig number - Rig handle\n@param name string - Name of location\n@param transform TTransform - New world transform",
    "insertText": "SetRigLocationLocalTransform(${1:rig}, ${2:name}, ${3:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetAllPlayers",
    "kind": "Function",
    "detail": "() -> list",
    "documentation": "@return name list - List of all player Ids",
    "insertText": "GetAllPlayers()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetMaxPlayers",
    "kind": "Function",
    "detail": "() -> interger",
    "documentation": "@return count interger - Number of max players for the session. Returns 1 for non-multiplayer.",
    "insertText": "GetMaxPlayers()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerCount",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return count number - Number of players",
    "insertText": "GetPlayerCount()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetAddedPlayers",
    "kind": "Function",
    "detail": "() -> table",
    "documentation": "@return playerIds table - List of added player Ids",
    "insertText": "GetAddedPlayers()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetRemovedPlayers",
    "kind": "Function",
    "detail": "() -> table",
    "documentation": "@return playerIds table - List of removed player Ids",
    "insertText": "GetRemovedPlayers()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerName",
    "kind": "Function",
    "detail": "(playerId?: number) -> string",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return name string - Player name",
    "insertText": "GetPlayerName()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetLocalPlayer",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return GetLocalPlayer number - Local player ID.",
    "insertText": "GetLocalPlayer()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPlayerLocal",
    "kind": "Function",
    "detail": "(playerId?: number) -> boolean",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return IsPlayerLocal boolean - Whether a player is the local player.",
    "insertText": "IsPlayerLocal()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerCharacter",
    "kind": "Function",
    "detail": "(playerId?: number) -> string",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return character string - Character id",
    "insertText": "GetPlayerCharacter()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPlayerHost",
    "kind": "Function",
    "detail": "(playerId?: number) -> boolean",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return IsPlayerHost boolean - Whether a player is the host",
    "insertText": "IsPlayerHost()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPlayerValid",
    "kind": "Function",
    "detail": "(playerId?: number) -> boolean",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return IsPlayerValid boolean - Whether a player is valid (existing player)",
    "insertText": "IsPlayerValid()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerPos",
    "kind": "Function",
    "detail": "(playerId?: number) -> TVec",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return position TVec - Player center position",
    "insertText": "GetPlayerPos()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerAimInfo",
    "kind": "Function",
    "detail": "(position: TVec, maxdist?: number, playerId?: number) -> boolean, TVec, TVec, TVec, TVec, number, handle, handle",
    "documentation": "@param position TVec - Start position of the search\n@param maxdist (optional) number - Max search distance\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return hit boolean - TRUE if hit, FALSE otherwise.\n@return startpos TVec - Player can modify start position when close to walls etc\n@return endpos TVec - Hit position\n@return direction TVec - Direction from start position to end position\n@return hitnormal TVec - Normal of the hitpoint\n@return hitdist number - Distance of the hit\n@return hitentity handle - Handle of the entitiy being hit\n@return hitmaterial handle - Name of the material being hit",
    "insertText": "GetPlayerAimInfo(${1:position})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerPitch",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return pitch number - Current player pitch angle",
    "insertText": "GetPlayerPitch()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerYaw",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return yaw number - Current player yaw angle",
    "insertText": "GetPlayerYaw()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerPitch",
    "kind": "Function",
    "detail": "(pitch: number, playerId?: number)",
    "documentation": "@param pitch number - Pitch.\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "SetPlayerPitch(${1:pitch})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerCrouch",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return recoil number - Current player crouch",
    "insertText": "GetPlayerCrouch()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerTransform",
    "kind": "Function",
    "detail": "(playerId?: number) -> TTransform",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return transform TTransform - Current player transform",
    "insertText": "GetPlayerTransform()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerTransformWithPitch",
    "kind": "Function",
    "detail": "(playerId?: number) -> table",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return transform table - Current player transform, including pitch (look up/down)",
    "insertText": "GetPlayerTransformWithPitch()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerTransform",
    "kind": "Function",
    "detail": "(transform: TTransform, playerId?: number)",
    "documentation": "@param transform TTransform - Desired player transform\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerTransform(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerTransformWithPitch",
    "kind": "Function",
    "detail": "(transform: table, playerId?: number)",
    "documentation": "@param transform table - Desired player transform\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerTransformWithPitch(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerGroundVelocity",
    "kind": "Function",
    "detail": "(vel: TVec, playerId?: number)",
    "documentation": "@param vel TVec - Desired ground velocity\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerGroundVelocity(${1:vel})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerEyeTransform",
    "kind": "Function",
    "detail": "(playerId?: number) -> TTransform",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return transform TTransform - Current player eye transform",
    "insertText": "GetPlayerEyeTransform()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerCameraTransform",
    "kind": "Function",
    "detail": "(playerId?: number) -> TTransform",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return transform TTransform - Current player camera transform",
    "insertText": "GetPlayerCameraTransform()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerCameraOffsetTransform",
    "kind": "Function",
    "detail": "(transform: TTransform, stackable?: boolean, playerId?: number)",
    "documentation": "@param transform TTransform - Desired player camera offset transform\n@param stackable (optional) boolean - True if eye offset should summ up with multiple calls per tick\n@param playerId (optional) number - Player ID. On client, zero means client player.",
    "insertText": "SetPlayerCameraOffsetTransform(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerSpawnTransform",
    "kind": "Function",
    "detail": "(transform: TTransform, playerId?: number)",
    "documentation": "@param transform TTransform - Desired player spawn transform\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerSpawnTransform(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerSpawnHealth",
    "kind": "Function",
    "detail": "(health: number, playerId?: number)",
    "documentation": "@param health number - Desired player spawn health (between zero and one)\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerSpawnHealth(${1:health})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerSpawnTool",
    "kind": "Function",
    "detail": "(id: string, playerId?: number)",
    "documentation": "@param id string - Tool unique identifier\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerSpawnTool(${1:id})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerVelocity",
    "kind": "Function",
    "detail": "(playerId?: number) -> TVec",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return velocity TVec - Player velocity in world space as vector",
    "insertText": "GetPlayerVelocity()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerVehicle",
    "kind": "Function",
    "detail": "(vehicle: number, playerId?: number)",
    "documentation": "@param vehicle number - Handle to vehicle or zero to not drive.\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerVehicle(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerAnimator",
    "kind": "Function",
    "detail": "(animator: number, playerId?: number)",
    "documentation": "@param animator number - Handle to animator or zero for no animator\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "SetPlayerAnimator(${1:animator})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerAnimator",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return animator number - Handle to animator or zero for no animator",
    "insertText": "GetPlayerAnimator()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerBodies",
    "kind": "Function",
    "detail": "(playerId?: number) -> list",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return bodies list - Get bodies associated with a player",
    "insertText": "GetPlayerBodies()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerVelocity",
    "kind": "Function",
    "detail": "(velocity: TVec, playerId?: number)",
    "documentation": "@param velocity TVec - Player velocity in world space as vector\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerVelocity(${1:velocity})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerVehicle",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Current vehicle handle, or zero if not in vehicle",
    "insertText": "GetPlayerVehicle()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPlayerGrounded",
    "kind": "Function",
    "detail": "(playerId?: number) -> boolean",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return isGrounded boolean - Whether the player is grounded",
    "insertText": "IsPlayerGrounded()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPlayerVehicleDriver",
    "kind": "Function",
    "detail": "(handle: number, playerId?: number) -> boolean",
    "documentation": "@param handle number - Vehicle handle\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return isDriver boolean - Whether the player is driver for this vehicle",
    "insertText": "IsPlayerVehicleDriver(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPlayerVehiclePassenger",
    "kind": "Function",
    "detail": "(handle: number, playerId?: number) -> boolean",
    "documentation": "@param handle number - Vehicle handle\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return isPassenger boolean - Whether the player is a passenger of this vehicle",
    "insertText": "IsPlayerVehiclePassenger(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPlayerJumping",
    "kind": "Function",
    "detail": "(playerId?: number) -> boolean",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return isGrounded boolean - Whether the player is jumping or not",
    "insertText": "IsPlayerJumping()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerGroundContact",
    "kind": "Function",
    "detail": "(playerId?: number) -> boolean, number, Vec, Vec",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return contact boolean - Whether the player is grounded\n@return shape number - Handle to shape\n@return point Vec - Point of contact\n@return normal Vec - Normal of contact",
    "insertText": "GetPlayerGroundContact()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerGrabShape",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Handle to grabbed shape or zero if not grabbing.",
    "insertText": "GetPlayerGrabShape()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerGrabBody",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Handle to grabbed body or zero if not grabbing.",
    "insertText": "GetPlayerGrabBody()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ReleasePlayerGrab",
    "kind": "Function",
    "detail": "(playerId?: number)",
    "documentation": "@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "ReleasePlayerGrab()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerGrabPoint",
    "kind": "Function",
    "detail": "(playerId?: number) -> TVec",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return pos TVec - The world space grab point.",
    "insertText": "GetPlayerGrabPoint()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerPickShape",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Handle to picked shape or zero if nothing is picked",
    "insertText": "GetPlayerPickShape()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerPickBody",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Handle to picked body or zero if nothing is picked",
    "insertText": "GetPlayerPickBody()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerInteractShape",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Handle to interactable shape or zero",
    "insertText": "GetPlayerInteractShape()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerInteractBody",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Handle to interactable body or zero",
    "insertText": "GetPlayerInteractBody()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerScreen",
    "kind": "Function",
    "detail": "(handle: number, playerId?: number)",
    "documentation": "@param handle number - Handle to screen or zero for no screen\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerScreen(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerScreen",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Handle to interacted screen or zero if none",
    "insertText": "GetPlayerScreen()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerHealth",
    "kind": "Function",
    "detail": "(health: number, playerId?: number)",
    "documentation": "@param health number - Set player health (between zero and one)\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerHealth(${1:health})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerHealth",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return health number - Current player health",
    "insertText": "GetPlayerHealth()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerCanUseTool",
    "kind": "Function",
    "detail": "(playerId?: number) -> bool",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return canusetool bool - If the player currenty can use tool.",
    "insertText": "GetPlayerCanUseTool()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerRegenerationState",
    "kind": "Function",
    "detail": "(state: boolean, player?: number)",
    "documentation": "@param state boolean - State of player regeneration\n@param player (optional) number - Player ID change regeneration for",
    "insertText": "SetPlayerRegenerationState(${1:state})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerTool",
    "kind": "Function",
    "detail": "(tool id: string, playerId?: number)",
    "documentation": "@param tool id string - Set Tool ID\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerTool(${1:tool id})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerTool",
    "kind": "Function",
    "detail": "(playerId?: number) -> string",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return tool id string - Get Tool ID",
    "insertText": "GetPlayerTool()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "RespawnPlayer",
    "kind": "Function",
    "detail": "(playerId?: number)",
    "documentation": "@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "RespawnPlayer()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "RespawnPlayerAtTransform",
    "kind": "Function",
    "detail": "(transform: transform, playerId?: number)",
    "documentation": "@param transform transform - Transform\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "RespawnPlayerAtTransform(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerWalkingSpeed",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return speed number - Current player base walking speed",
    "insertText": "GetPlayerWalkingSpeed()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerWalkingSpeed",
    "kind": "Function",
    "detail": "(speed: number, playerId?: number)",
    "documentation": "@param speed number - Set player walking speed\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerWalkingSpeed(${1:speed})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerCrouchSpeedScale",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return speed number - Current player walking speed while crouched",
    "insertText": "GetPlayerCrouchSpeedScale()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerCrouchSpeedScale",
    "kind": "Function",
    "detail": "(speed: number, playerId?: number)",
    "documentation": "@param speed number - Set player walking speed while crouched\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerCrouchSpeedScale(${1:speed})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerHurtSpeedScale",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return speed number - Current player walking speed when hurt",
    "insertText": "GetPlayerHurtSpeedScale()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerHurtSpeedScale",
    "kind": "Function",
    "detail": "(speed: number, playerId?: number)",
    "documentation": "@param speed number - Set player walking speed when hurt\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetPlayerHurtSpeedScale(${1:speed})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerParam",
    "kind": "Function",
    "detail": "(parameter: string, player?: number) -> any",
    "documentation": "@param parameter string - Parameter name\n@param player (optional) number - Player ID. On player, zero means local player.\n@return value any - Parameter value",
    "insertText": "GetPlayerParam(${1:parameter})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerParam",
    "kind": "Function",
    "detail": "(parameter: string, value: any, player?: number)",
    "documentation": "@param parameter string - Parameter name\n@param value any - Parameter value\n@param player (optional) number - Player ID. On player, zero means local player.",
    "insertText": "SetPlayerParam(${1:parameter}, ${2:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerHidden",
    "kind": "Function",
    "detail": "(playerId?: number)",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "SetPlayerHidden()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "RegisterTool",
    "kind": "Function",
    "detail": "(id: string, name: string, file: string, group?: number)",
    "documentation": "@param id string - Tool unique identifier\n@param name string - Tool name to show in hud\n@param file string - Path to vox file or prefab xml\n@param group (optional) number - Tool group for this tool (1-6) Default is 6.",
    "insertText": "RegisterTool(${1:id}, ${2:name}, ${3:file})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetToolAmmoPickupAmount",
    "kind": "Function",
    "detail": "(toolId: string, ammo: number)",
    "documentation": "@param toolId string - Tool ID\n@param ammo number - The default ammo pickup amount",
    "insertText": "SetToolAmmoPickupAmount(${1:toolId}, ${2:ammo})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetToolAmmoPickupAmount",
    "kind": "Function",
    "detail": "(toolId: string) -> number",
    "documentation": "@param toolId string - Tool ID\n@return ammo number - The default ammo pickup amount",
    "insertText": "GetToolAmmoPickupAmount(${1:toolId})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetToolBody",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return handle number - Handle to currently visible tool body or zero if none",
    "insertText": "GetToolBody()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetToolHandPoseLocalTransform",
    "kind": "Function",
    "detail": "(playerId?: number) -> TTransform, TTransform",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return right TTransform - Transform of right hand relative to the tool body origin, or nil if the right hand is not used\n@return left TTransform - Transform of left hand, or nil if left hand is not used",
    "insertText": "GetToolHandPoseLocalTransform()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetToolHandPoseWorldTransform",
    "kind": "Function",
    "detail": "(playerId?: number) -> TTransform, TTransform",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return right TTransform - Transform of right hand in world space, or nil if the right hand is not used\n@return left TTransform - Transform of left hand, or nil if left hand is not used",
    "insertText": "GetToolHandPoseWorldTransform()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetToolHandPoseLocalTransform",
    "kind": "Function",
    "detail": "(right: TTransform, left: TTransform, playerId?: number)",
    "documentation": "@param right TTransform - Transform of right hand relative to the tool body origin, or nil if right hand is not used\n@param left TTransform - Transform of left hand, or nil if left hand is not used\n@param playerId (optional) number - Player ID. On client, zero means client player.",
    "insertText": "SetToolHandPoseLocalTransform(${1:right}, ${2:left})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetToolLocationLocalTransform",
    "kind": "Function",
    "detail": "(name: string, playerId?: number) -> TTransform",
    "documentation": "@param name string - Name of location\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return location TTransform - Transform of a tool location in tool space or nil if location is not found.",
    "insertText": "GetToolLocationLocalTransform(${1:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetToolLocationWorldTransform",
    "kind": "Function",
    "detail": "(name: string, playerId?: number) -> TTransform",
    "documentation": "@param name string - Name of location\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return location TTransform - Transform of a tool location in world space or nil if the location is not found or if there is no visible tool body.",
    "insertText": "GetToolLocationWorldTransform(${1:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetToolTransform",
    "kind": "Function",
    "detail": "(transform: TTransform, sway?: number, playerId?: number)",
    "documentation": "@param transform TTransform - Tool body transform\n@param sway (optional) number - Tool sway amount. Default is 1.0\n@param playerId (optional) number - Player ID. On client, zero means client player.",
    "insertText": "SetToolTransform(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetToolAllowedZoom",
    "kind": "Function",
    "detail": "(zoom: number, zoom sensitivity?: number)",
    "documentation": "@param zoom number - Zoom factor\n@param zoom sensitivity (optional) number - Input sensitivity when zoomed in. Default is 1.0.",
    "insertText": "SetToolAllowedZoom(${1:zoom})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetToolTransformOverride",
    "kind": "Function",
    "detail": "(transform: TTransform, playerId?: number)",
    "documentation": "@param transform TTransform - Tool body transform\n@param playerId (optional) number - Player ID. On client, zero means client player.",
    "insertText": "SetToolTransformOverride(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetToolOffset",
    "kind": "Function",
    "detail": "(offset: TVec, playerId?: number)",
    "documentation": "@param offset TVec - Tool body offset\n@param playerId (optional) number - Player ID. On client, zero means client player.",
    "insertText": "SetToolOffset(${1:offset})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetToolAmmo",
    "kind": "Function",
    "detail": "(toolId: string, ammo: number, playerId?: number)",
    "documentation": "@param toolId string - Tool ID\n@param ammo number - Total ammo\n@param playerId (optional) number - Player ID. On server, zero means server (host) player.",
    "insertText": "SetToolAmmo(${1:toolId}, ${2:ammo})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetToolAmmo",
    "kind": "Function",
    "detail": "(toolId: string, playerId?: number) -> number",
    "documentation": "@param toolId string - Tool ID\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return ammo number - Total ammo for tool",
    "insertText": "GetToolAmmo(${1:toolId})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetToolEnabled",
    "kind": "Function",
    "detail": "(toolId: string, enabled: bool, playerId?: number)",
    "documentation": "@param toolId string - Tool ID\n@param enabled bool - Tool enabled\n@param playerId (optional) number - Player ID",
    "insertText": "SetToolEnabled(${1:toolId}, ${2:enabled})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsToolEnabled",
    "kind": "Function",
    "detail": "(toolId: string, playerId?: number) -> bool",
    "documentation": "@param toolId string - Tool ID\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return enabled bool - Tool enabled for player",
    "insertText": "IsToolEnabled(${1:toolId})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerOrientation",
    "kind": "Function",
    "detail": "(orientation: Quat, playerId?: number)",
    "documentation": "@param orientation Quat - Base orientation\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "SetPlayerOrientation(${1:orientation})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerOrientation",
    "kind": "Function",
    "detail": "(playerId?: number)",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "GetPlayerOrientation()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerUp",
    "kind": "Function",
    "detail": "(playerId?: number) -> TVec",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return up TVec - Up vector of the player",
    "insertText": "GetPlayerUp()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerRig",
    "kind": "Function",
    "detail": "(rig: number, playerId?: number)",
    "documentation": "@param rig number - Rig handle\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "SetPlayerRig(${1:rig})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerRig",
    "kind": "Function",
    "detail": "(playerId?: number) -> number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return rig number - Rig handle",
    "insertText": "GetPlayerRig()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerRigWorldTransform",
    "kind": "Function",
    "detail": "(playerId?: number) -> TTransform",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return transform TTransform - World transform, nil if player doesnt have a rig",
    "insertText": "GetPlayerRigWorldTransform()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ClearPlayerRig",
    "kind": "Function",
    "detail": "(rig-id: number, playerId?: number)",
    "documentation": "@param rig-id number - Unique rig-id, -1 means all rigs\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "ClearPlayerRig(${1:rig-id})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerRigLocationLocalTransform",
    "kind": "Function",
    "detail": "(rig-id: number, name: string, location: table, playerId?: number)",
    "documentation": "@param rig-id number - Unique id\n@param name string - Name of location\n@param location table - Rig Local transform of the location\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "SetPlayerRigLocationLocalTransform(${1:rig-id}, ${2:name}, ${3:location})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerRigTransform",
    "kind": "Function",
    "detail": "(rig-id: number, location: table, playerId?: number)",
    "documentation": "@param rig-id number - Unique id\n@param location table - New world transform\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "SetPlayerRigTransform(${1:rig-id}, ${2:location})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerRigLocationWorldTransform",
    "kind": "Function",
    "detail": "(name: string, playerId?: number) -> table",
    "documentation": "@param name string - Name of location\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return location table - Transform of a location in world space",
    "insertText": "GetPlayerRigLocationWorldTransform(${1:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerRigTags",
    "kind": "Function",
    "detail": "(rig-id: number, tag: string, playerId?: number)",
    "documentation": "@param rig-id number - Unique id\n@param tag string - Tag\n@param playerId (optional) number - Player ID. On client, zero means client player.",
    "insertText": "SetPlayerRigTags(${1:rig-id}, ${2:tag})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerRigHasTag",
    "kind": "Function",
    "detail": "(tag: string, playerId?: number) -> boolean",
    "documentation": "@param tag string - Tag name\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return exists boolean - Returns true if entity has tag",
    "insertText": "GetPlayerRigHasTag(${1:tag})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerRigTagValue",
    "kind": "Function",
    "detail": "(tag: string, playerId?: number) -> string",
    "documentation": "@param tag string - Tag name\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return value string - Returns the tag value, if any. Empty string otherwise.",
    "insertText": "GetPlayerRigTagValue(${1:tag})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPlayerColor",
    "kind": "Function",
    "detail": "(playerId?: number) -> boolean, number, number, number",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.\n@return inuse boolean - If color is used or not\n@return r number - Red channel value\n@return g number - Green channel value\n@return b number - Blue channel value",
    "insertText": "GetPlayerColor()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPlayerColor",
    "kind": "Function",
    "detail": "(r: number, g: number, b: number, playerId?: number)",
    "documentation": "@param r number - Red value\n@param g number - Green value\n@param b number - Blue value\n@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "SetPlayerColor(${1:r}, ${2:g}, ${3:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ApplyPlayerDamage",
    "kind": "Function",
    "detail": "(targetPlayerId: number, damage: number, cause?: string, instigatingPlayerId?: number)",
    "documentation": "@param targetPlayerId number - Target player ID\n@param damage number - Damage to apply to target player\n@param cause (optional) string - The cause of damage\n@param instigatingPlayerId (optional) number - Instigating player ID.",
    "insertText": "ApplyPlayerDamage(${1:targetPlayerId}, ${2:damage})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DisablePlayerInput",
    "kind": "Function",
    "detail": "(player: playerIndex)",
    "documentation": "@param player playerIndex - Player to disable input for",
    "insertText": "DisablePlayerInput(${1:player})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DisablePlayer",
    "kind": "Function",
    "detail": "(playerId: number)",
    "documentation": "@param playerId number - Player to disable",
    "insertText": "DisablePlayer(${1:playerId})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPlayerDisabled",
    "kind": "Function",
    "detail": "(playerId: number)",
    "documentation": "@param playerId number - Check if player is disabled",
    "insertText": "IsPlayerDisabled(${1:playerId})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DisablePlayerDamage",
    "kind": "Function",
    "detail": "(playerId: number)",
    "documentation": "@param playerId number - Player for which damage should be disabled",
    "insertText": "DisablePlayerDamage(${1:playerId})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "LoadSound",
    "kind": "Function",
    "detail": "(path: string, nominalDistance?: number) -> number",
    "documentation": "@param path string - Path to ogg sound file\n@param nominalDistance (optional) number - The distance in meters this sound is recorded at. Affects attenuation, default is 10.0\n@return handle number - Sound handle",
    "insertText": "LoadSound(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UnloadSound",
    "kind": "Function",
    "detail": "(handle: number)",
    "documentation": "@param handle number - Sound handle",
    "insertText": "UnloadSound(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "LoadLoop",
    "kind": "Function",
    "detail": "(path: string, nominalDistance?: number) -> number",
    "documentation": "@param path string - Path to ogg sound file\n@param nominalDistance (optional) number - The distance in meters this sound is recorded at. Affects attenuation, default is 10.0\n@return handle number - Loop handle",
    "insertText": "LoadLoop(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UnloadLoop",
    "kind": "Function",
    "detail": "(handle: number)",
    "documentation": "@param handle number - Loop handle",
    "insertText": "UnloadLoop(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetSoundLoopUser",
    "kind": "Function",
    "detail": "(handle: number, nominalDistance: number) -> boolean",
    "documentation": "@param handle number - Loop handle\n@param nominalDistance number - User index\n@return flag boolean - TRUE if sound applied to gamepad speaker, FALSE otherwise.",
    "insertText": "SetSoundLoopUser(${1:handle}, ${2:nominalDistance})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlaySound",
    "kind": "Function",
    "detail": "(handle: number, pos?: TVec, volume?: number, registerVolume?: boolean, pitch?: number) -> number",
    "documentation": "@param handle number - Sound handle\n@param pos (optional) TVec - World position as vector. Default is player position.\n@param volume (optional) number - Playback volume. Default is 1.0\n@param registerVolume (optional) boolean - Register position and volume of this sound for GetLastSound. Default is true\n@param pitch (optional) number - Playback pitch. Default 1.0\n@return handle number - Sound play handle",
    "insertText": "PlaySound(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlaySoundForUser",
    "kind": "Function",
    "detail": "(handle: number, user: number, pos?: TVec, volume?: number, registerVolume?: boolean, pitch?: number) -> number",
    "documentation": "@param handle number - Sound handle\n@param user number - Index of user to play.\n@param pos (optional) TVec - World position as vector. Default is player position.\n@param volume (optional) number - Playback volume. Default is 1.0\n@param registerVolume (optional) boolean - Register position and volume of this sound for GetLastSound. Default is true\n@param pitch (optional) number - Playback pitch. Default 1.0\n@return handle number - Sound play handle",
    "insertText": "PlaySoundForUser(${1:handle}, ${2:user})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "StopSound",
    "kind": "Function",
    "detail": "(handle: number)",
    "documentation": "@param handle number - Sound play handle",
    "insertText": "StopSound(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsSoundPlaying",
    "kind": "Function",
    "detail": "(handle: number) -> boolean",
    "documentation": "@param handle number - Sound play handle\n@return playing boolean - True if sound is playing, false otherwise.",
    "insertText": "IsSoundPlaying(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetSoundProgress",
    "kind": "Function",
    "detail": "(handle: number) -> number",
    "documentation": "@param handle number - Sound play handle\n@return progress number - Current sound progress in seconds.",
    "insertText": "GetSoundProgress(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetSoundProgress",
    "kind": "Function",
    "detail": "(handle: number, progress: number)",
    "documentation": "@param handle number - Sound play handle\n@param progress number - Progress in seconds",
    "insertText": "SetSoundProgress(${1:handle}, ${2:progress})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlayLoop",
    "kind": "Function",
    "detail": "(handle: number, pos?: TVec, volume?: number, registerVolume?: boolean, pitch?: number)",
    "documentation": "@param handle number - Loop handle\n@param pos (optional) TVec - World position as vector. Default is player position.\n@param volume (optional) number - Playback volume. Default is 1.0\n@param registerVolume (optional) boolean - Register position and volume of this sound for GetLastSound. Default is true\n@param pitch (optional) number - Playback pitch. Default 1.0",
    "insertText": "PlayLoop(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetSoundLoopProgress",
    "kind": "Function",
    "detail": "(handle: number) -> number",
    "documentation": "@param handle number - Loop handle\n@return progress number - Current music progress in seconds.",
    "insertText": "GetSoundLoopProgress(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetSoundLoopProgress",
    "kind": "Function",
    "detail": "(handle: number, progress?: number)",
    "documentation": "@param handle number - Loop handle\n@param progress (optional) number - Progress in seconds. Default 0.0.",
    "insertText": "SetSoundLoopProgress(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlayMusic",
    "kind": "Function",
    "detail": "(path: string)",
    "documentation": "@param path string - Music path",
    "insertText": "PlayMusic(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "StopMusic",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "StopMusic()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsMusicPlaying",
    "kind": "Function",
    "detail": "() -> boolean",
    "documentation": "@return playing boolean - True if music is playing, false otherwise.",
    "insertText": "IsMusicPlaying()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetMusicPaused",
    "kind": "Function",
    "detail": "(paused: boolean)",
    "documentation": "@param paused boolean - True to pause, false to resume.",
    "insertText": "SetMusicPaused(${1:paused})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetMusicProgress",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return progress number - Current music progress in seconds.",
    "insertText": "GetMusicProgress()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetMusicProgress",
    "kind": "Function",
    "detail": "(progress?: number)",
    "documentation": "@param progress (optional) number - Progress in seconds. Default 0.0.",
    "insertText": "SetMusicProgress()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetMusicVolume",
    "kind": "Function",
    "detail": "(volume: number)",
    "documentation": "@param volume number - Music volume.",
    "insertText": "SetMusicVolume(${1:volume})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetMusicLowPass",
    "kind": "Function",
    "detail": "(wet: number)",
    "documentation": "@param wet number - Music low pass filter 0.0 - 1.0.",
    "insertText": "SetMusicLowPass(${1:wet})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "LoadSprite",
    "kind": "Function",
    "detail": "(path: string) -> number",
    "documentation": "@param path string - Path to sprite. Must be PNG or JPG format.\n@return handle number - Sprite handle",
    "insertText": "LoadSprite(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DrawSprite",
    "kind": "Function",
    "detail": "(handle: number, transform: TTransform, width: number, height: number, r?: number, g?: number, b?: number, a?: number, depthTest?: boolean, additive?: boolean, fogAffected?: boolean)",
    "documentation": "@param handle number - Sprite handle\n@param transform TTransform - Transform\n@param width number - Width in meters\n@param height number - Height in meters\n@param r (optional) number - Red color. Default 1.0.\n@param g (optional) number - Green color. Default 1.0.\n@param b (optional) number - Blue color. Default 1.0.\n@param a (optional) number - Alpha. Default 1.0.\n@param depthTest (optional) boolean - Depth test enabled. Default false.\n@param additive (optional) boolean - Additive blending enabled. Default false.\n@param fogAffected (optional) boolean - Enable distance fog effect. Default false.",
    "insertText": "DrawSprite(${1:handle}, ${2:transform}, ${3:width}, ${4:height})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRequire",
    "kind": "Function",
    "detail": "(layers: string)",
    "documentation": "@param layers string - Space separate list of layers",
    "insertText": "QueryRequire(${1:layers})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryInclude",
    "kind": "Function",
    "detail": "(layers: string)",
    "documentation": "@param layers string - Space separate list of layers",
    "insertText": "QueryInclude(${1:layers})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryCollisionMask",
    "kind": "Function",
    "detail": "(mask: number)",
    "documentation": "@param mask number - Mask bits (0-255)",
    "insertText": "QueryCollisionMask(${1:mask})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRejectAnimator",
    "kind": "Function",
    "detail": "(handle: number)",
    "documentation": "@param handle number - Animator handle",
    "insertText": "QueryRejectAnimator(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRejectVehicle",
    "kind": "Function",
    "detail": "(vehicle: number)",
    "documentation": "@param vehicle number - Vehicle handle",
    "insertText": "QueryRejectVehicle(${1:vehicle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRejectBody",
    "kind": "Function",
    "detail": "(body: number)",
    "documentation": "@param body number - Body handle",
    "insertText": "QueryRejectBody(${1:body})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRejectBodies",
    "kind": "Function",
    "detail": "(bodies: table)",
    "documentation": "@param bodies table - Array with bodies handles",
    "insertText": "QueryRejectBodies(${1:bodies})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRejectShape",
    "kind": "Function",
    "detail": "(shape: number)",
    "documentation": "@param shape number - Shape handle",
    "insertText": "QueryRejectShape(${1:shape})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRejectShapes",
    "kind": "Function",
    "detail": "(shapes: table)",
    "documentation": "@param shapes table - Array with shapes handles",
    "insertText": "QueryRejectShapes(${1:shapes})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRejectPlayer",
    "kind": "Function",
    "detail": "(playerId?: number)",
    "documentation": "@param playerId (optional) number - Player ID. On client, zero means client player. On server, zero means server (host) player.",
    "insertText": "QueryRejectPlayer()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRaycast",
    "kind": "Function",
    "detail": "(origin: TVec, direction: TVec, maxDist: number, radius?: number, rejectTransparent?: boolean) -> boolean, number, TVec, number",
    "documentation": "@param origin TVec - Raycast origin as world space vector\n@param direction TVec - Unit length raycast direction as world space vector\n@param maxDist number - Raycast maximum distance. Keep this as low as possible for good performance.\n@param radius (optional) number - Raycast thickness. Default zero.\n@param rejectTransparent (optional) boolean - Raycast through transparent materials. Default false.\n@return hit boolean - True if raycast hit something\n@return dist number - Hit distance from origin\n@return normal TVec - World space normal at hit point\n@return shape number - Handle to hit shape",
    "insertText": "QueryRaycast(${1:origin}, ${2:direction}, ${3:maxDist})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRaycastRope",
    "kind": "Function",
    "detail": "(origin: TVec, direction: TVec, maxDist: number, radius?: number) -> boolean, number, number",
    "documentation": "@param origin TVec - Raycast origin as world space vector\n@param direction TVec - Unit length raycast direction as world space vector\n@param maxDist number - Raycast maximum distance. Keep this as low as possible for good performance.\n@param radius (optional) number - Raycast thickness. Default zero.\n@return hit boolean - True if raycast hit something\n@return dist number - Hit distance from origin\n@return joint number - Handle to hit joint of rope type",
    "insertText": "QueryRaycastRope(${1:origin}, ${2:direction}, ${3:maxDist})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryRaycastWater",
    "kind": "Function",
    "detail": "(origin: TVec, direction: TVec, maxDist: number) -> boolean, number, TVec",
    "documentation": "@param origin TVec - Raycast origin as world space vector\n@param direction TVec - Unit length raycast direction as world space vector\n@param maxDist number - Raycast maximum distance. Keep this as low as possible for good performance.\n@return hit boolean - True if raycast hit something\n@return dist number - Hit distance from origin\n@return hitPos TVec - Hit point as world space vector",
    "insertText": "QueryRaycastWater(${1:origin}, ${2:direction}, ${3:maxDist})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryShot",
    "kind": "Function",
    "detail": "(origin: TVec, direction: TVec, maxDist: number, radius?: number, playerId?: number) -> bool, number, number, number, number, Vec",
    "documentation": "@param origin TVec - Shot ray origin as world space vector\n@param direction TVec - Unit length direction as world space vector\n@param maxDist number - Shot maximum distance. Keep this as low as possible for good performance.\n@param radius (optional) number - Ray thickness. Default zero.\n@param playerId (optional) number - Instigating player, will be ignored during hit detection.\n@return didHit bool - If it was a valid hit.\n@return dist number - Distance along direction where the hit was registered.\n@return shape number - Handle to hit shape, zero if it did not hit a shape\n@return playerId number - PlayerId of hit player, zero if it did not hit a player\n@return playerDamageFactor number - 1.0 for a hit on the torso, and less for a lower body hit. Applicable only if a player was hit. Use this to scale the damage.\n@return normal Vec - Normal vector of the hit",
    "insertText": "QueryShot(${1:origin}, ${2:direction}, ${3:maxDist})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryClosestPoint",
    "kind": "Function",
    "detail": "(origin: TVec, maxDist: number) -> boolean, TVec, TVec, number",
    "documentation": "@param origin TVec - World space point\n@param maxDist number - Maximum distance. Keep this as low as possible for good performance.\n@return hit boolean - True if a point was found\n@return point TVec - World space closest point\n@return normal TVec - World space normal at closest point\n@return shape number - Handle to closest shape",
    "insertText": "QueryClosestPoint(${1:origin}, ${2:maxDist})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryAabbShapes",
    "kind": "Function",
    "detail": "(min: TVec, max: TVec) -> table",
    "documentation": "@param min TVec - Aabb minimum point\n@param max TVec - Aabb maximum point\n@return list table - Indexed table with handles to all shapes in the aabb",
    "insertText": "QueryAabbShapes(${1:min}, ${2:max})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryAabbBodies",
    "kind": "Function",
    "detail": "(min: TVec, max: TVec) -> table",
    "documentation": "@param min TVec - Aabb minimum point\n@param max TVec - Aabb maximum point\n@return list table - Indexed table with handles to all bodies in the aabb",
    "insertText": "QueryAabbBodies(${1:min}, ${2:max})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryPath",
    "kind": "Function",
    "detail": "(start: TVec, end: TVec, maxDist?: number, targetRadius?: number, type?: string)",
    "documentation": "@param start TVec - World space start point\n@param end TVec - World space target point\n@param maxDist (optional) number - Maximum path length before giving up. Default is infinite.\n@param targetRadius (optional) number - Maximum allowed distance to target in meters. Default is 2.0\n@param type (optional) string - Type of path. Can be 'low', 'standart', 'water', 'flying'. Default is 'standart'",
    "insertText": "QueryPath(${1:start}, ${2:end})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "CreatePathPlanner",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return id number - Path planner id",
    "insertText": "CreatePathPlanner()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DeletePathPlanner",
    "kind": "Function",
    "detail": "(id: number)",
    "documentation": "@param id number - Path planner id",
    "insertText": "DeletePathPlanner(${1:id})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PathPlannerQuery",
    "kind": "Function",
    "detail": "(id: number, start: TVec, end: TVec, maxDist?: number, targetRadius?: number, type?: string)",
    "documentation": "@param id number - Path planner id\n@param start TVec - World space start point\n@param end TVec - World space target point\n@param maxDist (optional) number - Maximum path length before giving up. Default is infinite.\n@param targetRadius (optional) number - Maximum allowed distance to target in meters. Default is 2.0\n@param type (optional) string - Type of path. Can be 'low', 'standart', 'water', 'flying'. Default is 'standart'",
    "insertText": "PathPlannerQuery(${1:id}, ${2:start}, ${3:end})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "AbortPath",
    "kind": "Function",
    "detail": "(id?: number)",
    "documentation": "@param id (optional) number - Path planner id. Default value is 0.",
    "insertText": "AbortPath()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPathState",
    "kind": "Function",
    "detail": "(id?: number) -> string",
    "documentation": "@param id (optional) number - Path planner id. Default value is 0.\n@return state string - Current path planning state",
    "insertText": "GetPathState()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPathLength",
    "kind": "Function",
    "detail": "(id?: number) -> number",
    "documentation": "@param id (optional) number - Path planner id. Default value is 0.\n@return length number - Length of last path planning result (in meters)",
    "insertText": "GetPathLength()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPathPoint",
    "kind": "Function",
    "detail": "(dist: number, id?: number) -> TVec",
    "documentation": "@param dist number - The distance along path. Should be between zero and result from GetPathLength()\n@param id (optional) number - Path planner id. Default value is 0.\n@return point TVec - The path point dist meters along the path",
    "insertText": "GetPathPoint(${1:dist})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetLastSound",
    "kind": "Function",
    "detail": "() -> number, TVec",
    "documentation": "@return volume number - Volume of loudest sound played last frame\n@return position TVec - World position of loudest sound played last frame",
    "insertText": "GetLastSound()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "IsPointInWater",
    "kind": "Function",
    "detail": "(point: TVec) -> boolean, number",
    "documentation": "@param point TVec - World point as vector\n@return inWater boolean - True if point is in water\n@return depth number - Depth of point into water, or zero if not in water",
    "insertText": "IsPointInWater(${1:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetWindVelocity",
    "kind": "Function",
    "detail": "(point: TVec) -> TVec",
    "documentation": "@param point TVec - World point as vector\n@return vel TVec - Wind at provided position",
    "insertText": "GetWindVelocity(${1:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleReset",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "ParticleReset()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleType",
    "kind": "Function",
    "detail": "(type: string)",
    "documentation": "@param type string - Type of particle. Can be 'smoke' or 'plain'.",
    "insertText": "ParticleType(${1:type})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleTile",
    "kind": "Function",
    "detail": "(type: number)",
    "documentation": "@param type number - Tile in the particle texture atlas (0-15)",
    "insertText": "ParticleTile(${1:type})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleColor",
    "kind": "Function",
    "detail": "(r0: number, g0: number, b0: number, r1?: number, g1?: number, b1?: number)",
    "documentation": "@param r0 number - Red value\n@param g0 number - Green value\n@param b0 number - Blue value\n@param r1 (optional) number - Red value at end\n@param g1 (optional) number - Green value at end\n@param b1 (optional) number - Blue value at end",
    "insertText": "ParticleColor(${1:r0}, ${2:g0}, ${3:b0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleRadius",
    "kind": "Function",
    "detail": "(r0: number, r1?: number, interpolation?: string, fadein?: number, fadeout?: number)",
    "documentation": "@param r0 number - Radius\n@param r1 (optional) number - End radius\n@param interpolation (optional) string - Interpolation method: linear, smooth, easein, easeout or constant. Default is linear.\n@param fadein (optional) number - Fade in between t=0 and t=fadein. Default is zero.\n@param fadeout (optional) number - Fade out between t=fadeout and t=1. Default is one.",
    "insertText": "ParticleRadius(${1:r0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleAlpha",
    "kind": "Function",
    "detail": "(a0: number, a1?: number, interpolation?: string, fadein?: number, fadeout?: number)",
    "documentation": "@param a0 number - Alpha (0.0 - 1.0)\n@param a1 (optional) number - End alpha (0.0 - 1.0)\n@param interpolation (optional) string - Interpolation method: linear, smooth, easein, easeout or constant. Default is linear.\n@param fadein (optional) number - Fade in between t=0 and t=fadein. Default is zero.\n@param fadeout (optional) number - Fade out between t=fadeout and t=1. Default is one.",
    "insertText": "ParticleAlpha(${1:a0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleGravity",
    "kind": "Function",
    "detail": "(g0: number, g1?: number, interpolation?: string, fadein?: number, fadeout?: number)",
    "documentation": "@param g0 number - Gravity\n@param g1 (optional) number - End gravity\n@param interpolation (optional) string - Interpolation method: linear, smooth, easein, easeout or constant. Default is linear.\n@param fadein (optional) number - Fade in between t=0 and t=fadein. Default is zero.\n@param fadeout (optional) number - Fade out between t=fadeout and t=1. Default is one.",
    "insertText": "ParticleGravity(${1:g0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleDrag",
    "kind": "Function",
    "detail": "(d0: number, d1?: number, interpolation?: string, fadein?: number, fadeout?: number)",
    "documentation": "@param d0 number - Drag\n@param d1 (optional) number - End drag\n@param interpolation (optional) string - Interpolation method: linear, smooth, easein, easeout or constant. Default is linear.\n@param fadein (optional) number - Fade in between t=0 and t=fadein. Default is zero.\n@param fadeout (optional) number - Fade out between t=fadeout and t=1. Default is one.",
    "insertText": "ParticleDrag(${1:d0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleEmissive",
    "kind": "Function",
    "detail": "(d0: number, d1?: number, interpolation?: string, fadein?: number, fadeout?: number)",
    "documentation": "@param d0 number - Emissive\n@param d1 (optional) number - End emissive\n@param interpolation (optional) string - Interpolation method: linear, smooth, easein, easeout or constant. Default is linear.\n@param fadein (optional) number - Fade in between t=0 and t=fadein. Default is zero.\n@param fadeout (optional) number - Fade out between t=fadeout and t=1. Default is one.",
    "insertText": "ParticleEmissive(${1:d0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleRotation",
    "kind": "Function",
    "detail": "(r0: number, r1?: number, interpolation?: string, fadein?: number, fadeout?: number)",
    "documentation": "@param r0 number - Rotation speed in radians per second.\n@param r1 (optional) number - End rotation speed in radians per second.\n@param interpolation (optional) string - Interpolation method: linear, smooth, easein, easeout or constant. Default is linear.\n@param fadein (optional) number - Fade in between t=0 and t=fadein. Default is zero.\n@param fadeout (optional) number - Fade out between t=fadeout and t=1. Default is one.",
    "insertText": "ParticleRotation(${1:r0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleStretch",
    "kind": "Function",
    "detail": "(s0: number, s1?: number, interpolation?: string, fadein?: number, fadeout?: number)",
    "documentation": "@param s0 number - Stretch\n@param s1 (optional) number - End stretch\n@param interpolation (optional) string - Interpolation method: linear, smooth, easein, easeout or constant. Default is linear.\n@param fadein (optional) number - Fade in between t=0 and t=fadein. Default is zero.\n@param fadeout (optional) number - Fade out between t=fadeout and t=1. Default is one.",
    "insertText": "ParticleStretch(${1:s0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleSticky",
    "kind": "Function",
    "detail": "(s0: number, s1?: number, interpolation?: string, fadein?: number, fadeout?: number)",
    "documentation": "@param s0 number - Sticky (0.0 - 1.0)\n@param s1 (optional) number - End sticky (0.0 - 1.0)\n@param interpolation (optional) string - Interpolation method: linear, smooth, easein, easeout or constant. Default is linear.\n@param fadein (optional) number - Fade in between t=0 and t=fadein. Default is zero.\n@param fadeout (optional) number - Fade out between t=fadeout and t=1. Default is one.",
    "insertText": "ParticleSticky(${1:s0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleCollide",
    "kind": "Function",
    "detail": "(c0: number, c1?: number, interpolation?: string, fadein?: number, fadeout?: number)",
    "documentation": "@param c0 number - Collide (0.0 - 1.0)\n@param c1 (optional) number - End collide (0.0 - 1.0)\n@param interpolation (optional) string - Interpolation method: linear, smooth, easein, easeout or constant. Default is linear.\n@param fadein (optional) number - Fade in between t=0 and t=fadein. Default is zero.\n@param fadeout (optional) number - Fade out between t=fadeout and t=1. Default is one.",
    "insertText": "ParticleCollide(${1:c0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ParticleFlags",
    "kind": "Function",
    "detail": "(bitmask: number)",
    "documentation": "@param bitmask number - Particle flags (bitmask 0-65535)",
    "insertText": "ParticleFlags(${1:bitmask})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SpawnParticle",
    "kind": "Function",
    "detail": "(pos: TVec, velocity: TVec, lifetime: number)",
    "documentation": "@param pos TVec - World space point as vector\n@param velocity TVec - World space velocity as vector\n@param lifetime number - Particle lifetime in seconds",
    "insertText": "SpawnParticle(${1:pos}, ${2:velocity}, ${3:lifetime})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Spawn",
    "kind": "Function",
    "detail": "(xml: string, transform: TTransform, allowStatic?: boolean, jointExisting?: boolean) -> table",
    "documentation": "@param xml string - File name or xml string\n@param transform TTransform - Spawn transform\n@param allowStatic (optional) boolean - Allow spawning static shapes and bodies (default false)\n@param jointExisting (optional) boolean - Allow joints to connect to existing scene geometry (default false)\n@return entities table - Indexed table with handles to all spawned entities",
    "insertText": "Spawn(${1:xml}, ${2:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SpawnLayer",
    "kind": "Function",
    "detail": "(xml: string, layer: string, transform: TTransform, allowStatic?: boolean, jointExisting?: boolean) -> table",
    "documentation": "@param xml string - File name or xml string\n@param layer string - Vox layer name\n@param transform TTransform - Spawn transform\n@param allowStatic (optional) boolean - Allow spawning static shapes and bodies (default false)\n@param jointExisting (optional) boolean - Allow joints to connect to existing scene geometry (default false)\n@return entities table - Indexed table with handles to all spawned entities",
    "insertText": "SpawnLayer(${1:xml}, ${2:layer}, ${3:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SpawnTool",
    "kind": "Function",
    "detail": "(id: string, transform: TTransform, allowStatic?: boolean, voxScale?: number) -> table",
    "documentation": "@param id string - Tool ID\n@param transform TTransform - Spawn transform\n@param allowStatic (optional) boolean - Allow spawning static shapes and bodies (default false)\n@param voxScale (optional) number - Applies a scale to voxels (default 1.0)\n@return entities table - Indexed table with handles to all spawned entities",
    "insertText": "SpawnTool(${1:id}, ${2:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "AddMapMarker",
    "kind": "Function",
    "detail": "(id: number, tag: string, name: string, category: string, showLabelOnMap: bool, info: string, pos: Vec, color: Vec, infoImage?: string, dotIcon?: string)",
    "documentation": "@param id number - An id to identify the marker, typically player ID or body ID.\n@param tag string - A tag to help distinguish markers.\n@param name string - Name of the marker.\n@param category string - Used to group markers together in map target list.\n@param showLabelOnMap bool - name label will be shown on map if true\n@param info string - Additional information about the marker, displayed when selected.\n@param pos Vec - The world position of the marker.\n@param color Vec - The color of the marker, as a Vec table (e.g. Vec(1, 0, 0) for red)\n@param infoImage (optional) string - Path to the image to be displayed in the info section.\n@param dotIcon (optional) string - Path to the image used to represent the marker on map.",
    "insertText": "AddMapMarker(${1:id}, ${2:tag}, ${3:name}, ${4:category}, ${5:showLabelOnMap}, ${6:info}, ${7:pos}, ${8:color})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SelectedMapMarker",
    "kind": "Function",
    "detail": "() -> number, string",
    "documentation": "@return id number - id of map marker that was selected this tick.\n@return tag string - the corresponding tag.",
    "insertText": "SelectedMapMarker()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Shoot",
    "kind": "Function",
    "detail": "(origin: TVec, direction: TVec, type?: string, strength?: number, maxDist?: number, playerId?: number)",
    "documentation": "@param origin TVec - Origin in world space as vector\n@param direction TVec - Unit length direction as world space vector\n@param type (optional) string - Shot type, see description, default is 'bullet'\n@param strength (optional) number - Strength scaling, default is 1.0\n@param maxDist (optional) number - Maximum distance, default is 100.0\n@param playerId (optional) number - Instigating player. Can be skipped for non-player shots (helicopters etc.)",
    "insertText": "Shoot(${1:origin}, ${2:direction})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Paint",
    "kind": "Function",
    "detail": "(origin: TVec, radius: number, type?: string, probability?: number)",
    "documentation": "@param origin TVec - Origin in world space as vector\n@param radius number - Affected radius, in range 0.0 to 5.0\n@param type (optional) string - Paint type. Can be 'explosion' or 'spraycan'. Default is spraycan.\n@param probability (optional) number - Dithering probability between zero and one, default is 1.0",
    "insertText": "Paint(${1:origin}, ${2:radius})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PaintRGBA",
    "kind": "Function",
    "detail": "(origin: TVec, radius: number, red: number, green: number, blue: number, alpha?: number, probability?: number)",
    "documentation": "@param origin TVec - Origin in world space as vector\n@param radius number - Affected radius, in range 0.0 to 5.0\n@param red number - red color value, in range 0.0 to 1.0\n@param green number - green color value, in range 0.0 to 1.0\n@param blue number - blue color value, in range 0.0 to 1.0\n@param alpha (optional) number - alpha channel value, in range 0.0 to 1.0\n@param probability (optional) number - Dithering probability between zero and one, default is 1.0",
    "insertText": "PaintRGBA(${1:origin}, ${2:radius}, ${3:red}, ${4:green}, ${5:blue})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "MakeHole",
    "kind": "Function",
    "detail": "(position: TVec, r0: number, r1?: number, r2?: number, silent?: boolean) -> number",
    "documentation": "@param position TVec - Hole center point\n@param r0 number - Hole radius for soft materials\n@param r1 (optional) number - Hole radius for medium materials. May not be bigger than r0. Default zero.\n@param r2 (optional) number - Hole radius for hard materials. May not be bigger than r1. Default zero.\n@param silent (optional) boolean - Make hole without playing any break sounds.\n@return count number - Number of voxels that was cut out. This will be zero if there were no changes to any shape.",
    "insertText": "MakeHole(${1:position}, ${2:r0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "Explosion",
    "kind": "Function",
    "detail": "(pos: TVec, size: number)",
    "documentation": "@param pos TVec - Position in world space as vector\n@param size number - Explosion size from 0.5 to 4.0",
    "insertText": "Explosion(${1:pos}, ${2:size})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SpawnFire",
    "kind": "Function",
    "detail": "(pos: TVec)",
    "documentation": "@param pos TVec - Position in world space as vector",
    "insertText": "SpawnFire(${1:pos})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetFireCount",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return count number - Number of active fires in level",
    "insertText": "GetFireCount()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryClosestFire",
    "kind": "Function",
    "detail": "(origin: TVec, maxDist: number) -> boolean, TVec",
    "documentation": "@param origin TVec - World space position as vector\n@param maxDist number - Maximum search distance\n@return hit boolean - A fire was found within search distance\n@return pos TVec - Position of closest fire",
    "insertText": "QueryClosestFire(${1:origin}, ${2:maxDist})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "QueryAabbFireCount",
    "kind": "Function",
    "detail": "(min: TVec, max: TVec) -> number",
    "documentation": "@param min TVec - Aabb minimum point\n@param max TVec - Aabb maximum point\n@return count number - Number of active fires in bounding box",
    "insertText": "QueryAabbFireCount(${1:min}, ${2:max})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "RemoveAabbFires",
    "kind": "Function",
    "detail": "(min: TVec, max: TVec) -> number",
    "documentation": "@param min TVec - Aabb minimum point\n@param max TVec - Aabb maximum point\n@return count number - Number of fires removed",
    "insertText": "RemoveAabbFires(${1:min}, ${2:max})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetCameraTransform",
    "kind": "Function",
    "detail": "() -> TTransform",
    "documentation": "@return transform TTransform - Current camera transform",
    "insertText": "GetCameraTransform()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetCameraTransform",
    "kind": "Function",
    "detail": "(transform: TTransform, fov?: number)",
    "documentation": "@param transform TTransform - Desired camera transform\n@param fov (optional) number - Optional horizontal field of view in degrees (default: 90)",
    "insertText": "SetCameraTransform(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "RequestFirstPerson",
    "kind": "Function",
    "detail": "(transition: boolean)",
    "documentation": "@param transition boolean - Use transition",
    "insertText": "RequestFirstPerson(${1:transition})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "RequestThirdPerson",
    "kind": "Function",
    "detail": "(transition: boolean)",
    "documentation": "@param transition boolean - Use transition",
    "insertText": "RequestThirdPerson(${1:transition})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetCameraOffsetTransform",
    "kind": "Function",
    "detail": "(transform: TTransform, stackable?: boolean)",
    "documentation": "@param transform TTransform - Desired camera offset transform\n@param stackable (optional) boolean - True if camera offset should summ up with multiple calls per tick",
    "insertText": "SetCameraOffsetTransform(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "AttachCameraTo",
    "kind": "Function",
    "detail": "(handle: number, ignoreRotation?: boolean)",
    "documentation": "@param handle number - Body or shape handle\n@param ignoreRotation (optional) boolean - True to ignore rotation and use position only, false to use full transform",
    "insertText": "AttachCameraTo(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPivotClipBody",
    "kind": "Function",
    "detail": "(bodyHandle: number, mainShapeIdx: number)",
    "documentation": "@param bodyHandle number - Handle of a body, shapes of which should be\n@param mainShapeIdx number - Optional index of a shape among the given",
    "insertText": "SetPivotClipBody(${1:bodyHandle}, ${2:mainShapeIdx})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "ShakeCamera",
    "kind": "Function",
    "detail": "(strength: number)",
    "documentation": "@param strength number - Normalized strength of shaking",
    "insertText": "ShakeCamera(${1:strength})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetCameraFov",
    "kind": "Function",
    "detail": "(degrees: number)",
    "documentation": "@param degrees number - Horizontal field of view in degrees (10-170)",
    "insertText": "SetCameraFov(${1:degrees})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetCameraDof",
    "kind": "Function",
    "detail": "(distance: number, amount?: number)",
    "documentation": "@param distance number - Depth of field distance\n@param amount (optional) number - Optional amount of blur (default 1.0)",
    "insertText": "SetCameraDof(${1:distance})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetLowHealthBlurThreshold",
    "kind": "Function",
    "detail": "(health: number)",
    "documentation": "@param health number - health value where anything lower results in blurred vision",
    "insertText": "SetLowHealthBlurThreshold(${1:health})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PointLight",
    "kind": "Function",
    "detail": "(pos: TVec, r: number, g: number, b: number, intensity?: number)",
    "documentation": "@param pos TVec - World space light position\n@param r number - Red\n@param g number - Green\n@param b number - Blue\n@param intensity (optional) number - Intensity. Default is 1.0.",
    "insertText": "PointLight(${1:pos}, ${2:r}, ${3:g}, ${4:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetTimeScale",
    "kind": "Function",
    "detail": "(scale: number)",
    "documentation": "@param scale number - Time scale 0.0 to 2.0",
    "insertText": "SetTimeScale(${1:scale})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetEnvironmentDefault",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "SetEnvironmentDefault()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetEnvironmentProperty",
    "kind": "Function",
    "detail": "(name: string, value0: any, value1?: any, value2?: any, value3?: any)",
    "documentation": "@param name string - Property name\n@param value0 any - Property value (type depends on property)\n@param value1 (optional) any - Extra property value (only some properties)\n@param value2 (optional) any - Extra property value (only some properties)\n@param value3 (optional) any - Extra property value (only some properties)",
    "insertText": "SetEnvironmentProperty(${1:name}, ${2:value0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetEnvironmentProperty",
    "kind": "Function",
    "detail": "(name: string) -> any, any, any, any, any",
    "documentation": "@param name string - Property name\n@return value0 any - Property value (type depends on property)\n@return value1 any - Property value (only some properties)\n@return value2 any - Property value (only some properties)\n@return value3 any - Property value (only some properties)\n@return value4 any - Property value (only some properties)",
    "insertText": "GetEnvironmentProperty(${1:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPostProcessingDefault",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "SetPostProcessingDefault()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetPostProcessingProperty",
    "kind": "Function",
    "detail": "(name: string, value0: number, value1?: number, value2?: number)",
    "documentation": "@param name string - Property name\n@param value0 number - Property value\n@param value1 (optional) number - Extra property value (only some properties)\n@param value2 (optional) number - Extra property value (only some properties)",
    "insertText": "SetPostProcessingProperty(${1:name}, ${2:value0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetPostProcessingProperty",
    "kind": "Function",
    "detail": "(name: string) -> number, number, number",
    "documentation": "@param name string - Property name\n@return value0 number - Property value\n@return value1 number - Property value (only some properties)\n@return value2 number - Property value (only some properties)",
    "insertText": "GetPostProcessingProperty(${1:name})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DrawLine",
    "kind": "Function",
    "detail": "(p0: TVec, p1: TVec, r?: number, g?: number, b?: number, a?: number)",
    "documentation": "@param p0 TVec - World space point as vector\n@param p1 TVec - World space point as vector\n@param r (optional) number - Red\n@param g (optional) number - Green\n@param b (optional) number - Blue\n@param a (optional) number - Alpha",
    "insertText": "DrawLine(${1:p0}, ${2:p1})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DebugLine",
    "kind": "Function",
    "detail": "(p0: TVec, p1: TVec, r?: number, g?: number, b?: number, a?: number)",
    "documentation": "@param p0 TVec - World space point as vector\n@param p1 TVec - World space point as vector\n@param r (optional) number - Red\n@param g (optional) number - Green\n@param b (optional) number - Blue\n@param a (optional) number - Alpha",
    "insertText": "DebugLine(${1:p0}, ${2:p1})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DebugCross",
    "kind": "Function",
    "detail": "(p0: TVec, r?: number, g?: number, b?: number, a?: number)",
    "documentation": "@param p0 TVec - World space point as vector\n@param r (optional) number - Red\n@param g (optional) number - Green\n@param b (optional) number - Blue\n@param a (optional) number - Alpha",
    "insertText": "DebugCross(${1:p0})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DebugTransform",
    "kind": "Function",
    "detail": "(transform: TTransform, scale?: number)",
    "documentation": "@param transform TTransform - The transform\n@param scale (optional) number - Length of the axis",
    "insertText": "DebugTransform(${1:transform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DebugWatch",
    "kind": "Function",
    "detail": "(name: string, value: any, lineWrapping?: boolean)",
    "documentation": "@param name string - Name\n@param value any - Value\n@param lineWrapping (optional) boolean - True if you need to wrap Table lines. Works only with tables.",
    "insertText": "DebugWatch(${1:name}, ${2:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "DebugPrint",
    "kind": "Function",
    "detail": "(message: string, lineWrapping?: boolean)",
    "documentation": "@param message string - Message to display\n@param lineWrapping (optional) boolean - True if you need to wrap Table lines. Works only with tables.",
    "insertText": "DebugPrint(${1:message})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "RegisterListenerTo",
    "kind": "Function",
    "detail": "(eventName: string, listenerFunction: string)",
    "documentation": "@param eventName string - Event name\n@param listenerFunction string - Listener function name",
    "insertText": "RegisterListenerTo(${1:eventName}, ${2:listenerFunction})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UnregisterListener",
    "kind": "Function",
    "detail": "(eventName: string, listenerFunction: string)",
    "documentation": "@param eventName string - Event name\n@param listenerFunction string - Listener function name",
    "insertText": "UnregisterListener(${1:eventName}, ${2:listenerFunction})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "TriggerEvent",
    "kind": "Function",
    "detail": "(eventName: string, args?: string)",
    "documentation": "@param eventName string - Event name\n@param args (optional) string - Event parameters",
    "insertText": "TriggerEvent(${1:eventName})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "LoadHaptic",
    "kind": "Function",
    "detail": "(filepath: string) -> string",
    "documentation": "@param filepath string - Path to Haptic effect to play\n@return handle string - Haptic effect handle",
    "insertText": "LoadHaptic(${1:filepath})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "CreateHaptic",
    "kind": "Function",
    "detail": "(leftMotorRumble: number, rightMotorRumble: number, leftTriggerRumble: number, rightTriggerRumble: number) -> string",
    "documentation": "@param leftMotorRumble number - Amount of rumble for left motor\n@param rightMotorRumble number - Amount of rumble for right motor\n@param leftTriggerRumble number - Amount of rumble for left trigger\n@param rightTriggerRumble number - Amount of rumble for right trigger\n@return handle string - Haptic effect handle",
    "insertText": "CreateHaptic(${1:leftMotorRumble}, ${2:rightMotorRumble}, ${3:leftTriggerRumble}, ${4:rightTriggerRumble})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlayHaptic",
    "kind": "Function",
    "detail": "(handle: string, amplitude: number)",
    "documentation": "@param handle string - Handle of haptic effect\n@param amplitude number - Amplidute used for calculation of Haptic effect.",
    "insertText": "PlayHaptic(${1:handle}, ${2:amplitude})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "PlayHapticDirectional",
    "kind": "Function",
    "detail": "(handle: string, direction: TVec, amplitude: number)",
    "documentation": "@param handle string - Handle of haptic effect\n@param direction TVec - Direction in which effect must be played\n@param amplitude number - Amplidute used for calculation of Haptic effect.",
    "insertText": "PlayHapticDirectional(${1:handle}, ${2:direction}, ${3:amplitude})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "HapticIsPlaying",
    "kind": "Function",
    "detail": "(handle: string) -> boolean",
    "documentation": "@param handle string - Handle of haptic effect\n@return flag boolean - is current Haptic playing or not",
    "insertText": "HapticIsPlaying(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetToolHaptic",
    "kind": "Function",
    "detail": "(id: string, handle: string, amplitude?: number)",
    "documentation": "@param id string - Tool unique identifier\n@param handle string - Handle of haptic effect\n@param amplitude (optional) number - Amplitude multiplier. Default (1.0)",
    "insertText": "SetToolHaptic(${1:id}, ${2:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "StopHaptic",
    "kind": "Function",
    "detail": "(handle: string)",
    "documentation": "@param handle string - Handle of haptic effect",
    "insertText": "StopHaptic(${1:handle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "AddHeat",
    "kind": "Function",
    "detail": "(shape: number, pos: TVec, amount: number)",
    "documentation": "@param shape number - Shape handle\n@param pos TVec - World space point as vector\n@param amount number - amount of heat",
    "insertText": "AddHeat(${1:shape}, ${2:pos}, ${3:amount})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBoundaryArea",
    "kind": "Function",
    "detail": "() -> Number",
    "documentation": "@return area Number - Number representing the area of the boundary.",
    "insertText": "GetBoundaryArea()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetBoundaryBounds",
    "kind": "Function",
    "detail": "() -> Vec, Vec",
    "documentation": "@return min Vec - Vector representing the AABB lower bound\n@return max Vec - Vector representing the AABB upper bound",
    "insertText": "GetBoundaryBounds()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetGravity",
    "kind": "Function",
    "detail": "() -> TVec",
    "documentation": "@return vector TVec - Gravity vector",
    "insertText": "GetGravity()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "SetGravity",
    "kind": "Function",
    "detail": "(vec: TVec)",
    "documentation": "@param vec TVec - Gravity vector",
    "insertText": "SetGravity(${1:vec})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "GetFps",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return fps number - Frames per second",
    "insertText": "GetFps()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiMakeInteractive",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiMakeInteractive()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiPush",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiPush()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiPop",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiPop()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiWidth",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return width number - Width of draw context",
    "insertText": "UiWidth()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiHeight",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return height number - Height of draw context",
    "insertText": "UiHeight()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiCenter",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return center number - Half width of draw context",
    "insertText": "UiCenter()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiMiddle",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return middle number - Half height of draw context",
    "insertText": "UiMiddle()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiColor",
    "kind": "Function",
    "detail": "(r: number, g: number, b: number, a?: number)",
    "documentation": "@param r number - Red channel\n@param g number - Green channel\n@param b number - Blue channel\n@param a (optional) number - Alpha channel. Default 1.0",
    "insertText": "UiColor(${1:r}, ${2:g}, ${3:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiColorFilter",
    "kind": "Function",
    "detail": "(r: number, g: number, b: number, a?: number)",
    "documentation": "@param r number - Red channel\n@param g number - Green channel\n@param b number - Blue channel\n@param a (optional) number - Alpha channel. Default 1.0",
    "insertText": "UiColorFilter(${1:r}, ${2:g}, ${3:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiResetColor",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiResetColor()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiTranslate",
    "kind": "Function",
    "detail": "(x: number, y: number)",
    "documentation": "@param x number - X component\n@param y number - Y component",
    "insertText": "UiTranslate(${1:x}, ${2:y})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiRotate",
    "kind": "Function",
    "detail": "(angle: number)",
    "documentation": "@param angle number - Angle in degrees, counter clockwise",
    "insertText": "UiRotate(${1:angle})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiScale",
    "kind": "Function",
    "detail": "(x: number, y?: number)",
    "documentation": "@param x number - X component\n@param y (optional) number - Y component. Default value is x.",
    "insertText": "UiScale(${1:x})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetScale",
    "kind": "Function",
    "detail": "() -> number, number",
    "documentation": "@return x number - X scale\n@return y number - Y scale",
    "insertText": "UiGetScale()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiClipRect",
    "kind": "Function",
    "detail": "(width: number, height: number, inherit?: boolean)",
    "documentation": "@param width number - Rect width\n@param height number - Rect height\n@param inherit (optional) boolean - True if must include the parent's clip rect",
    "insertText": "UiClipRect(${1:width}, ${2:height})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiWindow",
    "kind": "Function",
    "detail": "(width: number, height: number, clip?: boolean, inherit?: boolean)",
    "documentation": "@param width number - Window width\n@param height number - Window height\n@param clip (optional) boolean - Clip content outside window. Default is false.\n@param inherit (optional) boolean - Inherit current clip region (for nested clip regions)",
    "insertText": "UiWindow(${1:width}, ${2:height})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetCurrentWindow",
    "kind": "Function",
    "detail": "() -> number, number, number, number",
    "documentation": "@return tl_x number - Top left x\n@return tl_y number - Top left y\n@return br_x number - Bottom right x\n@return br_y number - Bottom right y",
    "insertText": "UiGetCurrentWindow()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiIsInCurrentWindow",
    "kind": "Function",
    "detail": "(x: number, y: number) -> boolean",
    "documentation": "@param x number - X\n@param y number - Y\n@return val boolean - True if",
    "insertText": "UiIsInCurrentWindow(${1:x}, ${2:y})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiIsRectFullyClipped",
    "kind": "Function",
    "detail": "(w: number, h: number) -> boolean",
    "documentation": "@param w number - Width\n@param h number - Height\n@return value boolean - True if rect is fully clipped",
    "insertText": "UiIsRectFullyClipped(${1:w}, ${2:h})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiIsInClipRegion",
    "kind": "Function",
    "detail": "(x: number, y: number) -> boolean",
    "documentation": "@param x number - X\n@param y number - Y\n@return value boolean - True if point is in clip region",
    "insertText": "UiIsInClipRegion(${1:x}, ${2:y})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiIsFullyClipped",
    "kind": "Function",
    "detail": "(w: number, h: number) -> boolean",
    "documentation": "@param w number - Width\n@param h number - Height\n@return value boolean - True if rect is not overlapping clip region",
    "insertText": "UiIsFullyClipped(${1:w}, ${2:h})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiSafeMargins",
    "kind": "Function",
    "detail": "() -> number, number, number, number",
    "documentation": "@return x0 number - Left\n@return y0 number - Top\n@return x1 number - Right\n@return y1 number - Bottom",
    "insertText": "UiSafeMargins()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiCanvasSize",
    "kind": "Function",
    "detail": "() -> table",
    "documentation": "@return value table - Canvas width and height",
    "insertText": "UiCanvasSize()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiAlign",
    "kind": "Function",
    "detail": "(alignment: string)",
    "documentation": "@param alignment string - Alignment keywords",
    "insertText": "UiAlign(${1:alignment})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiTextAlignment",
    "kind": "Function",
    "detail": "(alignment: string)",
    "documentation": "@param alignment string - Alignment keyword",
    "insertText": "UiTextAlignment(${1:alignment})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiModalBegin",
    "kind": "Function",
    "detail": "(force?: boolean)",
    "documentation": "@param force (optional) boolean - Pass true if you need to increase the priority of this modal in the context",
    "insertText": "UiModalBegin()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiModalEnd",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiModalEnd()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiDisableInput",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiDisableInput()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiEnableInput",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiEnableInput()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiReceivesInput",
    "kind": "Function",
    "detail": "() -> boolean",
    "documentation": "@return receives boolean - True if current context receives input",
    "insertText": "UiReceivesInput()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetMousePos",
    "kind": "Function",
    "detail": "() -> number, number",
    "documentation": "@return x number - X coordinate\n@return y number - Y coordinate",
    "insertText": "UiGetMousePos()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetCanvasMousePos",
    "kind": "Function",
    "detail": "() -> number, number",
    "documentation": "@return x number - X coordinate\n@return y number - Y coordinate",
    "insertText": "UiGetCanvasMousePos()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiIsMouseInRect",
    "kind": "Function",
    "detail": "(w: number, h: number) -> boolean",
    "documentation": "@param w number - Width\n@param h number - Height\n@return inside boolean - True if mouse pointer is within rectangle",
    "insertText": "UiIsMouseInRect(${1:w}, ${2:h})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiWorldToPixel",
    "kind": "Function",
    "detail": "(point: TVec) -> number, number, number",
    "documentation": "@param point TVec - 3D world position as vector\n@return x number - X coordinate\n@return y number - Y coordinate\n@return distance number - Distance to point",
    "insertText": "UiWorldToPixel(${1:point})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiPixelToWorld",
    "kind": "Function",
    "detail": "(x: number, y: number) -> TVec",
    "documentation": "@param x number - X coordinate\n@param y number - Y coordinate\n@return direction TVec - 3D world direction as vector",
    "insertText": "UiPixelToWorld(${1:x}, ${2:y})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetCursorPos",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiGetCursorPos()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiBlur",
    "kind": "Function",
    "detail": "(amount: number)",
    "documentation": "@param amount number - Blur amount (0.0 to 1.0)",
    "insertText": "UiBlur(${1:amount})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiFont",
    "kind": "Function",
    "detail": "(path: string, size: number)",
    "documentation": "@param path string - Path to TTF font file\n@param size number - Font size (10 to 100)",
    "insertText": "UiFont(${1:path}, ${2:size})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiFontHeight",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return size number - Font size",
    "insertText": "UiFontHeight()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiText",
    "kind": "Function",
    "detail": "(text: string, move?: boolean, maxChars?: number) -> number, number, number, number, string",
    "documentation": "@param text string - Print text at cursor location\n@param move (optional) boolean - Automatically move cursor vertically. Default false.\n@param maxChars (optional) number - Maximum amount of characters. Default 100000.\n@return w number - Width of text\n@return h number - Height of text\n@return x number - End x-position of text.\n@return y number - End y-position of text.\n@return linkId string - Link id of clicked link",
    "insertText": "UiText(${1:text})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiTextDisableWildcards",
    "kind": "Function",
    "detail": "(disable: boolean)",
    "documentation": "@param disable boolean - Enable or disable wildcard [[...]] substitution support in UiText",
    "insertText": "UiTextDisableWildcards(${1:disable})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiTextUniformHeight",
    "kind": "Function",
    "detail": "(uniform: boolean)",
    "documentation": "@param uniform boolean - Enable or disable fixed line height for text rendering",
    "insertText": "UiTextUniformHeight(${1:uniform})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetTextSize",
    "kind": "Function",
    "detail": "(text: string) -> number, number, number, number",
    "documentation": "@param text string - A text string\n@return w number - Width of text\n@return h number - Height of text\n@return x number - Offset x-component of text AABB\n@return y number - Offset y-component of text AABB",
    "insertText": "UiGetTextSize(${1:text})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiMeasureText",
    "kind": "Function",
    "detail": "(space: number, text/locale: string) -> number, number",
    "documentation": "@param space number - Space between lines\n@param text/locale string - , ... A text strings\n@return w number - Width of biggest line\n@return h number - Height of all lines combined with interval",
    "insertText": "UiMeasureText(${1:space}, ${2:text/locale})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetSymbolsCount",
    "kind": "Function",
    "detail": "(text: string) -> number",
    "documentation": "@param text string - Text\n@return count number - Symbols count",
    "insertText": "UiGetSymbolsCount(${1:text})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiTextSymbolsSub",
    "kind": "Function",
    "detail": "(text: string, from: number, to: number) -> string",
    "documentation": "@param text string - Text\n@param from number - From element index\n@param to number - To element index\n@return substring string - Substring",
    "insertText": "UiTextSymbolsSub(${1:text}, ${2:from}, ${3:to})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiWordWrap",
    "kind": "Function",
    "detail": "(width: number)",
    "documentation": "@param width number - Maximum width of text",
    "insertText": "UiWordWrap(${1:width})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiTextLineSpacing",
    "kind": "Function",
    "detail": "(value: number)",
    "documentation": "@param value number - Text linespacing",
    "insertText": "UiTextLineSpacing(${1:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiTextOutline",
    "kind": "Function",
    "detail": "(r: number, g: number, b: number, a: number, thickness?: number)",
    "documentation": "@param r number - Red channel\n@param g number - Green channel\n@param b number - Blue channel\n@param a number - Alpha channel\n@param thickness (optional) number - Outline thickness. Default is 0.1",
    "insertText": "UiTextOutline(${1:r}, ${2:g}, ${3:b}, ${4:a})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiTextShadow",
    "kind": "Function",
    "detail": "(r: number, g: number, b: number, a: number, distance?: number, blur?: number)",
    "documentation": "@param r number - Red channel\n@param g number - Green channel\n@param b number - Blue channel\n@param a number - Alpha channel\n@param distance (optional) number - Shadow distance. Default is 1.0\n@param blur (optional) number - Shadow blur. Default is 0.5",
    "insertText": "UiTextShadow(${1:r}, ${2:g}, ${3:b}, ${4:a})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiRect",
    "kind": "Function",
    "detail": "(w: number, h: number)",
    "documentation": "@param w number - Width\n@param h number - Height",
    "insertText": "UiRect(${1:w}, ${2:h})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiRectOutline",
    "kind": "Function",
    "detail": "(width: number, height: number, thickness: number)",
    "documentation": "@param width number - Rectangle width\n@param height number - Rectangle height\n@param thickness number - Rectangle outline thickness",
    "insertText": "UiRectOutline(${1:width}, ${2:height}, ${3:thickness})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiRoundedRect",
    "kind": "Function",
    "detail": "(width: number, height: number, roundingRadius: number)",
    "documentation": "@param width number - Rectangle width\n@param height number - Rectangle height\n@param roundingRadius number - Round corners radius",
    "insertText": "UiRoundedRect(${1:width}, ${2:height}, ${3:roundingRadius})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiRoundedRectOutline",
    "kind": "Function",
    "detail": "(width: number, height: number, roundingRadius: number, thickness: number)",
    "documentation": "@param width number - Rectangle width\n@param height number - Rectangle height\n@param roundingRadius number - Round corners radius\n@param thickness number - Rectangle outline thickness",
    "insertText": "UiRoundedRectOutline(${1:width}, ${2:height}, ${3:roundingRadius}, ${4:thickness})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiCircle",
    "kind": "Function",
    "detail": "(radius: number)",
    "documentation": "@param radius number - Circle radius",
    "insertText": "UiCircle(${1:radius})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiCircleOutline",
    "kind": "Function",
    "detail": "(radius: number, thickness: number)",
    "documentation": "@param radius number - Circle radius\n@param thickness number - Circle outline thickness",
    "insertText": "UiCircleOutline(${1:radius}, ${2:thickness})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiFillImage",
    "kind": "Function",
    "detail": "(path: string)",
    "documentation": "@param path string - Path to image (PNG or JPG format)",
    "insertText": "UiFillImage(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiBackgroundBlur",
    "kind": "Function",
    "detail": "(amount: number)",
    "documentation": "@param amount number - Blur amount (0.0 to 1.0)",
    "insertText": "UiBackgroundBlur(${1:amount})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiImage",
    "kind": "Function",
    "detail": "(path: string, x0?: number, y0?: number, x1?: number, y1?: number) -> number, number",
    "documentation": "@param path string - Path to image (PNG or JPG format)\n@param x0 (optional) number - Lower x coordinate (default is 0)\n@param y0 (optional) number - Lower y coordinate (default is 0)\n@param x1 (optional) number - Upper x coordinate (default is image width)\n@param y1 (optional) number - Upper y coordinate (default is image height)\n@return w number - Width of drawn image\n@return h number - Height of drawn image",
    "insertText": "UiImage(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiUnloadImage",
    "kind": "Function",
    "detail": "(path: string)",
    "documentation": "@param path string - Path to image (PNG or JPG format)",
    "insertText": "UiUnloadImage(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiHasImage",
    "kind": "Function",
    "detail": "(path: string) -> boolean",
    "documentation": "@param path string - Path to image (PNG or JPG format)\n@return exists boolean - Does the image exists at the specified path",
    "insertText": "UiHasImage(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetImageSize",
    "kind": "Function",
    "detail": "(path: string) -> number, number",
    "documentation": "@param path string - Path to image (PNG or JPG format)\n@return w number - Image width\n@return h number - Image height",
    "insertText": "UiGetImageSize(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiImageBox",
    "kind": "Function",
    "detail": "(path: string, width: number, height: number, borderWidth?: number, borderHeight?: number)",
    "documentation": "@param path string - Path to image (PNG or JPG format)\n@param width number - Width\n@param height number - Height\n@param borderWidth (optional) number - Border width. Default 0\n@param borderHeight (optional) number - Border height. Default 0",
    "insertText": "UiImageBox(${1:path}, ${2:width}, ${3:height})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiSound",
    "kind": "Function",
    "detail": "(path: string, volume?: number, pitch?: number, panAzimuth?: number, panDepth?: number)",
    "documentation": "@param path string - Path to sound file (OGG format)\n@param volume (optional) number - Playback volume. Default 1.0\n@param pitch (optional) number - Playback pitch. Default 1.0\n@param panAzimuth (optional) number - Playback stereo panning azimuth (-PI to PI). Default 0.0.\n@param panDepth (optional) number - Playback stereo panning depth (0.0 to 1.0). Default 1.0.",
    "insertText": "UiSound(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiSoundLoop",
    "kind": "Function",
    "detail": "(path: string, volume?: number, pitch?: number)",
    "documentation": "@param path string - Path to looping sound file (OGG format)\n@param volume (optional) number - Playback volume. Default 1.0\n@param pitch (optional) number - Playback pitch. Default 1.0",
    "insertText": "UiSoundLoop(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiMute",
    "kind": "Function",
    "detail": "(amount: number, music?: boolean)",
    "documentation": "@param amount number - Mute by this amount (0.0 to 1.0)\n@param music (optional) boolean - Mute music as well",
    "insertText": "UiMute(${1:amount})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiButtonImageBox",
    "kind": "Function",
    "detail": "(path: string, borderWidth: number, borderHeight: number, r?: number, g?: number, b?: number, a?: number)",
    "documentation": "@param path string - Path to image (PNG or JPG format)\n@param borderWidth number - Border width\n@param borderHeight number - Border height\n@param r (optional) number - Red multiply. Default 1.0\n@param g (optional) number - Green multiply. Default 1.0\n@param b (optional) number - Blue multiply. Default 1.0\n@param a (optional) number - Alpha channel. Default 1.0",
    "insertText": "UiButtonImageBox(${1:path}, ${2:borderWidth}, ${3:borderHeight})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiButtonHoverColor",
    "kind": "Function",
    "detail": "(r: number, g: number, b: number, a?: number)",
    "documentation": "@param r number - Red multiply\n@param g number - Green multiply\n@param b number - Blue multiply\n@param a (optional) number - Alpha channel. Default 1.0",
    "insertText": "UiButtonHoverColor(${1:r}, ${2:g}, ${3:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiButtonPressColor",
    "kind": "Function",
    "detail": "(r: number, g: number, b: number, a?: number)",
    "documentation": "@param r number - Red multiply\n@param g number - Green multiply\n@param b number - Blue multiply\n@param a (optional) number - Alpha channel. Default 1.0",
    "insertText": "UiButtonPressColor(${1:r}, ${2:g}, ${3:b})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiButtonPressDist",
    "kind": "Function",
    "detail": "(distX: number, distY: number)",
    "documentation": "@param distX number - Press distance along X axis\n@param distY number - Press distance along Y axis",
    "insertText": "UiButtonPressDist(${1:distX}, ${2:distY})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiButtonTextHandling",
    "kind": "Function",
    "detail": "(type: number)",
    "documentation": "@param type number - One of the enum value",
    "insertText": "UiButtonTextHandling(${1:type})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiTextButton",
    "kind": "Function",
    "detail": "(text: string, w?: number, h?: number) -> boolean",
    "documentation": "@param text string - Text on button\n@param w (optional) number - Button width\n@param h (optional) number - Button height\n@return pressed boolean - True if user clicked button",
    "insertText": "UiTextButton(${1:text})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiImageButton",
    "kind": "Function",
    "detail": "(path: string) -> boolean",
    "documentation": "@param path string - Image path (PNG or JPG file)\n@return pressed boolean - True if user clicked button",
    "insertText": "UiImageButton(${1:path})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiBlankButton",
    "kind": "Function",
    "detail": "(w: number, h: number) -> boolean",
    "documentation": "@param w number - Button width\n@param h number - Button height\n@return pressed boolean - True if user clicked button",
    "insertText": "UiBlankButton(${1:w}, ${2:h})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiSlider",
    "kind": "Function",
    "detail": "(path: string, axis: string, current: number, min: number, max: number) -> number, boolean",
    "documentation": "@param path string - Image path (PNG or JPG file)\n@param axis string - Drag axis, must be 'x' or 'y'\n@param current number - Current value\n@param min number - Minimum value\n@param max number - Maximum value\n@return value number - New value, same as current if not changed\n@return done boolean - True if user is finished changing (released slider)",
    "insertText": "UiSlider(${1:path}, ${2:axis}, ${3:current}, ${4:min}, ${5:max})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiSliderHoverColorFilter",
    "kind": "Function",
    "detail": "(r: number, g: number, b: number, a: number)",
    "documentation": "@param r number - Red channel\n@param g number - Green channel\n@param b number - Blue channel\n@param a number - Alpha channel",
    "insertText": "UiSliderHoverColorFilter(${1:r}, ${2:g}, ${3:b}, ${4:a})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiSliderThumbSize",
    "kind": "Function",
    "detail": "(width: number, height: number)",
    "documentation": "@param width number - Thumb width\n@param height number - Thumb height",
    "insertText": "UiSliderThumbSize(${1:width}, ${2:height})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetScreen",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return handle number - Handle to the screen running this script or zero if none.",
    "insertText": "UiGetScreen()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiNavComponent",
    "kind": "Function",
    "detail": "(w: number, h: number) -> string",
    "documentation": "@param w number - Width of the component\n@param h number - Height of the component\n@return id string - Generated ID of the component which can be used to get an info about the component state",
    "insertText": "UiNavComponent(${1:w}, ${2:h})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiIgnoreNavigation",
    "kind": "Function",
    "detail": "(ignore?: boolean)",
    "documentation": "@param ignore (optional) boolean - Whether ignore the navigation in a current UI scope or not.",
    "insertText": "UiIgnoreNavigation()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiResetNavigation",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiResetNavigation()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiNavSkipUpdate",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiNavSkipUpdate()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiIsComponentInFocus",
    "kind": "Function",
    "detail": "(id: string) -> boolean",
    "documentation": "@param id string - Navigation id of the component\n@return focus boolean - Flag whether the component in focus on not",
    "insertText": "UiIsComponentInFocus(${1:id})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiNavGroupBegin",
    "kind": "Function",
    "detail": "(id?: string) -> string",
    "documentation": "@param id (optional) string - Name of navigation group. If not presented, will be generated automatically.\n@return id string - Generated ID of the group which can be used to get an info about the group state",
    "insertText": "UiNavGroupBegin()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiNavGroupEnd",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiNavGroupEnd()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiNavGroupSize",
    "kind": "Function",
    "detail": "(w: number, h: number)",
    "documentation": "@param w number - Width of the component\n@param h number - Height of the component",
    "insertText": "UiNavGroupSize(${1:w}, ${2:h})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiForceFocus",
    "kind": "Function",
    "detail": "(id: string)",
    "documentation": "@param id string - Id of the component",
    "insertText": "UiForceFocus(${1:id})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiFocusedComponentId",
    "kind": "Function",
    "detail": "() -> string",
    "documentation": "@return id string - Id of the focused component",
    "insertText": "UiFocusedComponentId()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiFocusedComponentRect",
    "kind": "Function",
    "detail": "(n?: number) -> table",
    "documentation": "@param n (optional) number - Take n-th parent of the focused component insetad of the component itself\n@return rect table - Rect object with info about the component bounding rectangle",
    "insertText": "UiFocusedComponentRect()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetItemSize",
    "kind": "Function",
    "detail": "() -> number, number",
    "documentation": "@return x number - Width\n@return y number - Height",
    "insertText": "UiGetItemSize()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiAutoTranslate",
    "kind": "Function",
    "detail": "(value: boolean)",
    "documentation": "@param value boolean - ",
    "insertText": "UiAutoTranslate(${1:value})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiBeginFrame",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiBeginFrame()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiResetFrame",
    "kind": "Function",
    "detail": "()",
    "documentation": "",
    "insertText": "UiResetFrame()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiFrameOccupy",
    "kind": "Function",
    "detail": "(width: number, height: number)",
    "documentation": "@param width number - Width\n@param height number - Height",
    "insertText": "UiFrameOccupy(${1:width}, ${2:height})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiEndFrame",
    "kind": "Function",
    "detail": "() -> number, number",
    "documentation": "@return width number - Width of content drawn between since UiBeginFrame was called\n@return height number - Height of content drawn between since UiBeginFrame was called",
    "insertText": "UiEndFrame()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiFrameSkipItem",
    "kind": "Function",
    "detail": "(skip: boolean)",
    "documentation": "@param skip boolean - Should skip item",
    "insertText": "UiFrameSkipItem(${1:skip})",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetFrameNo",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return frameNo number - Frame number since the level start",
    "insertText": "UiGetFrameNo()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiGetLanguage",
    "kind": "Function",
    "detail": "() -> number",
    "documentation": "@return index number - Language index",
    "insertText": "UiGetLanguage()",
    "insertTextRules": "InsertAsSnippet"
  },
  {
    "label": "UiSetCursorState",
    "kind": "Function",
    "detail": "(state: number)",
    "documentation": "@param state number - ",
    "insertText": "UiSetCursorState(${1:state})",
    "insertTextRules": "InsertAsSnippet"
  }
];

export const teardown_func_names = [
  "GetIntParam",
  "GetFloatParam",
  "GetBoolParam",
  "GetStringParam",
  "GetColorParam",
  "GetVersion",
  "HasVersion",
  "GetTime",
  "GetTimeStep",
  "InputLastPressedKey",
  "InputPressed",
  "InputReleased",
  "InputDown",
  "InputValue",
  "InputClear",
  "InputResetOnTransition",
  "LastInputDevice",
  "SetValue",
  "SetValueInTable",
  "PauseMenuButton",
  "HasFile",
  "StartLevel",
  "SetPaused",
  "Restart",
  "Menu",
  "ClientCall",
  "ServerCall",
  "ClearKey",
  "ListKeys",
  "HasKey",
  "SetInt",
  "GetInt",
  "SetFloat",
  "GetFloat",
  "SetBool",
  "GetBool",
  "SetString",
  "GetString",
  "SetColor",
  "GetColor",
  "GetTranslatedStringByKey",
  "HasTranslationByKey",
  "LoadLanguageTable",
  "GetUserNickname",
  "GetEventCount",
  "PostEvent",
  "GetEvent",
  "Vec",
  "VecCopy",
  "VecStr",
  "VecLength",
  "VecNormalize",
  "VecScale",
  "VecAdd",
  "VecSub",
  "VecDot",
  "VecCross",
  "VecLerp",
  "Quat",
  "QuatCopy",
  "QuatAxisAngle",
  "QuatDeltaNormals",
  "QuatDeltaVectors",
  "QuatEuler",
  "QuatAlignXZ",
  "GetQuatEuler",
  "QuatLookAt",
  "QuatSlerp",
  "QuatStr",
  "QuatRotateQuat",
  "QuatRotateVec",
  "Transform",
  "TransformCopy",
  "TransformStr",
  "TransformToParentTransform",
  "TransformToLocalTransform",
  "TransformToParentVec",
  "TransformToLocalVec",
  "TransformToParentPoint",
  "TransformToLocalPoint",
  "SetRandomSeed",
  "GetRandomBool",
  "GetRandomInt",
  "GetRandomFloat",
  "GetRandomDirection",
  "FindEntity",
  "FindEntities",
  "GetEntityChildren",
  "GetEntityParent",
  "SetTag",
  "RemoveTag",
  "HasTag",
  "GetTagValue",
  "ListTags",
  "GetDescription",
  "SetDescription",
  "Delete",
  "IsHandleValid",
  "GetEntityType",
  "GetProperty",
  "SetProperty",
  "FindBody",
  "FindBodies",
  "GetBodyTransform",
  "SetBodyTransform",
  "GetBodyMass",
  "IsBodyDynamic",
  "SetBodyDynamic",
  "SetBodyVelocity",
  "GetBodyVelocity",
  "GetBodyVelocityAtPos",
  "SetBodyAngularVelocity",
  "GetBodyAngularVelocity",
  "IsBodyActive",
  "SetBodyActive",
  "ApplyBodyImpulse",
  "GetBodyShapes",
  "GetBodyVehicle",
  "GetBodyAnimator",
  "GetBodyPlayer",
  "GetBodyBounds",
  "GetBodyCenterOfMass",
  "IsBodyVisible",
  "IsBodyBroken",
  "IsBodyJointedToStatic",
  "DrawBodyOutline",
  "DrawBodyHighlight",
  "GetBodyClosestPoint",
  "ConstrainVelocity",
  "ConstrainAngularVelocity",
  "ConstrainPosition",
  "ConstrainOrientation",
  "GetWorldBody",
  "FindShape",
  "FindShapes",
  "GetShapeLocalTransform",
  "SetShapeLocalTransform",
  "GetShapeWorldTransform",
  "GetShapeBody",
  "GetShapeJoints",
  "GetShapeLights",
  "GetShapeBounds",
  "SetShapeEmissiveScale",
  "SetShapeDensity",
  "GetShapeMaterialAtPosition",
  "GetShapeMaterialAtIndex",
  "GetShapeSize",
  "GetShapeVoxelCount",
  "IsShapeVisible",
  "IsShapeBroken",
  "DrawShapeOutline",
  "DrawShapeHighlight",
  "SetShapeCollisionFilter",
  "GetShapeCollisionFilter",
  "CreateShape",
  "ClearShape",
  "ResizeShape",
  "SetShapeBody",
  "CopyShapeContent",
  "CopyShapePalette",
  "GetShapePalette",
  "GetShapeMaterial",
  "SetBrush",
  "DrawShapeLine",
  "DrawShapeBox",
  "ExtrudeShape",
  "TrimShape",
  "SplitShape",
  "MergeShape",
  "IsShapeDisconnected",
  "IsStaticShapeDetached",
  "GetShapeClosestPoint",
  "IsShapeTouching",
  "FindLocation",
  "FindLocations",
  "GetLocationTransform",
  "FindJoint",
  "FindJoints",
  "IsJointBroken",
  "GetJointType",
  "GetJointOtherShape",
  "GetJointShapes",
  "SetJointMotor",
  "SetJointMotorTarget",
  "GetJointLimits",
  "GetJointMovement",
  "GetJointedBodies",
  "DetachJointFromShape",
  "GetRopeNumberOfPoints",
  "GetRopePointPosition",
  "GetRopeBounds",
  "BreakRope",
  "SetAnimatorPositionIK",
  "SetAnimatorTransformIK",
  "GetBoneChainLength",
  "FindAnimator",
  "FindAnimators",
  "GetAnimatorTransform",
  "GetAnimatorAdjustTransformIK",
  "SetAnimatorTransform",
  "MakeRagdoll",
  "UnRagdoll",
  "PlayAnimation",
  "PlayAnimationLoop",
  "PlayAnimationInstance",
  "StopAnimationInstance",
  "PlayAnimationFrame",
  "BeginAnimationGroup",
  "EndAnimationGroup",
  "PlayAnimationInstances",
  "GetAnimationClipNames",
  "GetAnimationClipDuration",
  "SetAnimationClipFade",
  "SetAnimationClipSpeed",
  "TrimAnimationClip",
  "GetAnimationClipLoopPosition",
  "GetAnimationInstancePosition",
  "SetAnimationClipLoopPosition",
  "SetBoneRotation",
  "SetBoneLookAt",
  "RotateBone",
  "GetBoneNames",
  "GetBoneBody",
  "GetBoneWorldTransform",
  "GetBoneBindPoseTransform",
  "FindLight",
  "FindLights",
  "SetLightEnabled",
  "SetLightColor",
  "SetLightIntensity",
  "GetLightTransform",
  "GetLightShape",
  "IsLightActive",
  "IsPointAffectedByLight",
  "GetFlashlight",
  "SetFlashlight",
  "FindTrigger",
  "FindTriggers",
  "GetTriggerTransform",
  "SetTriggerTransform",
  "GetTriggerBounds",
  "IsBodyInTrigger",
  "IsVehicleInTrigger",
  "IsShapeInTrigger",
  "IsPointInTrigger",
  "IsPointInBoundaries",
  "IsTriggerEmpty",
  "GetTriggerDistance",
  "GetTriggerClosestPoint",
  "FindScreen",
  "FindScreens",
  "SetScreenEnabled",
  "IsScreenEnabled",
  "GetScreenShape",
  "GetScreenPlayer",
  "FindVehicle",
  "FindVehicles",
  "GetVehicleTransform",
  "GetVehicleExhaustTransforms",
  "GetVehicleVitalTransforms",
  "GetVehicleBodies",
  "GetVehicleBody",
  "GetVehicleHealth",
  "GetVehicleParams",
  "SetVehicleParam",
  "GetVehicleDriverPos",
  "GetVehicleAvailableSeatPos",
  "GetVehicleSteering",
  "GetVehicleDrive",
  "DriveVehicle",
  "GetVehicleLocationWorldTransform",
  "GetVehiclePassengerCount",
  "SetVehicleHealth",
  "FindRig",
  "GetRigWorldTransform",
  "SetRigWorldTransform",
  "GetRigLocationWorldTransform",
  "SetRigLocationWorldTransform",
  "GetRigLocationLocalTransform",
  "SetRigLocationLocalTransform",
  "GetAllPlayers",
  "GetMaxPlayers",
  "GetPlayerCount",
  "GetAddedPlayers",
  "GetRemovedPlayers",
  "GetPlayerName",
  "GetLocalPlayer",
  "IsPlayerLocal",
  "GetPlayerCharacter",
  "IsPlayerHost",
  "IsPlayerValid",
  "GetPlayerPos",
  "GetPlayerAimInfo",
  "GetPlayerPitch",
  "GetPlayerYaw",
  "SetPlayerPitch",
  "GetPlayerCrouch",
  "GetPlayerTransform",
  "GetPlayerTransformWithPitch",
  "SetPlayerTransform",
  "SetPlayerTransformWithPitch",
  "SetPlayerGroundVelocity",
  "GetPlayerEyeTransform",
  "GetPlayerCameraTransform",
  "SetPlayerCameraOffsetTransform",
  "SetPlayerSpawnTransform",
  "SetPlayerSpawnHealth",
  "SetPlayerSpawnTool",
  "GetPlayerVelocity",
  "SetPlayerVehicle",
  "SetPlayerAnimator",
  "GetPlayerAnimator",
  "GetPlayerBodies",
  "SetPlayerVelocity",
  "GetPlayerVehicle",
  "IsPlayerGrounded",
  "IsPlayerVehicleDriver",
  "IsPlayerVehiclePassenger",
  "IsPlayerJumping",
  "GetPlayerGroundContact",
  "GetPlayerGrabShape",
  "GetPlayerGrabBody",
  "ReleasePlayerGrab",
  "GetPlayerGrabPoint",
  "GetPlayerPickShape",
  "GetPlayerPickBody",
  "GetPlayerInteractShape",
  "GetPlayerInteractBody",
  "SetPlayerScreen",
  "GetPlayerScreen",
  "SetPlayerHealth",
  "GetPlayerHealth",
  "GetPlayerCanUseTool",
  "SetPlayerRegenerationState",
  "SetPlayerTool",
  "GetPlayerTool",
  "RespawnPlayer",
  "RespawnPlayerAtTransform",
  "GetPlayerWalkingSpeed",
  "SetPlayerWalkingSpeed",
  "GetPlayerCrouchSpeedScale",
  "SetPlayerCrouchSpeedScale",
  "GetPlayerHurtSpeedScale",
  "SetPlayerHurtSpeedScale",
  "GetPlayerParam",
  "SetPlayerParam",
  "SetPlayerHidden",
  "RegisterTool",
  "SetToolAmmoPickupAmount",
  "GetToolAmmoPickupAmount",
  "GetToolBody",
  "GetToolHandPoseLocalTransform",
  "GetToolHandPoseWorldTransform",
  "SetToolHandPoseLocalTransform",
  "GetToolLocationLocalTransform",
  "GetToolLocationWorldTransform",
  "SetToolTransform",
  "SetToolAllowedZoom",
  "SetToolTransformOverride",
  "SetToolOffset",
  "SetToolAmmo",
  "GetToolAmmo",
  "SetToolEnabled",
  "IsToolEnabled",
  "SetPlayerOrientation",
  "GetPlayerOrientation",
  "GetPlayerUp",
  "SetPlayerRig",
  "GetPlayerRig",
  "GetPlayerRigWorldTransform",
  "ClearPlayerRig",
  "SetPlayerRigLocationLocalTransform",
  "SetPlayerRigTransform",
  "GetPlayerRigLocationWorldTransform",
  "SetPlayerRigTags",
  "GetPlayerRigHasTag",
  "GetPlayerRigTagValue",
  "GetPlayerColor",
  "SetPlayerColor",
  "ApplyPlayerDamage",
  "DisablePlayerInput",
  "DisablePlayer",
  "IsPlayerDisabled",
  "DisablePlayerDamage",
  "LoadSound",
  "UnloadSound",
  "LoadLoop",
  "UnloadLoop",
  "SetSoundLoopUser",
  "PlaySound",
  "PlaySoundForUser",
  "StopSound",
  "IsSoundPlaying",
  "GetSoundProgress",
  "SetSoundProgress",
  "PlayLoop",
  "GetSoundLoopProgress",
  "SetSoundLoopProgress",
  "PlayMusic",
  "StopMusic",
  "IsMusicPlaying",
  "SetMusicPaused",
  "GetMusicProgress",
  "SetMusicProgress",
  "SetMusicVolume",
  "SetMusicLowPass",
  "LoadSprite",
  "DrawSprite",
  "QueryRequire",
  "QueryInclude",
  "QueryCollisionMask",
  "QueryRejectAnimator",
  "QueryRejectVehicle",
  "QueryRejectBody",
  "QueryRejectBodies",
  "QueryRejectShape",
  "QueryRejectShapes",
  "QueryRejectPlayer",
  "QueryRaycast",
  "QueryRaycastRope",
  "QueryRaycastWater",
  "QueryShot",
  "QueryClosestPoint",
  "QueryAabbShapes",
  "QueryAabbBodies",
  "QueryPath",
  "CreatePathPlanner",
  "DeletePathPlanner",
  "PathPlannerQuery",
  "AbortPath",
  "GetPathState",
  "GetPathLength",
  "GetPathPoint",
  "GetLastSound",
  "IsPointInWater",
  "GetWindVelocity",
  "ParticleReset",
  "ParticleType",
  "ParticleTile",
  "ParticleColor",
  "ParticleRadius",
  "ParticleAlpha",
  "ParticleGravity",
  "ParticleDrag",
  "ParticleEmissive",
  "ParticleRotation",
  "ParticleStretch",
  "ParticleSticky",
  "ParticleCollide",
  "ParticleFlags",
  "SpawnParticle",
  "Spawn",
  "SpawnLayer",
  "SpawnTool",
  "AddMapMarker",
  "SelectedMapMarker",
  "Shoot",
  "Paint",
  "PaintRGBA",
  "MakeHole",
  "Explosion",
  "SpawnFire",
  "GetFireCount",
  "QueryClosestFire",
  "QueryAabbFireCount",
  "RemoveAabbFires",
  "GetCameraTransform",
  "SetCameraTransform",
  "RequestFirstPerson",
  "RequestThirdPerson",
  "SetCameraOffsetTransform",
  "AttachCameraTo",
  "SetPivotClipBody",
  "ShakeCamera",
  "SetCameraFov",
  "SetCameraDof",
  "SetLowHealthBlurThreshold",
  "PointLight",
  "SetTimeScale",
  "SetEnvironmentDefault",
  "SetEnvironmentProperty",
  "GetEnvironmentProperty",
  "SetPostProcessingDefault",
  "SetPostProcessingProperty",
  "GetPostProcessingProperty",
  "DrawLine",
  "DebugLine",
  "DebugCross",
  "DebugTransform",
  "DebugWatch",
  "DebugPrint",
  "RegisterListenerTo",
  "UnregisterListener",
  "TriggerEvent",
  "LoadHaptic",
  "CreateHaptic",
  "PlayHaptic",
  "PlayHapticDirectional",
  "HapticIsPlaying",
  "SetToolHaptic",
  "StopHaptic",
  "AddHeat",
  "GetBoundaryArea",
  "GetBoundaryBounds",
  "GetGravity",
  "SetGravity",
  "GetFps",
  "UiMakeInteractive",
  "UiPush",
  "UiPop",
  "UiWidth",
  "UiHeight",
  "UiCenter",
  "UiMiddle",
  "UiColor",
  "UiColorFilter",
  "UiResetColor",
  "UiTranslate",
  "UiRotate",
  "UiScale",
  "UiGetScale",
  "UiClipRect",
  "UiWindow",
  "UiGetCurrentWindow",
  "UiIsInCurrentWindow",
  "UiIsRectFullyClipped",
  "UiIsInClipRegion",
  "UiIsFullyClipped",
  "UiSafeMargins",
  "UiCanvasSize",
  "UiAlign",
  "UiTextAlignment",
  "UiModalBegin",
  "UiModalEnd",
  "UiDisableInput",
  "UiEnableInput",
  "UiReceivesInput",
  "UiGetMousePos",
  "UiGetCanvasMousePos",
  "UiIsMouseInRect",
  "UiWorldToPixel",
  "UiPixelToWorld",
  "UiGetCursorPos",
  "UiBlur",
  "UiFont",
  "UiFontHeight",
  "UiText",
  "UiTextDisableWildcards",
  "UiTextUniformHeight",
  "UiGetTextSize",
  "UiMeasureText",
  "UiGetSymbolsCount",
  "UiTextSymbolsSub",
  "UiWordWrap",
  "UiTextLineSpacing",
  "UiTextOutline",
  "UiTextShadow",
  "UiRect",
  "UiRectOutline",
  "UiRoundedRect",
  "UiRoundedRectOutline",
  "UiCircle",
  "UiCircleOutline",
  "UiFillImage",
  "UiBackgroundBlur",
  "UiImage",
  "UiUnloadImage",
  "UiHasImage",
  "UiGetImageSize",
  "UiImageBox",
  "UiSound",
  "UiSoundLoop",
  "UiMute",
  "UiButtonImageBox",
  "UiButtonHoverColor",
  "UiButtonPressColor",
  "UiButtonPressDist",
  "UiButtonTextHandling",
  "UiTextButton",
  "UiImageButton",
  "UiBlankButton",
  "UiSlider",
  "UiSliderHoverColorFilter",
  "UiSliderThumbSize",
  "UiGetScreen",
  "UiNavComponent",
  "UiIgnoreNavigation",
  "UiResetNavigation",
  "UiNavSkipUpdate",
  "UiIsComponentInFocus",
  "UiNavGroupBegin",
  "UiNavGroupEnd",
  "UiNavGroupSize",
  "UiForceFocus",
  "UiFocusedComponentId",
  "UiFocusedComponentRect",
  "UiGetItemSize",
  "UiAutoTranslate",
  "UiBeginFrame",
  "UiResetFrame",
  "UiFrameOccupy",
  "UiEndFrame",
  "UiFrameSkipItem",
  "UiGetFrameNo",
  "UiGetLanguage",
  "UiSetCursorState"
];

