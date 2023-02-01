<script setup>
import VueWriter from 'vue-writer'
</script>

<template>
    <div class="aboutme">
        <h1>Hello !<br>Je suis&nbsp;<strong class="important">Hugo Delbegue</strong>&nbsp;!</h1>
        <p>
            Je cherche un poste de developpeur
            <VueWriter :array="arr" :typeSpeed="150" :eraseSpeed="50" :iterations='1' :start="1500" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Impedit maxime quas recusandae. Atque excepturi illo illum beatae dignissimos
            inventore mollitia.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: ["Frontend", "Vue.js"]
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
        margin-bottom: .2em;
        font-size: 2.5em;

        strong {
            font-weight: var(--weight-very-bold);
        }
    }

    p {
        font-size: 1.7em;
    }
}
</style>