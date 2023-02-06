<template>
    <span class="language__text">
        {{ language }}
    </span>
</template>

<script setup>
defineProps({
    language: {
        type: String
    }
})
</script>

<style lang="scss" scoped>
.language__text {
    box-shadow: 0 0 0 !important;
    font-weight: var(--weight-bold);
    font-variant-caps: all-small-caps;
    font-size: .9em;
    border: none;
}
</style>