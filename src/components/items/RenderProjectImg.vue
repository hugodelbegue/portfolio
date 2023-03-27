<template>
    <div class="image">
        <img :src="src" :alt="'photo du project ' + alt" :title="title">
    </div>
</template>

<script setup>
defineProps({
    src: String,
    alt: String,
    title: String
})
</script>

<style lang="scss" scoped>
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