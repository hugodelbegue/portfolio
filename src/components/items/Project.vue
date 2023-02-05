<template>
    <a :href="url" class="project__url" target="_blank">
        <slot name="title"></slot>
        <div class="image">
            <slot name="image"></slot>
        </div>
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
    place-content: center;
    width: 100%;

    .image {
        width: 100%;
        height: 100%;
        border-radius: 3px;
        overflow: hidden;
    }
}
</style>