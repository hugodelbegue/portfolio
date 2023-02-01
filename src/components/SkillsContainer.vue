<script setup>
import Skill from './items/Skill.vue'
import { skillList } from '../assets/data/skills'
import RenderSkillIcon from './items/RenderSkillIcon.vue'
</script>

<template>
    <h2><strong class="important">Compétences</strong>&nbsp;techniques</h2>
    <div class="AllSkills">
        <Skill v-for="skill in skillList" :number="skill.number">
            <template #text>
                <p>{{ skill.name }}</p>
            </template>
            <template #icon>
                <RenderSkillIcon :icon="skill.icon" />
            </template>
        </Skill>
    </div>
</template>

<script>

</script>

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
    flex-wrap: wrap;
    place-content: center;
    text-align: center;
    margin-bottom: 3em;

    &::before {
        content: url(../assets/gear-fill.svg);
        color: var(--color-icon);
        margin-right: .5em;
    }

    &::after {
        content: url(../assets/tools.svg);
        color: var(--color-icon);
        margin-left: .5em;
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