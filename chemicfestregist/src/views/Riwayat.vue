<template>
  <div class="bg-gray-300 flex justify-center items-center min-h-screen">
    <!-- Header -->
    <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10 flex justify-between items-center">
      <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
      <div class="flex gap-4">
        <router-link to="/dashboard" class="text-color-primary font-semibold hover:underline">Kembali</router-link>
      </div>
    </header>

    <div class="w-full max-w-md mx-auto p-4 mt-20">
      <div class="grid grid-cols-1 gap-4">
        
        <!-- Loading Spinner -->
        <div v-if="loading" class="flex justify-center items-center py-8">
          <p class="text-gray-600">Loading riwayat tiket...</p>
        </div>

      
        
        <!-- Card Riwayat Tiket (muncul kalau ada riwayat) -->
        <div v-if="hasTicketHistory" class="bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 class="text-xl font-bold mb-2">Riwayat Tiket</h2>
          <p class="text-gray-600 mb-4">Berikut adalah riwayat pembelian tiket Anda:</p>
          <ul class="text-left space-y-2">
            <li
              v-for="(ticket, index) in ticketHistory"
              :key="index"
              class="bg-gray-100 p-3 rounded-md shadow-sm"
            >
              <p class="text-gray-800 font-semibold">Event: {{ ticket.type }}</p>
              <p class="text-gray-600">Jumlah: {{ ticket.needed }}</p>
              <p class="text-gray-600">Booking Code: {{ ticket.bookingCode }}</p>
              
              <!-- Lihat E-Ticket 
              <div>
                <button @click="showPdf(ticket.bookingCode)">Lihat E-Ticket</button>
  <div v-if="pdfUrl">
    <iframe :src="pdfUrl" width="100%" height="600px"></iframe>
  </div>
  </div>
  <br>-->

              <!-- Download E-Ticket
              <a 
                :href="`${apiUrl}/download/${getFilename(ticket.urlTicket.eTicket)}`" 
                download 
                class="text-green-500 hover:underline"
              >
                Download E-Ticket
              </a>  -->

            </li>
          </ul>
        </div>

        <!-- Tidak Ada Riwayat -->
        <div v-else-if="!loading" class="bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 class="text-xl font-bold mb-2">Tidak Ada Riwayat</h2>
          <p class="text-gray-600">Anda belum memiliki riwayat pembelian tiket.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'vue-router';

const router = useRouter();

const ticketHistory = ref([]);
const hasTicketHistory = ref(false);
const loading = ref(true);
const errorMessage = ref('');
const apiUrl = import.meta.env.VITE_API_BASE; // Ambil URL API dari environment variable

// Fungsi untuk mengambil nama file dari URL e-ticket
// const getFilename = (url) => {
 // return url.split('/').pop(); // Ambil bagian akhir dari URL (nama file)
//};

//const pdfUrl = ref("");

//const showPdf = async (ticketId) => {
//  try {
    // Gunakan ID tiket yang dikirimkan sebagai parameter
 //   pdfUrl.value = `${import.meta.env.VITE_ETICKET_API_BASE}/tickets/pdf/${ticketId}`;
  //} catch (error) {
    //console.error("Gagal memuat PDF:", error);}};


const checkTicketHistory = async () => {
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


// Jalankan fungsi ketika komponen di-mount
onMounted(() => {
  checkTicketHistory();
  window.addEventListener("paymentSuccess", checkTicketHistory);
});
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
