import { createRouter, createWebHashHistory } from 'vue-router'
import PorfolioView from '../components/TheLayout.vue';
// import NotFound from '../views/404View.vue';


const router = createRouter({
  history: createWebHashHistory(),
  routes: [ 
    //{path:'/404', component: NotFound },
    //{path:'/:catchAll(.*)', redirect: '/404' },
    {
      path: '/',
      name: 'home',
      component: PorfolioView
    },
    { 
        path: '/calculator',
        name: 'calculator',
        component: () => import('../components/calculator/TheCalculator.vue')
    }
  ]
})

export default router
