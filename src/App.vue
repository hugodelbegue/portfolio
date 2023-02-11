<script setup>
import Header from '@/layouts/Header.vue'
import Main from '@/layouts/Main.vue'
import Footer from '@/layouts/Footer.vue'
import ReturnTop from './components/items/ReturnTop.vue';
</script>

<template>
  <div class="layout" :class="showPaint">
    <div :class="bandLeft" style="display: none;"></div>
    <div :class="bandRight" style="display: none;"></div>
    <div ref="top" class="header__part">
      <Header />
      <hr class="line__header">
    </div>
    <Main />
    <div class="footer__part">
      <Footer />
      <ReturnTop @click="top" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // Return to the top
    top() {
      const { top } = this.$refs;
      top.scrollIntoView({ behavior: 'smooth' });
    }
  },
  computed: {
    showPaint() {
      return {
        paint: this.$route.name == 'HomeView' || this.$route.name == 'ContactView'
      }
    },
    bandLeft() {
      return {
        band__left: this.$route.name == 'ProjectView'
      }
    },
    bandRight() {
      return {
        band__right: this.$route.name == 'ProjectView'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/responsive.scss';

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

  @media #{$mobileMediumScreen} {
    font-size: 80%;
  }
}

.line__header {
  margin-left: max(5em, calc((50% - var(--desktop-up) / 2) + 4em));
  margin-right: max(5em, calc((50% - var(--desktop-up) / 2) + 5em));
  border: 2px solid var(--color-border-2);
  border-radius: 2px;
  position: relative;
}

header {
  padding-left: max(1em, (calc(50% - var(--desktop-up) / 2)));
  padding-right: max(1em, (calc(50% - var(--desktop-up) / 2)));
  position: relative;
}

main {
  padding-left: max(3em, (calc(50% - var(--desktop-down) / 2)));
  padding-right: max(3em, (calc(50% - var(--desktop-down) / 2)));
}

footer {
  padding-left: max(5em, (calc(50% - var(--desktop-up) / 2)));
  padding-right: max(5em, (calc(50% - var(--desktop-up) / 2)));

  @media #{$tabletScreen} {
    padding-left: 2em;
    padding-right: 2em;
  }
}

// Label background
.paint {
  background-image: url(@/assets/img/designs/label.svg);
  background-repeat: no-repeat;
  background-size: 25vh;
  background-position-x: right;
  background-position-y: top;
}

// Colored stripes footer
.header__part {
  position: relative;
}

.band__left {
  display: block !important;
  position: absolute;
  height: 17em;
  width: 100%;
  background: var(--color-background-band-1);
  border-radius: 0% 0% 100% 0%;
  animation: animationbandleft .8s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    display: flex;
    height: 120%;
    width: 100%;
    background: var(--color-background-band-2);
    border-radius: 0% 0% 100% 0%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    display: flex;
    width: 100%;
    height: 115%;
    background: var(--color-background-band-3);
    border-radius: 0% 0% 100% 100%;
  }

  @media #{$mobileUpScreen} {
    height: 18em;
  }

  @media only screen and (max-width: 391px) {
    height: 23.5em;
  }

  @media only screen and (max-width: 300px) {
    height: 29.5em;
  }
}

.band__right {
  display: block !important;
  position: absolute;
  height: 12em;
  width: 100%;
  background: var(--color-background-band-1);
  border-radius: 0% 0% 0% 100%;
  animation: animationbandright .8s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    right: 0%;
    display: flex;
    height: 115%;
    width: 60%;
    background: var(--color-background-band-2);
    border-radius: 0% 0% 0% 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    right: 0%;
    display: flex;
    height: 120%;
    width: 70%;
    background: var(--color-background-band-3);
    border-radius: 0% 0% 100% 100%;
  }

  @media #{$mobileUpScreen} {
    height: 18em;
  }

  @media only screen and (max-width: 391px) {
    height: 23.5em;
  }

  @media only screen and (max-width: 300px) {
    height: 29.5em;
  }
}

// Animations
@keyframes animationbandleft {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes animationbandright {
  0% {
    transform: translateX(50%);
  }

  100% {
    transform: translateX(0%);
  }
}
</style>
