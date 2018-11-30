import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/accommodations',
      name: 'accommodations',
      component: () => import('./views/accommodations/Index.vue')
    },
    {
      path: '/accommodations/:id',
      name: 'accommodation',
      component: () => import('./views/accommodations/Show.vue')
    }
  ]
})
