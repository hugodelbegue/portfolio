<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <main :class="showPaint">
        <RouterView />
    </main>
</template>

<script>
export default {
    computed: {
        showPaint() {
            return {
                paint: this.$route.name == 'HomeView'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    padding-top: 3em;
    padding-bottom: 10em;
}

.paint {
    background-image: url(@/assets/img/designs/world.svg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>