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
                    <a href="/" title="Accueil">
                        <img alt="PrimalProd logo" src="@/assets/logo.svg" width="75" height="75" />
                    </a>
                    <span>Portfolio.</span>
                </template>
            </Logo>
            <NavBar />
        </div>
        <div v-if="$route.name == 'HomeView'" class="layout__aboutme">
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
@import '../assets/scss/responsive.scss';

header {
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;
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
    gap: 10em;
    margin: 5.3em auto 7em;
    width: 70%;

    @media #{$desktopScreen} {
        gap: 5em;
    }

    @media #{$tabletScreen} {
        flex-direction: column;
        gap: 1em;
    }
}

span {
    font-size: 2.2em;
    font-weight: var(--weight-bold);
    margin-left: .2em;
    color: var(--color-heading);
}

img {
    place-content: none;
}
</style>