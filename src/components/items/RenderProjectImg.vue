<template>
    <div class="image">
        <div ref="load" class="loading loading__project"></div>
        <img :src="src" :alt="'photo du project ' + alt" :title="title" @load="componentLoading">
    </div>
</template>

<script setup>
defineProps({
    src: String,
    alt: String,
    title: String
})
</script>

<script>
export default {
    computed: {
        componentLoading() {
            const { load } = this.$refs
            load.remove();
        }
    }
}
</script>

<style lang="scss" scoped>
.loading__project {
    position: relative;
    z-index: 1;
    background: var(--color-background-project);
    width: 100%;
    height: 100%;

    &::before {
        width: 40px;
        height: 40px;
        border-width: 4px;
    }

    &::after {
        width: 40px;
        height: 40px;
        border-width: 4px;
    }
}

.image {
    width: 100%;
    max-height: 220px;
    height: 100%;
    border-radius: 3px;
    overflow: hidden;
    border-bottom: 2px solid var(--color-border-1);
    border-top: 2px solid var(--color-border-1);

    img {
        width: 100%;
        height: 100%;
    }
}
</style>