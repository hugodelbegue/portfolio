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
    <h2>Mes compétences.</h2>
    <div class="AllSkills">
        <Skill number="35">
            <template #icon>
                <IconVue />
            </template>
        </Skill>
        <Skill number="75">
            <template #icon>
                <IconSass />
            </template>
        </Skill>
        <Skill number="45">
            <template #icon>
                <IconGit />
            </template>
        </Skill>
        <Skill number="85">
            <template #icon>
                <IconHtml />
            </template>
        </Skill>
        <Skill number="40">
            <template #icon>
                <IconJavascript />
            </template>
        </Skill>
        <Skill number="55">
            <template #icon>
                <IconSeo />
            </template>
        </Skill>
        <Skill number="20">
            <template #icon>
                <IconNode />
            </template>
        </Skill>
    </div>
</template>

<style lang="scss" scoped>
.AllSkills {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5em;
    justify-content: space-evenly;
}

svg {
    width: 100px;
    height: 100px;
}
</style>