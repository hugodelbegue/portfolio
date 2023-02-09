<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <main :class="bottom">
        <RouterView />
    </main>
</template>

<script>
export default {
    computed: {
        bottom() {
            return {
                bottomSize: this.$route.name == 'ContactView'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

main {
    padding-top: 3em;
    padding-bottom: 15em;

    @media #{$mobileMediumScreen} {
        padding-bottom: 5em;
    }
}

.bottomSize {
    padding-bottom: 15em;
}
</style>