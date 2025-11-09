<template>
  <div class="absolute top-4 right-4">
    <UColorModeButton :class="[
      colorMode.value === 'dark' ? 'text-light hover:bg-light hover:text-dark' : 'text-dark hover:bg-dark hover:text-light'
    ]"/>
  </div>
</template>

<script lang="ts" setup>
  const colorMode = useColorMode()
</script>

<style>

</style>