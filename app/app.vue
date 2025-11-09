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

<style lang="scss">

body { /* light mode */
  background-color: var(--color-light);
  color: var(--color-dark);
  transition: color 0.3s, background-color 0.3s;

  a, p, h1, h2, h3, h4, h5, h6 {
    transition: color 0.3s, background-color 0.3s;
  }

  a:hover:not(.ignore-hover-effect) {
    color: var(--color-accent-dark);
  }

  .invert-text {
    color: var(--color-light);
  }
  .invert-bg {
    background-color: var(--color-dark);
  }
  .svg-color-auto {
    stroke: var(--color-dark);
  }
}

.dark-mode body {
  background-color: var(--color-dark);
  color: var(--color-light);

  a:hover:not(.ignore-hover-effect) {
    color: var(--color-accent-light);
  }

  &.invert-text {
    color: var(--color-dark);
  }

  &.invert-bg {
    background-color: var(--color-light);
  }

  & .svg-color-auto {
    stroke: var(--color-light);
  }
}

</style>