<template>
  <div class="bg-gradient-to-b from-white to-gray-50 min-h-screen">
    
    <!-- Mobile Menu -->
    <div 
      :class="[isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full', 'md:hidden fixed top-0 right-0 w-full sm:w-80 h-full bg-white shadow-lg z-10 transform transition-transform duration-300 ease-in-out pt-20']"
    >
      <div class="px-6 py-4 space-y-4">
        <router-link @click="closeMobileMenu" to="/login" class="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <i class="fas fa-sign-in-alt mr-3 w-5 text-center"></i>
          <span>Login</span>
        </router-link>
        
        <router-link @click="closeMobileMenu" to="/registrasi" class="flex items-center w-full px-4 py-3 bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white rounded-lg">
          <i class="fas fa-user-plus mr-3 w-5 text-center"></i>
          <span>Registrasi</span>
        </router-link>
        
        <router-link @click="closeMobileMenu" to="/" class="flex items-center w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <i class="fas fa-home mr-3 w-5 text-center"></i>
          <span>Kembali ke Halaman Utama</span>
        </router-link>
      </div>
      
      <!-- Footer in Mobile Menu -->
      <div class="absolute bottom-0 left-0 w-full p-4 border-t border-gray-200">
        <div class="text-center text-sm text-gray-500">
          <p>© 2025 Chemicfest #9</p>
          <p class="text-xs mt-1">OSIS SMK-SMTI YOGYAKARTA</p>
        </div>
      </div>
    </div>
    
    <!-- Overlay for Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen" 
      @click="closeMobileMenu"
      class="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-0 transition-opacity duration-300"
    ></div>

    <div class="pt-24 pb-12 px-4 flex flex-col items-center justify-center">
      <!-- Main Card -->
      <div class="w-full max-w-md">
        <!-- Card Header -->
        <div class="bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] rounded-t-2xl p-6 text-white text-center">
          <div class="mb-4 flex justify-center">
            <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <i class="fas fa-lock-open text-white text-2xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-bold">Lupa Password</h2>
          <p class="mt-2 opacity-90">Kami akan membantu Anda memulihkan akun</p>
          
          <!-- Steps Indicator -->
          <div class="flex justify-center mt-6">
            <div class="flex items-center">
              <div :class="[currentStep === 1 ? 'bg-white' : 'bg-white/30', 'w-8 h-8 rounded-full flex items-center justify-center font-bold text-[#0072F5]']">
                1
              </div>
              <div :class="[currentStep === 1 ? 'bg-white/30' : 'bg-white', 'w-16 h-1']"></div>
              <div :class="[currentStep === 2 ? 'bg-white' : 'bg-white/30', 'w-8 h-8 rounded-full flex items-center justify-center font-bold text-[#0072F5]']">
                2
              </div>
            </div>
          </div>
        </div>
        
        <!-- Card Body -->
        <div class="bg-white shadow-md rounded-b-2xl p-6">
          <!-- Step 1: Email Request -->
          <div v-if="currentStep === 1" class="transition-opacity duration-300">
            <div class="mb-6">
              <p class="text-gray-600 mb-4">Masukkan email akun Anda untuk menerima kode verifikasi.</p>
              
              <div class="mb-5">
                <label for="email-input" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input
                    id="email-input"
                    v-model="email"
                    type="text"
                    placeholder="contoh@email.com"
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5EA2EF] focus:bg-white transition-colors"
                  />
                </div>
                <p class="mt-1 text-xs text-gray-500">Kami akan mengirimkan kode OTP ke email terdaftar Anda.</p>
              </div>
              
              <!-- Send Button -->
              <button
                @click="sendOtp"
                :disabled="isLoading"
                class="w-full py-3 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-xl hover:shadow-md transition-all flex items-center justify-center"
              >
                <span v-if="isLoading" class="mr-2">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                <span>{{ isLoading ? 'Mengirim...' : 'Kirim Kode Verifikasi' }}</span>
              </button>
            </div>
          </div>
          
          <!-- Step 2: OTP Verification and Password Reset -->
          <div v-if="currentStep === 2" class="transition-opacity duration-300">
            <div class="mb-6">
              <p class="text-gray-600 mb-4">Masukkan kode OTP yang dikirimkan ke email Anda dan password baru.</p>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Kode OTP</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fas fa-key text-gray-400"></i>
                  </div>
                  <input
                    v-model="otpToken"
                    type="text"
                    placeholder="Masukkan kode 6 digit"
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5EA2EF] focus:bg-white transition-colors"
                  />
                </div>
                <p class="mt-1 text-xs text-gray-500">Kode OTP telah dikirim ke: {{ maskEmail(email) }}</p>
              </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Password Baru</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fas fa-lock text-gray-400"></i>
                  </div>
                  <input
                    v-model="newPassword"
                    type="password"
                    placeholder="Minimal 8 karakter"
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5EA2EF] focus:bg-white transition-colors"
                  />
                </div>
              </div>
              
              <div class="mb-5">
                <label class="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fas fa-lock text-gray-400"></i>
                  </div>
                  <input
                    v-model="checkPassword"
                    type="password"
                    placeholder="Masukkan ulang password"
                    class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5EA2EF] focus:bg-white transition-colors"
                  />
                </div>
              </div>
              
              <!-- Buttons -->
              <div class="flex flex-col sm:flex-row gap-3">
                <button
                  @click="currentStep = 1"
                  class="sm:w-1/3 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Kembali
                </button>
                <button
                  @click="resetPassword"
                  :disabled="isResetting"
                  class="sm:w-2/3 py-3 px-4 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-xl hover:shadow-md transition-all flex items-center justify-center"
                >
                  <span v-if="isResetting" class="mr-2">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                  <span>{{ isResetting ? 'Memproses...' : 'Ubah Password' }}</span>
                </button>
              </div>
              
              <!-- Resend OTP Link -->
              <div class="text-center mt-4">
                <button 
                  @click="resendOtp"
                  :disabled="!canResend"
                  class="text-[#5EA2EF] hover:underline text-sm"
                >
                  {{ canResend ? 'Kirim Ulang Kode OTP' : `Kirim ulang dalam ${formatTime(timer)}` }}
                </button>
              </div>
            </div>
          </div>
          
          <!-- Notification Messages -->
          <div v-if="message" class="p-3 bg-green-50 border border-green-100 rounded-xl flex items-start mt-4">
            <div class="flex-shrink-0 mr-2">
              <div class="w-6 h-6 bg-gradient-to-r from-[#6FEE8D] to-[#17c964] rounded-full flex items-center justify-center">
                <i class="fas fa-check text-white text-xs"></i>
              </div>
            </div>
            <p class="text-sm text-green-800">{{ message }}</p>
          </div>
          
          <div v-if="errorMessage" class="p-3 bg-red-50 border border-red-100 rounded-xl flex items-start mt-4">
            <div class="flex-shrink-0 mr-2">
              <div class="w-6 h-6 bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] rounded-full flex items-center justify-center">
                <i class="fas fa-exclamation text-white text-xs"></i>
              </div>
            </div>
            <p class="text-sm text-red-800">{{ errorMessage }}</p>
          </div>
          
          <!-- Login Link -->
          <div class="text-center mt-6">
            <p class="text-gray-600 text-sm">Sudah ingat password Anda?</p>
            <router-link to="/login" class="text-[#5EA2EF] font-medium hover:underline">
              Kembali ke Login
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Event Promo -->
      <div class="w-full max-w-md mt-8 bg-white rounded-xl overflow-hidden shadow-sm">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/3 bg-gradient-to-br from-[#FF5F5F] to-[#D52C2C] p-4 text-white">
            <h3 class="font-bold">Event Spesial!</h3>
            <p class="text-sm text-white/90 mb-2">17 Mei 2025</p>
            <p class="text-sm text-white/90">SMK-SMTI Yogyakarta</p>
          </div>
          <div class="w-full md:w-2/3 p-4">
            <h3 class="font-bold text-gray-800 mb-1">Chemicfest #9</h3>
            <p class="text-sm text-gray-600 mb-3">Jangan lewatkan penampilan guest star dan berbagai kompetisi menarik!</p>
            <router-link to="/register" class="inline-block px-4 py-2 bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white text-sm rounded-full hover:shadow-md transition-all">
              Beli Tiket Sekarang
            </router-link>
          </div>
        </div>
      </div>
    </div>
    
    
    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-lg max-w-md w-full m-4 overflow-hidden">
        <div class="bg-gradient-to-r from-[#6FEE8D] to-[#17c964] p-4 text-white text-center">
          <div class="inline-flex h-16 w-16 bg-white/20 rounded-full items-center justify-center mb-2">
            <i class="fas fa-check text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold">Berhasil!</h3>
        </div>
        <div class="p-6 text-center">
          <p class="text-gray-700 mb-6">Password Anda berhasil diubah. Anda dapat login dengan password baru.</p>
          <router-link to="/login" class="inline-block w-full py-3 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-xl hover:shadow-md transition-all">
            Login Sekarang
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form state
const currentStep = ref(1);
const email = ref('');
const otpToken = ref('');
const newPassword = ref('');
const checkPassword = ref('');

// UI state
const message = ref('');
const errorMessage = ref('');
const isLoading = ref(false);
const isResetting = ref(false);
const showSuccessModal = ref(false);
const isMobileMenuOpen = ref(false);

// OTP timer
const timer = ref(120); // 2 minutes
const canResend = ref(true);
let timerInterval = null;

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Format remaining time
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

// Start OTP timer
const startTimer = () => {
  timer.value = 120;
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

// Mask email for privacy
const maskEmail = (email) => {
  if (!email) return '';
  const parts = email.split('@');
  if (parts.length !== 2) return email;
  
  const username = parts[0];
  const domain = parts[1];
  
  // Keep first 2 and last character of username
  const maskedUsername = username.length <= 3 
    ? username 
    : username.substring(0, 2) + '***' + username.substring(username.length - 1);
  
  return `${maskedUsername}@${domain}`;
};

// Step 1: Send OTP to email
const sendOtp = async () => {
  // Basic validation
  if (!email.value.trim()) {
    errorMessage.value = 'Email tidak boleh kosong';
    return;
  }
  
  isLoading.value = true;
  message.value = '';
  errorMessage.value = '';
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE;
    const response = await axios.post(`${apiUrl}/api/request-forgot`, { users: email.value });

    // Check if response is successful
    if (response.data) {
      message.value = response.data.message || 'Kode OTP berhasil dikirim ke email Anda!';
      errorMessage.value = '';
      
      // Move to Step 2
      currentStep.value = 2;
      startTimer();
    } else {
      // If response success = false, treat as error
      errorMessage.value = response.data.message || 'Gagal mengirim OTP';
      message.value = '';
    }
  } catch (error) {
    // Handle error from axios or API
    errorMessage.value = error.response?.data?.message || error.message || 'Gagal mengirim kode OTP. Cek kembali email Anda.';
    message.value = '';
    console.error('Error sendOtp:', error);
  } finally {
    isLoading.value = false;
  }
};

// Resend OTP code
const resendOtp = async () => {
  if (!canResend.value) return;
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE;
    await axios.post(`${apiUrl}/api/request-forgot`, { users: email.value });
    
    message.value = 'Kode OTP baru telah dikirim ke email Anda.';
    errorMessage.value = '';
    
    // Restart the timer
    startTimer();
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Gagal mengirim ulang kode OTP.';
    message.value = '';
  }
};

