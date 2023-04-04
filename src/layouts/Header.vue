<script setup>
import Logo from '@/components/items/Logo.vue'
import SwitchButton from '@/components/items/SwitchButton.vue'
import NavBar from '@/components/NavBar.vue'
import AboutMe from '@/components/AboutMe.vue'
</script>

<template>
    <header>
        <div class="layout__navbar">
            <Logo>
                <template #picture>
                    <a href="/" title="Accueil">
                        <img :class="classShadow" alt="PrimalProd logo" src="@/assets/img/logo.svg" width="40"
                            height="40" />
                    </a>
                    <div class="layout__switch">
                        <SwitchButton />
                        <span class="indic">| Thème.</span>
                    </div>
                </template>
            </Logo>
            <NavBar />
        </div>
        <Transition name="transition__text" appear>
            <div v-if="$route.name == 'HomeView'" class="layout__aboutme">
                <Logo class="avatar">
                    <template #picture>
                        <img class="avatar__img" alt="Avatar" src="@/assets/img/avatar.svg" />
                    </template>
                </Logo>
                <AboutMe />
            </div>
        </Transition>
    </header>
</template>

<script>
export default {
    computed: {
        classShadow() {
            return {
                important__shadow: this.$route.name == 'ProjectView',
            }
        }
    }
}
</script>

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
    padding-top: 1.4em;
    padding-left: 1em;
    padding-right: 1em;

    @media #{$tabletScreen} {
        padding-top: 1em;
    }

    a {
        display: flex;
    }

    img {
        filter: drop-shadow(0 0 1px var(--indigo));
    }
}

.layout__aboutme {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7em;
    margin: 5.3em auto 7em;
    width: 80%;

    @media #{$desktopScreen} {
        gap: 5em;
    }

    @media #{$tabletScreen} {
        flex-direction: column;
        gap: 2.5em;
    }

    @media #{$mobileMediumScreen} {
        margin-bottom: 5em;
    }
}

.layout__switch {
    display: flex;
    place-content: center;
    place-items: center;
    margin-left: 1em;

    .indic {
        @media #{$mobileUpScreen} {
            display: none;
        }
    }
}

.avatar {
    @media #{$mobileMediumScreen} {
        display: none;
    }
}

.avatar__img {
    width: 125px;
    height: auto;
    aspect-ratio: calc(264 / 447) / 1;
}

span {
    font-size: .85em;
    color: var(--color-heading);
    margin-left: .8em;
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