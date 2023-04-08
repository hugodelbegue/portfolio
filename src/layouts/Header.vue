<script setup>
import Logo from '@/components/items/Logo.vue'
import SwitchButton from '@/components/items/SwitchButton.vue'
import NavBar from '@/components/NavBar.vue'
import AboutMe from '@/components/AboutMe.vue'
</script>

<template>
    <header>
        <!-- TODO : finir la bar de navigation ainsi que l'adapter avec une animation -->

        <div ref="navigation" class="background__navigation">
            <div ref="borderBottom" class="layout__navbar">
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
                <NavBar ref="navbar" />
            </div>
            <!-- TODO : voir pour mettre une ancre pour le déclenchement de l'event -->
            <div ref="anchor"></div>
        </div>

        <div v-if="$route.name == 'HomeView'" ref="aboutme" class="layout__aboutme">
            <Logo class="avatar">
                <template #picture>
                    <img class="avatar__img" alt="Avatar" src="@/assets/img/avatar.svg" />
                </template>
            </Logo>
            <AboutMe />
        </div>
    </header>
</template>

<script>
export default {
    beforeMount() {
        window.addEventListener('scroll', this.setOfNavigation);
        // window.addEventListener('wheel', this.scrollTop);
    },
    mounted() {
    },
    computed: {
        classShadow() {
            return {
                important__shadow: this.$route.name == 'ProjectView',
            }
        },

    },
    methods: {
        setOfNavigation() {
            const cv = this.$refs.navbar.$refs.cv
            const { navigation, aboutme, borderBottom, anchor } = this.$refs
            if (window.scrollY > 35 && window.innerWidth > 970) {
                cv.style.display = 'none';
                borderBottom.classList.add('line__hidden');
                if (this.$route.name == 'HomeView') {
                    aboutme.classList.add("add__padding");
                } else if (this.$route.name == 'ProjectView' || this.$route.name == 'ContactView') {
                    this.$root.$refs.padding.classList.add('add__padding')
                }
                navigation.classList.add("navigation");
            } else {
                cv.style.display = 'block';
                borderBottom.classList.remove('line__hidden');
                navigation.classList.remove("navigation");
                if (this.$route.name == 'HomeView') {
                    aboutme.classList.remove("add__padding");
                } else if (this.$route.name == 'ProjectView' || this.$route.name == 'ContactView') {
                    this.$root.$refs.padding.classList.remove('add__padding')
                }
            }
        },
        scrollTop() {
            let lastScrollTop = 0;
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop < lastScrollTop) {
                console.log("scroll at top")
                // L'utilisateur est en train de faire défiler vers le haut
                // Faites quelque chose ici...
            } else {
                console.log('hello');
                // L'utilisateur est en train de faire défiler vers le bas
                // Faites quelque chose ici...
            }
            lastScrollTop = scrollTop;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.navigation {
    z-index: 1;
    position: fixed;
    width: 100%;
    background: var(--color-background-navigation);
    padding-top: 0 !important;
    overflow: hidden;
    // transition: all .1s;
}

.is__hidden {
    transform: translateY(-100%);
}

.line__hidden {
    border-bottom: 0px solid transparent !important;
}

header {
    display: flex;
    flex-direction: column;
}

.background__navigation {
    // background: red;    
    padding-top: 1.4em;

    @media #{$tabletScreen} {
        padding-top: 1em;
    }
}

.layout__navbar {
    margin-left: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
    margin-right: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-border-2);
    border-radius: 1px;

    @media #{$tabletScreen} {
        border-bottom: 0px solid transparent;
    }

    a {
        display: flex;
    }

    img {
        filter: drop-shadow(0 0 1px var(--indigo));
    }
}

.layout__aboutme {
    padding-left: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
    padding-right: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7em;
    margin-top: 5.3em;
    margin-bottom: 7em;

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
    display: flex;
    place-content: center;
    place-items: flex-start;

    @media #{$mobileMediumScreen} {
        display: none;
    }

    &::before {
        content: "";
        width: 70px;
        height: 70px;
        background: var(--color-button);
        position: absolute;
        animation: opacity 4750ms ease;
        animation-delay: 500ms;
        opacity: 0;
        display: flex;
        place-content: center;
        place-items: center;
        font-weight: var(--weight-bold);
        color: #333;
        font-family: 'Rock Salt', cursive;
    }

    &::after {
        content: "";
        width: 20px;
        height: 17px;
        border-radius: 50%;
        background: var(--color-button);
        border: 1px solid #333;
        position: absolute;
        visibility: hidden;
        transform: translate(-333%, 110%);
        background: var(--gray-very-light);
        animation: visibility 1625ms ease;
        animation-delay: 2425ms;
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

// Animation
@keyframes opacity {
    0% {
        opacity: 0;
        filter: blur(5px);
        transform: translate(0%, -250%) scale(0);
        border-radius: 50%;
    }

    28% {
        opacity: 1;
        filter: blur(0px);
        transform: translate(-180%, -20%) scale(1);
        border-radius: 0%;
    }

    34% {
        filter: blur(15px);
        transform: translate(-180%, -20%) scale(1.3);
        background: var(--color-button);
        border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
    }

    36% {
        border: 0px solid transparent;
        opacity: .8;
        filter: blur(5px);
        transform: translate(-180%, -20%) matrix(1, 2, 1, 1, 5, 6);
        background: #ff0000;
        content: "";
        height: 70px;
    }

    38% {
        border: 1px solid #333;
        opacity: 1;
        filter: blur(0px);
        transform: translate(-180%, -20%);
        background: var(--gray-very-light);
        border-radius: 50%;
        content: "Hey !";
        font-size: 14px;
        height: 50px;
    }

    80% {
        border: 1px solid #333;
        transform: translate(-180%, -20%);
        border-radius: 50%;
        font-size: 14px;
    }

    95% {
        border: 36px solid var(--color-button);
        background: var(--gray-very-light);
        filter: blur(0px);
        transform: translate(397%, -152%) scale(0.05);
        border-radius: 50%;
        content: "Hey !";
        font-size: 9px;
        border-left: 0;
        border-right: 0;
        height: 50px;
    }

    100% {
        opacity: 1;
        border: 0px solid transparent;
        filter: blur(100px);
        transform: translate(397%, -152%);
    }
}

@keyframes visibility {
    0% {
        visibility: hidden;
    }

    50% {
        visibility: visible;
    }

    100% {
        visibility: hidden;
    }
}
</style>