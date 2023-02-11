<script setup>
import Link from '@/components/items/Link.vue'
import IconMail from '@/components/icons/IconMail.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue';
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
                        <span>Email</span>
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
            <li>
                <a href="https://www.instagram.com/primalprod_freelance/" target="_blank">
                    <Link color="">
                    <template #icon>
                        <IconInstagram />
                    </template>
                    <template #title>
                        <span>Instagram</span>
                    </template>
                    </Link>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.sociallinks {
    display: flex;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding-left: 3em;
        padding-right: 0;

        @media #{$tabletScreen} {
            flex-direction: row;
            padding-left: 0;
            width: 100%;
        }

        @media #{$mobileUpScreen} {
            flex-wrap: wrap;
            gap: 1em;
        }

        li {
            padding: 0 1em;
        }
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