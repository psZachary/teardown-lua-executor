<script lang="ts" context="module">
  let saved_code = 
  `-- Executor created by https://github.com/psZachary
-- Enter Lua code below:\n\nExplosion(GetPlayerPos(), 1);`
</script>

<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import * as monaco from "monaco-editor";
  import { teardown_api_completions, teardown_func_names } from "../lib/lua_api";
  import { show_success, show_warning } from "../lib/toast";
  import { beautify_lua } from "../lib/beautify";
  import Button from "./Button.svelte";

  export let on_execute = async (code) => {};
  export let on_load_file = async () => null;
  export let on_save_file = async (data: String) => null;
  
  let editor: monaco.editor.IStandaloneCodeEditor;
  let editor_container: HTMLDivElement;

  onMount(() => {
    monaco.editor.defineTheme("custom-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "keyword", foreground: "c678dd", fontStyle: "bold" },
        { token: "string", foreground: "98c379" },
        { token: "number", foreground: "d19a66" },
        { token: "comment", foreground: "5c6370", fontStyle: "italic" },
        { token: "global", foreground: "e5c07b", fontStyle: "bold" },
        { token: "teardown", foreground: "61afef" },
        { token: "builtin", foreground: "56b6c2" },
      ],
      colors: {
        "editor.background": "#0a0a0a",
        "editor.foreground": "#abb2bf",
        "editor.lineHighlightBackground": "#ffffff08",
        "editorCursor.foreground": "#528bff",
        "editor.selectionBackground": "#528bff33",
        "editorLineNumber.foreground": "#3a3a4a",
        "editorGutter.background": "#0a0a0a",
      },
    });

    const lua_globals = ["_G", "_VERSION", "self", "math", "string", "table", "io", "os", "debug", "coroutine", "package"];
    const lua_builtins = ["print", "type", "tostring", "tonumber", "pairs", "ipairs", "next", "select", "unpack", "pack", "pcall", "xpcall", "error", "assert", "setmetatable", "getmetatable", "rawget", "rawset", "rawequal", "rawlen", "require", "loadstring", "loadfile", "dofile", "collectgarbage"];

    monaco.languages.register({ id: "lua" });

    monaco.languages.setMonarchTokensProvider("lua", {
      teardown_funcs: teardown_func_names,
      lua_globals,
      lua_builtins,
      keywords: ["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while"],
      tokenizer: {
        root: [
          [/--\[[\[=]*\[/, "comment", "@comment"],
          [/--.*$/, "comment"],
          [/"([^"\\]|\\.)*$/, "string.invalid"],
          [/'([^'\\]|\\.)*$/, "string.invalid"],
          [/"/, "string", "@string_double"],
          [/'/, "string", "@string_single"],
          [/\[\[/, "string", "@string_multi"],
          [/\d+(\.\d+)?([eE][-+]?\d+)?/, "number"],
          [/0[xX][0-9a-fA-F]+/, "number"],
          [
            /[a-zA-Z_]\w*/,
            {
              cases: {
                "@teardown_funcs": "teardown",
                "@lua_globals": "global",
                "@lua_builtins": "builtin",
                "@keywords": "keyword",
                "@default": "identifier",
              },
            },
          ],
          [/[{}()\[\]]/, "@brackets"],
          [/[<>]=?|[~=]=|\.\.\.?|[+\-*/%^#]/, "operator"],
        ],
        comment: [
          [/\][\]=]*\]/, "comment", "@pop"],
          [/./, "comment"],
        ],
        string_double: [
          [/[^\\"]+/, "string"],
          [/\\./, "string.escape"],
          [/"/, "string", "@pop"],
        ],
        string_single: [
          [/[^\\']+/, "string"],
          [/\\./, "string.escape"],
          [/'/, "string", "@pop"],
        ],
        string_multi: [
          [/\]\]/, "string", "@pop"],
          [/./, "string"],
        ],
      },
    });

    monaco.languages.registerCompletionItemProvider("lua", {
      provideCompletionItems: (model, position) => {
        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        };

        const suggestions = [
          ...teardown_api_completions.map(c => ({
            label: c.label,
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: c.insertText,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            detail: c.detail,
            documentation: c.documentation,
            range,
          })),
          ...lua_builtins.map(name => ({
            label: name,
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: name,
            range,
          })),
          ...lua_globals.map(name => ({
            label: name,
            kind: monaco.languages.CompletionItemKind.Variable,
            insertText: name,
            range,
          })),
          ...["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while"].map(kw => ({
            label: kw,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: kw,
            range,
          })),
        ];

        return { suggestions };
      },
    });

    editor = monaco.editor.create(editor_container, {
      value: saved_code,
      language: "lua",
      theme: "custom-dark",
      fontSize: 14,
      fontFamily: '"JetBrains Mono", "Fira Code", "Consolas", monospace',
      lineNumbers: "on",
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 4,
      insertSpaces: true,
      wordWrap: "on",
      bracketPairColorization: { enabled: true },
      autoClosingBrackets: "always",
      autoClosingQuotes: "always",
    });

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      save_file();
    });

    editor.onDidChangeModelContent(() => {
      saved_code = editor.getValue();
    });

    return () => editor.dispose();
  });

  function get_code() {
    return editor?.getValue() || "";
  }

  function set_code(code: string) {
    editor?.setValue(code);
  }

  async function execute() {
    await on_execute(get_code());
  }

  async function load_file() {
    const code = await on_load_file();
    if (code !== null) {
      set_code(code);
    }
  }

  async function save_file() {
    await on_save_file(get_code());
  }

  function format_code() {
    const result = beautify_lua(get_code());
    if (result.error) {
      show_warning("Failed to parse: " + result.error_message);
    } else {
      set_code(result.beautified);
      show_success("Formatted");
    }
  }

  function clear_code() {
    set_code("");
  }
</script>

<div class="flex flex-col h-full w-full">
  <div
    bind:this={editor_container}
    class="flex-1 rounded-sm border border-[#252525] mb-4 min-h-0 overflow-hidden"
  ></div>
  <div class="flex gap-3 shrink-0">
    <Button on:click={execute} variant="primary" class="flex-1">Execute</Button>
    <Button on:click={load_file}>Load File</Button>
    <Button on:click={save_file}>Save</Button>
    <Button on:click={format_code}>Format</Button>
    <Button on:click={clear_code}>Clear</Button>
  </div>
</div>