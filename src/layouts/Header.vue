<script setup>
import Logo from '../components/items/Logo.vue'
import NavBar from '../components/NavBar.vue'
import AboutMe from '../components/AboutMe.vue'
</script>

<template>
    <header>
        <div class="layout__header">
            <Logo />
            <NavBar />
        </div>
        <AboutMe />
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
}

.layout__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>