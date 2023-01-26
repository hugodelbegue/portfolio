<template>
    <div class="link">
        <i>
            <slot name="icon"></slot>
        </i>
        <slot name="title"></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.link {
    display: flex;
    align-items: center;
    border-radius: 5px;
}
</style>