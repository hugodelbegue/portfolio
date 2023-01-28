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
                <Link color="#bb001b">
                <template #icon>
                    <a href="mailto:hugodelbegue@gmail.com" target="_blank">
                        <IconMail />
                    </a>
                </template>
                </Link>
            </li>
            <li>
                <Link color="#0e76a8">
                <template #icon>
                    <a href="https://fr.linkedin.com/in/hugo-delbegue/" target="_blank">
                        <IconLinkedin />
                    </a>
                </template>
                </Link>
            </li>
            <li>
                <Link color="#000000">
                <template #icon>
                    <a href="https://github.com/hugodelbegue" target="_blank">
                        <IconGithub />
                    </a>
                </template>
                </Link>
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

    a:hover {
        color: inherit;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-right: 6em;
        padding-left: 0;
    }

    svg {
        width: 27px;
        height: 27px;
    }
}
</style>