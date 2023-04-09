<script setup>
import Project from '@/components/items/Project.vue'
import Language from '@/components/items/Language.vue'
import Button from '@/components/items/Button.vue'
import RenderProjectImg from '@/components/items/RenderProjectImg.vue'
import DescriptionProject from '@/components/items/DescriptionProject.vue'
import JSONDATA from '@/components/api/data.json'
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
            <TransitionGroup name="transition__projects" appear>
                <article v-for="data in allData" :key="data" class="project">
                    <Project ref="load" :title="data.title" @click="onClick(data.title)">
                        <template #title>
                        <div class="layout__title">{{ data.title }}</div>
                        </template>
                        <template #image>
                            <RenderProjectImg :src="imgUrl(data.preview)" :alt="data.title" :title="data.title" />
                        </template>
                        <template #text>
                            <p>Développement web</p>
                            <!-- TODO : choisir le rendu -->
                            <!-- <p v-if="data.frontend">Frontend</p>
                               <p v-if="data.backend">Backend</p> -->
                        </template>
                    </Project>
                </article>
            </TransitionGroup>
        </div>
        <!-- <DescriptionProject /> -->
        <!-- TODO : mettre le DescriptionProject dans un component différent -->
        <div ref="infos" class="project__description__content">
            <div @click="closeInfos" class="close__infos">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                </svg>
            </div>
            <div v-for=" dataDescription in projects.projectList">
                <div v-if="dataDescription.title == this.title">

                    <div class="title__description">
                        <h3>{{ dataDescription.title }}</h3>
                    </div>
                    <div class="project__description__layout">
                        <div class="preview__content">
                            <div class="preview__development">
                                <h4>Développement complet</h4>
                                <p>{{ dataDescription.infos }}</p>
                            </div>
                            <div class="preview__skills">
                                <ul>
                                    <li v-for="achievement in dataDescription.description">{{ achievement.achievement }}
                                    </li>
                                </ul>
                            </div>
                            <div class="preview__infos">
                                <h4>Infos</h4>
                                <div class="layout__category">
                                    <span class="year">Année :&ensp;<p class="text">{{ dataDescription.year }}</p>
                                    </span>
                                    <span class="category">Catégorie :&ensp;
                                        <p v-if="dataDescription.frontend" class="text">Frontend</p>
                                        <p v-if="dataDescription.backend" class="text">Avec backend</p>
                                    </span>
                                </div>
                                <div class="layout__language">
                                    <div class="language" :class="cleanString(lang.name)"
                                        v-for="lang in dataDescription.language">
                                        <Language :language="lang.name" style="box-shadow: 0 0 2px" />
                                    </div>
                                </div>
                            </div>
                            <div class="preview__link">
                                <div v-if="dataDescription.url == ''">
                                    <Button type="button" padding=".75" msg="Indisponible" disabled />
                                </div>
                                <a v-else :href="dataDescription.url" target="_blank">
                                    <Button type="button" padding=".75" msg="Visiter le site" />
                                </a>
                                <div v-if="dataDescription.git == ''">
                                    <Button type="button" padding=".75" msg="Indisponible" disabled />
                                </div>
                                <a v-else :href="dataDescription.git" target="_blank">
                                    <Button type="button" padding=".75" msg="Github" />
                                </a>
                            </div>
                        </div>
                        <div class="preview__img">
                            <img v-for="img in dataDescription.media" :src="imgUrl(img.img)" :alt="dataDescription.title">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: JSONDATA,
            choice: "",
            title: "",
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
        onClick(title) {
            this.openInfos();
            this.setTitle(title);
        },
        setTitle(title) {
            this.title = title;
        },
        // Open and close infos projects
        openInfos() {
            const { infos } = this.$refs;
            infos.classList.add('open');
            infos.classList.remove('close');
            document.body.classList.add('hidden')
        },
        closeInfos() {
            const { infos } = this.$refs;
            infos.classList.add('close');
            setTimeout(() => {
                infos.classList.remove('open');
                document.body.classList.remove('hidden')
            }, 750)
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
        min-height: calc((var(--size-project) + (var(--space-between-project) * 2)) * 2);
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
        transition: border .1s color .1s;

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
            transition: transform .2s;
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
            transition: transform .2s;
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
                transform: rotate(3deg);
                // border: 1px dashed var(--color-text-language);
            }

            &::after {
                transform: rotate(6deg);
                // border: 1px dashed var(--color-text-language);
            }

            & p {
                background-color: var(--color-border-2);
                color: var(--gray);
                opacity: .6;
                z-index: -1;
                top: -18px;
                transition: opacity .2s;
            }
        }
    }

    .project:active {
        cursor: pointer;
        color: var(--color-text-language);
        border: 1px solid var(--color-text-language);

        &::before {
            transform: rotate(3deg);
            // border: 1px dashed var(--color-text-language);
        }

        &::after {
            transform: rotate(6deg);
            // border: 1px dashed var(--color-text-language);
        }

        & p {
            background-color: var(--color-border-2);
            color: var(--gray);
            opacity: .6;
            z-index: -1;
            top: -18px;
            transition: opacity .2s;
        }
    }
}

