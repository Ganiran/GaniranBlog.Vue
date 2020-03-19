import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import Formvuex  from '../views/FormVuex.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/Form',
    name:'From',
    component:Form
  },
  {
    path:'/FormVuex',
    name:'Formvuex',
    component:Formvuex
  }
]

const router = new VueRouter({
  routes
})

export default router
