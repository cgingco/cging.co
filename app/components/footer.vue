<template>
  <div class="absolute bottom-4 w-full flex justify-center">
    <NuxtLink to="/">
      <Logo :class="[ colorMode.value === 'dark' ? 'text-light' : 'text-dark' ]" />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import Logo from '@/assets/image/logo.svg'

const colorMode = useColorMode()

</script>

<style>

</style>