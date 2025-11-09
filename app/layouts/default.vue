<template>
    <div>
        <Header />
        <div class="min-h-screen flex flex-col justify-center items-center px-8">
            <slot />
        </div>
        <Footer />
    </div>
    <Noise />
</template>

<script setup lang="ts">

</script>