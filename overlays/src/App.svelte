<script>
  import { onMount } from "svelte";
  import { connect } from "./socket.js";
  import { display } from './display.js'
  import Carrot from './Carrot.svelte'

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
</style>

{#if $display.carrot}
  <Carrot />
{/if}

<section>
  <h1>Catalogued.</h1>
</section>