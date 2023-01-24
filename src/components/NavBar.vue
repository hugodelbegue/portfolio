<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <div class="navbar">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projets</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <a href="">CV</a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    display: flex;
    column-gap: 1rem;
}
</style>