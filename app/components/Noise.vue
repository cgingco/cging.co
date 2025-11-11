<template>
  <div id="parallax">
    <!-- <div data-depth="0.2" class="noise"></div> -->
    <div data-depth="0.2" class="noise noise1"></div>
    <div data-depth="0.2" class="noise noise2 hidden!"></div>
    <div data-depth="0.2" class="noise noise3 hidden!"></div>
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

onMounted(async () => {
  // var scene = document.getElementById('parallax');
  // var parallaxInstance = new Parallax(scene);

// if (import.meta.client) {
  // Dynamically update the below to work for any for a const 'n'umber of noise layers
  const noiseLayers = document.querySelectorAll('.noise');
  let index = 1;
  while (true) {
    const currentLayer = document.querySelector(`.noise${index}`);
    if (!currentLayer) break;
    noiseLayers.forEach(layer => {
      layer.classList.add('hidden!');
    });
    currentLayer.classList.remove('hidden!');
    index = (index + 1 > noiseLayers.length) ? 1 : index + 1;
    await new Promise(resolve => setTimeout(resolve, 500)); // 1 seconds
  }
// }
});

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
    opacity: 0.015;
}

.noise1 {
  background: url('/images/noise1.svg');
}

.noise2 {
  background: url('/images/noise2.svg');
}

.noise3 {
  background: url('/images/noise3.svg');
}

</style>