<script setup>
import Project from './items/Project.vue'
import Language from './items/Language.vue'
import Button from './items/Button.vue'
import { dataList } from '../assets/data/data.js'
</script>

<template>
    <h2>Mes&nbsp;<strong class="important">projets</strong>&nbsp;web</h2>
    <div class="projectscontainer">
        <div class="selectors">
            <Button type="button" padding=".5" msg="Tous" @click="showAll" />
            <Button type="button" padding=".5" msg="Tout Frontend" @click="showFrontend" />
            <Button type="button" padding=".5" msg="Avec Backend" @click="showBackend" />
        </div>
        <div class="layout__project">
            <TransitionGroup name="transition__projects" appear>
                <div v-for="data in allData" :key="data" class="project">
                    <Project :url="data.url" :title="data.title">
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
            </TransitionGroup>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList,
            choice: ""
        }
    },
    computed: {
        allData() {
            return this.dataList.filter((items) => {
                if (this.choice == "frontend") {
                    return items.frontend;
                }
                if (this.choice == "backend") {
                    return items.backend;
                } else {
                    return items;
                }
            })
        },
    },
    methods: {
        showAll() {
            return this.choice = "all";
        },
        showFrontend() {
            return this.choice = "frontend";
        },
        showBackend() {
            return this.choice = "backend";
        }
    }
}
</script>

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
        min-height: calc((var(--size-project) * 2) + 3.3em);
    }

    .project {
        position: relative;
        display: flex;
        background-color: var(--color-background-project);
        width: var(--size-project);
        height: var(--size-project);
        padding: .5em;
        border-radius: 3px;
        border: 2px solid var(--color-border-1);
        box-shadow: 0 2px 4px var(--color-border-1);
        transition: border .1s color .1s;

        &::before {
            z-index: -1;
            content: "";
            position: absolute;
            top: 2px;
            left: 2px;
            width: var(--size-project);
            height: var(--size-project);
            box-shadow: 0 2px 4px var(--color-border-1);
            border-radius: 3px;
            background: var(--color-background-project);
            border: 2px solid var(--color-border-1);
            transition: transform .2s, border .2s;
            // A voir !!!
            transform: rotate(-2.5deg);
            // !!!!
        }

        &::after {
            z-index: -2;
            content: "";
            position: absolute;
            top: 5px;
            left: 5px;
            width: var(--size-project);
            height: var(--size-project);
            box-shadow: 0 2px 4px var(--color-border-1);
            border-radius: 3px;
            background: var(--color-background-project);
            border: 2px solid var(--color-border-1);
            transition: transform .3s, border .3s;
        }
    }

    .project:hover {
        cursor: pointer;
        color: var(--color-text-language);
        border: 2px solid var(--color-text-language);

        &::before {
            transform: rotate(3deg);
            border: 2px dashed var(--color-text-language);
        }

        &::after {
            transform: rotate(8deg);
            border: 2px dashed var(--color-text-language);
        }
    }

    .project:hover .language {
        color: var(--color-text-language);
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
    display: flex;
    flex-wrap: wrap;

    &::before {
        content: url(../assets/pc-display.svg);
        margin-right: .5em;
        color: var(--color-icon);
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

// Transitions
.transition__projects-move,
.transition__projects-enter-active,
.transition__projects-leave-active {
    transition: all 0.5s ease;
}

.transition__projects-enter-from,
.transition__projects-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>