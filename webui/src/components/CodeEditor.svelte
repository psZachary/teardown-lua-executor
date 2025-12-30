<script lang="ts">
  import { onMount } from "svelte";
  import CodeMirror from "codemirror";
  import "codemirror/mode/lua/lua.js";
  import "codemirror/lib/codemirror.css";
  import { show_success, show_warning } from "../lib/toast";
  import { beautify_lua } from "../lib/beautify";
  import Button from "./Button.svelte";

  export let on_execute = async (code) => {};
  export let on_load_file = async () => null;
  export let on_save_file = async (data: String) => null;
  
  let editor;
  let code_textarea;

  onMount(() => {
    setTimeout(() => {
      editor = CodeMirror.fromTextArea(code_textarea, {
        mode: "lua",
        theme: "custom",
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        lineWrapping: true,
        matchBrackets: true,
        autoCloseBrackets: true,
      });

      editor.setValue(
        "-- Enter Lua code here...\n\nExplosion(GetPlayerPos(), 1)",
      );
      editor.refresh();
    }, 0);
  });

  async function execute() {
    const code = editor.getValue();
    await on_execute(code);
  }

  async function load_file() {
    const code = await on_load_file();
    if (code !== null) {
      editor.setValue(code);
    }
  }

  async function save_file() {
    const code = await on_save_file(editor.getValue());
  }

  function format_code() {
    const code = editor.getValue();
    const result = beautify_lua(code);
    if (result.error) {
      show_warning("Failed to parse: " + result.error_message);
    } else {
      editor.setValue(result.beautified);
      show_success("Formatted");
    }
  }

  function clear_code() {
    editor.setValue("");
  }

  async function key_handler(e: KeyboardEvent) {
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      await save_file();
    }
  }
</script>

<svelte:window onkeydown={key_handler} />

<div class="flex flex-col h-full w-full">
  <div
    class="flex-1 bg-[#141414] rounded-sm p-2 border border-[#252525] mb-4 min-h-0 overflow-hidden"
  >
    <textarea bind:this={code_textarea}></textarea>
  </div>

  <div class="flex gap-3 shrink-0">
    <Button on:click={execute} variant="primary" class="flex-1">Execute</Button>
    <Button on:click={load_file}>Load File</Button>
    <Button on:click={save_file}>Save</Button>
    <Button on:click={format_code}>Format</Button>
    <Button on:click={clear_code}>Clear</Button>
  </div>
</div>

<style>
  textarea {
    width: 100%;
    height: 100%;
  }

  :global(.CodeMirror) {
    height: 100% !important;
    width: 100% !important;
    font-family: "JetBrains Mono", "Fira Code", "Consolas", monospace;
    font-size: 14px;
    border-radius: 0.25rem;
  }

  :global(.cm-s-custom.CodeMirror) {
    background: #0a0a0a;
    color: #abb2bf;
    line-height: 1.6;
  }

  :global(.cm-s-custom .CodeMirror-gutters) {
    background: #0a0a0a;
    border-right: 1px solid #1a1a1a;
  }

  :global(.cm-s-custom .CodeMirror-linenumber) {
    color: #3a3a4a;
    padding: 0 12px 0 8px;
  }

  :global(.cm-s-custom .CodeMirror-cursor) {
    border-left: 2px solid #528bff;
  }

  :global(.cm-s-custom .CodeMirror-selected) {
    background: rgba(82, 139, 255, 0.2);
  }

  :global(.cm-s-custom .CodeMirror-activeline-background) {
    background: rgba(255, 255, 255, 0.03);
  }

  :global(.cm-s-custom .cm-keyword) {
    color: #c678dd;
    font-weight: 500;
  }

  :global(.cm-s-custom .cm-string) {
    color: #98c379;
  }

  :global(.cm-s-custom .cm-number) {
    color: #d19a66;
  }

  :global(.cm-s-custom .cm-comment) {
    color: #5c6370;
    font-style: italic;
  }

  :global(.cm-s-custom .cm-builtin) {
    color: #61afef;
    font-weight: 500;
  }

  :global(.cm-s-custom .cm-variable) {
    color: #e06c75;
  }

  :global(.cm-s-custom .cm-operator) {
    color: #56b6c2;
  }
</style>
