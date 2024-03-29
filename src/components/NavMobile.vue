<script setup>
import { RouterLink } from 'vue-router'
import Link from '@/components/items/Link.vue'
import IconProfilPhone from '@/components/icons/IconProfilPhone.vue'
import IconBoard from '@/components/icons/IconBoard.vue'
import IconPen from '@/components/icons/IconPen.vue'
</script>

<template>
    <nav class="burger_menu">
        <input @change="toggleMenu" type="checkbox" id="burger">
        <label ref="cross" for="burger" class="burger" :class="classLink">
            <div ref="animation" class="iconMenu"></div>
        </label>
        <div ref="burger_links" class="burger_links">
            <ul class="layout_navmobile_links">
                <li class="linkOne">
                    <RouterLink to="/" @click="toggleMenu">
                        <Link>
                        <template #icon>
                            <IconProfilPhone />
                        </template>
                        <template #title>
                            A propos
                        </template>
                        </Link>
                    </RouterLink>
                </li>
                <li class="linkTwo">
                    <RouterLink to="/projects" @click="toggleMenu">
                        <Link>
                        <template #icon>
                            <IconBoard />
                        </template>
                        <template #title>
                            Projets
                        </template>
                        </Link>
                    </RouterLink>
                </li>
                <li class="linkThree">
                    <RouterLink to="/contact" @click="toggleMenu">
                        <Link>
                        <template #icon>
                            <IconPen />
                        </template>
                        <template #title>
                            Contact
                        </template>
                        </Link>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        // Open and close links menu
        toggleMenu() {
            const download = this.$parent.$refs.navbar.$refs.download;
            const content = this.$parent.$refs.nav__content;
            const anchor = this.$parent.$refs.anchor;
            const { burger_links, animation, cross } = this.$refs;
            burger_links.classList.toggle('show');
            animation.classList.toggle('anim');
            cross.classList.toggle('elev');
            download.classList.toggle('up');
            window.scrollY > anchor.offsetTop ? content.classList.toggle('fixe__nav') : null;
            this.$route.name == 'ProjectView' ? download.classList.toggle('offset') : null;
            this.$route.name == 'ProjectView' ? this.$root.$refs.bandR.classList.toggle('elev_band') : null;
            document.body.classList.toggle('hidden');
        },
        closeHidden() {
            if (document.body.classList.contains('hidden') && this.$route.name == "ProjectView") {
                document.body.classList.remove('hidden')
            }
        }
    },
    computed: {
        classLink() {
            return {
                important__hover: this.$route.name == "ProjectView"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.burger_menu {
    background: transparent;

    @media #{$mobileMenuVisible} {
        display: none;
    }

    input[type="checkbox"] {
        display: none;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 37px;
        height: 25px;
    }

    .iconMenu,
    .iconMenu::before,
    .iconMenu::after {
        content: "";
        background: currentColor;
        display: block;
        margin: auto;
        width: 100%;
        height: 6px;
        border-radius: 2px;
        position: relative;
        transition: transform .35s, background .20s, bottom .30s;
    }

    .iconMenu::before {
        background: currentColor;
        width: 75%;
        height: 6px;
        top: 13px;
    }

    .iconMenu::after {
        background: currentColor;
        width: 75%;
        height: 6px;
        bottom: 19px;
    }

    .burger_links {
        cursor: default;
        z-index: 2;
        background: var(--color-background-burger);
        backdrop-filter: blur(10px);
        position: fixed;
        top: 0;
        left: 0;
        display: none;
        place-content: center;
        place-items: center;
        padding: 1em;
        width: 100%;
        height: 100vh;

        .layout_navmobile_links {
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 2em;

            li {
                line-height: initial;
            }

            .linkOne {
                animation: moveBottom .2s ease 0ms both;
                opacity: 0;
            }

            .linkTwo {
                animation: moveBottom .2s ease 100ms both;
                opacity: 0;
            }

            .linkThree {
                animation: moveBottom .2s ease 200ms both;
                opacity: 0;
            }
        }

        a .link {
            display: flex;
            place-items: center;
            gap: .5em;
            font-size: 1.3em;
            font-weight: var(--weight-bold);
            color: inherit;
        }

        svg {
            width: .55em;
            height: .55em;
        }

        a.router-link-active {
            background: transparent;
        }
    }
}

// Added classes
.show {
    display: flex !important;

    @media #{$mobileMenuVisible} {
        display: initial !important;
    }
}

.elev {
    position: fixed;
    top: 1em;
    right: 1em;
    z-index: 3;

    @media #{$mobileMenuVisible} {
        position: static;
    }
}

// Animation
.anim {
    transform: rotate(315deg);

    &.iconMenu::before {
        background: transparent !important;
    }

    &.iconMenu::after {
        bottom: 6px !important;
        transform: rotate(-90deg);
    }
}

@keyframes moveBottom {
    from {
        transform: translateY(10px);
    }

    to {
        transform: translateY(0px);
        opacity: 1;
    }
}
</style>