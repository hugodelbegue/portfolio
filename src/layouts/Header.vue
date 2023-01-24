<script setup>
import Logo from '../components/Logo.vue'
import NavBar from '../components/NavBar.vue'
import AboutMe from '../components/AboutMe.vue'
</script>

<template>
    <header>
        <div class="wrapper">
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
}

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>