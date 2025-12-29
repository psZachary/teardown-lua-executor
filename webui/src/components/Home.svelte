<script lang="ts">
    import { onMount } from "svelte";
    import {
        Check,
        X,
        Bug,
        Rocket,
        ScrollText,
        FileTerminal,
        CircleX,
    } from "@lucide/svelte";
    export let attached: boolean = false;
    export let build_type: string = "";
    export let script_count: number = 0;
    export let selected_script_index: number = 0;
    export let last_attached_message: string = "Unknown";
    onMount(() => {});
</script>

<div class="flex flex-col flex-1 min-h-0 h-full gap-3">
    <div class="flex flex-row gap-3">
        <div class="bg-[#141414] p-4 grow rounded-sm flex flex-row gap-2">
            {#if attached === true}
                <Check color="#6366f1" />
            {:else}
                <X color="#f43f5e" />
            {/if}

            <span>{attached ? "Attached" : "Not Attached"}</span>
        </div>
        <div class="bg-[#141414] p-4 grow rounded-sm flex flex-row gap-2">
            {#if build_type === "Release"}
                <Rocket />
            {:else}
                <Bug />
            {/if}
            <span>{build_type || "UI Development"}</span>
        </div>
        <div class="bg-[#141414] p-4 grow rounded-sm flex flex-row gap-2">
            <ScrollText />
            <span>Script count: {script_count}</span>
        </div>
    </div>
    <div class="flex flex-row gap-3">
        {#if attached !== true}
            <div class="bg-[#141414] p-4 grow rounded-sm flex flex-row gap-2">
                <CircleX color="#f43f5e"/>
                <span>Attach failure: {last_attached_message}</span>
            </div>
        {/if}
        <div class="bg-[#141414] p-4 grow rounded-sm flex flex-row gap-2">
            <FileTerminal />
            <span>Selected Script Index: {selected_script_index}</span>
        </div>
    </div>
</div>

<style>
</style>
