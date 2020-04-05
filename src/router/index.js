import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPerson from '../views/AddPerson.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AddPerson',
    name: 'AddPerson',
    component: AddPerson
  }
]

const router = new VueRouter({
  routes
})

export default router
