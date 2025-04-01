<template>  
  <div class="bg-gray-300 flex justify-center items-center min-h-screen text-gray-900">  
    <!-- Main Content -->  
    <main class="flex flex-col items-center justify-center flex-grow pt-20 px-5">  
      <!-- Card Pembelian Tiket -->  
      <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">  
        <!-- Container untuk menampilkan data tiket -->  
        <div id="ticketDetails" class="mb-4 text-center" v-html="ticketDetails"></div>  

        <!-- Form Pembelian Tiket -->  
        <form id="buyTicketForm" class="space-y-4" @submit.prevent="buyTicket">  
          <div>  
            <label for="quantity" class="block text-sm font-medium text-gray-700">Jumlah Tiket</label>  
            <input id="quantity" v-model="quantity" type="number" min="1" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" required>  
          </div>  
          <button id="pay-button" class="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">Beli Tiket</button>  
        </form>  
        <p v-if="errorMessage" class="mt-2 text-red-500 text-sm text-center">
          {{ errorMessage }}
        </p> 
      </div>  
      <div id="snap-container"></div>
    </main>  
  </div>  
</template>  

<script setup>  
import { ref, onMounted } from 'vue';  
import axios from 'axios';  
import { useRouter } from "vue-router";
const router = useRouter();

// Reactive State  
const quantity = ref(1);  
const ticketDetails = ref("");  
const activeTicket = ref(null);  
const errorMessage = ref("");


// Fungsi untuk mengambil data tiket dari backend  
async function fetchTicket() {  
  try {           
    const apiUrl = import.meta.env.VITE_API_BASE;  
    console.log("[INFO] Fetching from:", apiUrl);

    const response = await axios.get(`${apiUrl}/api/get-ticket`);  
    console.log("[INFO] Response status:", response.status);  
    console.log("[INFO] Response headers:", response.headers);  
    console.log("[INFO] Response data:", response.data);  

    // Cek apakah response memiliki data tiket  
    if (!response.data) {  
      throw new Error("Response dari API kosong atau tidak valid.");
    }

    if (!response.data.data) {  
      console.error("[ERROR] Data tiket tidak ditemukan dalam respons API:", response.data);  
      throw new Error("Data tiket tidak ditemukan dalam respons API");
    }  

    const tickets = Array.isArray(response.data.data) ? response.data.data : [];  
    console.log("[INFO] Parsed tickets:", tickets);  

    // Filter tiket yang aktif  
    activeTicket.value = tickets.find(ticket => ticket.isReady);  
    console.log("[INFO] Active ticket:", activeTicket.value);  

    if (activeTicket.value) {  
      ticketDetails.value = `  
        <h2 class="text-xl font-bold mb-2">${activeTicket.value.name}</h2>  
        <p><span class="font-bold">Rp ${activeTicket.value.price}</span></p>  
      `;  
      console.log("[INFO] Ticket details updated:", ticketDetails.value);  
    } else {  
      ticketDetails.value = "Tiket tidak tersedia";  
      console.warn("[WARNING] Tidak ada tiket aktif yang tersedia.");  
    }  
  } catch (error) {  
    console.error("[ERROR] Gagal mengambil tiket:", error.message);  
    console.error("[DETAIL] Error objek:", error);  
    ticketDetails.value = "Menunggu backend";  
  }  
}

async function buyTicket() {
  try {
    errorMessage.value = ""; // Reset error sebelum mulai request

    const apiUrl = import.meta.env.VITE_API_BASE;
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const userId = userData?.userId;

    if (!userId) {
      throw new Error("User ID tidak ditemukan.");
    }

    const ticketResponse = await axios.get(`${apiUrl}/api/get-ticket`);
    const productId = ticketResponse.data.data[0].productId;

    const response = await axios.post(`${apiUrl}/api/buy-ticket`, {
      userId: userId,
      product_Id: productId, 
      quantity: quantity.value,
    });

    const transactionToken = response.data.token;
    console.log("[INFO] Transaction token:", transactionToken);

    if (transactionToken) {
      // Jika sukses, hapus error message
      errorMessage.value = "";

      // Memuat Snap Midtrans
      const snapScript = document.createElement("script");
      snapScript.src = "https://app.midtrans.com/snap/snap.js";
      snapScript.setAttribute("data-client-key", "Mid-client-RE6DmaCD9JsF11Mu");
      snapScript.onload = () => {
        const snapContainer = document.getElementById("snap-container");
        snapContainer.classList.add("active");
        window.snap.embed(transactionToken, {
          embedId: "snap-container",
          onSuccess: function (result) {
            console.log("[INFO] Pembayaran berhasil:", result);
            alert("Pembayaran berhasil!");
            const event = new CustomEvent("paymentSuccess");
            window.dispatchEvent(event);
            router.push("/riwayat");
          },
          onPending: function (result) {
            console.log("[INFO] Pembayaran pending:", result);
            alert("Pembayaran masih pending!");
          },
          onError: function (result) {
            console.log("[ERROR] Pembayaran gagal:", result);
            alert("Pembayaran gagal!");
          },
          onClose: function () {
            console.log("[INFO] Pembayaran ditutup oleh pengguna.");
            alert("Pembayaran ditutup!");
          },
        });
      };
      document.body.appendChild(snapScript);
    } else {
      throw new Error("Gagal mendapatkan token transaksi");
    }
  } catch (error) {
    console.error("[ERROR] Pembelian tiket gagal:", error.response?.data || error.message);
    
    // Ambil pesan error dari backend dan cetak ke bawah tombol
    errorMessage.value = error.response?.data?.message || "Pembelian tiket gagal, coba lagi!";
  }
}



// Panggil fungsi fetchTicket saat komponen dimuat  
onMounted(() => {  
  fetchTicket();  
});  
</script>  

<style>  
body {  
  font-family: 'Poppins', sans-serif;  
}  
#snap-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: none; /* Awalnya disembunyiin */
  align-items: center;
  justify-content: center;
}

#snap-container.active {
  display: flex; /* Muncul pas dikasih kelas 'active' */
}

</style>
