<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <main :class="padding">
        <RouterView />
    </main>
</template>

<script>
export default {
    computed: {
        padding() {
            return {
                paddingTop: this.$route.name == 'ContactView'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

main {
    padding-top: 3em;
    padding-bottom: 10em;

    @media #{$mobileUpScreen} {
        padding-top: 2em;
        padding-bottom: 5em;
    }
}

.paddingTop {
    padding-top: 5em;
}
</style>