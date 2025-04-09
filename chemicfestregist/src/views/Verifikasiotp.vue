<template>
    <div class="bg-gray-300 flex justify-center items-center min-h-screen text-gray-900">
      <!-- Main Content -->
      <main class="flex flex-col items-center justify-center w-full p-5">
        <h1 class="text-2xl mt-20 font-bold">Chemicfest #9 - Masuk Kembali </h1>
      <!-- Tambahkan id pada form -->
       <!-- Popup OTP -->
        <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 class="text-xl font-bold mb-4">Verifikasi OTP</h2>
            <p class="text-gray-600 mb-2">Masukkan kode OTP yang dikirim ke email Anda:</p>
            <input v-model="otpCode" type="text" placeholder="Masukkan OTP" class="p-2 border rounded mb-4 w-full text-center">
            <button @click="verifyOtp" class="p-2 bg-blue-500 text-white rounded w-full">Verifikasi</button>
        </div>
        </div>

      </main>
  
      <!-- Footer Navigasi -->
    <div class="fixed bottom-0 left-0 w-full bg-gray/100 backdrop-blur-md p-5 flex justify-around items-center z-20">
      <router-link 
                  to="/">
                  <i class="fas fa-home text-1xl"></i>
                </router-link>
      <a href="#" id="cogs"><i class="fas fa-cogs text-1xl"></i></a>
    </div>
  
    <!-- Popup Settings -->
    <div id="scaffold" class="fixed inset-0 bg-black backdrop-blur-md bg-opacity-50 flex items-end transform translate-y-full transition-transform duration-300 z-30 hidden">
      <div class="w-full bg-white p-6 shadow-lg rounded-t-lg">
        <img :src="maskot" alt="Chemicfest Maskot" class="w-2/4 h-auto mx-auto" />
        <h2 class="text-xl font-bold">Pengaturan</h2>
        <p class="text-gray-600">Ini adalah menu pengaturan.</p>
        <button id="closePopup" class="mt-4 w-full bg-red-500 text-white py-2 rounded">Tutup</button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import maskot from '@/assets/img/chemicfest9_maskot.png';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Login',
    data() {
      return {  
        maskot: maskot,
        otpCode: '',  // Tambahan ini
      };
    },
    methods: {
        async verifyOtp() {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE;
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const email = userData?.email;

    // Pastikan email ada
    if (!email) {
      alert('Email tidak ditemukan. Silakan registrasi ulang.');
      return;
    }

    const response = await axios.post(`${apiUrl}/api/validation/verifyotp`, { users: email, otp: this.otpCode });


    if (response.data.data.verified) {
    alert('OTP berhasil diverifikasi!');
    sessionStorage.removeItem("userData"); // Hapus userData
    this.$router.push('/login');
    } else {
      alert('Kode OTP salah!');
      console.error('Terjadi kesalahan:', response.data); // Tampilkan seluruh response data
    }
  } catch (error) {
    console.error('Gagal verifikasi OTP:', error.response ? error.response.data : error); // Log seluruh objek response
    console.error('Status Code:', error.response?.status); // Log status code
    console.error('Error Message:', error.response?.data?.message); // Log pesan dari response
    console.error('Error Stack:', error.stack); // Log stack trace
    alert('Gagal verifikasi OTP: ' + (error.response?.data?.message || 'Terjadi kesalahan'));
  }
},
    mounted() {
      const settingsIcon = document.getElementById("cogs");
      const scaffold = document.getElementById("scaffold");
      const closePopup = document.getElementById("closePopup");
  
      // Mengelola popup scaffold
      settingsIcon.addEventListener("click", function () {
        scaffold.classList.remove("hidden");
        setTimeout(() => { scaffold.classList.remove("translate-y-full"); }, 10);
      });
  
      closePopup.addEventListener("click", function () {
        scaffold.classList.add("translate-y-full");
        setTimeout(() => { scaffold.classList.add("hidden"); }, 300);
      });
  
      scaffold.addEventListener("click", function (event) {
        if (event.target === scaffold) {
          scaffold.classList.add("translate-y-full");
          setTimeout(() => { scaffold.classList.add("hidden"); }, 300);
        }
      });
  
      // Inisialisasi AOS
      AOS.init();
  
      
    },
  },
}
  </script>
  
  
  
  
  <style>
  body {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  