<script setup>
import Header from '@/layouts/Header.vue'
import Main from '@/layouts/Main.vue'
import Footer from '@/layouts/Footer.vue'
import ReturnTop from './components/items/ReturnTop.vue';
</script>

<template>
  <div class="layout" :class="showPaint">
    <div :class="bandLeft" style="display: none;"></div>
    <div ref="bandR" :class="bandRight" style="display: none;"></div>
    <div ref="top" class="header__part">
      <Header />
      <hr :class="lineHeader" class="line__header">
    </div>
    <div ref="padding" style="width: 100%;"></div>
    <Main id="main__part" />
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
    },
    lineHeader() {
      return {
        line__hidden: this.$route.name !== 'HomeView'
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
  margin-left: max(var(--body-padding), calc(50% - var(--mobile-up) / 2));
  margin-right: max(var(--body-padding), calc(50% - var(--mobile-up) / 2));
  border: 1px solid var(--color-button);
  border-radius: 2px;
  position: relative;
  opacity: .12;
}

.line__hidden {
  display: none;
}

main {
  padding-left: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
  padding-right: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
}

footer {
  padding-left: max(var(--body-padding), (calc(50% - var(--desktop-up) / 2)));
  padding-right: max(var(--body-padding), (calc(50% - var(--desktop-up) / 2)));
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
    height: 110%;
    width: 100%;
    background: var(--color-background-band-2);
    border-radius: 0% 0% 100% 0%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    display: flex;
    height: 95%;
    width: 100%;
    background: var(--color-background-band-3);
    border-radius: 0% 0% 100% 100%;
  }

  @media #{$mobileUpScreen} {
    height: 14.5em;
    border-radius: 0% 0% 80% 0%;

    &::before {
      border-radius: 0% 0% 80% 0%;
      height: 105%;
    }

    &::after {
      border-radius: 0% 0% 80% 80%;
      height: 102.5%;
    }
  }

  @media only screen and (max-width: 355px) {
    height: 19.5em;
  }

  @media only screen and (max-width: 264px) {
    height: 24.5em;
  }
}

// class for navbar
.elev_band {
  position: fixed !important;
  z-index: 3;

  @media #{$tabletScreen} {
    height: 6em !important;
  }

  @media #{$mobileMenuVisible} {
    z-index: initial;
  }
}

.band__right {
  display: block !important;
  position: absolute;
  height: 12em;
  width: 100%;
  background: var(--color-background-band-1);
  border-radius: 0% 0% 0% 100%;
  animation: animationbandright .5s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    right: 0%;
    display: flex;
    height: 110%;
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
    height: 14.5em;
    border-radius: 0% 0% 0% 80%;

    &::before {
      border-radius: 0% 0% 0% 80%;
      height: 102.5%;
    }

    &::after {
      border-radius: 0% 0% 80% 80%;
      height: 102.5%;
    }
  }

  @media only screen and (max-width: 355px) {
    height: 19.5em;
  }

  @media only screen and (max-width: 264px) {
    height: 24.5em;
  }
}

// Animations
@keyframes animationbandleft {
  0% {
    transform: translateX(-20%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes animationbandright {
  0% {
    transform: translateX(20%);
  }

  100% {
    transform: translateX(0%);
  }
}
</style>
