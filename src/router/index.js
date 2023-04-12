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

router.beforeEach((to) => {
  const navbar = document.getElementsByClassName('nav__part')[0].offsetHeight;
  const footer = document.getElementsByClassName('footer__part')[0].offsetHeight;
  const main = document.getElementById('main__part');
  const sumOfSizes = navbar + footer;
  to.name == 'ProjectView' ? main.style.minHeight = `calc(100vh - ${sumOfSizes}px)` : main.style.minHeight = 'auto';
})

export default router;
