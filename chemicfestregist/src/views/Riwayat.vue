<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-800 py-20 px-4">
    <div class="w-full max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-bold mb-3">
          <span class="bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-transparent bg-clip-text">Tiket Saya</span>
        </h1>
        <p class="text-gray-600 max-w-lg mx-auto">Kelola dan lihat semua tiket event Anda di satu tempat</p>
      </div>
      
      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-20">
        <div class="w-16 h-16 border-4 border-t-[#5EA2EF] border-b-[#0072F5] border-l-transparent border-r-transparent rounded-full animate-spin mb-4"></div>
        <p class="text-gray-500">Memuat riwayat tiket Anda...</p>
      </div>
      
      <!-- Error Message -->
      <div v-if="errorMessage && !loading" class="bg-gradient-to-r from-[#FF5F5F]/10 to-[#D52C2C]/10 backdrop-blur-md rounded-xl p-6 mb-6 text-center">
        <div class="text-[#FF5F5F] text-xl mb-2">
          <i class="fas fa-exclamation-circle mr-2"></i>Oops!
        </div>
        <p class="text-gray-800">{{ errorMessage }}</p>
        <button @click="checkTicketHistory" class="mt-4 px-6 py-2 bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity">
          Coba Lagi
        </button>
      </div>
      
      <!-- No Tickets -->
      <div v-if="!loading && !hasTicketHistory && !errorMessage" class="relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-0 left-0 w-full h-full">
          <div class="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#5EA2EF]/10 to-[#0072F5]/5 blur-2xl"></div>
          <div class="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#FF5F5F]/10 to-[#D52C2C]/5 blur-2xl"></div>
        </div>
        
        <div class="bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200 relative">
          <div class="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <i class="fas fa-ticket-alt text-3xl text-gray-500"></i>
          </div>
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Belum Ada Tiket</h2>
          <p class="text-gray-500 mb-6">Anda belum memiliki riwayat pembelian tiket untuk event apapun.</p>
          <router-link to="/event">
            <button class="px-8 py-3 bg-gradient-to-r from-[#6FEE8D] to-[#17c964] rounded-full text-white font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all transform hover:scale-105">
              <i class="fas fa-shopping-cart mr-2"></i>Beli Tiket Sekarang
            </button>
          </router-link>
        </div>
      </div>
      
      <!-- Ticket History -->
      <div v-if="hasTicketHistory && !loading" class="relative overflow-hidden rounded-xl">
        <!-- Background blur elements -->
        <div class="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-[#5EA2EF]/20 to-[#0072F5]/10 blur-3xl"></div>
        <div class="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-tl from-[#6FEE8D]/20 to-[#17c964]/10 blur-3xl"></div>
        
        <div class="bg- shadow-lg rounded-xl p-6 sm:p-8 border border-gray-200 relative">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-800">Riwayat Tiket</h2>
            <span class="px-3 py-1 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] rounded-full text-white text-xs">{{ ticketHistory.length }} Tiket</span>
          </div>
          
          <div class="space-y-4">
            <div v-for="(ticket, index) in ticketHistory" :key="index" 
                 class="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-[#5EA2EF]/30 hover:bg-gray-100">
              <div class="p-4 sm:p-5">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div class="flex items-center mb-3 sm:mb-0">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] flex items-center justify-center mr-3">
                      <i class="fas fa-ticket-alt text-white"></i>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-800">{{ ticket.type }}</h3>
                      <p class="text-xs text-gray-500">Booking #{{ ticket.bookingCode }}</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-start sm:justify-end w-full sm:w-auto space-x-2">
                    <span class="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-700">{{ ticket.needed }} Tiket</span>
                    <span class="px-3 py-1 bg-gradient-to-r from-[#6FEE8D]/30 to-[#17c964]/30 text-gray-800 rounded-full text-xs">Aktif</span>
                  </div>
                </div>
                
                <div class="border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div class="mb-3 sm:mb-0">
                    <div class="text-sm text-gray-500 mb-1">Kode Booking:</div>
                    <div class="bg-gray-200 px-3 py-2 rounded text-gray-800 font-mono text-sm">{{ ticket.bookingCode }}</div>
                  </div>
                  
                  <div class="flex space-x-2 w-full sm:w-auto">
                    <!-- Lihat E-Ticket Button -->
                    <a :href="ticket.urlTicket.eTicket" class="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] rounded-lg text-white text-sm hover:opacity-90 transition-opacity flex items-center justify-center">
                      <i class="fas fa-eye mr-2"></i>Lihat E-Ticket
                    </a>
                    
                    <!-- Download Button -->
                    <!-- <a :href="ticket.urlTicket.downloadETicket" class="flex-1 sm:flex-none px-4 py-2 bg-gray-200 rounded-lg text-gray-700 text-sm hover:bg-gray-300 transition-all flex items-center justify-center">
                      <i class="fas fa-download mr-2"></i>Download
                    </a> -->
                  </div>
                </div>
              </div>
              
              <!-- Ticket Footer -->
              <div class="bg-gradient-to-r from-[#5EA2EF]/10 to-[#0072F5]/10 p-3 flex justify-between items-center border-t border-gray-200">
                <div class="flex items-center text-xs text-gray-600">
                  <i class="fas fa-calendar-alt mr-1"></i> 17 Mei 2025
                </div>
                <div class="flex items-center text-xs text-gray-600">
                  <i class="fas fa-map-marker-alt mr-1"></i>Sportorium UMY
                </div>
              </div>
            </div>
          </div>
          
          <!-- Buy More Tickets -->
          <!-- <div class="mt-8 text-center">
            <router-link to="/event">
              <button class="px-6 py-3 bg-gradient-to-r from-[#6FEE8D] to-[#17c964] rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all transform hover:scale-105">
                <i class="fas fa-plus mr-2"></i>Beli Tiket Lainnya
              </button>
            </router-link>
          </div> -->
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="mt-10 text-center">
        <p class="text-gray-500 text-sm mb-4">Ada pertanyaan tentang tiket Anda?</p>
        <router-link to="/contact" class="text-[#5EA2EF] hover:underline inline-flex items-center">
          <i class="fas fa-headset mr-1"></i> Hubungi Kami
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import 'aos/dist/aos.css';

