<script lang="ts">
  import { onMount } from "svelte";

  import CodeEditor from "./components/CodeEditor.svelte";
  import ScriptList from "./components/ScriptList.svelte";
  import Home from "./components/Home.svelte";
  import Debug from "./components/Debug.svelte";
  import ScriptView from "./components/ScriptView.svelte";
  import { show_toast, show_success, show_error, show_info, show_warning } from "./lib/toast"

  import { Hammer } from "@lucide/svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast"
  
  class GameScript {
    index: number;
    path: string;
    has_client: boolean;
    has_server: boolean;
  }
  class GameStructure {
    scripts: Array<GameScript>;
    attached: boolean;
    attached_message: string;
    build_type: string;
  }

  let active_tab: number = 0;
  let game_structure: GameStructure = null;
  let status_message: string = "";
  let status_type: string = "success";
  let status_visible: boolean = false;
  let last_statusbar_timeout_id: number = 0;
  let selected_script_index: number = 0;
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

  async function execute_code(code: String) {
    if (!code.trim()) {
      show_toast("No code to execute", "error");
      return;
    }
    // @ts-ignore
    if (window.cpp_execute) {
      // @ts-ignore
      const result = await window.cpp_execute(code);
      show_toast(
        result.error,
        result.error !== "Success" ? "error" : "success",
        5000,
      );
    }
  }

  async function save_file(code: String) {
    // @ts-ignore
    if (window.cpp_save_file) {
      // @ts-ignore
      const result = await cpp_save_file(code);
      show_toast(
        result.error === "Success" ? "File saved" : result.error,
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
          show_toast(result.error, "error");
          return null;
        }
        show_toast("File loaded");
        return result.code;
      }
    }
    return null;
  }

  async function update_script_index(index) {
    selected_script_index = index
    // @ts-ignore
    if (window.cpp_update_script_index) {
      // @ts-ignore
      await window.cpp_update_script_index(parseInt(index));
      show_toast(`Selected script index updated: ${index}`, "info");
    }
  }
</script>

<svelte:head></svelte:head>

<svelte:window on:contextmenu|preventDefault />

<SvelteToast></SvelteToast>

<div
  class="bg-[#0a0a0a] shrink-0 fixed inset-0 p-4 flex flex-col text-white select-none"
>
  <div class="flex flex-col" id="header-items">
    <div class="flex gap-2 items-center">
      <span
        class="{game_structure?.attached
          ? 'text-indigo-500'
          : 'text-rose-400'} pulse"><Hammer /></span
      >

      <div class="flex flex-row">
        <h1 class="text-2xl font-bold text-white">Teardown Executor</h1>
      </div>
    </div>
    <h1 class="text-sm">
      Teardown Executor - {game_structure?.build_type ?? "Web UI Development"} -
      {game_structure?.attached ? "Attached" : "Not Attached"}
    </h1>
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
      Script List
    </button>
    <button
      on:click={() => (active_tab = 3)}
      class="tab-btn px-4 py-2 border-b-2 {active_tab === 3
        ? 'border-indigo-500 text-indigo-600'
        : 'border-transparent'}"
    >
      Script View
    </button>
    {#if ["Debug", "", undefined].includes(game_structure?.build_type)}
      <button
        on:click={() => (active_tab = 10)}
        class="tab-btn px-4 py-2 border-b-2 {active_tab === 10
          ? 'border-indigo-500 text-indigo-600'
          : 'border-transparent'}"
      >
        Debug
      </button>
    {/if}
  </div>

  <div class="flex-1 min-h-0">
    {#key active_tab}
      {#if active_tab === 0}
        <Home
          attached={game_structure?.attached}
          build_type={game_structure?.build_type}
          script_count={game_structure?.scripts?.length}
          {selected_script_index}
          last_attached_message={game_structure?.attached_message}
        />
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
      {#if active_tab === 3}
        <ScriptView/>
      {/if}
      {#if active_tab === 10}
        <Debug/>
      {/if}
    {/key}
  </div>
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
