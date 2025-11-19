<template>
  <UBreadcrumb :items="breadcrumbs" />
</template>

<script lang="ts" setup>
  import type { BreadcrumbItem } from '@nuxt/ui'

  const { currentRoute } = useRouter();

  const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const items: BreadcrumbItem[] = [
      { label: 'Home', to: '/' }
    ];

    if (currentRoute.value.path !== '/') {
      const pathSegments = currentRoute.value.path.split('/').filter(Boolean);
      let accumulatedPath = '';

      pathSegments.forEach((segment, index) => {
        accumulatedPath += `/${segment}`;
        items.push({
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
          to: accumulatedPath
        });
      });
    }

    return items;
  });
  
</script>

<style>

</style>