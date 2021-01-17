<script>
  import { onMount } from "svelte";
  import { connect } from "./state/socket.js";
  import { display } from './state/display.js'

  import BottomBar from './components/BottomBar.svelte'
  import Carrot from './characters/Carrot.svelte'
  import IndexCoaster from './characters/IndexCoaster.svelte'
  import New from './characters/New.svelte'
  import CustomerServices from './characters/CustomerServices.svelte'

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
</style>

{#if $display.carrot}
  <Carrot />
{/if}

{#if $display.indexCoaster}
  <IndexCoaster />
{/if}

{#if $display.showNew}
  <New />
{/if}

{#if $display.customerServices}
  <CustomerServices />
{/if}

<BottomBar />