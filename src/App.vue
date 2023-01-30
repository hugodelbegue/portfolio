<script setup>
import Header from './layouts/Header.vue'
import Main from './layouts/Main.vue'
import Footer from './layouts/Footer.vue'
</script>

<template>
  <div class="layout">
    <div>
      <Header />
      <hr class="line__footer">
    </div>
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/responsive.scss';

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  font-size: 100%;

  @media #{$tabletScreen} {
    font-size: 90%;
  }

  @media #{$mobileDownScreen} {
    font-size: 80%;
  }
}

.line__footer {
  margin: 0 2.5%;
  border: 2px solid var(--color-border-2);
  border-radius: 2px;
}

header {
  padding-left: max(1em, (calc(50% - var(--desktop-up) / 2)));
  padding-right: max(1em, (calc(50% - var(--desktop-up) / 2)));
}

main {
  padding-left: max(3em, (calc(50% - var(--desktop-down) / 2)));
  padding-right: max(3em, (calc(50% - var(--desktop-down) / 2)));
}

footer {
  padding-left: max(5em, (calc(50% - var(--desktop-up) / 2)));
  padding-right: max(5em, (calc(50% - var(--desktop-up) / 2)));
}
</style>
