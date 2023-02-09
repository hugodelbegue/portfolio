<template>
    <div class="button">
        <input :type="type" :style="{ 'padding': padding + 'em', 'width': width + '%' }" :value="msg">
    </div>
</template>

<script setup>
defineProps({
    type: String,
    msg: String,
    padding: String,
    width: String
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
                top: 3px;
                left: 2.5px;
                background: var(--color-button-hover);
                border: 1px solid var(--color-button-hover);
                box-shadow: 1px 1px 0px var(--color-border-1);
            }
        }

        &:active {
            top: 4px;
            left: 3px;
            border: 1px solid var(--color-button-active);
            background: var(--color-button-active);
            box-shadow: 0px 0px 10px 1px var(--color-border-1);
        }

        @media #{$tabletScreen} {
            font-size: 1em;
        }
    }
}
</style>