<template>
  <div class="min-h-max relative overflow-hidden bg-gradient-to-b from-gray-50 to-white text-gray-900 pt-20">
    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center">
      <!-- Festival Badge - Floating Animation -->
      <div class="absolute top-20 right-10 animate-pulse hidden md:block rotate-12 ">
        <div
          class="w-32 h-32 rounded-full bg-gradient-to-tl from-[#FF5F5F] to-[#D52C2C] flex items-center justify-center shadow-lg">
          <div class="text-white text-center font-bold">
            <div class="text-xl">MAY</div>
            <div class="text-3xl">17</div>
            <div class="text-sm">2025</div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col w-full min-h-screen items-center justify-center gap-8 px-4">
        <!-- Animated Background Elements -->
        <div
          class="absolute w-1/2 h-1/2 top-0 left-0 bg-gradient-to-br from-[#5EA2EF]/20 to-[#0072F5]/10 rounded-full blur-3xl animate-pulse">
        </div>
        <div
          class="absolute w-1/3 h-1/3 bottom-0 right-0 bg-gradient-to-tl from-[#6FEE8D]/20 to-[#17c964]/10 rounded-full blur-3xl animate-pulse delay-300">
        </div>

        <!-- Festival Logo/Title -->
        <div
          class="flex flex-col items-center justify-center text-center  transform transition-all duration-500 hover:scale-105">
          <div class="mb-6">
            <img :src="logocf" alt="Chemicfest Logo" class="w-auto h-40 mx-auto animate-float" />
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-2">
            <span class="bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-transparent bg-clip-text">Chemicfest#9</span>
          </h1>
          <h2 class="text-2xl md:text-3xl font-light mb-4">Chemicalistronic Festival</h2>
          <div class="text-lg opacity-80">by OSIS SMK-SMTI YOGYAKARTA</div>
        </div>

        <!-- Countdown Timer -->
        <div class="flex flex-wrap justify-center gap-4  my-8">
          <div
            class="bg-gradient-to-br from-[#5EA2EF]/30 to-[#0072F5]/30 backdrop-blur-md p-4 rounded-xl text-center w-20">
            <div id="days" class="text-3xl font-bold">00</div>
            <div class="text-xs uppercase tracking-wider">Days</div>
          </div>
          <div
            class="bg-gradient-to-br from-[#5EA2EF]/30 to-[#0072F5]/30 backdrop-blur-md p-4 rounded-xl text-center w-20">
            <div id="hours" class="text-3xl font-bold">00</div>
            <div class="text-xs uppercase tracking-wider">Hours</div>
          </div>
          <div
            class="bg-gradient-to-br from-[#5EA2EF]/30 to-[#0072F5]/30 backdrop-blur-md p-4 rounded-xl text-center w-20">
            <div id="minutes" class="text-3xl font-bold">00</div>
            <div class="text-xs uppercase tracking-wider">Minutes</div>
          </div>
          <div
            class="bg-gradient-to-br from-[#5EA2EF]/30 to-[#0072F5]/30 backdrop-blur-md p-4 rounded-xl text-center w-20">
            <div id="seconds" class="text-3xl font-bold">00</div>
            <div class="text-xs uppercase tracking-wider">Seconds</div>
          </div>
        </div>

        <!-- Festival Description -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div
            class="bg-gradient-to-br from-[#5EA2EF]/20 to-[#0072F5]/20 backdrop-blur-md p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 hover:shadow-lg">
            <i class="fas fa-school text-3xl mb-3 text-blue-400"></i>
            <h3 class="text-xl font-semibold mb-2">Hiburan Tahunan</h3>
            <p class="text-sm opacity-80">Chemicalistronic Festival merupakan sarana hiburan tahunan terutama untuk
              Warga SMK-SMTI Yogyakarta dari padatnya rutinitas pembelajaran</p>
          </div>
          <div
            class="bg-gradient-to-br from-[#6FEE8D]/20 to-[#17c964]/20 backdrop-blur-md p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 hover:shadow-lg">
            <i class="fas fa-star text-3xl mb-3 text-green-400"></i>
            <h3 class="text-xl font-semibold mb-2">Wadah Bakat</h3>
            <p class="text-sm opacity-80">Kegiatan ini sebagai wadah untuk menampilkan bakat-bakat dan kreativitas dari
              siswa-siswi SMK-SMTI Yogyakarta</p>
          </div>
          <div
            class="bg-gradient-to-br from-[#FF5F5F]/20 to-[#D52C2C]/20 backdrop-blur-md p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/20 hover:shadow-lg">
            <i class="fas fa-music text-3xl mb-3 text-red-400"></i>
            <h3 class="text-xl font-semibold mb-2">Guest Stars</h3>
            <p class="text-sm opacity-80">Beberapa Guest Star juga turut diundang guna memeriahkan CHEMICFEST #9</p>
          </div>
        </div>

        <!-- Sponsors Section -->
        <!--<div class="w-full max-w-4xl mx-auto px-4 mt-12">
          <h2 class="text-2xl font-bold text-center mb-6">Didukung Oleh</h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="bg-black/10 backdrop-blur-md p-4 rounded-xl flex items-center justify-center h-24 transform transition-all duration-300 hover:scale-105 hover:bg-black/15">
              <div class="text-center">
                <div class="w-full h-full flex items-center justify-center">
                  <div class="bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-transparent bg-clip-text font-bold text-xl">SPONSOR 1</div>
                </div>
              </div>
            </div>
            
            <div class="bg-black/10 backdrop-blur-md p-4 rounded-xl flex items-center justify-center h-24 transform transition-all duration-300 hover:scale-105 hover:bg-black/15">
              <div class="text-center">
                <div class="w-full h-full flex items-center justify-center">
                  <div class="bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-transparent bg-clip-text font-bold text-xl">SPONSOR 2</div>
                </div>
              </div>
            </div>
            
            <div class="bg-black/10 backdrop-blur-md p-4 rounded-xl flex items-center justify-center h-24 transform transition-all duration-300 hover:scale-105 hover:bg-black/15">
              <div class="text-center">
                <div class="w-full h-full flex items-center justify-center">
                  <div class="bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-transparent bg-clip-text font-bold text-xl">SPONSOR 3</div>
                </div>
              </div>
            </div>
            
            <div class="bg-black/10 backdrop-blur-md p-4 rounded-xl flex items-center justify-center h-24 transform transition-all duration-300 hover:scale-105 hover:bg-black/15">
              <div class="text-center">
                <div class="w-full h-full flex items-center justify-center">
                  <div class="bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-transparent bg-clip-text font-bold text-xl">SPONSOR 4</div>
                </div>
              </div>
            </div>
          </div>
        </div>-->

        <!-- CTA Button -->
        <div class="flex flex-col items-center mt-10">
          <a href="/register"
            class="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-full bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-red-500/50 hover:scale-105">
            <span
              class="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FF5F5F] via-[#FF7F7F] to-[#D52C2C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
            <span class="relative flex items-center">
              <i class="fas fa-ticket-alt mr-2"></i>
              <span class="text-lg">DAFTAR SEKARANG</span>
              <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </span>
          </a>
          <p class="text-sm mt-4 opacity-70 text-center">Tiket terbatas! Dapatkan harga spesial untuk pendaftar pertama
          </p>
        </div>

        <!-- Lainnya Section with Cards -->
        <div class="w-full max-w-6xl mx-auto z-10 px-4 mt-20">
          <h1 data-aos="fade-up"
            class="font-bold text-3xl mb-8 text-center bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-transparent bg-clip-text">
            Lainnya</h1>

          <!-- Card Carousel -->
          <div class="relative" data-aos="fade-up" data-aos-delay="200">
            <!-- Card Container -->
            <div class="flex flex-col md:flex-row gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
              <!-- Card 1: Buy Ticket -->
              <div
                class="relative min-w-[280px] md:min-w-[350px] h-[450px] rounded-2xl overflow-hidden snap-center group transform transition-all duration-500 flex-shrink-0">
                <div class="absolute inset-0 overflow-hidden rounded-2xl">
                  <img :src="pantai" alt="Tiket Chemicfest"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70">
                  </div>
                </div>
                <div class="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div
                    class="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform transition-all duration-500">
                    <div class="text-2xl font-bold mb-2 text-white">🎟️ Beli Tiket</div>
                    <p class="text-white/90 mb-4">Dapatkan tiket Chemicfest #9 sekarang dan nikmati semua acara!</p>
                    <router-link to="/registrasi"
                      class="inline-block px-6 py-3 bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white rounded-full font-medium transform transition-all hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 w-full text-center">
                      Beli Tiket!
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Card 2: Theater Synopsis -->
              <div
                class="relative min-w-[280px] md:min-w-[350px] h-[450px] rounded-2xl overflow-hidden snap-center group transform transition-all duration-500 flex-shrink-0">
                <div class="absolute inset-0 overflow-hidden rounded-2xl">
                  <img :src="senja" alt="Teater Chemicfest"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70">
                  </div>
                </div>
                <div class="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div
                    class="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform transition-all duration-500">
                    <div class="text-2xl font-bold mb-2 text-white">🎭 Teater</div>
                    <p class="text-white/90 mb-4">Intip keseruan teater Chemicfest #9 yang akan membuat Anda terpesona!
                    </p>
                    <button disabled
                      class="inline-block px-6 py-3 bg-gray-500 text-white/70 rounded-full font-medium w-full text-center cursor-not-allowed">
                      Segera Hadir
                    </button>
                    <!-- <button
                      class="inline-block px-6 py-3 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white rounded-full font-medium transform transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 w-full text-center">
                      Baca Sinopsis
                    </button> -->
                  </div>
                </div>
              </div>

              <!-- Card 3: Rundown -->
              <div
                class="relative min-w-[280px] md:min-w-[350px] h-[450px] rounded-2xl overflow-hidden snap-center group transform transition-all duration-500 flex-shrink-0">
                <div class="absolute inset-0 overflow-hidden rounded-2xl">
                  <img :src="batu" alt="Rundown Chemicfest"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70">
                  </div>
                </div>
                <div class="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div
                    class="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform transition-all duration-500">
                    <div class="text-2xl font-bold mb-2 text-white">🗓️ Rundown</div>
                    <p class="text-white/90 mb-4">Jangan lewatkan jadwal acara Chemicfest #9 yang spektakuler!</p>
                    <button disabled class="inline-block px-6 py-3 bg-gray-500 text-white/70 rounded-full font-medium w-full text-center cursor-not-allowed">
                      Segera Hadir
                    </button>
                    <!-- <button
                      class="inline-block px-6 py-3 bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-white rounded-full font-medium transform transition-all hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 w-full text-center">
                      Lihat Rundown
                    </button> -->
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Contact Us Section -->
        <div class="w-full max-w-4xl mx-auto z-10 px-4 mt-20 mb-24" data-aos="fade-up">
          <h1
            class="font-bold text-3xl mb-8 text-center bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-transparent bg-clip-text">
            Hubungi Kami</h1>

          <div class="flex flex-col items-center">
            <p class="text-center text-gray-900 max-w-xl mb-6">Punya pertanyaan tentang CHEMICFEST #9? Hubungi kami
              sekarang dan tim kami akan segera membantu Anda!</p>

            <router-link to="/contact">
              <button
                class="px-8 py-4 bg-gradient-to-r from-[#6FEE8D] to-[#17c964] rounded-full text-gray-900 font-medium inline-flex items-center gap-2 transform transition-all hover:shadow-lg hover:shadow-green-500/30 hover:scale-105">
                <i class="fas fa-envelope"></i>
                <span>Hubungi Kami</span>
                <i class="fas fa-arrow-right ml-1 group-hover:translate-x-1 transition-transform"></i>
              </button>
            </router-link>

            <!-- Social Media Links -->
            <div class="flex gap-4 mt-6">
              <!-- <a href="https://www.instagram.com/chemic_fest/"
                class="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center hover:bg-gray-900/20 transition-colors">
                <i class="fab fa-instagram text-gray-900"></i>
              </a> -->
              <!-- <a href="#"
                class="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center hover:bg-gray-900/20 transition-colors">
                <i class="fab fa-twitter text-gray-900"></i>
              </a>
              <a href="#"
                class="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center hover:bg-gray-900/20 transition-colors">
                <i class="fab fa-facebook-f text-gray-900"></i>
              </a> -->
              <!-- <a href="#"
                class="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center hover:bg-gray-900/20 transition-colors">
                <i class="fab fa-youtube text-gray-900"></i>
              </a> -->
            </div>
          </div>
        </div>


      </div>
    </section>

    <!-- Mascot Section -->
    <div
      class="fixed bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 z-20 transition-transform duration-300 hover:scale-110 cursor-pointer"
      @click="toggleSettings">
      <img :src="maskot" alt="Chemicfest Mascot" class="w-full h-auto" />
    </div>

    <!-- Navigation Bar -->
    <!-- <div class="fixed bottom-0 left-0 w-full bg-gray/50 backdrop-blur-md p-4 flex justify-around items-center z-20 border-t border-gray-300">
      <a href="#" class="text-center flex flex-col items-center text-gray-900 hover:text-[#5EA2EF] transition-colors">
        <i class="fas fa-home text-xl"></i>
        <span class="text-xs mt-1">Home</span>
      </a>
      
      <a href="#" class="text-center flex flex-col items-center text-gray-900 hover:text-[#6FEE8D] transition-colors">
        <i class="fas fa-calendar-alt text-xl"></i>
        <span class="text-xs mt-1">Events</span>
      </a>
      
      <a href="/register" class="text-center flex flex-col items-center text-gray-900 hover:text-[#FF5F5F] transition-colors">
        <i class="fas fa-ticket-alt text-xl"></i>
        <span class="text-xs mt-1">Tickets</span>
      </a>
      
      <a id="cogs" class="text-center flex flex-col items-center text-gray-900 hover:text-[#FF5F5F] transition-colors cursor-pointer">
        <i class="fas fa-cogs text-xl"></i>
        <span class="text-xs mt-1">More</span>
      </a>
    </div> -->

    <!-- Settings Panel -->
    <div id="scaffold"
      class="fixed inset-0 bg-black/90 backdrop-blur-md flex items-end transform translate-y-full transition-transform duration-300 z-30 hidden">
      <div class="w-full bg-gradient-to-b from-gray-100 to-white p-6 shadow-lg rounded-t-3xl border-t border-gray-800">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-black">Pengaturan</h2>
          <button id="closePopup" class="text-gray-400 hover:text-white transition-colors">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <div class="flex items-center mb-8">
          <img :src="maskot" alt="Chemicfest Maskot" class="w-24 h-auto mr-4" />
          <div>
            <h3 class="text-xl font-bold bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-transparent bg-clip-text">
              Chemicfest#9</h3>
            <p class="text-gray-400">Chemicalistronic Festival</p>
          </div>
        </div>

        <div class="space-y-3">
          <button
            class="w-full bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white py-3 px-4 rounded-xl flex items-center justify-between hover:opacity-90 transition-opacity">
            <span class="flex items-center"><i class="fas fa-handshake mr-2"></i> Kredit Sponsor</span>
            <i class="fas fa-chevron-right"></i>
          </button>

          <router-link to="/contact"
            class="w-full bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-white py-3 px-4 rounded-xl flex items-center justify-between hover:opacity-90 transition-opacity block">
            <span class="flex items-center"><i class="fas fa-envelope mr-2"></i> Contact Us</span>
            <i class="fas fa-chevron-right"></i>
          </router-link>

          <button
            class="w-full bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white py-3 px-4 rounded-xl flex items-center justify-between hover:opacity-90 transition-opacity mt-6"
            id="closePopupBtn">
            <span>Tutup</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logocf from '@/assets/img/VER 1-01.png';
