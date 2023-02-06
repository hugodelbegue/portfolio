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
    place-content: space-between;
    width: 100%;

    .image {
        width: 100%;
        max-height: 190px;
        height: 100%;
        border-radius: 3px;
        overflow: hidden;
        border-bottom: 2px solid var(--color-border-1);
        border-top: 2px solid var(--color-border-1);
    }
}
</style>