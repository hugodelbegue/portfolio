<script setup>
import VueWriter from 'vue-writer'
</script>

<template>
    <div class="aboutme">
        <h1>Hello !<br>Je suis&nbsp;<strong class="important">Hugo Delbegue</strong>&nbsp;!<br>Je recherche un poste de
            développeur&nbsp;!
            <VueWriter :array="words" :start="1200" :typeSpeed="150" :delay="800" :eraseSpeed="50" :intervals="200"
                :iterations='1' />
        </h1>
        <p>
            Dé<span class="letter">v</span>eloppeur web j<span class="letter">u</span>nior curi<span
                class="letter">e</span>ux et impliqué, <span class="letter">j</span>e
            <span class="letter">s</span>ouhaite mettre à
            profit mes compétences pour mener à bien mes missions, en
            cultivant de bonnes pratiques et un travail bien fait..
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            words: ["Frontend &..", "< Vue.js /> Frontend !"]
        };
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

.aboutme {

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

        .letter {
            font-family: 'Courier New', Courier, monospace;
            color: var(--color-input);
        }
    }
}
</style>