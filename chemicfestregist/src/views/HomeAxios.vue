<template>
    <div class="bg-gray-300 flex flex-col min-h-screen">
      <!-- Header -->
      <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10 ">
        <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
      </header>
  
      <!-- Main Content -->
      <main class="flex flex-col items-center justify-center flex-grow pt-20 px-5">
        <!-- Card -->
        <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          <h2 class="text-xl font-bold mb-4">Halo, Selamat Datang!</h2>
          <div class="space-y-4">
            <button @click="navigateTo('/merchandise')" class="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
              Beli Merchandise
            </button>
            <button @click="navigateTo('/tiket')" class="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">
              Beli Tiket
            </button>
          </div>
        </div>
      </main>
  
      <!-- Bottom Navbar -->
      <div class="fixed bottom-0 left-0 w-full bg-gray/100 backdrop-blur-md p-5 flex justify-around items-center z-20">
        <router-link 
                to="/">
                <i class="fas fa-home text-1xl"></i>
              </router-link>
        <a href="#" @click="toggleSettings"><i class="fas fa-cogs text-1xl"></i></a>
      </div>
  
      <!-- Popup Settings -->
      <div
        v-if="showSettings"
        @click.self="closeSettings"
        class="fixed inset-0 bg-black backdrop-blur-md bg-opacity-50 flex items-end transform transition-transform duration-300 z-30"
      >
        <div class="w-full bg-white p-6 shadow-lg rounded-t-lg">
          <img :src="imageUrl" alt="Chemicfest Maskot" class="w-2/4 h-auto mx-auto" />
          <h2 class="text-xl font-bold">Pengaturan</h2>
          <p class="text-gray-600">Ini adalah menu pengaturan.</p>
          <button @click="logout" class="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">Logout</button>
          <button @click="closeSettings" class="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600">Tutup</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import chemicfestMaskot from '@/assets/img/chemicfest9_maskot.png';
  
  
  
  
  export default {
    name: 'Home',
    data() {
      return {
        showSettings: false,
        imageUrl: chemicfestMaskot,
      };
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
      async logout() {
        const sessionId = localStorage.getItem('sessionId');
        if (!sessionId) {
          alert("Session ID tidak ditemukan!");
          return;
        }
        try {
          const response = await axios.post('/logout', { sessionId });
          alert(response.data.message);
          localStorage.removeItem('sessionId');
          this.$router.push('/login');
        } catch (error) {
          alert(error.response ? error.response.data.message : "Terjadi kesalahan saat logout");
        }
      },
    },
    mounted() {
      // Inisialisasi AOS
      import('aos').then((AOS) => {
        AOS.init();
      });
    },
  };
  </script>
  
  <style>
  body {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  