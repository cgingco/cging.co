<template>
  <div class="font-ui">
    <NuxtLink :to="props.href"
    class="text-xl font-bold"
    >{{ props.name }}</NuxtLink>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  name: string;
  href: string;
}>();

</script>

<style>

</style>