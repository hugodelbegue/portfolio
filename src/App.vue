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
    <div>
      <hr class="line__footer">
      <Footer />
    </div>

  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
}

.line__footer {
  margin: 0 2.5%;
  border: 2px solid var(--divider-light-1);
  border-radius: 2px;
}

header {
  padding-left: max(1em, (calc(50% - var(--desktop-up) / 2)));
  padding-right: max(1em, (calc(50% - var(--desktop-up) / 2)));
}

main {
  padding-left: max(1em, (calc(50% - var(--desktop-down) / 2)));
  padding-right: max(1em, (calc(50% - var(--desktop-down) / 2)));
}

footer {
  padding-left: max(5em, (calc(50% - var(--desktop-up) / 2)));
  padding-right: max(5em, (calc(50% - var(--desktop-up) / 2)));
}
</style>
