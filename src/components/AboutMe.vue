<script setup>
import VueWriter from 'vue-writer'
</script>

<template>
    <div class="aboutme">
        <h1>Hello !<br>Je suis&nbsp;<strong class="important">Hugo Delbegue</strong>&nbsp;!<br>Je recherche un poste de
            développeur&nbsp;!
            <VueWriter :array="words" :start="1200" :typeSpeed="150" :delay="1000" :eraseSpeed="50" :intervals="200"
                :iterations='1' />
        </h1>
        <p>
            Dé<span>v</span>eloppeur web j<span>u</span>nior curi<span>e</span>ux et impliqué, <span>j</span>e
            <span>s</span>ouhaite mettre à
            profit mes compétences pour mener à bien mes missions, en
            cultivant de bonnes pratiques et un travail bien fait..
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            words: ["Frontend ..", "< Vue.js /> Frontend !"]
        };
    },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/responsive.scss';

.aboutme {

    h1,
    p {
        text-align: left;

        @media #{$tabletScreen} {
            text-align: center;
        }
    }

    h1 {
        font-size: 1.9em;

        strong {
            font-weight: var(--weight-very-bold);
        }
    }

    p {
        font-size: 1.6em;

        span {
            font-family: 'Courier New', Courier, monospace;
        }
    }
}
</style>