<script setup>
import Skill from './items/Skill.vue'
import IconVue from './icons/IconVue.vue'
import IconSass from './icons/IconSass.vue'
</script>

<template>
    <div class="AllSkills">
        <Skill>
            <template #icon>
                <IconVue />
            </template>
        </Skill>
        <Skill>
            <template #icon>
                <IconSass />
            </template>
        </Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
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