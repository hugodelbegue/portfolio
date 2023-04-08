<template>
    <div class="link" :style="{ 'color': color }">
        <i>
            <slot name="icon"></slot>
        </i>
        <slot name="title"></slot>
    </div>
</template>

<script setup>
defineProps({
    color: String
})
</script>

<style lang="scss" scoped>
.link {
    display: flex;
    place-items: flex-start;
}
</style>