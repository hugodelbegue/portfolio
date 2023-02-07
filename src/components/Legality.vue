<script setup>
import IconFingerprint from '@/components/icons/IconFingerprint.vue'
import Mentions from '@/components/Mentions.vue'
</script>

<template>
    <div class="legality">
        <div class="copyright">
            <p>© Copyright 2023 - Hugo DELBEGUE | <a :class="classLink" @click="openMentions">Mentions Légales</a> | <a
                    :class="classLink" href="https://www.infomaniak.com/fr/ecologie" target="_blank">Hébergé par
                    Infomaniak</a>.
                <i>
                    <IconFingerprint />
                </i>
                Site hébergé de manière écologique, afin d'atténuer son impact sur l'environnement.
            </p>
        </div>
        <div ref="mentions" class="mentions">
            <div class="layout__mentions">
                <div class="header__mentions">
                    <h2>Mentions légales</h2>
                    <button @click="closeMentions" class="close__button">Fermer</button>
                </div>
                <Mentions />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openMentions() {
            const { mentions } = this.$refs;
            mentions.style.display = "block";
            document.body.style.overflow = "hidden";
        },
        closeMentions() {
            const { mentions } = this.$refs;
            mentions.style.display = "none";
            document.body.style = "initial";
        }
    },
    computed: {
        classLink() {
            return {
                important__hover: this.$route.name == "ContactView"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.legality {
    font-size: .8em;

    a {
        cursor: pointer;
    }

    p {
        text-align: justify;
    }
}

svg {
    width: 1em;
    height: 1em;
}

.mentions {
    display: none;
    background-color: transparent;
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 20em;
    padding-right: max(1em, (calc(50% - var(--mobile-up) / 2)));
    padding-left: max(1em, (calc(50% - var(--mobile-up) / 2)));
}

.layout__mentions {
    background: var(--parchment);
    border-radius: 5px;
    max-height: 100%;
}

.header__mentions {
    display: flex;
    justify-content: space-between;
    padding: 1.5em;
    border-bottom: 2px solid var(--line-light);

    h2 {
        color: var(--text-light);
        font-size: 1.5em;
        margin: 0;
    }

    .close__button {
        cursor: pointer;
        font-variant-caps: all-small-caps;
        border: none;
        background: var(--line-light);
        border-radius: 2px;
    }
}
</style>