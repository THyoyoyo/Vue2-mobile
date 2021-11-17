import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout/index.vue'
Vue.use(VueRouter)
//    
const routes = [
  {
    path: '/',
    component: layout,
    children: [{
      path: "/",
      name: 'home',
      component: () => import('../views/index.vue'),
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
