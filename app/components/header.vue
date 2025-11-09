<template>
  <div class="absolute top-4 right-4">
    <UColorModeButton
    class="text-xl"
    :class="[
      colorMode.value === 'dark' ? 'text-light bg-dark hover:bg-light hover:text-dark' : 'text-dark bg-light hover:bg-dark hover:text-light'
    ]"/>
  </div>
</template>

<script lang="ts" setup>
  const colorMode = useColorMode()
</script>

<style>

</style>