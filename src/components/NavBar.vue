<script setup>
import { RouterLink } from 'vue-router'
import Link from './items/Link.vue'
import IconDownload from './icons/IconDownload.vue'
</script>

<template>
    <nav>
        <div class="navbar">
            <div class="line_menu">
                <Link>
                <template #title>
                    <RouterLink to="/">A propos</RouterLink>
                </template>
                </Link>
                <Link>
                <template #title>
                    <RouterLink to="/projects">Projets</RouterLink>
                </template>
                </Link>
                <Link>
                <template #title>
                    <RouterLink to="/contact">Contact</RouterLink>
                </template>
                </Link>
            </div>



            <div class="burger_menu">
                <input @change="toggleMenu" ref="burger" type="checkbox" id="burger">
                <label for="burger">
                    <div ref="animation" class="iconMenu"></div>
                </label>
                <div ref="burger_links" class="burger_links">
                    <input @change="toggleMenu" ref="burger" type="checkbox" id="burger">
                    <label for="burger">
                        <div class="iconMenu"></div>
                    </label>
                    <Link>
                    <template #title>
                        <RouterLink to="/">A propos</RouterLink>
                    </template>
                    </Link>
                    <Link>
                    <template #title>
                        <RouterLink to="/projects">Projets</RouterLink>
                    </template>
                    </Link>
                    <Link>
                    <template #title>
                        <RouterLink to="/contact">Contact</RouterLink>
                    </template>
                    </Link>
                </div>
            </div>



            <a href="../assets/data/CV_HugoDELBEGUE.pdf" target="_blank" download="CV_hugodelbegue"
                title="Téléchager mon CV">
                <Link class="downloadCV">
                <template #title>
                    <span>CV</span>
                </template>
                <template #icon>
                    <IconDownload />
                </template>
                </Link>
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        // Open and close links menu
        toggleMenu() {
            const burger = this.$refs.burger;
            const links = this.$refs.burger_links;
            const labels = this.$refs.animation;
            links.classList.toggle('show')
            labels.classList.toggle('anim')
            if (burger.checked) {
                document.body.style.overflow = 'hidden';
                // Faire compatibilité pour Firefox
            } else {
                document.body.style = 'initial';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/responsive.scss';

.show {
    display: flex !important;
}

.anim {
    background-color: red !important;
}

.navbar {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    transition: color .4s;

    .line_menu {
        display: flex;
        column-gap: 2rem;

        @media #{$mobileMenuHidden} {
            display: none;
        }
    }

    .burger_menu {
        background: transparent;

        input[type="checkbox"] {
            display: none;
        }

        label {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 25px;
            height: 25px;
            transition: color .4s;

            &:hover {
                color: var(--color-link);
            }

            @media #{$mobileMenuVisible} {
                display: none;
            }
        }

        .iconMenu,
        .iconMenu::before,
        .iconMenu::after {
            content: "";
            background: currentColor;
            display: block;
            width: 2em;
            height: 2px;
            position: relative;
            transition: background .2s;
        }

        // .iconMenu::before input:checked {
        //     background-color: red;
        // }

        .iconMenu::before {
            top: 10px;
        }

        .iconMenu::after {
            bottom: 12px;
        }

        .burger_links {
            cursor: default;
            z-index: 1;
            background: rgba(218, 97, 32, 0.75);
            backdrop-filter: blur(10px);
            position: absolute;
            top: 0;
            left: 0;
            display: none;
            flex-direction: column;
            gap: 2em;
            place-content: center;
            place-items: center;
            padding: 1em;
            width: 100%;
            height: calc(100vh - 10em);
            margin-top: 10em;
        }
    }

    a {
        font-size: 1.33em;
        font-weight: var(--weight-bold);
        color: inherit;

        &:hover {
            color: var(--color-link);
        }

        &.router-link-active {
            background: linear-gradient(0deg, rgba(218, 98, 32, .25) 0%, transparent 20%);
            color: var(--color-link);
            border-radius: 20%;
        }
    }

    .downloadCV {
        flex-direction: column-reverse;
        place-items: center;
        background-color: rgba(218, 97, 32, 0.25);
        color: var(--color-icon);
        border: 3px dashed var(--color-button-border);
        border-radius: 5px;
        transition: background .3s, box-shadow .2s;
        padding: .5em;
        cursor: pointer;

        span {
            color: var(--color-icon);
            font-size: .8em;
            font-weight: var(--weight-bold);
        }

        &:hover {
            background-color: rgba(218, 97, 32, 0.6);
            box-shadow: 0 1px 3px var(--color-border-1);
        }

        &:active {
            background: var(--color-button-active);
            box-shadow: 0 1px 6px var(--color-border-1);
        }

        svg {
            background: transparent;
            width: 20px;
            height: 20px;
        }
    }
}
</style>