<template>
    <div class="button">
        <input type="button" :style="{ 'padding': padding + 'em', 'width': width + '%' }" :value="msg">
    </div>
</template>

<script setup>
defineProps({
    msg: String,
    padding: String,
    width: String

})
</script>

<style lang="scss" scoped>
.button {
    input[type="button"] {
        top: 0;
        left: 0;
        font-variant-caps: all-small-caps;
        background: var(--chocolate);
        border: 1px solid var(--chocolate);
        border-radius: 2px;
        box-shadow: 3px 3px 0px var(--divider-light-1);
        transition: all .25s;

        &:hover {
            top: 3px;
            left: 2.5px;
            background: var(--chocolate);
            border: 1px solid var(--chocolate);
            // filter: brightness(1.1);
            box-shadow: 1px 1px 0px var(--divider-light-1);
        }

        &:active {
            top: 4px;
            left: 3px;
            border: 1px solid var(--chocolate);
            background: var(--chocolate);
            box-shadow: 0px 0px 10px 1px var(--divider-light-1);
        }
    }
}
</style>