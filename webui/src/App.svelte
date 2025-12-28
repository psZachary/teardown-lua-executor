<script lang="ts">
  import { onMount } from "svelte";
  import CodeEditor from "./components/CodeEditor.svelte";
  import ScriptList from "./components/ScriptList.svelte";
  import StatusBar from "./components/StatusBar.svelte";
  import Home from "./components/Home.svelte";

  let active_tab = 0;
  let game_structure = null;
  let status_message: String = "";
  let status_type: String = "success";
  let status_visible: Boolean = false;
  $: attached = game_structure?.attached ?? false;


  // we are using ts-ignore for all errors derived from usage of webview2 setup as it sets up the js environment before loaded 

  onMount(() => {
    setInterval(async () => {
      // @ts-ignore
      if (window.cpp_get_game_structure) {
        // @ts-ignore
        game_structure = await window.cpp_get_game_structure();
      }
    }, 150);
  });

  function show_status(msg: String, type = "success") {
    status_message = msg;
    status_type = type;
    status_visible = true;
    setTimeout(() => (status_visible = false), 2000);
  }

  async function execute_code(code: String) {
    if (!code.trim()) {
      show_status("No code to execute", "error");
      return;
    }
    // @ts-ignore
    if (window.cpp_execute) {
      // @ts-ignore
      const result = await window.cpp_execute(code);
      show_status(
        result.error,
        result.error !== "Success" ? "error" : "success",
      );
    }
  }

  async function save_file(code: String) {
    // @ts-ignore
    if (window.cpp_save_file) {
      // @ts-ignore 
      const result = await cpp_save_file(code)
      show_status(
        result.error, 
        result.error !== "Success" ? "error" : "success"
      );
    }
  }

  async function load_file() {
    // @ts-ignore
    if (window.cpp_load_file) {
      // @ts-ignore
      const result = await window.cpp_load_file();
      if (result) {
        if (result.error !== "Success") {
          show_status(result.error, "error");
          return null;
        }
        show_status("File loaded");
        return result.code;
      }
    }
    return null;
  }

  async function update_script_index(index) {
    // @ts-ignore
    if (window.cpp_update_script_index) {
      // @ts-ignore
      await window.cpp_update_script_index(parseInt(index));
      show_status(`Selected script index updated: ${index}`, "info");
    }
  }

  function save_data() {
    // your save logic here
    console.log('saving...');
  }

  function handle_keydown(e) {
    if (e.ctrlKey && e.key === 's') {
          e.preventDefault();
          save_data();
    }
  }

</script>

<svelte:head>

</svelte:head>

<svelte:window on:contextmenu|preventDefault />

<div
  class="bg-[#0a0a0a] shrink-0 fixed inset-0 p-4 flex flex-col text-white select-none"
>
  <div class="flex items-center gap-3 mb-4">
    <div
      class="w-3 h-3 {attached
        ? 'bg-indigo-500'
        : 'bg-rose-400'} rounded-full pulse"
    ></div>
    <h1 class="text-xl font-bold text-white">Teardown Executor</h1>
  </div>

  <div class="flex border-b shrink-0 pb-2 border-gray-200/25 mb-2">
        <button
      on:click={() => (active_tab = 0)}
      class="tab-btn px-4 py-2 border-b-2 {active_tab === 0
        ? 'border-indigo-500 text-indigo-600'
        : 'border-transparent'}"
    >
      Home
    </button>
    <button
      on:click={() => (active_tab = 1)}
      class="tab-btn px-4 py-2 border-b-2 {active_tab === 1
        ? 'border-indigo-500 text-indigo-600'
        : 'border-transparent'}"
    >
      Executor
    </button>
    <button
      on:click={() => (active_tab = 2)}
      class="tab-btn px-4 py-2 border-b-2 {active_tab === 2
        ? 'border-indigo-500 text-indigo-600'
        : 'border-transparent'}"
    >
      Script View
    </button>
  </div>

  <div class="flex-1 min-h-0">
    {#key active_tab}
      {#if active_tab === 0}
        <Home></Home>
      {/if}
      {#if active_tab === 1}
        <CodeEditor on_save_file={save_file} on_execute={execute_code} on_load_file={load_file} />
      {/if}
      {#if active_tab === 2}
        <ScriptList
          scripts={game_structure?.scripts ?? []}
          {update_script_index}
        />
      {/if}
    {/key}
  </div>

  <StatusBar
    message={status_message}
    type={status_type}
    visible={status_visible}
  />
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  :global(button) {
    transition: all 0.2s ease;
  }

  :global(button:hover) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px #6366f14d;
  }

  :global(button:active) {
    transform: translateY(0);
  }

  :global(::-webkit-scrollbar) {
    width: 6px;
  }

  :global(::-webkit-scrollbar-track) {
    background: transparent;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #333;
    border-radius: 3px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: #555;
  }
  
</style>