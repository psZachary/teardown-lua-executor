<script>
  export let scripts = [];
  export let update_script_index = async (index) => {};
</script>

<div class="flex flex-col flex-1 min-h-0">
  <div class="grid grid-cols-3 p-2 border-b border-gray-700 text-indigo-500">
    <span>Script Name</span>
    <span>Type</span>
    <span class="text-right">Index</span>
  </div>
  
  <div class="overflow-y-auto flex-1">
    {#each scripts as script}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div 
        on:click={() => update_script_index(script.index)}
        class="active:bg-indigo-700 transition duration-25 grid grid-cols-3 p-2 border-b border-gray-700 hover:bg-indigo-500 cursor-pointer">
        <span class="select-text">{script.path}</span>
        <span>{script.has_server && script.has_client ? "Local & Server" : script.has_server ? "Server" : "Local"}</span>
        <span class="text-right">{script.index}</span>
      </div>
    {:else}
      <div class="p-4 text-center text-gray-500">
        No scripts available
      </div>
    {/each}
  </div>
</div>