<template>
    <div class="button">
        <input type="button" value="Envoyer">
    </div>
</template>

<script setup>
defineProps({
    msg: {
        type: String
    }
})
</script>

<style lang="scss" scoped>
.button {
    input[type="button"] {
        top: 0;
        left: 0;
        padding: 1em;
        font-variant-caps: all-small-caps;
        box-shadow: 3px 3px 0px transparentize(black, .55);
        transition: all .25s;

        &:hover {
            top: 3px;
            left: 2.5px;
            filter: brightness(.9);
            box-shadow: 1px 1px 0px transparentize(black, .55);
        }

        &:focus,
        &:focus-visible {
            top: 4px;
            left: 3px;
            background: var(--chocolate);
            box-shadow: 0px 0px 10px 1px transparentize(black, .45);
        }
    }
}
</style>