<script lang="ts">
    export let label: string = "";
    export let disabled: boolean = false;
    export let variant: "default" | "primary" | "danger" = "default";
    let class_name: string = "";
    export { class_name as class };
    
    const variants = {
        default: "bg-[#1a1a1a] hover:bg-[#252525] text-gray-300 border-[#252525]",
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-700",
        danger: "bg-rose-600 hover:bg-rose-700 text-white border-rose-700"
    };
</script>

<button
    {disabled}
    on:click
    class="font-medium py-2 px-4 rounded-sm border transition-colors duration-200 {variants[variant]} {disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} {class_name}"
>
    {#if label}
        {label}
    {:else}
        <slot />
    {/if}
</button>