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
    background: var(--sunglow);
    padding: .1em .5em;
    box-shadow: 0 0 5px;
    border-radius: 5px;
    font-weight: var(--weight-bold);
    font-variant-caps: all-small-caps;
}
</style>