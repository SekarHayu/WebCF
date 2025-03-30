<template>
  <!-- Header -->
  <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 z-10 px-6 lg:px-32 py-4 flex justify-between ">
    <router-link :to="linkTo" id="title" class="text-2xl text-red-500 font-bold cursor-pointer">Chemicfest</router-link>
    <div class="flex gap-4 items-center">
      <!-- Conditional Links -->
      <div v-if="isLoginOrRegister || isDashboard" class="text-color-primary font-semibold ">
        <RouterLink v-if="isLoginOrRegister" to="/" class="text-color-primary font-semibold ">Kembali</RouterLink>
        <div v-if="isDashboard" class="flex gap-4">
          <a @click="logout" class="text-color-primary font-semibold hover:underline cursor-pointer">Logout</a>
          <router-link to="/forgot" class="text-color-primary font-semibold hover:underline">Lupa Password</router-link>
        </div>
      </div>
      <div v-else class="flex gap-4">
        <router-link @click.prevent="handleLogin" to="/login"
          class="text-color-primary font-semibold ">Login</router-link>
        <router-link to="/registrasi" class="text-color-primary font-semibold ">Registrasi</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter(); // use useRouter() for Composition API

    return {
      router
    };
  },
  computed: {
    // Check if the current path is '/login' or '/register'
    isLoginOrRegister() {
      return this.$route.path === '/login' || this.$route.path === '/registrasi';
    },
    // Check if the current path is '/dashboard'
    isDashboard() {
      return this.$route.path === '/dashboard' || this.$route.path === '/tiket' || this.$route.path === '/riwayat';
    },
    linkTo() {
      return this.isDashboard ? '/dashboard' : '/';
    }
  },
  methods: {
    toggleSettings() {
      this.showSettings = !this.showSettings;
    },
    closeSettings() {
      this.showSettings = false;
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    handleLogin() {
      const sessionId = localStorage.getItem('sessionId');
      if (sessionId) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/login');
      }
    },
    async logout() {
      try {
        // Ambil session ID dari userData
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        const sessionId = userData?.sessionId;

        if (!sessionId) {
          console.error('Session ID tidak ditemukan!');
          return;
        }

        // Panggil API logout
        const apiUrl = import.meta.env.VITE_API_BASE;
        const response = await fetch(`${apiUrl}/api/logout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }), // Kirim session ID
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message || 'Logout gagal');

        // Hapus session dari storage
        sessionStorage.removeItem('userData');

        alert('Logout berhasil');

        // Use the router.push() here to navigate to the homepage after logout
        this.router.push('/'); // Use this.router instead of this.$router
      } catch (error) {
        console.error('Gagal logout:', error.message);
      }
    }
  },
};
</script>
