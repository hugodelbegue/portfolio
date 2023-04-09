<script setup>
import Skill from '@/components/items/Skill.vue'
import RenderSkillIcon from '@/components/items/RenderSkillIcon.vue'
import JSONSKILL from '@/components/api/skills.json'
</script>

<template>
    <h2><strong class="important">.Compétences</strong>&nbsp;techniques.</h2>
    <div class="AllSkills">
        <Skill v-for="skill in $options.skills" :number="skill.number">
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
export default {
    skills: JSONSKILL.skillList
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.AllSkills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-between-skill);
    justify-content: space-evenly;

    @media #{$mobileUpScreen} {
        column-gap: 4em;
    }
}

h2 {
    display: flex;
    flex-wrap: wrap;
    place-content: center;

    @media #{$mobileMediumScreen} {
        margin-bottom: 1em;
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
    filter: drop-shadow(2px 2px 2px var(--color-border-1));
    width: 6.6em;
    height: 6.6em;

    @media #{$mobileUpScreen} {
        height: 3.6em;
    }
}
</style>