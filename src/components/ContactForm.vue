
<script setup>
import Form from './items/Form.vue'
import Map from './items/Map.vue';
</script>

<template>
    <div class="contactform">
        <Map />
        <Form />
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/responsive.scss';

.contactform {
    display: flex;
    justify-content: center;
    gap: 2.3em;

    @media #{$tabletScreen} {
        flex-direction: column-reverse;
        gap: 4em;
    }
}
</style>