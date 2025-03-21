import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/assets/styles/base.css';  // Import CSS global

const app = createApp(App);
createApp(App).use(router).mount('#app');
AOS.init();
app.use(router);
app.mount('#app');
