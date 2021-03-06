import Vue from 'vue'
import Router from 'vue-router'
import homeViewComponent from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', //removes hash from the route
  routes: [{
      path: '/',
      name: 'homeViewComponent',
      component: homeViewComponent
    },
    {
      path: '*',
      name: 'errorViewComponent',
      component: () => import('@/views/Error.vue')
    },
    {
      path: '/repo:data',
      name: 'repoViewComponent',
      component: () => import('@/views/Repo.vue')
    },
    {
      path: '/content:data',
      name: 'contentViewComponent',
      component: () => import('@/views/Content.vue')
    },
    {
      path: '/history:data',
      name: 'historyViewComponent',
      component: () => import('@/views/History.vue')
    }
  ]
})