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
import Riwayat from '../views/Riwayat.vue';
import Eticket from '../views/Eticket.vue';
import Contact from '../views/Contact.vue';
import defaultLayout from '../../layouts/default.vue';

const routes = [
  {
    path: '',
    name: 'layout',
    component: defaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: '/verifikasiotp',
        name: 'Verifikasiotp',
        component: Verifikasiotp,
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: '/eticket',
        name: 'Eticket',
        component: Eticket,
      },
      {
        path: '/riwayat',
        name: 'Riwayat',
        component: Riwayat,
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
      {
        path: '/forgot',
        name: 'Forgot',
        component: Forgot,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
