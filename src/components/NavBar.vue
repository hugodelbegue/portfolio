<script setup>
import { RouterLink } from 'vue-router'
import Link from '@/components/items/Link.vue'
import IconDownload from '@/components/icons/IconDownload.vue'
import IconPc from '@/components/icons/IconPc.vue'
import IconProfil from '@/components/icons/IconProfil.vue'
import IconPen from '@/components/icons/IconPen.vue'
</script>

<template>
    <nav>
        <div class="navbar">
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
                <a class="downloadCV" ref="download" id="download" :href="downloadUrl('CV_HugoDELBEGUE.pdf')"
                    target="_blank" rel="noreferrer" download="CV_hugodelbegue" title="Téléchagement CV pdf">CV</a>
            </template>
            </Link>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            download: null,
            downloadUrl(file) {
                return new URL(`../assets/upload/${file}`, import.meta.url).href;
            }
        }
    },
    mounted() {
        const { download } = this.$refs
        this.download = download
        if (window.innerWidth > 970) {
            download.addEventListener('mouseenter', this.rotateGo);
            download.addEventListener('mouseout', this.rotateReturn);
        }
    },
    methods: {
        closeHidden() {
            if (document.body.classList[1] === 'hidden' && this.$route.name == "ProjectView") {
                document.body.classList.remove('hidden')
            }
        },
        rotateGo() {
            this.download.classList.remove('rotateReturn')
            this.download.classList.add('rotateGo')
        },
        rotateReturn() {
            this.download.classList.remove('rotateGo')
            this.download.classList.add('rotateReturn')
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

.navbar {
    display: flex;
    align-items: center;
    gap: 1.5em;

    a {
        font-size: var(--size-navbar);

        &:hover {
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
    transform: scale(1.5);
    cursor: pointer;
}

// Added classes
.up {
    display: block !important;
    position: fixed;
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

.rotateGo {
    animation: rotateGo .5s ease;
    animation-fill-mode: both;
}

.rotateReturn {
    animation: rotateReturn .5s ease;
    animation-fill-mode: both;
}

// Animation
@keyframes rotateGo {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(720deg) scale(1.2);
    }
}

@keyframes rotateReturn {
    from {
        transform: rotate(720deg);
    }

    to {
        transform: rotate(0deg) scale(1.5);
    }
}
</style>