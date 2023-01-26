<script setup>
import Link from './items/Link.vue'
import IconMail from './icons/IconMail.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconGithub from './icons/IconGithub.vue'
</script>

<template>
    <div class="contactlinks">
        <ul>
            <li>
                <Link>
                <template #icon>
                    <a href="mailto:hugodelbegue@gmail.com">
                        <IconMail />
                    </a>
                </template>
                </Link>
            </li>
            <li>
                <Link>
                <template #icon>
                    <a href="https://fr.linkedin.com/in/hugo-delbegue/">
                        <IconLinkedin />
                    </a>
                </template>
                </Link>
            </li>
            <li>
                <Link>
                <template #icon>
                    <a href="https://github.com/hugodelbegue">
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
.contactlinks {
    display: flex;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-right: 5rem;
        padding-left: 0;
    }

    svg {
        width: 30px;
        height: 30px;
    }
}
</style>