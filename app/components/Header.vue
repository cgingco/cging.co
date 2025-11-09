<template>
  <div class="absolute top-4 right-4">
    <UColorModeButton
    class="text-3xl lg:text-4xl hover:cursor-pointer"
    :class="[
      colorMode.value === 'dark' ? 'text-light bg-dark hover:bg-light hover:text-dark' : 'text-dark bg-light hover:bg-dark hover:text-light'
    ]"/>
  </div>
</template>

<script lang="ts" setup>
/**
 * Header
 * 
 * This is actually "the footer" - it appears at the top of the page.
 * It ONLY contains the color mode toggle button.
 */

const colorMode = useColorMode()

</script>

<style>

</style>