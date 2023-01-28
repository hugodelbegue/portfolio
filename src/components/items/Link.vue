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
    align-items: center;
    border-radius: 5px;
}
</style>