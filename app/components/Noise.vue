<template>
  <div id="parallax">
    <div data-depth="0.2" class="noise"></div>
  </div>
</template>

<script lang="ts" setup>
/**
 * A component that adds a noise overlay to the entire viewport. (as a background effect)
 * Pattern generator: https://www.fffuel.co/pppixelate/
 * Uses parallax.js (npm package):
 *    - https://matthew.wagerfield.com/parallax/
 *    - https://www.npmjs.com/package/parallax-js
 *    - https://github.com/wagerfield/parallax/
 */
</script>

<style lang="scss">

#parallax {
    position: fixed;
    top: -20vw;
    left: -20vh;
    width: 140vw;
    height: 140vh;
    pointer-events: none;
    overflow: visible;
}

.noise {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/noise.svg');
    opacity: 0.04;
}

</style>