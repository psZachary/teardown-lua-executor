<script lang="ts">
  import { onMount } from "svelte";
  import CodeEditor from "./components/CodeEditor.svelte";
  import ScriptList from "./components/ScriptList.svelte";
  import StatusBar from "./components/StatusBar.svelte";
  import Home from "./components/Home.svelte";

  class GameScript {
    index: number;
    path: string;
    has_client: boolean;
    has_server: boolean;
  }
  class GameStructure {
    scripts: Array<GameScript>;
    attached: boolean;
    build_type: string;
  }

  let active_tab: number = 0;
  let game_structure: GameStructure = null;
  let status_message: string = "";
  let status_type: string = "success";
  let status_visible: boolean = false;

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

  function show_status(msg: string, type = "success", duration: number = 2000) {
    status_message = msg;
    status_type = type;
    status_visible = true;
    setTimeout(() => (status_visible = false), duration);
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
        5000
      );
    }
  }

  async function save_file(code: String) {
    // @ts-ignore
    if (window.cpp_save_file) {
      // @ts-ignore
      const result = await cpp_save_file(code);
      show_status(
        result.error,
        result.error !== "Success" ? "error" : "success",
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
</script>

<svelte:head></svelte:head>

<svelte:window on:contextmenu|preventDefault />

<div
  class="bg-[#0a0a0a] shrink-0 fixed inset-0 p-4 flex flex-col text-white select-none"
>
  <div class="flex flex-col" id="header-items">
    <div class="flex gap-3 items-center">
      <div
        class="w-3 h-3 mt-1 {game_structure?.attached
          ? 'bg-indigo-500'
          : 'bg-rose-400'} rounded-full pulse"
      ></div>
      <h1 class="text-2xl font-bold text-white">Teardown Executor</h1>
    </div>
    <h1 class="text-sm">Teardown Executor - {game_structure?.build_type ?? "Web UI Development"} - {game_structure?.attached ? "Attached" : "Not Attached"}</h1>
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
        <CodeEditor
          on_save_file={save_file}
          on_execute={execute_code}
          on_load_file={load_file}
        />
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
    box-shadow: 0 2px 0px #6366f14d;
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
