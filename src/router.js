import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/printing',
      name: 'printing',
      component: () => import(/* webpackChunkName: "printing" */ './views/Printing.vue')
    },
    {
      path: '/electronics',
      name: 'electronics',
      component: () => import(/* webpackChunkName: "printing" */ './views/Electronics.vue')
    }
  ]
})
