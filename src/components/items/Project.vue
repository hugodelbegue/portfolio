<template>
    <a :href="url" class="project__url" target="_blank">
        <slot name="title"></slot>
        <slot name="image"></slot>
        <slot name="language"></slot>
    </a>
</template>

<script setup>
defineProps({
    url: String
})
</script>

<style lang="scss" scoped>
a {
    color: inherit;
}

.project__url {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: space-between;
    width: 100%;
}
</style>