# Teardown Lua Executor

External Lua executor for Teardown using shellcode injection with a modern WebView2 UI built in Svelte, TailwindCSS, and CodeMirror.

## Features

- Execute Lua code in Teardown at runtime
- Modern dark-themed code editor with syntax highlighting
- Script browser to view and select loaded game scripts
- File loading support
- Real-time game connection status

## Usage Prerequisites
- [**Visual C++ Redistributable v14 (x64)**](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-c-redistributable-v14)
- [**Teardown**](https://teardowngame.com/) game
- [**WebView2 Runtime**](https://developer.microsoft.com/en-us/Microsoft-edge/webview2/?form=MA13LH#download) (usually pre-installed on Windows 10/11)
## Build Prerequisites
- [**Node.js 18+**](https://nodejs.org/en/download) and npm
- [**Visual Studio 2026**](https://visualstudio.microsoft.com/downloads/) with C++ desktop development tools
  
## Building

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/teardown-lua-executor
cd teardown-lua-executor
```

### 2. Install UI Dependencies
```bash
cd webui
npm install
```
This will install the following packages:
```json
{
  "@sveltejs/vite-plugin-svelte": "^6.2.1",
  "@zerodevx/svelte-toast": "^0.9.6",
  "autoprefixer": "^10.4.23",
  "postcss": "^8.5.6",
  "svelte": "^5.43.8",
  "vite": "npm:rolldown-vite@7.2.5",
  "vite-plugin-singlefile": "^2.3.0"
}
```

### 3. Build with Visual Studio

1. Open the solution in Visual Studio 2022
2. Build the project (the pre-build event will automatically run `npm run build`)
3. The UI will be compiled and embedded as a resource in the executable

## Project Structure
```
teardown-lua-executor/
├── webui/                              # Svelte UI
│   └── src/                            # UI Source
│       ├── components/                 # UI Components (Tabs)
│       │   ├── CodeEditor.svelte       # Code editor for the executor
│       │   ├── Home.svelte             # Home page
│       │   ├── ScriptList.svelte       # Provides current game scripts via IPC from C++
│       │   └── StatusBar.svelte        # Status bar
│       ├── app.css                     # Import TailwindCSS
│       ├── app.svelte                  # Provides entry point & Webview2 IPC to components
│       └── main.js 
├── src/                                # C++ project functionality
│   └── C++ Backend...
├── resource/                           # C++ embeddable resources
│   ├── resource.h
│   └── resource.rc
├── dependencies/                       # Libraries used in conjunction with C++ (Webview2, json, etc.)
└── build/                              # Build output for executable (MSVC)
```

## Usage

1. Launch Teardown
2. Run the executor
3. Wait for the connection indicator to turn green
4. Write Lua code in the editor or load a script file
5. Click "Execute" to run your code

## Development

### UI Development (with hot reload)
```bash
cd webui
npm run dev
```

Then temporarily change the C++ code to navigate to `http://localhost:5173` instead of loading from resources.

### Production Build
```bash
cd webui
npm run build
```
Please take note that the pre-build event in Visual Studio automates this step, so long as the 
node packages are installed, this step is redundant.

The output in `webui/dist/index.html` will be embedded as a resource during the Visual Studio build.

## Technical Details

- **Injection Method**: Shellcode injection
- **UI Framework**: Svelte 5
- **Styling**: TailwindCSS 4
- **Code Editor**: CodeMirror 5 with Lua syntax highlighting
- **Build Tool**: Vite with single-file plugin
- **WebView**: Microsoft WebView2

## License
All source code in this project falls under the MIT license.
[License](./LICENSE.txt)

## Disclaimer
This tool is for educational purposes only. Use at your own risk.
