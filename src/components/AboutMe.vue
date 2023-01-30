<script setup>

</script>

<template>
    <div class="aboutme">
        <h1>Hugo Delbegue</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, blanditiis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Impedit maxime quas recusandae. Atque excepturi illo illum beatae dignissimos
            inventore mollitia.
        </p>
    </div>
</template>

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
    }

    p {
        font-size: 1.5em;
    }
}
</style>