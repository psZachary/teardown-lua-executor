<script>
  export let message = "";
  export let type = "success";
  export let visible = false;
  
  $: color_class = type === "error" ? 'text-red-400' : type === "success" ? 'text-green-400' : 'text-blue-600';
</script>

<div class="status mt-2 text-center text-sm {color_class} {visible ? 'opacity-100' : 'opacity-0'}">
  {message}
</div>

<style>
  .status {
    transition: all 0.3s ease;
  }
</style>