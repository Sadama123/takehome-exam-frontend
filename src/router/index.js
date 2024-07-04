import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../views/Signin.vue'

const routes = [
  {
    path: '/',
    name: 'sigin',
    component: Signin
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/Products.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
