<template>
    <div class="bg-gray-300 flex justify-center items-center min-h-screen">
      <!-- Header -->
      <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10 flex justify-between items-center">
        <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
    </header>
  
    <div class="bg-white shadow-md rounded-2xl p-8 mx-4 w-full max-w-md text-center">
      <h2 class="text-2xl font-bold mb-4">Forgot Password</h2>
      <p class="text-gray-600 mb-6">Masukkan email Anda untuk menerima kode verifikasi.</p>

      <!-- Step 1: Masukkan Email -->
      <div v-if="!step2">
        <input
          v-model="email"
          type="email"
          placeholder="Email Anda"
          class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="sendOtp"
          class="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
        >
          Kirim Kode
        </button>
      </div>

      <!-- Step 2: Masukkan OTP dan Password Baru -->
      <div v-if="step2">
        <input
          v-model="otp"
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
const otp = ref('');
const newPassword = ref('');
const message = ref('');
const errorMessage = ref('');
const step2 = ref(false); // Step kontrol

// Kirim kode OTP ke email
const sendOtp = async () => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE;
    const response = await axios.post(`${apiUrl}/send-otp`, { email: email.value });

    if (response.data.success) {
      message.value = 'Kode OTP berhasil dikirim ke email Anda!';
      errorMessage.value = '';
      step2.value = true; // Pindah ke step 2
    } else {
      throw new Error(response.data.message || 'Gagal mengirim OTP');
    }
  } catch (error) {
    errorMessage.value = 'Gagal mengirim kode OTP. Cek kembali email Anda.';
    message.value = '';
    console.error(error.message);
  }
};

// Verifikasi OTP dan reset password
const resetPassword = async () => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE;
    const response = await axios.post(`${apiUrl}/reset-password`, {
      email: email.value,
      otp: otp.value,
      newPassword: newPassword.value,
    });

    if (response.data.success) {
      message.value = 'Password berhasil diubah! Anda akan diarahkan ke dashboard.';
      errorMessage.value = '';

      // Tampilkan notifikasi sukses dulu, baru redirect
      setTimeout(() => {
        router.push('/dashboard'); // Redirect ke halaman dashboard
      }, 2000); // Tunggu 2 detik sebelum redirect
    } else {
      throw new Error(response.data.message || 'Gagal mengubah password');
    }
  } catch (error) {
    errorMessage.value = 'Kode OTP tidak valid atau terjadi kesalahan.';
    message.value = '';
    console.error(error.message);
  }
};
</script>

  
  <style>
  body {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  