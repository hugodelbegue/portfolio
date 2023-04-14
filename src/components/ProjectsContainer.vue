<script setup>
import Project from '@/components/items/Project.vue'
import Button from '@/components/items/Button.vue'
import RenderProjectImg from '@/components/items/RenderProjectImg.vue'
import JSONDATA from '@/components/api/data.json'
// import DescriptionProject from '@/components/DescriptionProject.vue'
</script>

<template>
    <h2 :class="classColor">Mes&nbsp;<strong class="important">projets</strong>&nbsp;web</h2>
    <div class="projects_container">
        <div class="selectors">
            <Button type="button" padding=".5" msg="Tous" @click="showAll" />
            <Button type="button" padding=".5" msg="Frontend" @click="showFrontend" />
            <Button type="button" padding=".5" msg="Avec Backend" @click="showBackend" />
        </div>
        <div class="layout__project">
            <TransitionGroup name="transitionProjects" appear>
                <article v-for="data in allData" :key="data" class="project">
                    <Project :title="data.title" @click="onClick(data.title)">
                        <template #title>
                            <div class="layout__title">{{ data.title }}</div>
                        </template>
                        <template #image>
                            <RenderProjectImg :src="imgUrl(data.preview)" :alt="data.title" :title="data.title" />
                        </template>
                        <template #text>
                            <!-- TODO : peut-être modifier suivant le rendu choisi -->
                            <p v-if="data.frontend">Développement web</p>
                            <p v-if="data.backend">Développement web</p>
                        </template>
                    </Project>
                </article>
            </TransitionGroup>
        </div>
        <!-- <DescriptionProject ref="description" :renderTitle="this.render" /> -->
        <AsyncDescriptionProject ref="description" :renderTitle="render" />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const AsyncDescriptionProject = defineAsyncComponent(() => import('@/components/DescriptionProject.vue'));
export default {
    components: {
        AsyncDescriptionProject,
    },
    data() {
        return {
            projects: JSONDATA,
            choice: "",
            render: " ",
            cleanString(name) {
                return name.replace(/[./\/]/g, "");
            },
            imgUrl(file) {
                return new URL(`../assets/img/previews/${file}`, import.meta.url).href;
            }
        }
    },
    computed: {
        allData() {
            return this.projects.projectList.filter((items) => {
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
        classColor() {
            return {
                important__color: this.$route.name == "ProjectView"
            }
        }
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
        },
        onClick(render) {
            this.openInfos();
            this.setTitle(render);
        },
        setTitle(render) {
            this.render = render;
        },
        // Open infos projects
        openInfos() {
            const { infos } = this.$refs.description.$refs;
            infos.classList.add('open');
            infos.classList.remove('close');
            document.body.classList.add('hidden')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.projects_container {
    .layout__project {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--space-between-project);
    }

    .project {
        position: relative;
        display: flex;
        background-color: var(--color-background-project);
        max-width: var(--size-project);
        max-height: var(--size-project);
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        border-radius: 3px;
        border: 1px solid var(--color-border-1);
        box-shadow: 0 2px 4px var(--color-border-1);
        transition: border .2s;

        @media #{$mobileDownScreen} {
            aspect-ratio: auto;
        }

        &::before {
            z-index: -1;
            content: "";
            position: absolute;
            top: 2px;
            left: 2px;
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
            box-shadow: 0 2px 4px var(--color-border-1);
            border-radius: 3px;
            background: var(--color-background-project-back);
            border: 1px solid var(--color-border-1);
            transition: transform .2s, background .3s;
            transform: rotate(-2.5deg);

            @media #{$mobileDownScreen} {
                aspect-ratio: auto;
                height: -webkit-fill-available;
            }
        }

        &::after {
            z-index: -2;
            content: "";
            position: absolute;
            top: 3px;
            left: 2px;
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
            box-shadow: 0 2px 4px var(--color-border-1);
            border-radius: 3px;
            background: var(--color-background-project-back);
            border: 1px solid var(--color-border-1);
            transition: transform .2s, background .3s;
            transform: rotate(.5deg);

            @media #{$mobileDownScreen} {
                aspect-ratio: auto;
                height: -webkit-fill-available;
            }
        }

        p {
            margin: auto;
            width: fit-content;
            padding: 0 .3em;
            font-variant-caps: all-small-caps;
            border-radius: 6px;
            background-color: var(--color-background-language);
            color: var(--color-text-language);
            font-size: 11px;
            position: relative;
            top: -17px;
            right: -67px;

            @media #{$mobileDownScreen} {
                right: 0;
            }
        }
    }

    @media #{$desktopDownScreen} {
        .project:hover {
            cursor: pointer;
            color: var(--color-text-language);
            border: 1px solid var(--color-text-language);

            &::before {
                transform: rotate(0deg) translate(-13px, -13px);
                // background: rgba(218, 97, 32, 0.6);
            }

            &::after {
                transform: rotate(0deg) translate(9px, 9px);
                // background: rgba(218, 97, 32, 0.6);
            }

            & p {
                background-color: var(--color-border-2);
                color: var(--gray);
                animation: label .2s ease both;

                @media #{$mobileDownScreen} {
                    z-index: -1;
                    animation: none;
                }
            }
        }
    }

    .project:active {
        cursor: pointer;
        color: var(--color-text-language);
        border: 1px solid var(--color-text-language);

        &::before {
            transform: rotate(-4deg) translate(-9px, -9px);
        }

        &::after {
            transform: rotate(4deg) translate(6px, 3px);
        }

        & p {
            background-color: var(--color-border-2);
            color: var(--gray);
            animation: label .2s ease both;

            @media #{$mobileDownScreen} {
                z-index: -1;
                animation: none;
            }
        }
    }
}

.layout__title {
    font-size: 1.1em;
    font-weight: var(--weight-bold);
    letter-spacing: .7px;
    text-align: left;
}

h2 {
    display: flex;
    flex-wrap: wrap;
    position: relative;

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

// Animation
@keyframes label {
    from {
        z-index: -1;
        top: -17px;
        right: -67px;
    }

    to {
        z-index: -1;
        opacity: .6;
        top: -10px;
        right: -95px;
        transform: rotate(10deg);
    }
}

// Transitions
.transitionProjects-move,
.transitionProjects-enter-active,
.transitionProjects-leave-active {
    transition: all 0.5s ease !important;
}

.transitionProjects-enter-from,
.transitionProjects-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>