<template>
    <div id="app">
        <Header />
        <div class="min-h-screen flex flex-col justify-center items-center px-8">
            <slot />
        </div>
        <Footer />
        <Noise />
    </div>
</template>

<script setup lang="ts">

</script>