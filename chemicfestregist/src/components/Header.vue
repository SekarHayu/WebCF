<template>
  <!-- Header -->
  <header class="bg-white/50 backdrop-blur-md w-full fixed top-0 z-20 px-6 lg:px-32 py-3 flex justify-between items-center shadow-sm transition-all duration-300">
    <!-- Logo & Title -->
    <router-link :to="linkTo" class="flex items-center space-x-2 group">
      <!-- <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
        <span class="text-white font-bold text-lg">C</span>
      </div> -->
      <div>
        <span class="text-xl font-bold bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-transparent bg-clip-text">
          Chemicfest<span class="text-sm align-top">#9</span>
        </span>
        <div class="text-xs text-gray-500 -mt-1">SMK-SMTI YOGYAKARTA</div>
      </div>
    </router-link>

    <!-- Desktop Navigation Links -->
    <div class="hidden md:flex items-center">
      <!-- Dashboard Navigation -->
      <div v-if="isDashboard" class="flex items-center space-x-4">
        <router-link to="/dashboard" class="relative px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium">
          <i class="fas fa-home mr-1"></i>
          <span>Dashboard</span>
        </router-link>
        <router-link to="/tiket" class="relative px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium">
          <i class="fas fa-ticket-alt mr-1"></i>
          <span>Tiket</span>
        </router-link>
        <router-link to="/riwayat" class="relative px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium">
          <i class="fas fa-history mr-1"></i>
          <span>Riwayat</span>
        </router-link>
        
        <div class="relative group">
          <button class="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium">
            <i class="fas fa-user-circle text-xl mr-2"></i>
            <span>Akun</span>
            <i class="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          
          <!-- Dropdown Menu -->
          <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 origin-top-right transition-transform duration-200 z-50">
            <div class="py-2">
              <a @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                <i class="fas fa-sign-out-alt mr-2"></i>Logout
              </a>
              <router-link to="/forgot" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i class="fas fa-key mr-2"></i>Lupa Password
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Login/Register Links -->
      <div v-else-if="!isLoginOrRegister" class="flex items-center space-x-4">
        <router-link @click.prevent="handleLogin" to="/login" class="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
          <i class="fas fa-sign-in-alt mr-1"></i> Login
        </router-link>
        <router-link to="/registrasi" class="px-4 py-2 bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white font-medium rounded-lg hover:shadow-md transition-all">
          <i class="fas fa-user-plus mr-1"></i> Registrasi
        </router-link>
      </div>
      
      <!-- Back Button for Login/Register Pages -->
      <div v-else class="flex items-center">
        <router-link to="/" class="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center">
          <i class="fas fa-arrow-left mr-2"></i> Kembali
        </router-link>
      </div>
    </div>
    
    <!-- Hamburger Menu Button (Mobile) -->
    <button @click="toggleMobileMenu" class="md:hidden flex items-center px-2 py-1" aria-label="Toggle menu">
      <div class="w-6 h-5 relative flex flex-col justify-between">
        <span :class="[isMobileMenuOpen ? 'rotate-45 translate-y-2' : '', 'w-full h-0.5 bg-gray-700 transform transition-all duration-300 rounded-full']"></span>
        <span :class="[isMobileMenuOpen ? 'opacity-0' : 'opacity-100', 'w-full h-0.5 bg-gray-700 transition-opacity duration-300 rounded-full']"></span>
        <span :class="[isMobileMenuOpen ? '-rotate-45 -translate-y-2' : '', 'w-full h-0.5 bg-gray-700 transform transition-all duration-300 rounded-full']"></span>
      </div>
    </button>
  </header>
  
  <!-- Mobile Menu -->
  <div 
    :class="[isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full', 'md:hidden fixed top-0 right-0 w-full sm:w-80 h-full bg-white shadow-lg z-10 transform transition-transform duration-300 ease-in-out pt-20']"
  >
    <div class="px-6 py-4">
      <!-- Dashboard Navigation (Mobile) -->
      <div v-if="isDashboard" class="space-y-2">
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Navigation</h3>
        
        <router-link @click="closeMobileMenu" to="/dashboard" class="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <i class="fas fa-home mr-3 w-5 text-center"></i>
          <span>Dashboard</span>
        </router-link>
        
        <router-link @click="closeMobileMenu" to="/tiket" class="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <i class="fas fa-ticket-alt mr-3 w-5 text-center"></i>
          <span>Tiket Saya</span>
        </router-link>
        
        <router-link @click="closeMobileMenu" to="/riwayat" class="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <i class="fas fa-history mr-3 w-5 text-center"></i>
          <span>Riwayat</span>
        </router-link>
        
        <div class="border-t border-gray-200 my-4"></div>
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Akun</h3>
        
        <router-link @click="closeMobileMenu" to="/forgot" class="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <i class="fas fa-key mr-3 w-5 text-center"></i>
          <span>Lupa Password</span>
        </router-link>
        
        <button @click="logoutAndClose" class="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <i class="fas fa-sign-out-alt mr-3 w-5 text-center"></i>
          <span>Logout</span>
        </button>
      </div>
      
      <!-- Login/Register Links (Mobile) -->
      <div v-else-if="!isLoginOrRegister" class="space-y-4">
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Menu</h3>
        
        <router-link @click="handleLoginAndClose" to="/login" class="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <i class="fas fa-sign-in-alt mr-3 w-5 text-center"></i>
          <span>Login</span>
        </router-link>
        
        <router-link @click="closeMobileMenu" to="/registrasi" class="flex items-center w-full px-4 py-3 bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white rounded-lg">
          <i class="fas fa-user-plus mr-3 w-5 text-center"></i>
          <span>Registrasi</span>
        </router-link>
      </div>
      
      <!-- Back Button for Login/Register Pages (Mobile) -->
      <div v-else class="space-y-4">
        <router-link @click="closeMobileMenu" to="/" class="flex items-center w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <i class="fas fa-arrow-left mr-3 w-5 text-center"></i>
          <span>Kembali ke Halaman Utama</span>
        </router-link>
      </div>
    </div>
    
    <!-- Footer in Mobile Menu -->
    <div class="absolute bottom-0 left-0 w-full p-4 border-t border-gray-200">
      <div class="text-center text-sm text-gray-500">
        <p>© 2025 Chemicfest #9</p>
        <p class="text-xs mt-1">OSIS SMK-SMTI YOGYAKARTA</p>
      </div>
    </div>
  </div>
  <!-- Spacer to prevent content from being hidden under fixed header -->
  <div class="h-16"></div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const isMobileMenuOpen = ref(false);
    
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
      // Prevent scrolling when menu is open
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

    return {
      router,
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    };
  },
  computed: {
    // Check if the current path is '/login' or '/register'
    isLoginOrRegister() {
      return this.$route.path === '/login' || this.$route.path === '/registrasi';
    },
    // Check if the current path is '/dashboard'
    isDashboard() {
      return this.$route.path === '/dashboard' || this.$route.path === '/tiket' || this.$route.path === '/riwayat';
    },
    linkTo() {
      return this.isDashboard ? '/dashboard' : '/';
    }
  },
  methods: {
    handleLogin() {
      const sessionId = localStorage.getItem('sessionId');
      if (sessionId) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/login');
      }
    },
    handleLoginAndClose() {
      this.closeMobileMenu();
      this.handleLogin();
    },
    async logout() {
      try {
        // Ambil session ID dari userData
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        const sessionId = userData?.sessionId;

        if (!sessionId) {
          console.error('Session ID tidak ditemukan!');
          return;
        }

        // Panggil API logout
        const apiUrl = import.meta.env.VITE_API_BASE;
        const response = await fetch(`${apiUrl}/api/logout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }), // Kirim session ID
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message || 'Logout gagal');

        // Hapus session dari storage
        sessionStorage.removeItem('userData');

        alert('Logout berhasil');

        // Navigate to the homepage after logout
        this.router.push('/');
      } catch (error) {
        console.error('Gagal logout:', error.message);
      }
    },
    logoutAndClose() {
      this.closeMobileMenu();
      this.logout();
    }
  },
  // Clean up event listeners when component is unmounted
  beforeUnmount() {
    document.body.style.overflow = '';
  },
  // Close mobile menu when route changes
  watch: {
    $route() {
      this.closeMobileMenu();
    }
  }
};
</script>

<style scoped>
/* Optional: Add subtle hover animation for the logo */
.group:hover .rounded-full {
  transform: scale(1.05);
}

/* Ensure icons align properly */
i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Add a subtle indicator for active nav items */
.router-link-exact-active {
  position: relative;
  font-weight: 600;
  color: #D52C2C;
}

.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: linear-gradient(to right, #FF5F5F, #D52C2C);
  border-radius: 999px;
}

/* Mobile menu active link styling */
.router-link-exact-active i {
  color: #D52C2C;
}

/* Prevent content scrolling when menu is open */
.overflow-hidden {
  overflow: hidden;
}
</style>