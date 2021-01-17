<script>
  import { scale, fly } from 'svelte/transition'
</script>

<style>
  img {
    position: fixed;
    top: 200px;
    left: 100px;
    transition: all 1s;
    transform: rotate(var(--rotate)) translate(var(--pos-x), var(--pos-y));
  }
</style>

{#each [...Array(100).keys()] as i}
  <img 
    src="/new.png" 
    alt="new" 
    in:scale={{ start: 0, delay: i * 150 }}
    out:fly={{ x: -1000 }} 
    style={`
      --rotate: ${Math.random() * 360}deg;
      --pos-x: ${Math.random() * 100}%;
      --pos-y: ${Math.random() * 100}%;
    `}
  />
{/each} 