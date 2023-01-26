<template>
    <div class="skill">
        <slot name="icon"></slot>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.skill {
    display: flex;
    place-items: center;
    place-content: center;
    background-color: transparent;
    border: 3px dashed var(--chocolate);
    border-radius: 25%;
    width: 250px;
    height: 250px;
}
</style>