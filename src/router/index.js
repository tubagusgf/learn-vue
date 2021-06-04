import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth'
import NoteIndex from '../views/Note/Index'
import NoteCreate from '../views/Note/Create'
import NoteShow from '../views/Note/Show'
import NoteEdit from '../views/Note/Edit'

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
  {
    path: '/note/:id/show',
    name: 'ShowNote',
    component: NoteShow
  },
  {
    path: '/note/:id/edit',
    name: 'EditNote',
    component: NoteEdit
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
