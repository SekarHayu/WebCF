<template>
    <div class="bg-gray-300 flex justify-center items-center min-h-screen">
      <!-- Header -->
      <header class="bg-gray/50 backdrop-blur-md w-full fixed top-0 left-0 px-6 py-4 z-10">
        <h1 id="title" class="text-2xl text-color-primary font-bold cursor-pointer">Chemicfest</h1>
      </header>
  
      <!-- Main Content -->
      <main class="flex flex-col items-center justify-center flex-grow pt-20 px-5">
    <!-- Card Pembelian Tiket -->
    <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
      <!-- Container untuk menampilkan data tiket -->
      <div id="ticketDetails" class="mb-4 text-center">
        Menunggu backend
      </div>
      <!-- Form Pembelian Tiket -->
      <form id="buyTicketForm" class="space-y-4">
        <div>
          <label for="quantity" class="block text-sm font-medium text-gray-700">Jumlah Tiket</label>
          <input id="quantity" name="quantity" type="number" min="1" value="1" class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" required>
        </div>
        <button id="pay-button" type="submit" class="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">Beli Tiket</button>
        <div id="snap-container"></div>
      </form>
    </div>
  </main>
  
      </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const quantity = ref(1);
  const ticketDetails = ref("Menunggu backend");
  let activeTicket = null;

  // Fungsi untuk mengambil data tiket dari backend
  async function fetchTicket() {
    try {
      const apiUrl = import.meta.env.VITE_API_BASE;
      const response = await axios.get(`${apiUrl}/tickets`);
      const tickets = response.data;

      // Filter tiket yang aktif
      activeTicket = tickets.find(ticket => ticket.active);
      if (activeTicket) {
        ticketDetails.value = `
          <h2 class="text-xl font-bold mb-2">${activeTicket.name}</h2>
          <p>Pre Sale <span class="font-bold">Rp ${activeTicket.price}</span></p>
        `;
      } else {
        ticketDetails.value = "Tiket tidak tersedia";
      }
    } catch (error) {
      console.error("Error mengambil tiket:", error);
      ticketDetails.value = "Menunggu backend";
    }
  }

  // Fungsi untuk membeli tiket
  async function buyTicket() {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("User belum login!");
      window.location.href = "/login";
      return;
    }

    if (!activeTicket) {
      alert("Tiket tidak tersedia");
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_BASE;
      const response = await axios.post(`${apiUrl}/get-ticket`, {
        userId,
        product_Id: activeTicket.id,
        quantity: quantity.value,
      });

      console.log("Pembelian tiket sukses:", response.data);
      alert(response.data.message);

      // Check jika ada token Midtrans
      if (response.data?.snapToken) {
        // Trigger embed Snap Midtrans
        window.snap.embed(response.data.snapToken, {
          embedId: 'snap-container'
        });
      } else {
        alert("Gagal mendapatkan token pembayaran");
      }
    } catch (error) {
      console.error("Error pembelian tiket:", error.response ? error.response.data : error);
      alert(error.response?.data?.message || "Terjadi kesalahan saat pembelian tiket");
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
  </style>
  