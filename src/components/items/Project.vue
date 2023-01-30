<template>
    <a :href="url" class="project">
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

.project {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-color: transparent;
    width: 300px;
    height: 300px;
    transition: transform .15s;

    .image {
        width: 100%;
        height: 100%;
        box-shadow: 0 0 10px var(--color-border-1);
        border-radius: 10px;
        overflow: hidden;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
}
</style>