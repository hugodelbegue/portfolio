<script setup>
import ContactLinks from '../components/ContactLinks.vue'
import ReadMore from '../components/ReadMore.vue'
import LegalNotices from '../components/LegalNotices.vue'
</script>

<template>
    <footer>
        <ContactLinks />
        <div class="layout__footer">
            <ReadMore />
            <LegalNotices />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    display: flex;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: .9em;
    padding: 0 10rem;
}

.layout__footer {
    display: flex;
    flex-direction: column;
}
</style>