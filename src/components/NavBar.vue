<script setup>
import { RouterLink } from 'vue-router'
import Link from './items/Link.vue'
import IconDownload from './icons/IconDownload.vue'
import IconAboutme from './icons/IconAboutme.vue'
import IconProjects from './icons/IconProjects.vue'
import IconContact from './icons/IconContact.vue'
</script>

<template>
    <nav>
        <div class="navbar">
            <!-- Menu desktop -->
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
            <!-- Menu mobile -->
            <div class="burger_menu">
                <input @change="toggleMenu" ref="burger" type="checkbox" id="burger">
                <label ref="cross" for="burger">
                    <div ref="animation" class="iconMenu"></div>
                </label>
                <div ref="burger_links" class="burger_links">
                    <ul class="layout_burger_links">
                        <li>
                            <RouterLink to="/">
                                <Link @click="pageRedirect('/')">
                                <template #icon>
                                    <IconAboutme />
                                </template>
                                <template #title>
                                    A propos
                                </template>
                                </Link>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/projects">
                                <Link @click="pageRedirect('/projects')">
                                <template #icon>
                                    <IconProjects />
                                </template>
                                <template #title>
                                    Projets
                                </template>
                                </Link>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contact">
                                <Link @click="pageRedirect('/contact')">
                                <template #icon>
                                    <IconContact />
                                </template>
                                <template #title>
                                    Contact
                                </template>
                                </Link>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Link CV download -->
            <a ref="download" href="../assets/data/CV_HugoDELBEGUE.pdf" target="_blank" download="CV_hugodelbegue"
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
            const elevationBurger = this.$refs.cross;
            const elevationDownload = this.$refs.download;
            links.classList.toggle('show')
            labels.classList.toggle('anim')
            elevationBurger.classList.toggle('elev')
            elevationDownload.classList.toggle('elev')
            if (burger.checked) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style = 'initial';
            }
        },
        pageRedirect(url) {
            location.assign(url);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/responsive.scss';

.show {
    display: flex !important;

    @media #{$mobileMenuVisible} {
        display: initial !important;
    }
}

.elev {
    position: fixed;
    z-index: 2;

    @media #{$mobileMenuVisible} {
        position: static;
    }
}

a.elev {
    right: 1em;
    top: 1em;
}

label.elev {
    right: 6em;
    top: 3em;
}

.anim {
    transform: rotate(315deg);

    &.iconMenu::before {
        top: 0px !important;
        transform: rotate(0deg);
    }

    &.iconMenu::after {
        bottom: 2px !important;
        transform: rotate(-90deg);
    }
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
            transition: transform .3s;
        }

        .iconMenu::before {
            top: 10px;
        }

        .iconMenu::after {
            bottom: 12px;
        }

        .burger_links {
            cursor: default;
            z-index: 1;
            background: var(--color-background-burger);
            backdrop-filter: blur(10px);
            position: absolute;
            top: 0;
            left: 0;
            display: none;
            place-content: center;
            place-items: center;
            padding: 1em;
            width: 100%;
            height: 100vh;

            .layout_burger_links {
                padding: 0;
                display: flex;
                flex-direction: column;
                gap: 1.5em;
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

        @media #{$mobileMenuVisible} {
            display: none;
        }
    }

    a {
        font-size: 1.25em;
        font-weight: var(--weight-bold);
        color: inherit;

        &:hover {
            color: var(--color-link);
        }

        &.router-link-active {
            background: linear-gradient(0deg, var(--color-underline) 0%, transparent 10%);
            color: var(--color-link);
            border-radius: 20%;
        }
    }

    .downloadCV {
        flex-direction: column-reverse;
        place-items: center;
        background-color: var(--color-background-download-25);
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
            background-color: var(--color-background-download-6);
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