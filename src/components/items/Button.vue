<template>
    <div class="button">
        <input :type="type" :style="{ 'padding': padding + 'em', 'width': width + '%' }" :value="msg" :disabled="disabled">
    </div>
</template>

<script setup>
defineProps({
    type: String,
    msg: String,
    padding: String,
    width: String,
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.button {
    position: relative;

    input[type="button"],
    input[type="submit"] {
        position: relative;
        top: 0;
        left: 0;
        color: var(--black);
        font-variant-caps: all-small-caps;
        font-weight: var(--weight-bold);
        background: var(--color-button);
        border: 1px solid var(--color-button-border);
        border-radius: 2px;
        box-shadow: 3px 3px 0px var(--color-border-1);
        transition: all .25s;
        cursor: pointer;

        @media #{$desktopDownScreen} {
            &:hover {
                top: 4px;
                left: 3px;
                background: var(--color-button-hover);
                border: 1px solid var(--color-button-border);
                box-shadow: 0px 0px 0px var(--color-border-1);
            }
        }

        &:active {
            top: 4px;
            left: 3px;
            background: var(--color-button-active);
            border: 1px solid var(--color-button-border);
            box-shadow: 0px 0px 10px 1px var(--color-border-1);
        }

        @media #{$tabletScreen} {
            font-size: 1em;
        }
    }

    input[type="button"]:disabled,
    input[type="submit"]:disabled {
        cursor: auto !important;
        pointer-events: none;
        opacity: .2;
    }
}
</style>