<template>
  <div class="bg-gray-50 flex justify-center items-center min-h-screen relative overflow-hidden">
    <!-- Background blur circles -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-[#5EA2EF]/30 to-[#0072F5]/20 blur-3xl"></div>
    <div class="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-[#6FEE8D]/30 to-[#17c964]/20 blur-3xl"></div>
    
    <!-- Main Content -->
    <main class="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 relative z-10">
      <!-- Logo/Brand Area (Golden Ratio: 1.618) -->
      <div class="w-full mb-8 text-center">
        <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C]">Chemicfest #9</h1>
        <p class="text-gray-600 mt-2">Masuk Kembali</p>
      </div>
      
      <!-- Card with form - following golden ratio proportions -->
      <div class="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <!-- Login Form -->
        <form id="loginForm" class="p-6">
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-email">
              Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg py-3 pl-10 pr-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D52C2C] focus:ring-2 focus:ring-[#FF5F5F]/20 transition-all" 
                id="grid-email" 
                type="email" 
                placeholder="example@gmail.com">
            </div>
            <p class="text-gray-500 text-xs mt-1">Harap masukkan email yang valid</p>
          </div>
          
          <div class="mb-2">
            <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-password">
              Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg py-3 pl-10 pr-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D52C2C] focus:ring-2 focus:ring-[#FF5F5F]/20 transition-all" 
                id="grid-password" 
                type="password" 
                placeholder="•••••••••••••">
            </div>
            <p class="text-gray-500 text-xs mt-1">Harap masukkan password</p>
          </div>
          
          <div class="flex justify-end mb-6">
            <a href="/forgot" class="text-sm font-medium text-[#D52C2C] hover:text-[#FF5F5F] transition-colors">
              Lupa Password?
            </a>
          </div>

          <div>
            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] hover:from-[#FF4545] hover:to-[#C52020] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
            >
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isLoading ? 'Memproses...' : 'Masuk Sekarang' }}
            </button>
          </div>
        </form>

        <!-- Divider -->
        <div class="relative py-4">
          <div class="absolute inset-0 flex items-center px-6">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white px-4 text-sm text-gray-500">Atau</span>
          </div>
        </div>

        <!-- Additional options -->
        <div class="px-6 pb-6">
          <p class="text-center text-sm text-gray-600">
            Belum memiliki akun? 
            <a href="/registrasi" class="font-medium text-[#D52C2C] hover:text-[#FF5F5F]">
              Daftar Sekarang
            </a>
          </p>
        </div>
      </div>
      
      <!-- Footer note with golden ratio spacing -->
      <p class="mt-8 text-center text-xs text-gray-600">
        &copy; {{ new Date().getFullYear() }} Chemicfest #9. Seluruh hak cipta dilindungi.
      </p>
    </main>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import maskot from '@/assets/img/chemicfest9_maskot.png';
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {  
      maskot: maskot,
      isLoading: false,
    };
  },
  mounted() {
    // Inisialisasi AOS dengan animasi yang mengikuti golden ratio timing
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    // Ambil data dari Session Storage (jika ada)
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData?.isLoggedIn) {
      // Gunakan toast notification daripada alert untuk UX yang lebih baik
      this.showToast("Selamat datang kembali, " + userData.email + "!");
      this.$router.push('/dashboard');
    }

    // Menangani submit form login
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("grid-email").value;
      const password = document.getElementById("grid-password").value;

      // Validasi sederhana
      if (!email || !password) {
        this.showToast("Email dan password harus diisi!", "error");
        return;
      }
      
      // Tambahkan loading state
      this.isLoading = true;

      try {
        // Request login ke backend
        const apiUrl = import.meta.env.VITE_API_BASE;
        const response = await axios.post(`${apiUrl}/api/login`, { 
          users: email,
          password: password,
        });

        if (response.data.code === 200 || response.data.code === 204) {
          this.showToast("Login berhasil! Selamat datang, " + email);
          // Simpan data ke Session Storage
          sessionStorage.setItem("userData", JSON.stringify({ 
            email, 
            userId: response.data.userData.id,
            role: response.data.userData.role,
            isLoggedIn: true, 
            sessionId: response.data.sessionId, 
            expiredAt: response.data.expiredAt 
          }));
          
          // Beri delay singkat untuk efek visual yang lebih baik
          setTimeout(() => {
            this.$router.push('/dashboard');
          }, 500);
        } else {
          this.showToast("Login gagal: " + response.data.message, "error");
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error.response ? error.response.data : error);
        this.showToast(error.response.data.message, "error");
      } finally {
        // Restore button state
        this.isLoading = false; 
      }
    });
  },
  methods: {
    // Metode toast sederhana (bisa diganti dengan library toast yang lebih baik)
          showToast(message, type = 'success') {
      // Cek apakah container toast sudah ada
      let toastContainer = document.getElementById('toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'fixed top-4 right-4 z-50 flex flex-col gap-2';
        document.body.appendChild(toastContainer);
      }
      
      // Buat elemen toast
      const toast = document.createElement('div');
      toast.className = `p-4 rounded-lg shadow-lg max-w-xs transform transition-all duration-300 ease-out opacity-0 translate-y-2 ${
        type === 'success' ? 'bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-white' : 'bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white'
      }`;
      toast.textContent = message;
      
      // Tambahkan ke container
      toastContainer.appendChild(toast);
      
      // Animasi masuk
      setTimeout(() => {
        toast.classList.remove('opacity-0', 'translate-y-2');
      }, 10);
      
      // Hapus setelah 3 detik
      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => {
          toastContainer.removeChild(toast);
        }, 300);
      }, 3000);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Transisi halus untuk semua interaksi */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Proporsi golden ratio (1:1.618) untuk beberapa elemen */
.golden-ratio-h {
  height: 0;
  padding-bottom: 61.8%; /* 1/1.618 * 100% */
}

.golden-ratio-w {
  width: 61.8%; /* 1/1.618 * 100% */
}
</style>
