import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth'
import NoteIndex from '../views/Note/Index'
import NoteCreate from '../views/Note/Create'

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
  {
    path: '/note/create',
    name: 'CreateNote',
    component: NoteCreate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
