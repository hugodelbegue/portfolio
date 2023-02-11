<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <main>
        <RouterView />
    </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

main {
    padding-top: 3em;
    padding-bottom: 15em;

    @media #{$mobileUpScreen} {
        padding-top: 2em;
        padding-bottom: 5em;
    }
}
</style>