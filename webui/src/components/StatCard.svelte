<script lang="ts">
    import type { Component } from "svelte";

    export let icon: Component;
    export let icon_color: string = "#6366f1";
    export let bg_color: string = "bg-indigo-500/20";
    export let label: string;
    export let label_style: string = "text-gray-500";
    export let value: string | number;
    export let value_style: string = "text-white";
    let class_name: string = "";
    export { class_name as class };
</script>

<div
    class="grow bg-linear-to-br from-[#1a1a1a] to-[#141414] p-5 rounded-lg border border-gray-800 flex items-start gap-4 {class_name}"
>
    <div class="p-2 rounded-full {bg_color} shrink-0">
        <svelte:component this={icon} color={icon_color} size={20} />
    </div>
    <div class="flex flex-col">
        <span class="text-sm uppercase tracking-wide {label_style}"
            >{label}</span
        >
        <span
            class="text-base leading-relaxed whitespace-pre-line {value_style}"
            >{value}</span
        >
    </div>
</div>
