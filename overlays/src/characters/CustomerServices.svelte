<script>
  import { scale } from 'svelte/transition'
</script>

<style>
  video {
    position: fixed;
    height: calc(100vh - 126px);
    top: 0;
    left: 0;
  }
</style>

<!-- svelte-ignore a11y-media-has-caption -->
<video 
  src="/faulty_item.mp4" 
  autoplay 
  in:scale={{ start: 0, duration: 200 }} 
  out:scale={{ start: 0, duration: 200 }}  
/>