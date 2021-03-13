import { createRouter, createWebHistory } from 'vue-router'
import TasksList from '@/views/TasksList.vue'
import TaskDetails from '@/views/TaskDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'TasksList',
    component: TasksList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tasks/:id',
    name: 'TaskDetails',
    // so we can send in the route params as component props
    props: true,
    component: TaskDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
