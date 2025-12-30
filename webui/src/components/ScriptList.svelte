<script lang="ts">
  import type { GameStructure, GameScript } from "../lib/backend";
  import { X } from "@lucide/svelte";
  import StatCard from "./StatCard.svelte";
  
  export let game_structure: GameStructure = null;
  export let update_script_index = async (index: number) => {};
  let class_name = "";
  export { class_name as class };
  
  interface ViewReady {
    is_ready: boolean;
    error: string;
  }
  
  function get_ready_state(gs: GameStructure): ViewReady {
    if (!gs?.attached) return { is_ready: false, error: "Not Attached" };
    if (!gs?.scripts?.length) return { is_ready: false, error: "No scripts loaded" };
    return { is_ready: true, error: "" };
  }
  
  $: is_ready_for_view = get_ready_state(game_structure);
  $: scripts = game_structure?.scripts ?? [];
</script>

<div class="flex flex-col min-h-0 h-full {class_name}">
  {#if is_ready_for_view.is_ready}
    <div class="grid grid-cols-[2fr_1fr_4rem] p-2 border-b border-gray-700 text-indigo-500 font-medium shrink-0">
      <span>Path</span>
      <span>Type</span>
      <span class="text-right">Index</span>
    </div>
    <div class="overflow-y-auto flex-1 min-h-0">
      {#each scripts as script}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          on:click={() => update_script_index(script.index)}
          class="active:bg-indigo-700 transition duration-25 grid grid-cols-[2fr_1fr_4rem] p-2 border-b border-gray-700 hover:bg-indigo-500 cursor-pointer"
        >
          <span class="select-text truncate">{script.path}</span>
          <span>
            {script.has_server && script.has_client
              ? "Local & Server"
              : script.has_server
                ? "Server"
                : "Local"}
          </span>
          <span class="text-right">{script.index}</span>
        </div>
      {/each}
    </div>
  {:else}
    <div class="flex flex-row gap-3 p-4">
      <StatCard
        icon={X}
        icon_color={"#f43f5e"}
        bg_color={"bg-rose-500/20"}
        label="Status"
        value={is_ready_for_view.error}
      />
    </div>
  {/if}
</div>