// Step 2: Verify OTP and reset password
const resetPassword = async () => {
  // Basic validation
  if (!otpToken.value.trim()) {
    errorMessage.value = 'Kode OTP tidak boleh kosong';
    return;
  }
  
  if (!newPassword.value) {
    errorMessage.value = 'Password baru tidak boleh kosong';
    return;
  }
  
  if (newPassword.value !== checkPassword.value) {
    errorMessage.value = 'Password tidak sama!';
    return;
  }
  
  if (newPassword.value.length < 8) {
    errorMessage.value = 'Password harus minimal 8 karakter';
    return;
  }
  
  isResetting.value = true;
  message.value = '';
  errorMessage.value = '';
  
  try {
    const apiUrl = import.meta.env.VITE_API_BASE;
    const response = await axios.post(`${apiUrl}/api/verify-forgot`, {
      users: email.value,
      token: otpToken.value,
      password: newPassword.value,
      confirm_password: checkPassword.value,
    });

    if (response.data.code === 200) {
      message.value = 'Password berhasil diubah!';
      errorMessage.value = '';

      // Show success modal
      showSuccessModal.value = true;
      
      // Clear timer interval
      clearInterval(timerInterval);
      
      // Redirect to login after showing the modal for a few seconds
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } else {
      throw new Error(response.data.message || 'Gagal mengubah password');
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Kode OTP tidak valid atau terjadi kesalahan.';
    message.value = '';
    console.error('Error resetPassword:', error);
  } finally {
    isResetting.value = false;
  }
};

// Clean up on component unmount
onUnmounted(() => {
  clearInterval(timerInterval);
  document.body.style.overflow = '';
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

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

/* Subtle hover effect for the logo */
.group:hover .rounded-full {
  transform: scale(1.05);
}
</style>