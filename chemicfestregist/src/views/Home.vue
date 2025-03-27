<template>
  <div class="bg-gray-300 flex justify-center items-center min-h-screen">
    <!-- Header -->
    <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10 flex justify-between items-center">
  <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
  <div class="flex gap-4">
    <router-link 
        @click.prevent="handleLogin"
        to="/login" 
        class="text-color-primary font-semibold hover:underline"
      >Login</router-link>
    <router-link 
                to="/registrasi" class="text-color-primary font-semibold hover:underline">Registrasi</router-link>
  </div>
</header>

    <!-- Main Content -->
    <main class="flex flex-col items-center justify-center">
      <div class="text-center bg-gray-800  p-6" data-aos="fade-in" data-aos-delay="200">
        <img class="mt-20 w-3/4 h-auto mx-auto" :src="logocf" alt="Chemicfest Maskot"  />
        <h1 class="text-4xl text-white font-bold" id="home">Apa itu <span class="text-color-primary">Chemicfest</span>?</h1>
        <p class="text-md text-gray-200 mt-8 max-w-2xl mx-auto" data-aos="fade-in" data-aos-delay="400">
          Chemicalistronic Festival (CHEMICFEST) #9 Merupakan Festival tahunan sebagai sarana hiburan terutama untuk Warga SMK-SMTI Yogyakarta dari padatnya rutinitas pembelajaran. Kegiatan ini sebagai wadah untuk menampilkan bakat-bakat dari siswa-siswi SMK-SMTI Yogyakarta. Chemicfest juga menjadi ajang bagi siswa-siswi yang mengikuti ekstrakurikuler untuk memamerkan kreativitas yang mereka miliki. Beberapa Guest Star juga turut diundang guna memeriahkan CHEMICFEST #9.
        </p>
      </div>
      <div class="mt-10 p-5 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-in" data-aos-delay="500">
          <div class="mb-4 mt-4">
          <h1 class="text-white text-2xl font-bold">Kapan sih Chemicfest #9 ?</h1>
          </div>
        <div class="flex justify-center items-center space-x-8">
          <div class="text-center text-color-primary">
            <p id="days" class="text-4xl font-bold">0</p>
            <h2 class="text-xl font-semibold">Hari</h2>
          </div>
          <div class="text-center text-color-secondary">
            <p id="hours" class="text-4xl font-bold">0</p>
            <h2 class="text-xl font-semibold">Jam</h2>
          </div>
          <div class="text-center text-color-accent">
            <p id="minutes" class="text-4xl font-bold">0</p>
            <h2 class="text-xl font-semibold">Menit</h2>
          </div>
          <div class="text-center text-color-background">
            <p id="seconds" class="text-4xl font-bold">0</p>
            <h2 class="text-xl font-semibold">Detik</h2>
          </div>
        </div>
      </div>
      <h1 data-aos="fade-in" data-aos-delay="600" class="font-bold text-2xl mt-20">Sponsor</h1>
      
      
      
     
      
      
      <h1 data-aos="fade-in" data-aos-delay="600" class="font-bold text-2xl mt-20">Lainnya</h1>
      <div class="carousel-wrapper p-8" data-aos="fade-in" data-aos-delay="700">
        <div class="carousel-container p-8 mt-10 mb-20">
          <div id="card1" data-aos="fade-in" data-aos-delay="800" class="card relative w-full max-w-[80vw] h-[450px] rounded-2xl shadow-lg bg-white overflow-hidden">
           <img :src="pantai" alt="Profile Picture" class=" object-fill h-128">
          <div class="absolute bottom-0 left-0 w-full h-21 bg-white/50 backdrop-blur-md rounded-b-2xl flex flex-col items-center justify-center p-4">
            <h2 class="text-lg font-semibold text-gray-900">🎟️ Beli Tiket Sekarang!</h2>
              <div class="flex items-center justify-center mt-2">
              <span class="ml-2 text-sm text-gray-800">Tiket Chemicfest #9</span>
              </div>
              <router-link 
                to="/registrasi" 
                class="mt-3 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-white/70">
                Beli Tiket!
              </router-link>
          </div>
          </div>
        

        <div id="card2" data-aos="fade-in" data-aos-delay="800" class="card relative w-full max-w-[80vw] h-[450px] rounded-2xl shadow-lg bg-white overflow-hidden">
            <img :src="senja" alt="Profile Picture" class="w-full h-128">
            <div class="absolute bottom-0 left-0 w-full h-21 bg-white/50 backdrop-blur-md rounded-b-2xl flex flex-col items-center justify-center p-4">
              <h2 class="text-lg font-semibold text-gray-900">🎭 Teater</h2>
              <div class="flex items-center justify-center mt-2">
                <span class="ml-2 text-sm text-gray-800">Sinopsis Teater Chemicfest #9</span>
              </div>
              <button class="mt-3 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-white/70">Baca Sinopsis!</button>
            </div>
          </div>

          <div id="card3" data-aos="fade-in" data-aos-delay="800" class="card relative w-full max-w-[80vw] h-[450px] rounded-2xl shadow-lg bg-white overflow-hidden">
            <img :src="batu" alt="Profile Picture" class="w-full h-128">
            <div class="absolute bottom-0 left-0 w-full h-21 bg-white/50 backdrop-blur-md rounded-b-2xl flex flex-col items-center justify-center p-4">
              <h2 class="text-lg font-semibold text-gray-900">🗓️ Rundown Chemicfest #9</h2>
              <div class="flex items-center justify-center mt-2">
                <span class="ml-2 text-sm text-gray-800">Lihat Rundown Chemicfest #9</span>
              </div>
              <button class="mt-3 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-white/70">Lihat Rundown!</button>
            </div>
          </div>
        </div>
    </div>      


    <h1 data-aos="fade-in" data-aos-delay="600" class="font-bold text-2xl mb-4">Hubungi Kami</h1>
    <h1 class="text-center">
      <a
      :href="whatsappLink"
      target="_blank"
      class="mb-24 inline-flex items-center px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
    >
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.047.538 4.05 1.552 5.794L0 24l6.393-1.61C8.116 23.465 10.03 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.82 0-3.601-.482-5.17-1.395l-.369-.213-3.794.956.983-3.715-.242-.386A9.93 9.93 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.634-6.608c-.252-.126-1.492-.736-1.723-.822-.231-.084-.4-.126-.569.126-.168.253-.653.822-.8.99-.147.168-.295.189-.547.063-.253-.126-1.068-.394-2.035-1.257a7.61 7.61 0 0 1-1.64-2.018c-.168-.253-.016-.39.126-.516.126-.11.295-.295.442-.442.148-.147.195-.253.295-.421s.053-.316-.021-.442c-.074-.126-.568-1.366-.777-1.867-.205-.501-.412-.434-.569-.442a1.159 1.159 0 0 0-.295.032c-.095.032-.758.296-1.041.59-.295.295-.777.777-.777 1.797s.796 2.085.907 2.23c.11.147 1.57 2.394 3.805 3.36 2.236.966 2.236.644 2.641.604.406-.037 1.492-.616 1.703-1.214.21-.599.21-1.113.147-1.214-.063-.101-.231-.168-.484-.295z"></path>
      </svg>
      Chat via WhatsApp
    </a></h1>


    </main>

    <div class="fixed bottom-0 left-0 w-full bg-gray/100 backdrop-blur-md p-5 flex justify-around items-center z-20">
      <a href="" class="text-center "><i class="fas fa-home  text-1xl"></i></a>
      
      <a id="cogs" class="text-center "><i class="fas fa-cogs  text-1xl"></i></a>
    </div>
    <div id="scaffold" class="fixed inset-0 bg-black backdrop-blur-md bg-opacity-50 flex items-end transform translate-y-full transition-transform duration-300 z-30 hidden">
      <div class="w-full bg-white p-6 shadow-lg rounded-t-lg">
        <img :src="maskot" alt="Chemicfest Maskot" class="w-2/4 h-auto mx-auto" />
        <h2 class="text-xl font-bold">Pengaturan</h2>
        <p class="text-gray-600">Menu pengaturan.</p>
 
        <button id="" class="mt-4 w-full bg-green-500 text-white py-1 rounded">1. Kredit Sponsor Chemicfest</button>
        <router-link to="/contact"><button id="" class="mt-4 w-full bg-green-500 text-white py-1 rounded">2. Contact Us</button></router-link>
        
        <button id="closePopup" class="mt-4 w-full bg-red-500 text-white py-2 ">Tutup</button>
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
  name: 'Home',
  data() {
    return {
      showSettings: false,
      logocf: logocf,
      pantai: pantai,
      senja: senja,
      batu: batu,
      maskot: maskot,
      phoneNumber: "62895351483367", 
      message: "Halo! Saya ingin bertanya tentang Chemicfest",
    };
  },
  computed: {
    whatsappLink() {
      return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    },
  },
  methods: {
    toggleSettings() {
      this.showSettings = !this.showSettings;
    },
    closeSettings() {
      this.showSettings = false;
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
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;

      if (distance < 0) {
        clearInterval(this.timer);
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
      }
    },
  },
  mounted() {
    AOS.init();

    document.addEventListener("DOMContentLoaded", () => {
      const settingsIcon = document.getElementById("cogs");
      const scaffold = document.getElementById("scaffold");
      const closePopup = document.getElementById("closePopup");

      settingsIcon.addEventListener("click", () => {
        scaffold.classList.remove("hidden");
        setTimeout(() => { scaffold.classList.remove("translate-y-full"); }, 10);
      });

      closePopup.addEventListener("click", () => {
        scaffold.classList.add("translate-y-full");
        setTimeout(() => { scaffold.classList.add("hidden"); }, 300);
      });

      scaffold.addEventListener("click", (event) => {
        if (event.target === scaffold) {
          scaffold.classList.add("translate-y-full");
          setTimeout(() => { scaffold.classList.add("hidden"); }, 300);
        }
      });
    });

    this.timer = setInterval(this.updateTimer, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
