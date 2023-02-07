<script setup>
import { RouterLink } from 'vue-router'
import Link from '@/components/items/Link.vue'
import IconDownload from '@/components/icons/IconDownload.vue'
import IconPc from '@/components/icons/IconPc.vue'
import IconProfil from '@/components/icons/IconProfil.vue'
import IconProfilPhone from '@/components/icons/IconProfilPhone.vue'
import IconBoard from '@/components/icons/IconBoard.vue'
import IconPen from '@/components/icons/IconPen.vue'
</script>

<template>
    <nav>
        <div class="navbar">
            <!-- Menu desktop -->
            <div class="line_menu">
                <RouterLink to="/">
                    <Link>
                    <template #icon>
                        <IconProfil />
                    </template>
                    <template #title>
                        A propos
                    </template>
                    </Link>
                </RouterLink>
                <RouterLink to="/projects">
                    <Link>
                    <template #icon>
                        <IconPc />
                    </template>
                    <template #title>
                        Projets
                    </template>
                    </Link>
                </RouterLink>
                <RouterLink to="/contact">
                    <Link>
                    <template #icon>
                        <IconPen />
                    </template>
                    <template #title>
                        Contact
                    </template>
                    </Link>
                </RouterLink>
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
                            <RouterLink to="/" @click="pageRedirect('/')">
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
                        <li>
                            <RouterLink to="/projects" @click="pageRedirect('/projects')">
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
                        <li>
                            <RouterLink to="/contact" @click="pageRedirect('/contact')">
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
            </div>
            <!-- Link CV download -->
            <a ref="download" href="@/assets/data/CV_HugoDELBEGUE.pdf" target="_blank" rel="noreferrer"
                download="CV_hugodelbegue" title="Téléchagement CV pdf">
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
            const { burger, burger_links, animation, cross, download } = this.$refs;
            burger_links.classList.toggle('show');
            animation.classList.toggle('anim');
            cross.classList.toggle('elev');
            download.classList.toggle('elev');
            if (burger.checked) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style = 'initial';
            }
        },
        pageRedirect(url) {
            window.location.assign(url);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

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
        bottom: 3px !important;
        transform: rotate(-90deg);
    }
}

.navbar {
    display: flex;
    align-items: center;
    column-gap: 1em;

    a {
        font-size: var(--size-navbar);
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

    .line_menu {
        display: flex;
        gap: 2rem;

        @media #{$mobileMenuHidden} {
            display: none;
        }

        .link {
            display: flex;
            place-items: center;
            gap: .5em;
        }

        a .link {
            font-weight: var(--weight-bold);
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
            height: 3px;
            border-radius: 3px;
            position: relative;
            transition: transform .3s;
        }

        .iconMenu::before {
            top: 10px;
        }

        .iconMenu::after {
            bottom: 13px;
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

    .downloadCV {
        flex-direction: column-reverse;
        place-items: center;
        background-color: var(--color-background-download-25);
        color: var(--color-icon);
        border: 3px dashed var(--color-button-border);
        border-radius: 5px;
        transition: background .3s, box-shadow .2s;
        padding: .3em .4em;
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