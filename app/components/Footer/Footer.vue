<template>
  <div class="absolute bottom-4 w-full flex justify-center items-center gap-8 transition-all-duration-300">
    <FooterItem
      v-for="(item, index) in items.slice(0, items.length / 2)"
      :key="index"
      :name="item.name"
      :href="item.href"
    />
    <NuxtLink to="/" class="ignore-hover-effect">
      <Logo class="svg-color-auto" />
    </NuxtLink>
    <FooterItem
      v-for="(item, index) in items.slice(items.length / 2)"
      :key="index"
      :name="item.name"
      :href="item.href"
    />
  </div>
</template>

<script lang="ts" setup>
/**
 * Footer
 * 
 * This is actually "the header" - it appears at the bottom of the page.
 */

import Logo from '@/assets/images/logo.svg'

const items = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

</script>

<style>

</style>