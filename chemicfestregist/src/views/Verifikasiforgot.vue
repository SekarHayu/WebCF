<template>
  <div class="bg-gray-300 flex justify-center items-center min-h-screen text-gray-900">
    <!-- Header -->
    <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10 flex justify-between items-center">
      <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
    </header>

    <div class="bg-white shadow-md rounded-2xl p-8 mx-4 w-full max-w-md text-center">
      <h2 class="text-2xl font-bold mb-4">Forgot Password</h2>
      <p class="text-gray-600 mb-6">Lengkapi data berikut</p>


      <!-- Step 2: Masukkan OTP dan Password Baru -->
      <div id="">
        <input
          v-model="email"
          type="text"
          placeholder="Masukkan email"
          class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="otpToken"
          type="text"
          placeholder="Masukkan Kode OTP"
          class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="newPassword"
          type="password"
          placeholder="Password Baru"
          class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="checkPassword"
          type="password"
          placeholder="Konfirmasi Password"
          class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="resetPassword"
          class="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition"
        >
          Ubah Password
        </button>
      </div>

      <!-- Pesan Notifikasi -->
      <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
      <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const otpToken = ref('');
const newPassword = ref('');
const checkPassword = ref('');
const message = ref('');
const errorMessage = ref('');


// Verifikasi OTP dan reset password
const resetPassword = async () => {
  try {
    if (newPassword.value !== checkPassword.value) {
      errorMessage.value = 'Password tidak sama!';
      return;
    }

    const apiUrl = import.meta.env.VITE_API_BASE;
    const response = await axios.post(`${apiUrl}/api/verify-forgot`, {
      users: email.value,
      token: otpToken.value,
      password: newPassword.value,
      confirm_password: checkPassword.value,
    });

    if (response.data.code === 200) {
      message.value = 'Password berhasil diubah! Anda akan diarahkan ke halaman login.';
      errorMessage.value = '';

      // Tampilkan notifikasi sukses dulu, baru redirect
      setTimeout(() => {
        router.push('/login'); // Redirect ke halaman login
      }, 2000); // Tunggu 2 detik sebelum redirect
    } else {
      throw new Error(response.data.message || 'Gagal mengubah password');
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Kode OTP tidak valid atau terjadi kesalahan.';
    message.value = '';
    console.error('Error resetPassword:', error);
  }
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>