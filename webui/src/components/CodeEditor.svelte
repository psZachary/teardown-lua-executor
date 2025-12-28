<script lang="ts">
  import { onMount } from 'svelte';
  import CodeMirror from 'codemirror';
  import 'codemirror/mode/lua/lua.js';
  import 'codemirror/lib/codemirror.css';
  
  export let on_execute = async (code) => {};
  export let on_load_file = async () => null;
  export let on_save_file = async (data: String) => null;
  let editor;
  let code_textarea;
  
  onMount(() => {
    setTimeout(() => {
      editor = CodeMirror.fromTextArea(code_textarea, {
        mode: 'lua',
        theme: 'custom',
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        lineWrapping: true,
        matchBrackets: true,
        autoCloseBrackets: true
      });
      
      editor.setValue('-- Enter Lua code here...\n\nExplosion(GetPlayerPos(), 1)');
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

  function clear_code() {
    editor.setValue('');
  }

  async function key_handler(e: KeyboardEvent) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        await save_file();
    }
  }
</script>

<svelte:window onkeydown={key_handler}></svelte:window>

<div class="flex flex-col h-full w-full">
  <div class="flex-1 bg-[#141414] rounded-sm p-2 border border-[#252525] mb-4 min-h-0 overflow-hidden">
    <textarea bind:this={code_textarea}></textarea>
  </div>

  <div class="flex gap-3 shrink-0">
    <button on:click={execute}
      class="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-sm">
      Execute
    </button>
    <button on:click={load_file}
      class="bg-[#1a1a1a] hover:bg-[#252525] text-gray-300 font-medium py-2 px-4 rounded-sm border border-[#252525]">
      Load File
    </button>
        <button on:click={save_file}
      class="bg-[#1a1a1a] hover:bg-[#252525] text-gray-300 font-medium py-2 px-4 rounded-sm border border-[#252525]">
      Save
    </button>
    <button on:click={clear_code}
      class="bg-[#1a1a1a] hover:bg-[#252525] text-gray-300 font-medium py-2 px-4 rounded-sm border border-[#252525]">
      Clear
    </button>
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
    font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
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