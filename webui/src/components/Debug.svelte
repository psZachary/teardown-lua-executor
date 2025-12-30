<script lang="ts">
    import { onMount } from "svelte";
    import { show_success } from '../lib/toast';
    import Button from "./Button.svelte"
    onMount(() => {});
</script>

<div class="flex flex-col">
    <Button 
    on:click={() => show_success("Test Toast", 2000) }>
    Status Test</Button>
</div>