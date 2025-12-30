<script lang="ts">
    export let checked: boolean = false;
    export let label: string = "";
    export let label_class_name: string = "";
    export let description: string = "";
    export let description_class_name: string = "";
    export let disabled: boolean = false;
    export let class_name: string = "";
</script>

<div
    class="bg-linear-to-br from-[#1a1a1a] to-[#141414] p-4 rounded-lg border border-gray-800 flex items-center justify-between gap-4 {class_name}"
>
    <div class="flex flex-col gap-1">
        {#if label}
            <span class="font-medium {label_class_name || 'text-white'}"
                >{label}</span
            >
        {/if}
        {#if description}
            <span class="text-sm {description_class_name || 'text-gray-500'}"
                >{description}</span
            >
        {/if}
    </div>
    <button
        title={label}
        type="button"
        role="switch"
        aria-checked={checked}
        {disabled}
        on:click={() => !disabled && (checked = !checked)}
        class="relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 {checked
            ? 'bg-indigo-500'
            : 'bg-gray-600'} {disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer'}"
    >
        <span
            class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full
            transition-transform duration-200 {checked
                ? 'translate-x-5'
                : 'translate-x-0'}"
        />
    </button>
</div>
