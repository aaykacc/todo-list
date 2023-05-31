import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddProject',
      component: () => import('../views/AddProject.vue')
    },
    {
      path: '/projects/:id',
      name: 'EditProject',
      component: () => import('../views/EditProject.vue'),
      props: true
    }
  ]
})

export default router