const ticketHistory = ref([]);
const hasTicketHistory = ref(false);
const loading = ref(true);
const errorMessage = ref('');
const apiUrl = import.meta.env.VITE_API_BASE; // Ambil URL API dari environment variable

const checkTicketHistory = async () => {
  errorMessage.value = '';
  loading.value = true;
  
  try {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const userId = userData?.userId;
    if (!userId) {
      console.error("User ID tidak ditemukan.");
      errorMessage.value = "User ID tidak ditemukan. Silakan login kembali.";
      loading.value = false;
      return;
    }

    // Kirim userId ke API
    const response = await axios.post(`${apiUrl}/api/have-ticket`, {
      userId: userId,
    });

    // Update data riwayat tiket jika ada
    if (response.status === 200) {
      const data = response.data.data; // Ambil array data dari respons
      let allTickets = [];

      // Loop melalui setiap transaksi dan ambil tiket
      data.forEach(transaction => {
        if (Array.isArray(transaction.tickets)) {
          allTickets = allTickets.concat(transaction.tickets);
        }
      });

      console.log("Tiket yang ditemukan:", allTickets);

      if (allTickets.length > 0) {
        ticketHistory.value = allTickets;
        hasTicketHistory.value = true;
        console.log("Riwayat tiket berhasil diambil:", ticketHistory.value);
      } else {
        console.log("Tidak ada riwayat tiket.");
        hasTicketHistory.value = false;
      }
    } else {
      console.error("Gagal mendapatkan tiket, status:", response.status);
      errorMessage.value = "Gagal mendapatkan tiket. Silakan coba lagi nanti.";
    }
  } catch (error) {
    console.error("Gagal mengambil riwayat tiket:", error.message);
    errorMessage.value = "Terjadi kesalahan saat mengambil data tiket.";
  } finally {
    loading.value = false;
  }
};

// Fungsi untuk showPdf (for future implementation)
const showPdf = (ticketId) => {
  console.log("Showing PDF for ticket:", ticketId);
  // Implementation placeholder
};

// Fungsi untuk mengambil nama file dari URL e-ticket (for future implementation)
const getFilename = (url) => {
  if (!url) return '';
  return url.split('/').pop(); // Ambil bagian akhir dari URL (nama file)
};

// Jalankan fungsi ketika komponen di-mount
onMounted(() => {
  checkTicketHistory();
  window.addEventListener("paymentSuccess", checkTicketHistory);
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f5f7fa;
  color: #333;
}

/* Animation for floating elements */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Adding smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>