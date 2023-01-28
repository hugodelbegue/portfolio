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
.contactform {
    display: flex;
    justify-content: center;
    column-gap: 2.3em;
}
</style>