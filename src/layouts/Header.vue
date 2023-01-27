<script setup>
import Logo from '../components/items/Logo.vue'
import NavBar from '../components/NavBar.vue'
import AboutMe from '../components/AboutMe.vue'
</script>

<template>
    <header>
        <div class="layout__navbar">
            <Logo>
                <template #picture>
                    <a href="/">
                        <img alt="PrimalProd logo" src="@/assets/logo.svg" width="75" height="75" />
                    </a>
                    <span>Portfolio.</span>
                </template>
            </Logo>
            <NavBar />
        </div>
        <div class="layout__aboutme">
            <Logo>
                <template #picture>
                    <img alt="Avatar" src="../assets/avatar.jpg" width="125" height="125" />
                </template>
            </Logo>
            <AboutMe />
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: column;
    padding-bottom: 8em;
}

.layout__navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
}

.layout__aboutme {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5em;
    margin: 5rem auto 0;
    width: 70%;
}

span {
    font-size: 2rem;
    font-weight: var(--weight-bold);
    margin-left: .2em;
}

img {
    place-content: none;
}
</style>