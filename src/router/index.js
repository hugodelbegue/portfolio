import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'ProjectView',
      component: () => import('@/views/ProjectView.vue')
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
})

function setHeightSub() {
  // calculates the sum of nav height + footer height
  const navbarHeight = document.getElementsByClassName('nav__part')[0].offsetHeight;
  const footerHeight = document.getElementsByClassName('footer__part')[0].offsetHeight;
  return navbarHeight + footerHeight;
}

function setHeightMain(route, heightSub) {
  // define main height
  const mainHeigth = document.getElementById('main__part');
  route == 'ProjectView' ? mainHeigth.style.minHeight = `calc(100vh - ${heightSub}px)` : mainHeigth.style.minHeight = 'auto';
}

router.beforeEach((to) => {
  // call function on every route change
  const heightSub = setHeightSub();
  setHeightMain(to.name, heightSub)
})

export default router;
