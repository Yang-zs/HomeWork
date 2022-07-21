import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/advert',
    name: 'advert',
    component: () => import('../views/Advert.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
