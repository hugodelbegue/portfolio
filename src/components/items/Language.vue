<template>
    <span class="language">
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
.language {
    background: var(--color-background-language);
    padding: .1em .5em;
    box-shadow: 0 0 0 !important;
    border-radius: 5px;
    font-weight: var(--weight-bold);
    font-variant-caps: all-small-caps;
    color: var(--color-text-language);
    border: none;
}
</style>