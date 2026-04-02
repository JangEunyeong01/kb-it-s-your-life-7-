import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Members from '../pages/Members.vue'
import Videos from '../pages/Videos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/members', component: Members },
  { path: '/videos', component: Videos }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

