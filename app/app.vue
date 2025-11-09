<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">

import Parallax from 'parallax-js';

useHeadSafe({
  title: 'Christian Gingco',
  meta: [
    { name: 'description', content: 'Personal website of Christian Gingco' }
  ]
})

// Initialize Parallax (see components/noise.vue)
onMounted(() => {
  var scene = document.getElementById('parallax');
  var parallaxInstance = new Parallax(scene);
});

</script>

<style lang="scss">

// Page transition styling START

.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
// Page transition styling END

// Layout transition styling START

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

// Layout transition styling END

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
    color: var(--color-dark);
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
    color: var(--color-light);
  }
}

</style>