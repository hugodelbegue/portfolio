<script setup>
import Skill from './items/Skill.vue'
import IconVue from './icons/IconVue.vue'
import IconSass from './icons/IconSass.vue'
import IconGit from './icons/IconGit.vue'
import IconHtml from './icons/IconHtml.vue'
import IconJavascript from './icons/IconJavascript.vue'
import IconNode from './icons/IconNode.vue'
import IconSeo from './icons/IconSeo.vue'
</script>

<template>
    <h2><span class="important">Compétences</span>&nbsp;techniques</h2>
    <div class="AllSkills">
        <Skill number="35">
            <template #text>
                <p>Vue.js</p>
            </template>
            <template #icon>
                <IconVue />
            </template>
        </Skill>
        <Skill number="75">
            <template #text>
                <p>CSS / Sass</p>
            </template>
            <template #icon>
                <IconSass />
            </template>
        </Skill>
        <Skill number="45">
            <template #text>
                <p>GitHub</p>
            </template>
            <template #icon>
                <IconGit />
            </template>
        </Skill>
        <Skill number="85">
            <template #text>
                <p>HTML5</p>
            </template>
            <template #icon>
                <IconHtml />
            </template>
        </Skill>
        <Skill number="40">
            <template #text>
                <p>Javascript</p>
            </template>
            <template #icon>
                <IconJavascript />
            </template>
        </Skill>
        <Skill number="55">
            <template #text>
                <p>SEO / Référencement</p>
            </template>
            <template #icon>
                <IconSeo />
            </template>
        </Skill>
        <Skill number="20">
            <template #text>
                <p>Node.js</p>
            </template>
            <template #icon>
                <IconNode />
            </template>
        </Skill>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/responsive.scss';

.AllSkills {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em 3em;
    justify-content: space-evenly;

    @media #{$mobileUpScreen} {
        column-gap: 4em;
    }
}

h2 {
    display: flex;
    place-content: center;
    text-align: center;
    margin-bottom: 3em;

    &::before {
        content: url(../assets/gear-fill.svg);
        color: var(--color-icon);
        margin-right: 1em;
    }

    &::after {
        content: url(../assets/tools.svg);
        color: var(--color-icon);
        margin-left: 1em;
    }
}

p {
    @media #{$mobileUpScreen} {
        margin-bottom: .5em;
        text-align: center;
        font-variant-caps: small-caps;
        font-weight: var(--weight-bold);
    }
}

svg {
    width: 6.6em;
    height: 6.6em;

    @media #{$mobileUpScreen} {
        height: 3.6em;
    }
}
</style>