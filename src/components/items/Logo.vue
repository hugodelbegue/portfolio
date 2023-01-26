<template>
    <div class="logo">
        <a href="/">
            <img alt="PrimalProd logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </a>
        <span>Portfolio.</span>
    </div>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    place-items: flex-end;
    // align-items: flex-end;

    span {
        font-size: 2rem;
        font-weight: var(--weight-bold);
        margin-bottom: .5em;
        margin-left: 1em;
    }
}
</style>