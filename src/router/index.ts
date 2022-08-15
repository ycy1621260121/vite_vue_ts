import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/view/home/home.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;