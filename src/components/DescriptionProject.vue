<script setup>
import Language from '@/components/items/Language.vue'
import Button from '@/components/items/Button.vue'
import JSONDATA from '@/components/api/data.json'
</script>

<template>
    <div ref="infos" class="project__description__content">
        <div @click="closeInfos" class="close__infos">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
            </svg>
        </div>
        <div v-for=" dataDescription in projects.projectList">
            <div v-if="dataDescription.title == renderTitle">
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
</template>

<script>
export default {
    props: {
        renderTitle: String
    },
    data() {
        return {
            projects: JSONDATA,
            cleanString(name) {
                return name.replace(/[./\/]/g, "");
            },
            imgUrl(file) {
                return new URL(`../assets/img/previews/${file}`, import.meta.url).href;
            }
        }
    },
    methods: {
        // Close infos projects
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

.project__description__content {
    padding-left: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
    padding-right: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
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

        @media #{$mobileDownScreen} {
            position: absolute;
        }

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

        @media #{$tabletScreen} {
            flex-direction: column;
        }
    }

    .preview__content {
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        gap: 3em;
        margin-left: 4em;

        @media #{$mobileDownScreen} {
            margin-left: 0;
        }
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
                flex-wrap: wrap;

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
        flex-wrap: wrap;
        gap: 2em;
        border-top: 2px solid var(--color-border-2);
        padding-top: 1em;

        @media #{$mobileDownScreen} {
            place-content: center;
        }
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