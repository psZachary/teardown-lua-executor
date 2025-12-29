<script lang="ts">
    import { onMount } from "svelte";
    import { show_success } from '../lib/toast';
    onMount(() => {});
</script>

<div class="flex flex-col">
    <button 
    on:click={() => show_success("Test Toast", 2000) }
    class="grow bg-[#1a1a1a] hover:bg-[#252525] text-gray-300 p-2 font-medium rounded-sm border border-[#252525]"
    >
    Status Test</button>
</div>