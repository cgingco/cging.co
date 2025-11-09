<template>
  <div class="noise"></div>
</template>

<script lang="ts" setup>
/**
 * A component that adds a noise overlay to the entire viewport. (as a background effect)
 * 
 * Pattern generator: https://www.fffuel.co/pppixelate/
 */
</script>

<style lang="scss">

.noise {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    background: url('/images/noise.svg');
    opacity: 0.05;
    z-index: 0;
}

</style>