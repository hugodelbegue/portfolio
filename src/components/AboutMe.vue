<script setup>
import VueWriter from 'vue-writer'
</script>

<template>
    <div class="aboutme">
        <h1>Hello !<br>Je suis&nbsp;<strong class="important">Hugo Delbegue</strong>&nbsp;!<br>Je recherche un poste de
            développeur&nbsp;!
            <VueWriter :array="words" :start="time" :typeSpeed="150" :delay="800" :eraseSpeed="50" :intervals="200"
                :iterations='1' />
        </h1>
        <p>
            Développeur web junior curieux et impliqué, je souhaite mettre à profit mes compétences pour mener à bien
            mes missions, en cultivant de <strong>bonnes pratiques</strong> et un <strong>travail bien fait</strong>..
        </p>
    </div>
</template>

<script>
export default {
    data() {
        if (window.innerWidth < 520) {
            return {
                words: ["Frontend &..", "< Vue.js /> Frontend !"],
                time: 1200
            }
        }
        return {
            words: ["Frontend &..", "< Vue.js /> Frontend !"],
            time: 5800
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.aboutme {
    width: 60%;

    @media #{$tabletScreen} {
        width: initial;
    }

    h1,
    p {
        text-align: left;

        @media #{$tabletScreen} {
            text-align: center;
        }
    }

    h1 {
        font-size: 1.6em;

        strong {
            font-weight: var(--weight-very-bold);
        }
    }

    p {
        font-size: 1.5em;

        strong {
            font-weight: var(--weight-bold);
        }
    }
}
</style>