.layout__title {
    font-size: 1.2em;
    font-weight: var(--weight-bold);
    letter-spacing: .7px;
    text-align: center;
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

.project__description__content {
    padding-left: max(1em, (calc(50% - var(--desktop-down) / 2)));
    padding-right: max(1em, (calc(50% - var(--desktop-down) / 2)));
    padding-top: 1em;
    padding-bottom: 2em;
    z-index: 1;
    background: var(--color-background);
    border-top: 3px solid var(--color-border-2);
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    display: none;
    overflow-y: auto;
    overflow-x: hidden;

    @media #{$tabletScreen} {
        height: -webkit-fill-available;
    }

    .title__description {
        display: flex;
        margin-left: 4em;
        margin-bottom: 1em;
        padding-bottom: .3em;
        border-bottom: 2px solid var(--color-text);
    }

    .close__infos {
        position: fixed;
        display: flex;
        border-radius: 11px;
        background: transparent;
        transition: background .4s;

        svg {
            z-index: 1;
            cursor: pointer;
            border-radius: 11px;
            transition: transform .3s;
        }

        @media #{$desktopDownScreen} {
            &:hover svg {
                transform: translateY(6px);
            }

            &:hover {
                background: var(--color-button);
            }
        }

        &:active svg {
            transform: translateY(10px);
        }

        &:active {
            background: var(--color-button);
        }
    }

    h3 {
        font-size: 2em;
        font-variant-caps: all-small-caps;
        line-height: 1;
    }

    .project__description__layout {
        display: flex;
        place-content: space-between;
        gap: 5em;
        margin-left: 4em;

        @media #{$tabletScreen} {
            flex-direction: column;
        }
    }

    .preview__content {
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        gap: 3em;
    }

    .preview__development {
        p {
            margin-top: .3em;
        }
    }

    .preview__skills {
        ul {
            padding-left: 0;
            display: flex;
            flex-direction: column;
            gap: .7em;
        }

        li {
            display: inline-flex;
            align-items: center;
            line-height: 1;

            &:before {
                content: url(@/assets/img/designs/check.svg);
                color: var(--color-button);
                margin-right: .8em;
            }
        }
    }

    .preview__infos {
        h4 {
            margin-bottom: .8em;
        }

        .layout__category {
            display: flex;
            flex-direction: column;
            gap: .5em;
            margin-bottom: 1.8em;

            span.year {
                display: inline-flex;

                &::before {
                    content: url(@/assets/img/designs/calendar.svg);
                    color: var(--color-button);
                    margin-right: .8em;
                }

                .text {
                    margin-top: 0;
                    font-weight: var(--weight-bold);
                }
            }

            span.category {
                display: inline-flex;

                &::before {
                    content: url(@/assets/img/designs/tags-fill.svg);
                    color: var(--color-button);
                    margin-right: .8em;
                }

                .text {
                    margin-top: 0;
                    font-weight: var(--weight-bold);
                }
            }
        }


        .language {
            padding: 0em .5em;
            border-radius: 4px;
        }

        .layout__language {
            display: flex;
            flex-wrap: wrap-reverse;
            gap: 10px;
            width: 60%;
        }
    }

    .preview__link {
        display: flex;
        gap: 2em;
        border-top: 2px solid var(--color-border-2);
        padding-top: 1em;
    }

    .preview__img {
        display: flex;
        flex-direction: column;
        place-items: flex-end;
        gap: 1em;

        @media #{$tabletScreen} {
            flex-direction: row;
            place-content: center;
            flex-wrap: wrap;
        }

        img {
            width: 100%;
            max-width: 400px;
            height: auto;
        }
    }
}

// Class infos
.open {
    display: block !important;
    animation: slideOpen 1s ease;
}

.close {
    animation: slideClose 1s ease;
    animation-fill-mode: both;
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

@keyframes slideOpen {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0%);
    }
}

@keyframes slideClose {
    from {
        transform: translateY(0%);
    }

    to {
        transform: translateY(100%);
        visibility: hidden;
    }
}

// Languages projects
.vuejs {
    color: rgb(65, 184, 131);
    background-color: rgb(65, 184, 131, 0.2);
}

.sass {
    color: rgb(205, 103, 153);
    background-color: rgb(205, 103, 153, 0.2);
}

.javascript {
    color: rgb(255, 166, 0);
    background-color: rgb(247, 223, 30, 0.2);
}

.html {
    color: rgb(227, 78, 38);
    background-color: rgb(227, 78, 38, 0.2);
}

.seoréférencement {
    color: rgb(0, 0, 0);
    background-color: rgb(0, 0, 0, 0.2);
}

.nodejs {
    color: rgb(140, 200, 75);
    background-color: rgb(140, 200, 75, 0.2);
}

.css {
    color: rgb(27, 115, 186);
    background-color: rgb(27, 115, 186, 0.2);
}

.php {
    color: rgb(97, 129, 182);
    background-color: rgb(97, 129, 182, 0.2);
}

.sql {
    color: rgb(172, 185, 193);
    background-color: rgb(172, 185, 193, 0.2);
}
</style>