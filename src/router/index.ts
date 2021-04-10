import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Template from '../views/Template.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Template,
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: () => import(/* webpackChunkName: "Template" */ '../views/Template.vue')
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: () => import(/* webpackChunkName: "Template" */ '../views/Template.vue')
  },
  {
    path: '/plataformas',
    name: 'Plataformas',
    component: () => import(/* webpackChunkName: "Template" */ '../views/Template.vue')
  },
  {
    path: '/servicos',
    name: 'Servicos',
    component: () => import(/* webpackChunkName: "Template" */ '../views/Template.vue')
  },
  {
    path: '/contactos',
    name: 'Contactos',
    component: () => import(/* webpackChunkName: "Template" */ '../views/Template.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router