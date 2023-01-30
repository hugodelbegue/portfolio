<template>
    <div class="googlemaps">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44994.26705427905!2d5.680520594819055!3d45.18422794911086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48bd689be6f%3A0x618c10cd6e995398!2sGrenoble!5e0!3m2!1sfr!2sfr!4v1674730493969!5m2!1sfr!2sfr"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../assets/scss/responsive.scss';

.googlemaps {
    border: 3px solid var(--divider-light-1);
    display: flex;
    align-items: center;
    flex: 1 1 50%;

    @media #{$tabletScreen} {
        margin: 2em;
    }

    @media #{$mobileUpScreen} {
        margin: 0;
        margin-top: 2em;
    }

    iframe {
        width: 100%;
        height: 100%;

        @media #{$tabletScreen} {
            height: auto;
            aspect-ratio: 1/1;
        }
    }
}
</style>