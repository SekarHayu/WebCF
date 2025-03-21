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
  
  <script>
  document.addEventListener("DOMContentLoaded", async function () {
    const ticketDetails = document.getElementById("ticketDetails");
    let activeTicket = null;

    // Fungsi untuk mengambil data tiket dari backend
    async function fetchTicket() {
      try {
        const response = await axios.get("/tickets");
        const tickets = response.data;
        // Filter tiket yang aktif
        activeTicket = tickets.find(ticket => ticket.active);
        if (activeTicket) {
          ticketDetails.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${activeTicket.name}</h2>
            <p>Pre Sale <span class="font-bold">Rp ${activeTicket.price}</span></p>
          `;
        } else {
          ticketDetails.innerText = "Tiket tidak tersedia";
        }
      } catch (error) {
        console.error("Error mengambil tiket:", error);
        ticketDetails.innerText = "Menunggu backend";
      }
    }

    // Panggil fungsi fetchTicket saat halaman dimuat
    await fetchTicket();

    // Tangani submit form pembelian tiket
    const buyTicketForm = document.getElementById("buyTicketForm");
    buyTicketForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const quantity = parseInt(document.getElementById("quantity").value, 10);
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
        const response = await axios.post("url/api/get-ticket", {
          userId,
          product_Id: activeTicket.id,
          quantity
        });

        console.log("Pembelian tiket sukses:", response.data);
        alert(response.data.message);

        // Check jika ada token Midtrans
        if (response.data.snapToken) {
          // Trigger embed Snap Midtrans
          window.snap.embed(response.data.snapToken, {
            embedId: 'snap-container'
          });
        } else {
          alert("Gagal mendapatkan token pembayaran");
        }
      } catch (error) {
        console.error("Error pembelian tiket:", error.response ? error.response.data : error);
        alert(error.response ? error.response.data.message : "Terjadi kesalahan saat pembelian tiket");
      }
    });
  });
</script>

  
  <style>
  body {
    font-family: 'Poppins', sans-serif;
  }
  </style>
  