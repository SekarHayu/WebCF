<template>
    <div class="bg-gray-300 flex justify-center items-center min-h-screen">
      <!-- Header -->
      <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10 flex justify-between items-center">
        <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
        <div class="flex gap-4">
            <router-link 
                        to="/" class="text-color-primary font-semibold hover:underline">Logout</router-link>
            <router-link 
                        to="/registrasi" class="text-color-primary font-semibold hover:underline">Lupa Password</router-link>
        </div>
    </header>
  
      <div class="w-full max-w-md mx-auto p-4">
        <div class="grid grid-cols-1 gap-4">
          <!-- Card Beli Tiket (muncul kalau belum ada riwayat) -->
          <div
            v-if="!hasTicketHistory"
            class="bg-white shadow-md rounded-2xl p-6 text-center"
          >
            <h2 class="text-xl font-bold mb-2">Beli Tiket</h2>
            <p class="text-gray-600 mb-4">Pesan tiket untuk acara Chemicfest sekarang!</p>
            <router-link 
                to="/tiket" class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition">
                Beli Sekarang</router-link>
          </div>
  
          <!-- Card Riwayat Tiket (muncul kalau ada riwayat) -->
          <div
            v-else
            class="bg-white shadow-md rounded-2xl p-6 text-center"
          >
            <h2 class="text-xl font-bold mb-2">Riwayat Tiket</h2>
            <p class="text-gray-600 mb-4">Berikut adalah riwayat pembelian tiket Anda:</p>
            <ul class="text-left space-y-2">
              <li
                v-for="(ticket, index) in ticketHistory"
                :key="index"
                class="bg-gray-100 p-3 rounded-md shadow-sm"
              >
                <p class="text-gray-800 font-semibold">Event: {{ ticket.event }}</p>
                <p class="text-gray-600">Tanggal: {{ ticket.date }}</p>
                <p class="text-gray-600">Kode Tiket: {{ ticket.code }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const hasTicketHistory = ref(false);
  const ticketHistory = ref([]);
  
  const checkTicketHistory = async () => {
    try {
      // Ambil base URL dari environment variable (Vite)
      const apiUrl = import.meta.env.VITE_API_BASE;
      const response = await fetch(`${apiUrl}/ticket-history`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Pakai token dari localStorage
        },
      });
  
      // Cek apakah respons sukses
      if (!response.ok) throw new Error('Gagal mengambil riwayat tiket.');
  
      const data = await response.json();
  
      // Update data riwayat tiket jika ada
      if (data.hasHistory) {
        ticketHistory.value = data.tickets;
        hasTicketHistory.value = true;
      } else {
        hasTicketHistory.value = false;
      }
    } catch (error) {
      console.error('Gagal mengambil riwayat tiket:', error.message);
    }
  };
  
  // Jalankan fungsi ketika komponen di-mount
  onMounted(() => {
    checkTicketHistory();
  });
  </script>
  
  <style>
  body {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  