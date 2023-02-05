import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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

export default router
