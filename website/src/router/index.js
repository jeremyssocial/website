import { createRouter, createWebHistory } from 'vue-router';
import MOF from '../views/MOF.vue';

const routes = [
  {
    path: '/MOF',
    name: 'MOF',
    component: MOF,
  },
  {
    path: '/links/MOF.html',
    name: 'MOF.html',
    component: MOF,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
