<template>
  <div class="bg-gray-300 flex justify-center items-center min-h-screen">
    <!-- Header -->
    <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10">
      <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center justify-center w-full p-5">
      <h1 class="text-2xl mt-20 font-bold">Chemicfest #9 - Pendaftaran Akun</h1>
      <!-- Gunakan @submit.prevent untuk menangani form submission -->
      <form id="registerForm" class="max-w-lg mt-10 mb-40" @submit.prevent="handleRegister">
        <!-- Nama Lengkap -->
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full md:w-2/2 px-3 mb-3 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Nama Lengkap
            </label>
            <input class="mb-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Contoh: Guntur Developer">
            <p class="text-gray-600 text-xs italic">Harap masukkan nama yang valid!</p>        
          </div>
        </div>
        <!-- Username -->
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-username">
              Username
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-username" type="text" placeholder="Contoh: gunturdev">
            <p class="text-gray-600 text-xs italic">Harap masukkan username yang valid!</p>
          </div>
        </div>
        <!-- Email -->
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
              Email
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="Contoh: gunturdeveloper@gmail.com">
            <p class="text-gray-600 text-xs italic">Harap masukkan email yang valid dan aktif!</p>
          </div>
        </div>
        <!-- Password -->
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Password
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-password" type="password" placeholder="*****">
            <p class="text-gray-600 text-xs italic">Harap masukkan password yang kuat!</p>
          </div>
        </div>
        <!-- Konfirmasi Password -->
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-checkpassword">
              Konfirmasi Password
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-checkpassword" type="password" placeholder="*****">
            <p class="text-gray-600 text-xs italic">Harap masukkan ulang password yang sama!</p>
          </div>
        </div>
        <!-- Nomor Telepon -->
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-telephone">
              Nomor Telepon
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-telephone" type="number" placeholder="Contoh: 08123456789">
            <p class="text-gray-600 text-xs italic">Harap masukkan nomor telepon yang valid dan aktif!</p>
          </div>
        </div>
        <!-- Role -->
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-role">
              Role
            </label>
            <select id="grid-role" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white">
              <option value="" disabled selected>Pilih role</option>
              <option value="pelajar">Pelajar</option>
              <option value="guru">Guru</option>
              <option value="mahasiswa">Mahasiswa</option>
              <option value="umum">Umum</option>
            </select>
            <p class="text-gray-600 text-xs italic">Harap pilih role yang sesuai!</p>
          </div>
        </div>
        <!-- Tombol Submit -->
        <div class="w-full mt-5">
          <button type="submit" class="p-4 bg-white/50 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-white/70 block text-center">
            Daftar Sekarang!
          </button>
        </div>
      </form>
    </main>

    <!-- Footer Navigasi -->
    <div class="fixed bottom-0 left-0 w-full bg-gray/100 backdrop-blur-md p-5 flex justify-around items-center z-20">
      <router-link to="/">
        <i class="fas fa-home text-1xl"></i>
      </router-link>
      <a href="#" id="cogs"><i class="fas fa-cogs text-1xl"></i></a>
    </div>

    <!-- Popup Settings 
    <div id="scaffold" class="fixed inset-0 bg-black backdrop-blur-md bg-opacity-50 flex items-end transform translate-y-full transition-transform duration-300 z-30 hidden">
      <div class="w-full bg-white p-6 shadow-lg rounded-t-lg">
        <img :src="maskot" alt="Chemicfest Maskot" class="w-2/4 h-auto mx-auto" />
        <h2 class="text-xl font-bold">Pengaturan</h2>
        <p class="text-gray-600">Ini adalah menu pengaturan.</p>
        <button id="closePopup" class="mt-4 w-full bg-red-500 text-white py-2 rounded">Tutup</button>
      </div>
    </div>-->
  </div>
</template>

<script>
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import maskot from '@/assets/img/chemicfest9_maskot.png';

export default {
  name: 'Register',
  data() {
    return {
      maskot,
    };
  },
  methods: {
    
    async handleRegister() {
      // Mengambil nilai input langsung dari DOM (alternatif: gunakan v-model)
      const name = document.getElementById('grid-first-name').value;
      const username = document.getElementById('grid-username').value;
      const email = document.getElementById('grid-email').value;
      const password = document.getElementById('grid-password').value;
      const checkpassword = document.getElementById('grid-checkpassword').value;
      const phoneNumber = document.getElementById('grid-telephone').value;
      const role = document.getElementById('grid-role').value;

      try {
        sessionStorage.setItem('userData', JSON.stringify({ name, username, email, phoneNumber, role }));
        const apiUrl = import.meta.env.VITE_API_BASE;
        const response = await axios.post(`${apiUrl}/api/register`, {
          name,
          username,
          email,
          password,
          checkpassword,
          phoneNumber,
          role,
        });
        console.log('Registrasi sukses:', response.data);
        alert(response.data.message);
        this.$router.push('/verifikasiotp');
      } catch (error) {
        console.error('Error registrasi:', error.response ? JSON.stringify(error.response.data) : error.message);
        const errorMessage = error.response?.data?.message || 'Terjadi kesalahan saat registrasi';
        alert(errorMessage);
      }
    }
  },
  mounted() {
    // Penanganan popup settings
    // const settingsIcon = document.getElementById("cogs");
    // const scaffold = document.getElementById("scaffold");
    // const closePopup = document.getElementById("closePopup");

    // settingsIcon.addEventListener("click", function () {
    //   scaffold.classList.remove("hidden");
    //   setTimeout(() => {
    //     scaffold.classList.remove("translate-y-full");
    //   }, 10);
    // });

    // closePopup.addEventListener("click", function () {
    //   scaffold.classList.add("translate-y-full");
    //   setTimeout(() => {
    //     scaffold.classList.add("hidden");
    //   }, 300);
    // });

    // scaffold.addEventListener("click", function (event) {
    //   if (event.target === scaffold) {
    //     scaffold.classList.add("translate-y-full");
    //     setTimeout(() => {
    //       scaffold.classList.add("hidden");
    //     }, 300);
    //   }
    // });

    AOS.init();
  }
};
</script>
