<template>
    <div class="logo">
        <slot name="picture"></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    place-items: center;
    height: auto;
    filter: drop-shadow(0 0 5px var(--color-border-2));
}
</style>