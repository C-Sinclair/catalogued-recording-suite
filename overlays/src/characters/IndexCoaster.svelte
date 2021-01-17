<script>
  import { onMount } from "svelte";

  let show2;
  let show3;

  onMount(() => {
    let timeout = setTimeout(() => {
      show2 = true;
      timeout = setTimeout(() => {
        show3 = true;
        timeout = undefined;
      }, 1000)
    }, 1000)
    return () => {
      timeout && clearTimeout(timeout)
    }
  })
</script>

<style>
  section {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
  }
  div {
    display: flex;
    flex-direction: column;
    transition: all 7s linear;
    animation: upward-1 7s forwards linear;
  }
  .two {
    animation-name: upward-2;
  }
  .three {
    animation-name: upward-3;
  }
  @keyframes upward-1 {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-2000px);
    }
  }
  @keyframes upward-2 {
    from {
      transform: translate(0, 0) rotate(10deg);
    }
    to {
      transform: translate(120px, -2000px) rotate(10deg);
    }
  }
  @keyframes upward-3 {
    from {
      transform: translate(400px, 0) rotate(-20deg);
    }
    to {
      transform: translate(-120px, -2000px) rotate(-20deg);
    }
  }
</style>

<section>
  <div>
    <img src="/index1.png" class="index1" alt="index"/>
    <img src="/index2.png" class="index2" alt="index"/>
    <img src="/index3.png" class="index3" alt="index" />
  </div>
  {#if show2}
    <div class="two">
      <img src="/index2.png" class="index2" alt="index"/>
      <img src="/index3.png" class="index3" alt="index" />
      <img src="/index1.png" class="index1" alt="index"/>
    </div>
  {/if}
  {#if show3}
    <div class="three">
      <img src="/index3.png" class="index3" alt="index" />
      <img src="/index1.png" class="index1" alt="index"/>
      <img src="/index2.png" class="index2" alt="index"/>
    </div>
  {/if}
</section>