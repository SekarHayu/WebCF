<template>
    <div class="bg-gray-300 flex justify-center items-center min-h-screen">
      <!-- Header -->
      <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10 flex justify-between items-center">
        <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
        <div class="flex gap-4">
          <a @click="logout" class="text-color-primary font-semibold hover:underline cursor-pointer">Logout</a>
          <router-link to="/forgot" class="text-color-primary font-semibold hover:underline">Lupa Password</router-link>
        </div>
    </header>
  
      <div class="w-full max-w-md mx-auto p-4">
        <div class="grid grid-cols-1 gap-4">
          <!-- Card Beli Tiket (muncul kalau belum ada riwayat) -->
          <div
            
            class="bg-white shadow-md rounded-2xl p-6 text-center"
          >
            <h2 class="text-xl font-bold mb-2">Beli Tiket</h2>
            <p class="text-gray-600 mb-4">Pesan tiket untuk acara Chemicfest sekarang!</p>
            <router-link 
                to="/tiket" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition">
                Beli Sekarang</router-link>
          </div>
          <router-link 
                to="/riwayat" class="text-center px-4 py-2 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition">
                Lihat Riwayat Tiket</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  
  
  
  
  const logout = async () => {
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
    router.push('/');

  } catch (error) {
    console.error('Gagal logout:', error.message);
  }
};

  
  // Jalankan fungsi ketika komponen di-mount
  onMounted(() => {
    
  });
  </script>
  
  <style>
  body {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  