<script setup>
import SocialLinks from '../components/SocialLinks.vue'
import ReadMore from '../components/ReadMore.vue'
import Legality from '../components/Legality.vue'
</script>

<template>
    <footer>
        <div class="layout__footer">
            <ReadMore />
            <Legality />
        </div>
        <SocialLinks />
    </footer>
</template>

<style lang="scss" scoped>
@import '../assets/scss/responsive.scss';

footer {
    display: flex;
    justify-content: center;
    padding-top: 2.3em;
    padding-bottom: 2.3rem;
    font-size: .9em;

    @media #{$tabletScreen} {
        flex-direction: column-reverse;
        gap: 2em;
    }
}

.layout__footer {
    display: flex;
    flex-direction: column;
}
</style>