import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth'
import NoteIndex from '../views/Note/Index'

const routes = [
  {
    path: '/login',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/note',
    name: 'Note',
    component: NoteIndex
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
