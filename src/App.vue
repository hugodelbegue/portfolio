<script setup>
import Header from './layouts/Header.vue'
import Main from './layouts/Main.vue'
import Footer from './layouts/Footer.vue'
</script>

<template>
  <div class="layout">
    <Header />
    <!-- <hr> -->
    <Main />
    <hr class="line__footer">
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
}

.line__footer {
  margin: 0 5%;
  border: 2px solid var(--divider-light-1);
  border-radius: 2px;
}
</style>
