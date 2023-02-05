<script setup>
import Form from '@/components/items/Form.vue'
import Map from '@/components/items/Map.vue';
</script>

<template>
    <div class="contactform">
        <Map />
        <Form />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

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