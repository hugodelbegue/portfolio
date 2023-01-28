<script setup>
import SocialLinks from '../components/SocialLinks.vue'
import ReadMore from '../components/ReadMore.vue'
import LegalNotices from '../components/LegalNotices.vue'
</script>

<template>
    <footer>
        <SocialLinks />
        <div class="layout__footer">
            <ReadMore />
            <LegalNotices />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    display: flex;
    justify-content: center;
    padding-top: 2.3em;
    padding-bottom: 2.3rem;
    font-size: .9em;
}

.layout__footer {
    display: flex;
    flex-direction: column;
}
</style>