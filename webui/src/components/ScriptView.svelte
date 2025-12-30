<script lang="ts">
    import { Check, FileTerminal, X } from "@lucide/svelte";
    import type { GameStructure } from "../lib/game";
    import Toggle from "./Toggle.svelte";
    import { show_toast } from "../lib/toast";
    import StatCard from "./StatCard.svelte";
    import Button from "./Button.svelte";

    export let use_server_core: boolean = false;
    export let selected_script_index: number = 0;
    export let game_structure: GameStructure = null;
    export let on_open_file = async (file_name: string) => null;

    interface ViewReady {
        is_ready: boolean;
        error: string;
    }

    function get_ready_state(gs: GameStructure, index: number): ViewReady {
        if (!gs?.attached) return { is_ready: false, error: "Not Attached" };
        if (!gs?.scripts?.length)
            return { is_ready: false, error: "No scripts loaded" };
        if (index < 0 || index >= gs.scripts.length)
            return { is_ready: false, error: "Invalid script index" };
        if (!gs.scripts[index]?.path)
            return { is_ready: false, error: "Selected script path invalid" };
        return { is_ready: true, error: "" };
    }

    $: is_ready_for_view = get_ready_state(
        game_structure,
        selected_script_index,
    );

    $: selected_script = game_structure?.scripts?.[selected_script_index];
    async function open_file() {
        await on_open_file(selected_script?.path ?? "None");
    }
</script>

<div class="flex flex-col flex-1 min-h-0 h-full gap-4 p-4">
    {#if is_ready_for_view.is_ready}
        <div class="flex flex-row gap-3">
            <StatCard
                icon={FileTerminal}
                label="Selected Index"
                value={selected_script_index}
            />
        </div>
        <div class="flex flex-row gap-3">
            <StatCard
                icon={FileTerminal}
                label="Selected Path"
                value={selected_script?.path ?? "None"}
            />
            <Button on:click={open_file}>View Source</Button>
        </div>
        <div class="flex flex-row gap-3">
            <StatCard
                icon={selected_script?.has_client ? Check : X}
                icon_color={selected_script?.has_client ? "#6366f1" : "#f43f5e"}
                label="Has Client Core"
                bg_color={selected_script?.has_client
                    ? "bg-indigo-500/20"
                    : "bg-rose-500/20"}
                value={selected_script?.has_client ? "Yes" : "No"}
            />
            <StatCard
                icon={selected_script?.has_server ? Check : X}
                icon_color={selected_script?.has_server ? "#6366f1" : "#f43f5e"}
                label="Has Server Core"
                bg_color={selected_script?.has_server
                    ? "bg-indigo-500/20"
                    : "bg-rose-500/20"}
                value={selected_script?.has_server ? "Yes" : "No"}
            />
            <Toggle
                disabled={!selected_script?.has_server}
                description="For advanced usage, do not turn on unless you are the host."
                label="Use Server Core For Execution"
                bind:checked={use_server_core}
            />
        </div>
    {:else}
        <div class="flex flex-row gap-3">
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
