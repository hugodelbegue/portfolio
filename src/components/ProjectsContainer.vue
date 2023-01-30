<script setup>
import Project from './items/Project.vue'
import Language from './items/Language.vue'
import Button from './items/Button.vue'
import { dataList } from '../assets/data/data.js'
</script>

<template>
    <h2>Mes projets web.</h2>
    <div class="projectscontainer">
        <div class="selectors">
            <Button type="button" padding=".5" msg="Tous" />
            <Button type="button" padding=".5" msg="Full Frontend" />
            <Button type="button" padding=".5" msg="Avec Backend" />
        </div>
        <div class="layout__project">
            <div v-for="data in dataList" class="project">
                <Project :url="data.url">
                    <template #title>
                        <div class="layout__title">{{ data.title }}</div>
                    </template>
                    <template #image>
                        <img :src="data.img" alt="">
                    </template>
                    <template #language>
                        <div class="layout__language">
                            <div v-for="lang in data.language">
                                <Language :language="lang.name" style="box-shadow: 0 0 2px" />
                            </div>
                        </div>
                    </template>
                </Project>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/responsive.scss';

.projectscontainer {
    img {
        width: 100%;
        height: 100%;
    }

    .layout__project {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3.3em;
    }

    .layout__title {
        font-size: 1.3em;
        font-weight: var(--weight-bold);
        letter-spacing: normal;
        padding-bottom: .3em;
    }

    .layout__language {
        display: flex;
        justify-content: flex-end;
        column-gap: 10px;
        width: 100%;
        padding-top: .9em;
        padding-right: .3em;
    }
}

h2 {
    &::before {
        content: url(../assets/pc-display.svg);
        margin-right: .5em;
    }

    @media #{$mobileUpScreen} {
        text-align: center;
    }

}

.selectors {
    display: flex;
    place-content: flex-end;
    column-gap: 1em;
    margin-bottom: 4.3em;

    @media #{$mobileUpScreen} {
        place-content: center;
    }
}
</style>