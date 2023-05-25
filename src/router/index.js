import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const NotFoundView = () => import('../views/404.vue')

const AboutView = () => import('../views/AboutView.vue')
const SkilsView = () => import('../views/SkilsView.vue')
const PorfolioView = () => import('../views/PorfolioView.vue')
const ContactView = () => import('../views/ContactView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: NotFoundView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkilsView
    },
    {
      path: '/porfolio',
      name: 'porfolio',
      component: PorfolioView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