import pantai from '@/assets/img/pantai.png';
import senja from '@/assets/img/senja.png';
import batu from '@/assets/img/bebatuan.png';
import maskot from '@/assets/img/chemicfest9_maskot.png';

export default {
  name: 'HomePage',
  data() {
    return {
      showSettings: false,
      logocf: logocf,
      pantai: pantai,
      senja: senja,
      batu: batu,
      maskot: maskot,
    };
  },
  methods: {
    toggleSettings() {
      const scaffold = document.getElementById("scaffold");
      scaffold.classList.remove("hidden");
      setTimeout(() => { scaffold.classList.remove("translate-y-full"); }, 10);
    },
    closeSettings() {
      const scaffold = document.getElementById("scaffold");
      scaffold.classList.add("translate-y-full");
      setTimeout(() => { scaffold.classList.add("hidden"); }, 300);
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async logout() {
      const sessionId = localStorage.getItem('sessionId');
      if (!sessionId) {
        alert("Session ID tidak ditemukan!");
        return;
      }
      try {
        const response = await axios.post('/logout', { sessionId });
        alert(response.data.message);
        localStorage.removeItem('sessionId');
        this.$router.push('/login');
      } catch (error) {
        alert(error.response ? error.response.data.message : "Terjadi kesalahan saat logout");
      }
    },
    handleLogin() {
      const sessionId = localStorage.getItem('sessionId');
      if (sessionId) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/login');
      }
    },
    updateTimer() {
      const targetDate = new Date("May 17, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update DOM elements with formatted values (add leading zeros)
      document.getElementById("days").textContent = days.toString().padStart(2, '0');
      document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

      if (distance < 0) {
        clearInterval(this.timer);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
      }
    },
  },
  mounted() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Initialize timer immediately and then update every second
    this.updateTimer();
    this.timer = setInterval(this.updateTimer, 1000);

    // Set up event listeners
    document.addEventListener("DOMContentLoaded", () => {
      const settingsIcon = document.getElementById("cogs");
      const scaffold = document.getElementById("scaffold");
      const closePopup = document.getElementById("closePopup");
      const closePopupBtn = document.getElementById("closePopupBtn");

      if (settingsIcon) {
        settingsIcon.addEventListener("click", () => {
          scaffold.classList.remove("hidden");
          setTimeout(() => { scaffold.classList.remove("translate-y-full"); }, 10);
        });
      }

      if (closePopup) {
        closePopup.addEventListener("click", () => {
          scaffold.classList.add("translate-y-full");
          setTimeout(() => { scaffold.classList.add("hidden"); }, 300);
        });
      }

      if (closePopupBtn) {
        closePopupBtn.addEventListener("click", () => {
          scaffold.classList.add("translate-y-full");
          setTimeout(() => { scaffold.classList.add("hidden"); }, 300);
        });
      }

      if (scaffold) {
        scaffold.addEventListener("click", (event) => {
          if (event.target === scaffold) {
            scaffold.classList.add("translate-y-full");
            setTimeout(() => { scaffold.classList.add("hidden"); }, 300);
          }
        });
      }
    });
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #000;
  color: #fff;
}

/* Animation for floating elements */
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Gradient animations */
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

/* Adding some smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>