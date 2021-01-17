<script>
  import { fly } from 'svelte/transition'
  import { display } from '../state/display.js'

  const inOut = {
    y: 50,
    delay: 400,
  }
</script>

<style>
  section {
    padding: 20px;
    background-image: url("/background.png");
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 86px;
    transition: all 0.5s ease-in-out;
  }
  h1 {
    font-family: 'Raleway', sans-serif;
    color: darkgoldenrod;
    font-size: 3em;
    padding: 0;
    margin: 10px 0 20px 0;
    z-index: 1000;
    transition: all 0.5s ease-in-out;
  }
  #pocket {
    position: absolute;
    z-index: -1;
    bottom: 10px;
    left: 120px;
    width: 200px;
  }
  #copyright {
    position: absolute;
    right: 40px;
    bottom: 10px;
  }

  section.slide-up {
    height: 100vh;
  }
  section.slide-up h1 {
    padding-top: 35%;
  }
</style>

<section class:slide-up={$display.slideUp}>
  <h1>Catalogued.</h1>
  {#if !$display.slideUp}
    <img 
      src="/pocket.png" 
      alt="pocket" 
      id="pocket" 
      in:fly={inOut} 
      out:fly={inOut} 
    />
    <img 
      src="/copyright.png" 
      alt="copyright" 
      id="copyright" 
      in:fly={inOut} 
      out:fly={inOut}  
    />
  {/if}
</section>