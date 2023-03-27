<template>
    <a :href="url" class="project__url" target="_blank">
        <div class="content">
            <slot name="title"></slot>
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
@import '@/assets/scss/responsive.scss';

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

.content {
    width: 100%;
    height: 100%;
    padding: .5em;

    @media #{$mobileDownScreen} {
        display: flex;
        flex-direction: column;
        place-content: space-evenly;
    }
}
</style>