<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">

useHeadSafe({
  title: 'Christian Gingco',
  meta: [
    { name: 'description', content: 'Personal website of Christian Gingco' }
  ]
})

</script>

<style lang="css">

body {
  background-color: var(--color-light);
  color: var(--color-dark);
  text-rendering: geometricPrecision;
}

body .invert-text {
  color: var(--color-light);
}

body .invert-bg {
  background-color: var(--color-dark);
}

.dark-mode body {
  background-color: var(--color-dark);
  color: var(--color-light);
}

.dark-mode body .invert-text {
  color: var(--color-dark);
}

.dark-mode body .invert-bg {
  background-color: var(--color-light);
}

</style>