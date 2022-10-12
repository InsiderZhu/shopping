import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
/* import ProductDetail from '../views/ProductDetail.vue' */

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
   {
    path: '/List',
    name: 'List',
    component: List
  },
/*     {
    path: '/ProductDetail/:id',
    name: 'ProductDetail',
    component: ProductDetail
  }, */
  {
    path: '/ProductDetail/:id',
    name: 'ProductDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetail.vue')
  },

  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
