<script>
  import { onMount } from "svelte";
  import { connect } from "./socket.js";
  import { display } from './display.js'

  onMount(() => {
    connect()
  })
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: transparent;
  }
  section {
    margin-top:100px;
    padding: 20px;
    background-color: plum;
    position: fixed;
    bottom: 0;
    width: 100vw;
  }
  h1 {
    font-family: 'Raleway', sans-serif;
    color: darkgoldenrod;
    font-size: 3em;
  }
  #carrot {
    transition: all 1s linear ;
    animation: carrot-spin infinite 0.4s;
  }
  @keyframes carrot-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

<section>
  <h1>Catalogued.</h1>
  {#if $display.carrot}
    <img id="carrot" src="/carrot.png" />
  {/if}
</section>