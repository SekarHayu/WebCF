import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import HomeAxios from '../views/HomeAxios.vue';
import Tiket from '../views/Tiket.vue';
import Registrasi from '../views/Registrasi.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/registrasi',
    name: 'Registrasi',
    component: Registrasi,
  },
  {
    path: '/homeaxios',
    name: 'HomeAxios',
    component: HomeAxios,
  },
  {
    path: '/tiket',
    name: 'Tiket',
    component: Tiket,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
