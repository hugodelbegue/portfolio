<template>
    <div class="logo">
        <a href="/">
            <img alt="PrimalProd logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </a>
    </div>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    place-items: center;
    place-content: center;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 5px var(--divider-light-2));
}
</style>