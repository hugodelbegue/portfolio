<script setup>
import { RouterLink } from 'vue-router'
import Link from './items/Link.vue'
import IconDownload from './icons/IconDownload.vue'
</script>

<template>
    <nav>
        <div class="navbar">
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
            <a href="../assets/data/CV_HugoDELBEGUE.pdf" target="_blank" download="CV_hugodelbegue"
                title="Téléchager mon CV">
                <Link class="downloadCV" @click="download">
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
        // Download CV file
        download() {
            console.log('hello')
        }

    }
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    transition: color .4s;

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