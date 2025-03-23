import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import HomeAxios from '../views/HomeAxios.vue';
import Tiket from '../views/Tiket.vue';
import Registrasi from '../views/Registrasi.vue';
import Dashboard from '../views/Dashboard.vue';
import Forgot from '../views/Forgot.vue';
import Verifikasiotp from '../views/Verifikasiotp.vue';
import Verifikasiforgot from '../views/Verifikasiforgot.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/verifikasiotp',
    name: 'Verifikasiotp',
    component: Verifikasiotp,
  },
  {
    path: '/verifikasiforgot',
    name: 'Verifikasiforgot',
    component: Verifikasiforgot,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
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
