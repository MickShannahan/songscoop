import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // @ts-ignore
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  routes
})

export default router
