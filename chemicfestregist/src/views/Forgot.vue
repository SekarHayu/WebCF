<template>
  <div class="bg-gray-300 flex justify-center items-center min-h-screen text-gray-900">
    <!-- Header -->
    <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 lg:px-32 py-4 z-10 flex justify-between items-center">
      <router-link to="/" id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</router-link>
    </header>

    <div class="bg-white shadow-md rounded-2xl p-8 mx-4 w-full max-w-md text-center">
      <h2 class="text-2xl font-bold mb-4">Forgot Password</h2>
      <p class="text-gray-600 mb-6">Masukkan email Anda untuk menerima kode verifikasi.</p>

      <!-- Step 1: Masukkan Email -->
      <div id="">
        <input
          v-model="email"
          type="text"
          placeholder="Email atau Username"
          class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="sendOtp"
          class="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
        >
          Kirim Kode
        </button>
      </div>

  

      <!-- Pesan Notifikasi -->
      <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const message = ref('');
const errorMessage = ref('');

// Kirim kode OTP ke email
const sendOtp = async () => {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE;
    const response = await axios.post(`${apiUrl}/api/request-forgot`, { users: email.value });

    // Ce k apakah response berhasil
    if (response.data) {
      message.value = response.data.message || 'Kode OTP berhasil dikirim ke email Anda!';
      errorMessage.value = ''; // Reset error message
      console.log('Message:', message.value); // Log sukses
      router.push('/verifikasiforgot');
    } else {
      // Jika response success = false, anggap sebagai error
      errorMessage.value = response.data.message || 'Gagal mengirim OTP';
      message.value = '';
      console.log('Error Message:', errorMessage.value); // Tambahkan log ini
    }
  } catch (error) {
    // Tangani error dari axios atau dari API
    errorMessage.value = error.response?.data?.message || error.message || 'Gagal mengirim kode OTP. Cek kembali email Anda.';
    message.value = '';
    console.error('Error sendOtp:', error);
  }
};


</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
