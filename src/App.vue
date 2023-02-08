<script setup>
import Header from '@/layouts/Header.vue'
import Main from '@/layouts/Main.vue'
import Footer from '@/layouts/Footer.vue'
</script>

<template>
  <div class="layout" :class="showPaint">
    <div class="header__part">
      <Header />
      <hr class="line__header">
    </div>
    <Main />
    <div class="footer__part">
      <Footer />
      <div class="layout__band">
        <Transition name="transition__band__left" appear>
          <div v-if="$route.name == 'ContactView'" class="band__left"></div>
        </Transition>
        <Transition name="transition__band__right" appear>
          <div v-if="$route.name == 'ContactView'" class="band__right"></div>
        </Transition>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    showPaint() {
      return {
        paint: this.$route.name == 'HomeView'
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

// Label background
.paint {
  background-image: url(@/assets/img/designs/label.svg);
  background-repeat: no-repeat;
  background-size: 25vh;
  background-position-x: right;
  background-position-y: top;
}

// Colored stripes footer
.layout__band {
  position: relative;
  width: 100%;

  .band__left {
    z-index: -1;
    position: absolute;
    bottom: 0%;
    width: 100%;
    height: 14em;
    background: var(--color-background-band-1);
    border-radius: 0% 100% 0% 0%;

    &::before {
      content: "";
      position: absolute;
      bottom: 0%;
      display: flex;
      height: 120%;
      width: 100%;
      background: var(--color-background-band-2);
      border-radius: 0% 100% 0% 0%;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0%;
      display: flex;
      width: 100%;
      height: 115%;
      background: var(--color-background-band-3);
      border-radius: 100% 100% 0% 0%;
    }

    @media #{$tabletScreen} {
      height: 21em;
    }

    @media #{$mobileMediumScreen} {
      height: 24em;
    }

    @media #{$mobileDownScreen} {
      height: 30em;
    }
  }

  .band__right {
    z-index: -2;
    position: absolute;
    bottom: 0%;
    right: 0%;
    height: 15em;
    width: 100%;
    background: var(--color-background-band-1);
    border-radius: 100% 0% 0% 0%;

    &::before {
      content: "";
      position: absolute;
      bottom: 0%;
      right: 0%;
      display: flex;
      height: 115%;
      width: 60%;
      background: var(--color-background-band-2);
      border-radius: 100% 0% 0% 0%;
      transition: .1s;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0%;
      right: 0%;
      display: flex;
      height: 120%;
      width: 70%;
      background: var(--color-background-band-3);
      border-radius: 100% 100% 0% 0%;
    }

    @media #{$tabletScreen} {
      height: 22em;
    }

    @media #{$mobileMediumScreen} {
      height: 25em;
    }

    @media #{$mobileDownScreen} {
      height: 31em;
    }
  }
}

// Transitions
.transition__band__left-enter-active,
.transition__band__left-leave-active,
.transition__band__right-enter-active,
.transition__band__right-leave-active {
  transition: transform .8s ease;
}

.transition__band__left-enter-from,
.transition__band__left-leave-to {
  transform: translateX(-50%);
}

.transition__band__right-enter-from,
.transition__band__right-leave-to {
  transform: translateX(50%);
}
</style>
