<template>
  <div class="bg-gray-300 flex justify-center items-center min-h-screen">
    <!-- Header -->
    <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10">
      <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center justify-center w-full p-5">
      <h1 class="text-2xl mt-20 font-bold">Chemicfest #9 - Masuk Kembali </h1>
    <!-- Tambahkan id pada form -->
    <form id="loginForm" class="max-w-lg mt-10 mb-40">
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
            Email
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Contoh : gunturdeveloper@gmail.com">
          <p class="text-gray-600 text-xs italic">Harap masukkan email yang valid!</p>
        </div>
      </div>
      
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Password
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="*************">
          <p class="text-gray-600 text-xs italic">Harap masukkan password!</p>
        </div>
      </div>
      
      <div class="w-full mt-5">
        <!-- Ubah ke button type submit -->
        <button type="submit" class="p-4 bg-white/50 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-white/70 block text-center">
          Masuk Sekarang!
        </button>
      </div>
    </form>
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
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {  
      maskot: maskot,
    };
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

    // Ambil data dari Session Storage (jika ada)
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData?.isLoggedIn) {
      alert("Selamat datang kembali, " + userData.email + "!");
      this.$router.push('/dashboard');
    }

    // Menangani submit form login
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("grid-email").value;
      const password = document.getElementById("grid-password").value;

      try {
        // Request login ke backend
        const apiUrl = import.meta.env.VITE_API_BASE;
        const response = await axios.post(`${apiUrl}/api/login`, { 
          users: email,
          password: password,
        });

        if (response.data.code === 200) {
          alert("Login berhasil! Selamat datang, " + email + "!");
          // Simpan data ke Session Storage
          sessionStorage.setItem("userData", JSON.stringify({ 
            email, 
            isLoggedIn: true, 
            sessionId: response.data.sessionId, 
            expiredAt: response.data.expiredAt 
          }));
          this.$router.push('/dashboard');
        } else {
          alert("Login gagal: " + response.data.message);
        }
      } catch (error) {
        console.error("Terjadi kesalahan:",  error.response ? error.response.data : error); // Log seluruh objek response
        console.error('Status Code:', error.response?.status); // Log status code
        console.error('Error Message:', error.response?.data?.message); // Log pesan dari response
        console.error('Error Stack:', error.stack); // Log stack trace
        alert("Terjadi kesalahan server atau login gagal. Silakan coba lagi.");
      }
    });
  },
}
</script>





<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
