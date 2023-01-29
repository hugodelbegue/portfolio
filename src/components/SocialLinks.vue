<script setup>
import Link from './items/Link.vue'
import IconMail from './icons/IconMail.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconGithub from './icons/IconGithub.vue'
</script>

<template>
    <div class="sociallinks">
        <ul>
            <li>
                <a href="mailto:hugodelbegue@gmail.com" target="_blank">
                    <Link color="">
                    <template #icon>
                        <IconMail />
                    </template>
                    <template #title>
                        <span>hugodelbegue@gmail.com</span>
                    </template>
                    </Link>
                </a>
            </li>
            <li>
                <a href="https://fr.linkedin.com/in/hugo-delbegue/" target="_blank">
                    <Link color="">
                    <template #icon>
                        <IconLinkedin />
                    </template>
                    <template #title>
                        <span>LinkedIn</span>
                    </template>
                    </Link>
                </a>
            </li>
            <li>
                <a href="https://github.com/hugodelbegue" target="_blank">
                    <Link color="">
                    <template #icon>
                        <IconGithub />
                    </template>
                    <template #title>
                        <span>GitHub</span>
                    </template>
                    </Link>
                </a>
            </li>
            <!-- <li>
                <a href="https://www.instagram.com/primalprod_freelance/" target="_blank">
                    <span>
                        <i class="bi bi-instagram"></i>
                        Instagram
                    </span>
                </a>
            </li> -->
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.sociallinks {
    display: flex;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 2em;
        padding-right: 0;
    }

    svg {
        width: 1.4em;
        height: 1.4em;
    }

    span {
        margin-left: .8em;
    }
}
</style>