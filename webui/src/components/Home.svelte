<script lang="ts">
    import { onMount } from "svelte";
    import StatCard from "./StatCard.svelte";
    import {
        Check,
        X,
        Bug,
        Rocket,
        ScrollText,
        FileTerminal,
        History,
        Info,
    } from "@lucide/svelte";
    export let attached: boolean = false;
    export let build_type: string = "";
    export let build_version: string = null;
    export let script_count: number = 0;
    export let selected_script_index: number = 0;
    export let last_attached_message: string = "Unknown";
    onMount(() => {});
</script>

<div class="flex flex-col flex-1 min-h-0 h-full gap-4 p-4">
    <!-- Status Cards -->
    <div class="flex flex-row gap-3">
        <StatCard
            icon={attached ? Check : X}
            icon_color={attached ? "#6366f1" : "#f43f5e"}
            bg_color={attached ? "bg-indigo-500/20" : "bg-rose-500/20"}
            label="Status"
            value={attached ? "Attached" : "Not Attached"}
        />
        {#if attached === false}
            <StatCard
                icon={Info}
                icon_color={"#f43f5e"}
                bg_color={"bg-rose-500/20"}
                label="Attach Failure"
                value={last_attached_message}
            />
        {/if}
        <StatCard
            icon={build_type === "Release" ? Rocket : Bug}
            label="Build"
            value={build_type || "UI Development"}
        />
        <StatCard
            icon={History}
            label="Version"
            value={build_version || "v0.0.0"}
        />
    </div>
    <div class="flex flex-row gap-3">
        <StatCard
            icon={FileTerminal}
            label="Selected Index"
            value={selected_script_index}
        />
        <StatCard icon={ScrollText} label="Scripts" value={script_count} />
    </div>
    <div class="flex flex-row gap-3">
        <StatCard
            icon={Info}
            label="How does this work?"
            label_style="text-indigo-400 font-medium"
            value_style="text-gray-400"
            value={`The executor injects position-independent shellcode into Teardown that calls loadstring and lua_pcall on the target script's Lua state. Your code is written to remote memory, and a thread is created to execute the shellcode with pointers to the Lua API functions & target script state. Since each script has its own isolated Lua state, selecting a script index determines which environment receives your code. This lets you hot patch any running script, access its globals, override functions, or execute arbitrary Lua without restarting the game.`}
        />
    </div>
</div>

<style>
</style>
