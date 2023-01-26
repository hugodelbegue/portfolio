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
            <Link class="downloadCV" @click="download">
            <template #title>
                <a>CV</a>
            </template>
            <template #icon>
                <IconDownload />
            </template>
            </Link>
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
        font-size: 20px;
        font-weight: var(--weight-bold);

        &:hover {
            color: var(--chocolate);
        }

        &.router-link-active {
            background: var(--chocolate);
            background: linear-gradient(0deg, rgba(218, 98, 32, .25) 0%, transparent 30%);
            color: var(--chocolate);
            border-radius: 50%;
        }
    }

    .downloadCV {
        flex-direction: column-reverse;
        background-color: rgba(218, 97, 32, 0.25);
        color: var(--indian);
        border: 3px dashed var(--chocolate);
        border-radius: 5px;
        transition: background .3s, box-shadow .2s;
        padding: .5em;

        a {
            color: var(--indian);
            font-size: 15px;
        }

        &:hover {
            background-color: rgba(218, 97, 32, 0.5);
            box-shadow: 0 1px 3px var(--divider-light-1);
        }

        &:active {
            background: var(--chocolate);
            box-shadow: 0 1px 6px var(--divider-light-1);
        }

        svg {
            background: transparent;
            width: 20px;
            height: 20px;
        }
    }
}
</style>