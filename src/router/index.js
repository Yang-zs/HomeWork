import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/advert',
    name: 'advert',
    component: () => import('../views/Advert.vue'),
  },
  {
    path:'/',
    name:'file-upload',
    component: () => import('../views/test/FileUpload.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
