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
                <RouterLink to="/" :class="classLink" @click="closeHidden">
                    <Link>
                    <template #icon>
                        <IconProfil />
                    </template>
                    <template #title>
                        A propos
                    </template>
                    </Link>
                </RouterLink>
                <RouterLink to="/projects" :class="classLink" @click="closeHidden">
                    <Link>
                    <template #icon>
                        <IconPc />
                    </template>
                    <template #title>
                        Projets
                    </template>
                    </Link>
                </RouterLink>
                <RouterLink to="/contact" :class="classLink" @click="closeHidden">
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
            <!-- Link CV download -->
            <Link class="downloadLink">
            <template #title>
                <a class="downloadCV" ref="download" id="download" :class="offset, classDownload"
                    :href="downloadUrl('CV_HugoDELBEGUE.pdf')" target="_blank" rel="noreferrer" download="CV_hugodelbegue"
                    title="Téléchagement CV pdf">CV</a>
            </template>
            </Link>
            <!-- Menu mobile -->
            <!-- TODO : navMobile à mettre dans un component différent -->
            <div class="burger_menu">
                <input @change="toggleMenu" @click="closeHidden" type="checkbox" id="burger">
                <label ref="cross" for="burger" class="burger" :class="classLink">
                    <div ref="animation" class="iconMenu"></div>
                </label>
                <div ref="burger_links" class="burger_links">
                    <ul class="layout_burger_links">
                        <li>
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
                        <li>
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
                        <li>
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
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            downloadUrl(file) {
                return new URL(`../assets/upload/${file}`, import.meta.url).href;
            }
        }
    },
    methods: {
        // Open and close links menu
        toggleMenu() {
            const { burger_links, animation, cross, download } = this.$refs;
            burger_links.classList.toggle('show');
            animation.classList.toggle('anim');
            cross.classList.toggle('elev');
            download.classList.toggle('up');
            this.$root.$refs.bandR.classList.toggle('elev_band');
            document.body.classList.toggle('hidden')
        },
        closeHidden() {
            // TODO : bug à l'ouverture/fermeture du menu pour la page ProjectView (class hidden)
            if (document.body.classList[1] === 'hidden' && this.$route.name == "ProjectView") {
                document.body.classList.remove('hidden')
            }
        }
    },
    computed: {
        classLink() {
            return {
                important__hover: this.$route.name == "ProjectView"
            }
        },
        classDownload() {
            return {
                important__download: this.$route.name == "ProjectView"
            }
        },
        offset() {
            return {
                offset: this.$route.name == 'ProjectView'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.navbar {
    display: flex;
    align-items: center;
    gap: 1.5em;

    a {
        font-size: var(--size-navbar);
        color: inherit;

        &:hover {
            color: var(--color-link);
        }

        &.router-link-active {
            color: var(--color-link);
        }

        svg {
            width: 12px;
            height: 12px;
        }
    }

    .line_menu {
        display: flex;
        place-items: center;
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
            line-height: initial;
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
            width: 35px;
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
            height: 4px;
            border-radius: 3px;
            position: relative;
            transition: transform .35s, background .20s, bottom .30s;
        }

        .iconMenu::before {
            background: currentColor;
            width: 75%;
            height: 4px;
            top: 13px;
        }

        .iconMenu::after {
            background: currentColor;
            width: 75%;
            height: 4px;
            bottom: 17px;
        }

        .burger_links {
            cursor: default;
            z-index: 2;
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

    #download {
        @media #{$mobileMenuHidden} {
            display: none;
        }
    }

    .downloadLink {
        padding-left: 1em;
        border-left: 1px solid;
        line-height: initial;
        border-color: var(--color-border-2);
    }

    .downloadCV {
        color: var(--color-text);
        font-family: 'Bungee Spice', cursive;
        // transform: scale(1.5);
        cursor: pointer;

        // @media #{$desktopDownScreen} {
        //     &:hover {
        //         background-color: var(--color-background-download-6);
        //     }
        // }

        // &:active {
        //     background: var(--color-button);
        // }
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
    position: relative;
    z-index: 3;

    @media #{$mobileMenuVisible} {
        position: static;
    }
}

.up {
    display: block !important;
    position: absolute;
    top: 1em;
    left: 1em;
    z-index: 3;

    @media #{$mobileMenuVisible} {
        position: static;
    }
}

.offset {
    top: 2em;

    @media #{$mobileUpScreen} {
        top: 3em;
    }
}

// Animation
.anim {
    transform: rotate(315deg);

    &.iconMenu::before {
        background: transparent !important;
    }

    &.iconMenu::after {
        bottom: 4px !important;
        transform: rotate(-90deg);
    }
}
</style>