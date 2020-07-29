import Vue from 'vue'
import Router from 'vue-router'

import commonRouter from './commonRouter/commonRouter'

Vue.use(Router)
const Layout = r => require.ensure([],() => r(require('@/pages/layout.vue')),'Layout');
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children:[
        ...commonRouter,
      ],
    }
  ]
})
export default router
