<script>

</script>

<style>
  .carrot {
    position: fixed;
    top: 100px;
    left: 300px;
    transition: all 1s linear ;
    animation: carrot-in 0.4s forwards;
  }
  @keyframes carrot-in {
    from {
      transform: translateX(-300px);
    }
    to {
      transform: translateX(0)
    }
  }

  .carrot img {
    transition: all 1s linear ;
    animation: carrot-spin infinite 4s;
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

<div class="carrot">
  <img id="carrot" src="/carrot.png" alt="carrot" />
</div>