<script setup>
import Logo from '@/components/items/Logo.vue'
import NavBar from '@/components/NavBar.vue'
import AboutMe from '@/components/AboutMe.vue'
</script>

<template>
    <header>
        <div class="layout__navbar">
            <Logo>
                <template #picture>
                    <a href="/" title="Accueil">
                        <img alt="PrimalProd logo" src="@/assets/img/logo.svg" width="50" height="50" />
                    </a>
                    <span>| Portfolio.</span>
                </template>
            </Logo>
            <NavBar />
        </div>
        <Transition name="transition__text" appear>
            <div v-if="$route.name == 'HomeView'" class="layout__aboutme">
                <Logo>
                    <template #picture>
                        <img alt="Avatar" src="@/assets/img/avatar.jpg" width="125" height="125" />
                    </template>
                </Logo>
                <AboutMe />
            </div>
        </Transition>
    </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

header {
    display: flex;
    flex-direction: column;
}

.layout__navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;

    a {
        display: flex;
    }
}

.layout__aboutme {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10em;
    margin: 5.3em auto 7em;
    width: 80%;

    @media #{$desktopScreen} {
        gap: 5em;
    }

    @media #{$tabletScreen} {
        flex-direction: column;
        gap: 2.5em;
    }
}

span {
    font-size: var(--size-navbar);
    font-weight: var(--weight-bold);
    margin-left: .2em;
    color: var(--color-heading);
}

img {
    place-content: none;
}

// Transitions
.transition__text-enter-active,
.transition__text-leave-active {
    transition: 0.1s ease;
}

.transition__text-enter-from,
.transition__text-leave-to {
    transform: translateY(-100px);
    opacity: 0;
}
</style>