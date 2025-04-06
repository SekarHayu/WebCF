<template>
  <div class="bg-gradient-to-b from-white to-gray-50 min-h-screen">
    <!-- Header Banner -->
    <div class="bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white py-10 px-4 mb-8 shadow-md">
      <div class="max-w-4xl mx-auto text-center my-14">
        <h1 class="text-2xl sm:text-3xl font-bold mb-2">Daftar Akun Chemicfest #9</h1>
        <p class="opacity-90 max-w-lg mx-auto">Buat akun untuk mendapatkan akses ke semua event Chemicfest dan nikmati
          penawaran khusus!</p>
      </div>
    </div>

    <!-- Main Content -->
    <main class="flex flex-col items-center justify-center w-full p-5">
      <!-- Event Promo Card -->
      <div class="max-w-4xl w-full mb-8 bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div
            class="md:w-1/3 bg-gradient-to-br from-[#FF5F5F] to-[#D52C2C] p-6 text-white flex flex-col justify-center">
            <h2 class="text-xl font-bold mb-2">Event Spesial!</h2>
            <p class="mb-4 text-white/90">Jangan lewatkan penampilan spesial dari guest star dan berbagai acara menarik!
            </p>
            <div class="flex items-center mb-2">
              <i class="fas fa-calendar-alt mr-2"></i>
              <span>17 Mei 2025</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2"></i>
              <span>Sportorium UMY</span>
            </div>
          </div>
          <div class="md:w-2/3 p-6">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                :class="[formStep >= 2 ? 'bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-white' : 'bg-gray-200 text-gray-500']">
                <i class="fas" :class="[formStep >= 2 ? 'fa-check' : 'fa-user']"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Langkah 1: Buat Akun</h3>
                <p class="text-sm text-gray-600">Isi formulir untuk membuat akun Chemicfest</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                :class="[formStep >= 3 ? 'bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-white' : 'bg-gray-200 text-gray-500']">
                <i class="fas" :class="[formStep >= 3 ? 'fa-check' : 'fa-envelope']"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Langkah 2: Verifikasi OTP</h3>
                <p class="text-sm text-gray-600">Verifikasi email Anda dengan kode OTP</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                <i class="fas fa-ticket-alt"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Langkah 3: Beli Tiket</h3>
                <p class="text-sm text-gray-600">Pilih tiket dan nikmati acara Chemicfest #9!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Registration Form Card -->
      <div v-if="formStep === 1" class="max-w-3xl w-full bg-white rounded-xl shadow-sm overflow-hidden mb-16">
        <div class="p-6 border-b border-gray-100">
          <h2 class="text-xl font-bold text-gray-800">Data Registrasi</h2>
          <p class="text-gray-600 text-sm">Lengkapi data di bawah ini dengan informasi yang valid</p>
        </div>

        <form id="registerForm" class="p-6" @submit.prevent="handleRegister">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Nama Lengkap -->
            <div class="col-span-2 md:col-span-1">
              <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-first-name">
                Nama Lengkap
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-user text-gray-400"></i>
                </div>
                <input
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                  id="grid-first-name" type="text" v-model="name" placeholder="Contoh: John Doe">
              </div>
              <p class="text-gray-500 text-xs mt-1">Harap masukkan nama yang valid</p>
            </div>

            <!-- Username -->
            <div class="col-span-2 md:col-span-1">
              <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-username">
                Username
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-at text-gray-400"></i>
                </div>
                <input
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                  id="grid-username" type="text" v-model="username" placeholder="Contoh: johndoe">
              </div>
              <p class="text-gray-500 text-xs mt-1">Username minimal 5 karakter</p>
            </div>

            <!-- Email -->
            <div class="col-span-2">
              <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-email">
                Email
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-envelope text-gray-400"></i>
                </div>
                <input
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                  id="grid-email" type="email" v-model="email" placeholder="Contoh: example@gmail.com">
              </div>
              <p class="text-gray-500 text-xs mt-1">Email akan digunakan untuk verifikasi dan notifikasi penting</p>
            </div>

            <!-- Password -->
            <div class="col-span-2 md:col-span-1">
              <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-password">
                Password
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                  id="grid-password" type="password" v-model="password" placeholder="*****">
              </div>
              <p class="text-gray-500 text-xs mt-1">Password minimal 8 karakter</p>
            </div>

            <!-- Konfirmasi Password -->
            <div class="col-span-2 md:col-span-1">
              <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-checkpassword">
                Konfirmasi Password
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                  id="grid-checkpassword" type="password" v-model="checkPassword" placeholder="*****">
              </div>
              <p class="text-gray-500 text-xs mt-1">Pastikan password sama dengan di atas</p>
            </div>

            <!-- Nomor Telepon -->
            <div class="col-span-2 md:col-span-1">
              <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-telephone">
                Nomor Telepon
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-phone text-gray-400"></i>
                </div>
                <input
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                  id="grid-telephone" type="text" v-model="phoneNumber" placeholder="Contoh: 08123456789">
              </div>
              <p class="text-gray-500 text-xs mt-1">Nomor aktif untuk informasi tiket</p>
            </div>

            <!-- Role -->
            <div class="col-span-2 md:col-span-1">
              <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-role">
                Role
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-user-tag text-gray-400"></i>
                </div>
                <select id="grid-role"
                  class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                  v-model="role">
                  <option value="" disabled selected>Pilih role</option>
                  <option value="pelajar">Pelajar</option>
                  <option value="guru">Guru</option>
                  <option value="mahasiswa">Mahasiswa</option>
                  <option value="umum">Umum</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i class="fas fa-chevron-down text-gray-400"></i>
                </div>
              </div>
              <p class="text-gray-500 text-xs mt-1">Digunakan untuk penawaran khusus</p>
            </div>
          </div>

          <!-- Terms and Conditions -->
          <!-- <div class="mt-6 mb-8">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="terms" type="checkbox" v-model="termsAccepted"
                  class="h-4 w-4 text-[#5EA2EF] border-gray-300 rounded focus:ring-[#5EA2EF]">
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="text-gray-700">Saya menyetujui <a href="#"
                    class="text-[#5EA2EF] hover:underline">syarat dan ketentuan</a> yang berlaku</label>
              </div>
            </div>
          </div> -->

          <!-- Submit Button -->
          <div class="flex flex-col sm:flex-row gap-4 mt-6">
            <button type="submit" :disabled="isLoading"
              class="flex-1 py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5EA2EF] flex justify-center items-center">
              <span v-if="isLoading" class="mr-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
              </span>
              <span>{{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}</span>
            </button>
            <a href="/login"
              class="flex-1 py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center">
              Sudah Punya Akun
            </a>
          </div>
        </form>
      </div>

      <!-- OTP Verification Card -->
      <div v-if="formStep === 2" class="max-w-md w-full bg-white rounded-xl shadow-sm overflow-hidden mb-16">
        <div class="p-6 border-b border-gray-100 text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-envelope-open-text text-[#5EA2EF] text-xl"></i>
          </div>
          <h2 class="text-xl font-bold text-gray-800">Verifikasi OTP</h2>
          <p class="text-gray-600 text-sm">Masukkan kode OTP yang dikirim ke email Anda</p>
        </div>

        <div class="p-6">
          <div class="text-center mb-6">
            <p class="text-sm text-gray-600 mb-4">Kami telah mengirimkan kode OTP ke:</p>
            <div class="font-medium text-gray-800 bg-gray-50 py-2 px-4 rounded-lg mb-4">{{ email }}</div>
            <p class="text-xs text-gray-500">Jika tidak menerima kode, periksa folder spam atau klik kirim ulang</p>
          </div>

          <!-- OTP Input -->
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-medium mb-2" for="otp-input">
              Kode OTP
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 text-center font-bold tracking-wider focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
              id="otp-input" type="text" v-model="otpCode" maxlength="6" placeholder="Masukkan 6 digit kode">
          </div>

          <!-- Timer -->
          <div class="text-center mb-6">
            <p class="text-sm text-gray-600">
              Kode akan berakhir dalam:
              <span class="font-medium text-[#5EA2EF]">{{ formatTime(timer) }}</span>
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col gap-3">
            <button @click="verifyOtp" :disabled="isVerifying || otpCode.length !== 6"
              class="py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all flex justify-center items-center disabled:opacity-70">
              <span v-if="isVerifying" class="mr-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
              </span>
              <span>{{ isVerifying ? 'Memverifikasi...' : 'Verifikasi Kode' }}</span>
            </button>
            <button @click="resendOtp" :disabled="canResend === false"
              class="py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center disabled:opacity-70">
              Kirim Ulang Kode
            </button>
          </div>

          <!-- Back to Registration -->
          <div class="mt-6 text-center">
            <button @click="formStep = 1" class="text-sm text-[#5EA2EF] hover:underline">
              &larr; Kembali ke Form Registrasi
            </button>
          </div>
        </div>
      </div>

      <!-- Registration Success Card -->
      <div v-if="formStep === 3" class="max-w-md w-full bg-white rounded-xl shadow-sm overflow-hidden mb-16">
        <div class="p-6 text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-check text-[#17c964] text-3xl"></i>
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-2">Registrasi Berhasil!</h2>
          <p class="text-gray-600 mb-6">Akun Anda telah berhasil didaftarkan dan diverifikasi.</p>

          <!-- Next Action Buttons -->
          <div class="flex flex-col gap-3">
            <a href="/login"
              class="py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all text-center">
              Masuk ke Akun
            </a>
          </div>
        </div>
      </div>

    </main>



    <!-- Alert Modal -->
    <div v-if="showAlert" class="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
        <div class="p-4 border-b"
          :class="{ 'bg-red-50 border-red-100': alertType === 'error', 'bg-green-50 border-green-100': alertType === 'success', 'bg-blue-50 border-blue-100': alertType === 'info' }">
          <div class="flex items-center">
            <div class="flex-shrink-0 mr-3">
              <div class="w-8 h-8 rounded-full flex items-center justify-center" :class="{
                'bg-red-100 text-red-500': alertType === 'error',
                'bg-green-100 text-green-500': alertType === 'success',
                'bg-blue-100 text-blue-500': alertType === 'info'
              }">
                <i class="fas" :class="{
                  'fa-exclamation-circle': alertType === 'error',
                  'fa-check-circle': alertType === 'success',
                  'fa-info-circle': alertType === 'info'
                }"></i>
              </div>
            </div>
            <h3 class="text-lg font-semibold" :class="{
              'text-red-800': alertType === 'error',
              'text-green-800': alertType === 'success',
              'text-blue-800': alertType === 'info'
            }">{{ alertTitle }}</h3>
          </div>
        </div>
        <div class="p-4">
          <p class="text-gray-700 mb-4">{{ alertMessage }}</p>
          <div class="flex justify-end">
            <button @click="showAlert = false"
              class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'RegisterPage',
  setup() {
    // Form state
    const formStep = ref(1);
    const name = ref('');
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const checkPassword = ref('');
    const phoneNumber = ref('');
    const role = ref('');
    const termsAccepted = ref(false);

    // OTP verification
    const otpCode = ref('');
    const timer = ref(300);
    const canResend = ref(false);
    let timerInterval = null;

    // Loading states
    const isLoading = ref(false);
    const isVerifying = ref(false);

    // Alert modal
    const showAlert = ref(false);
    const alertType = ref('info'); // 'info', 'success', 'error'
    const alertTitle = ref('');
    const alertMessage = ref('');

    // Format remaining time
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Start OTP timer
    const startTimer = () => {
      timer.value = 300;
      canResend.value = false;
      clearInterval(timerInterval);

      timerInterval = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          clearInterval(timerInterval);
          canResend.value = true;
        }
      }, 1000);
    };

    // Show alert message
    const showAlertMessage = (type, title, message) => {
      alertType.value = type;
      alertTitle.value = title;
      alertMessage.value = message;
      showAlert.value = true;
    };

    // Handle registration form submission
    const handleRegister = async () => {
      // Basic validation
      if (!name.value || !username.value || !email.value || !password.value || !checkPassword.value || !phoneNumber.value || !role.value) {
        showAlertMessage('error', 'Data Tidak Lengkap', 'Harap lengkapi semua data dalam formulir!');
        return;
      }

      if (password.value !== checkPassword.value) {
        showAlertMessage('error', 'Password Tidak Sama', 'Password dan konfirmasi password tidak cocok!');
        return;
      }

      // if (!termsAccepted.value) {
      //   showAlertMessage('error', 'Syarat dan Ketentuan', 'Harap setujui syarat dan ketentuan yang berlaku!');
      //   return;
      // }

      isLoading.value = true;

      try {
        // Save user data to session storage
        const userData = {
          name: name.value,
          username: username.value,
          email: email.value,
          phoneNumber: phoneNumber.value,
          role: role.value
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));

        // Send registration data to API
        const apiUrl = import.meta.env.VITE_API_BASE;
        const response = await axios.post(`${apiUrl}/api/register`, {
          name: name.value,
          username: username.value,
          email: email.value,
          password: password.value,
          checkpassword: checkPassword.value,
          phoneNumber: phoneNumber.value,
          role: role.value
        });

        console.log('Registrasi sukses:', response.data);

        // Move to OTP verification step
        formStep.value = 2;
        startTimer(); // Start the OTP countdown timer

        showAlertMessage('success', 'Registrasi Berhasil', 'Silakan verifikasi email Anda dengan memasukkan kode OTP yang telah dikirim.');
      } catch (error) {
        console.error('Error registrasi:', error.response ? JSON.stringify(error.response.data) : error.message);
        const errorMessage = error.response?.data?.message || 'Terjadi kesalahan saat registrasi';
        showAlertMessage('error', 'Registrasi Gagal', errorMessage);
      } finally {
        isLoading.value = false;
      }
    };

    // Verify OTP code
    const verifyOtp = async () => {
      if (otpCode.value.length !== 6) {
        showAlertMessage('error', 'Kode OTP Tidak Valid', 'Harap masukkan 6 digit kode OTP!');
        return;
      }

      isVerifying.value = true;

      try {
        const apiUrl = import.meta.env.VITE_API_BASE;
        const userData = JSON.parse(sessionStorage.getItem('userData'));

        // Ensure email exists
        if (!userData?.email) {
          showAlertMessage('error', 'Data Tidak Ditemukan', 'Email tidak ditemukan. Silakan registrasi ulang.');
          formStep.value = 1;
          return;
        }

        const response = await axios.post(`${apiUrl}/api/validation/verifyotp`, {
          users: userData.email,
          otp: otpCode.value
        });

        if (response.data.data.verified) {
          // OTP verification successful
          sessionStorage.removeItem("userData"); // Clean up session storage

          // Move to success step
          formStep.value = 3;
          clearInterval(timerInterval); // Clear the timer

          showAlertMessage('success', 'Verifikasi Berhasil', 'Akun Anda telah berhasil diverifikasi! Anda sekarang dapat masuk dan membeli tiket.');
        } else {
          showAlertMessage('error', 'Verifikasi Gagal', 'Kode OTP yang Anda masukkan tidak valid. Silakan coba lagi.');
        }
      } catch (error) {
        console.error('Gagal verifikasi OTP:', error.response ? error.response.data : error);
        const errorMessage = error.response?.data?.message || 'Terjadi kesalahan saat verifikasi OTP';
        showAlertMessage('error', 'Verifikasi Gagal', errorMessage);
      } finally {
        isVerifying.value = false;
      }
    };

    // Resend OTP code
    const resendOtp = async () => {
      const userData = JSON.parse(sessionStorage.getItem('userData'));

      if (!userData?.email) {
        showAlertMessage('error', 'Data Tidak Ditemukan', 'Email tidak ditemukan. Silakan registrasi ulang.');
        formStep.value = 1;
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_BASE;
        await axios.post(`${apiUrl}/api/validation/getotp`, { users: userData.email });

        // Restart the timer
        startTimer();

        showAlertMessage('info', 'OTP Terkirim', 'Kode OTP baru telah dikirim ke email Anda.');
      } catch (error) {
        console.error('Gagal mengirim ulang OTP:', error);
        showAlertMessage('error', 'Pengiriman Gagal', 'Gagal mengirim ulang kode OTP. Silakan coba lagi nanti.');
      }
    };

    // Cleanup on component unmount
    onUnmounted(() => {
      clearInterval(timerInterval);
    });

    // Initialize animation on mount
    onMounted(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    });

    return {
      formStep,
      name,
      username,
      email,
      password,
      checkPassword,
      phoneNumber,
      role,
      termsAccepted,
      otpCode,
      timer,
      canResend,
      isLoading,
      isVerifying,
      showAlert,
      alertType,
      alertTitle,
      alertMessage,
      handleRegister,
      verifyOtp,
      resendOtp,
      formatTime,
      showAlertMessage
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: textfield;
  -moz-appearance: textfield;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Smooth transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Focus ring styling */
*:focus-visible {
  outline: 2px solid #5EA2EF;
  outline-offset: 2px;
}
</style>