<script setup>
import Project from '@/components/items/Project.vue'
import Language from '@/components/items/Language.vue'
import Button from '@/components/items/Button.vue'
import { dataList } from '@/assets/data/data.js'
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
                            <img :src="data.img" :alt="'photo du project ' + data.title" :title="data.title">
                        </template>
                        <template #language>
                            <div class="layout__language">
                                <div class="language" :class="cleanString(lang.name)" v-for="lang in data.language">
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
            choice: "",
            cleanString(name) {
                return name.replace(/[./\/]/g, "");
            }
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
@import '@/assets/scss/responsive.scss';

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
            transform: rotate(-2.5deg);
        }

        &::after {
            z-index: -2;
            content: "";
            position: absolute;
            top: 3px;
            left: 2px;
            width: var(--size-project);
            height: var(--size-project);
            box-shadow: 0 2px 4px var(--color-border-1);
            border-radius: 3px;
            background: var(--color-background-project);
            border: 2px solid var(--color-border-1);
            transition: transform .3s, border .3s;
            transform: rotate(.5deg);
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
        letter-spacing: .7px;
        padding-bottom: .3em;
        text-align: center;
    }

    .language {
        padding: 0em .5em;
        border-radius: 4px;
    }

    .layout__language {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 5px;
        width: 100%;
        padding-top: .9em;
        padding-right: .3em;
    }
}

h2 {
    display: flex;
    flex-wrap: wrap;

    @media #{$mobileUpScreen} {
        place-content: center;
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

// Class projects
.vuejs {
    color: rgb(65, 184, 131) !important;
    background-color: rgb(65, 184, 131, 0.2) !important;
}

.sass {
    color: rgb(205, 103, 153) !important;
    background-color: rgb(205, 103, 153, 0.2) !important;
}

.javascript {
    // color: rgb(247, 223, 30) !important;
    color: rgb(255, 166, 0) !important;
    background-color: rgb(247, 223, 30, 0.2) !important;
}

.html {
    color: rgb(227, 78, 38) !important;
    background-color: rgb(227, 78, 38, 0.2) !important;
}

.seoréférencement {
    color: rgb(0, 0, 0) !important;
    background-color: rgb(0, 0, 0, 0.2) !important;
}

.nodejs {
    color: rgb(140, 200, 75) !important;
    background-color: rgb(140, 200, 75, 0.2) !important;
}

.css {
    color: rgb(27, 115, 186) !important;
    background-color: rgb(27, 115, 186, 0.2) !important;
}

.php {
    color: rgb(97, 129, 182) !important;
    background-color: rgb(97, 129, 182, 0.2) !important;
}

.sql {
    color: rgb(172, 185, 193) !important;
    background-color: rgb(172, 185, 193, 0.2) !important;
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