<template>
  <div class="bg-gray-50 flex justify-center items-center min-h-screen relative overflow-hidden text-gray-900 py-10">
    <!-- Background blur circles -->
    <div
      class="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-[#5EA2EF]/30 to-[#0072F5]/20 blur-3xl">
    </div>
    <div
      class="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-[#6FEE8D]/30 to-[#17c964]/20 blur-3xl">
    </div>

    <!-- Main Content -->
    <main class="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 relative">
      <!-- Header with golden ratio spacing -->
      <div class="w-full mb-8 text-center">
        <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C]">Chemicfest #9</h1>
        <p class="text-gray-600 mt-2">Pembelian Tiket</p>
      </div> 
       <!-- Pop-up Modal for Document Verification -->
      <div v-if="showBlockModal && role === 'alumni'" class="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white rounded-lg p-6 shadow-lg w-96">
          <h2 class="text-xl font-semibold mb-4 text-center">Verifikasi Dokumen</h2>
          <p class="mb-4 text-center">Untuk melanjutkan, silakan unggah ijazah anda sebagai bukti alumni.</p>

          <!-- File upload form -->
          <input type="file" @change="handleFileUpload" class="w-full text-dark dark:text-white text-sm bg-white dark:bg-gray-700 border  dark:border-gray-600 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-white-1 dark:file:bg-gray-800 file:hover:brightness-150 file:text-black dark:file:text-white rounded-lg"  />

          <!-- Submit Button -->
          <button
            @click="submitDocument"
            :disabled="isLoading || !selectedFile"
            class="bg-blue-500 text-white px-4 mx-28 flex py-2 rounded mt-4 disabled:bg-gray-400"
          >
            Upload  
          </button>

          <!-- Loading Spinner -->
          <div v-if="isLoading" class="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <svg class="w-16 h-16 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4V8m0 4v4m-4 0H8m4 0h4m-4-4h4m-4 0H8" />
            </svg>
          </div>
        </div>
      </div>

      <div v-if="showBlockModal && role === 'keluarga_siswa'" class="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white rounded-lg p-6 shadow-lg w-96">
          <h2 class="text-xl font-semibold mb-4 text-center">Verifikasi Dokumen</h2>
          <p class="mb-4 text-center">Untuk melanjutkan, silakan unggah kartu keluarga anda sebagai bukti keluarga siswa.</p>

          <!-- File upload form -->
          <input type="file" @change="handleFileUpload" class="w-full text-dark dark:text-white text-sm bg-white dark:bg-gray-700 border  dark:border-gray-600 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-white-1 dark:file:bg-gray-800 file:hover:brightness-150 file:text-black dark:file:text-white rounded-lg"  />

          <!-- Submit Button -->
          <button
            @click="submitDocument"
            :disabled="isLoading || !selectedFile"
            class="bg-blue-500 text-white px-4 mx-28 flex py-2 rounded mt-4 disabled:bg-gray-400"
          >
            Upload  
          </button>

          <!-- Loading Spinner -->
          <div v-if="isLoading" class="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <svg class="w-16 h-16 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4V8m0 4v4m-4 0H8m4 0h4m-4-4h4m-4 0H8" />
            </svg>
          </div>
        </div>
      </div>
     <!--
      <div v-if="showBlockModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-2xl shadow-lg max-w-md text-center">
          <h2 class="text-xl font-bold mb-2 text-red-600">⚠️ Belum Bisa Beli Tiket</h2>
          <p class="text-gray-700">Dokumen kamu belum diverifikasi. Silakan tunggu proses verifikasi sebelum membeli tiket.</p>
          <button @click="() => {}" class="mt-4 px-4 py-2 bg-gray-400 text-white rounded-xl cursor-not-allowed" disabled>
            Belum Bisa Akses
          </button>
        </div>
      </div>-->

      <!-- Card Pembelian Tiket -->
      <div class="bg-white shadow-lg rounded-xl overflow-hidden w-full">
        <!-- Header Card with golden ratio height -->
        <div class="relative h-0 pb-[38.2%] bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] flex items-end">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="w-16 h-16 text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
            <div class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-1">
              Event Ticket
            </div>
          </div>
        </div>

        <!-- Container untuk menampilkan data tiket -->
        <div class="p-6 border-b border-gray-100">
          <div id="ticketDetails" class="flex flex-col items-center space-y-2" v-html="ticketDetails"></div>

          <!-- Fitur tiket -->
          <div class="mt-6 space-y-2">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-gray-600">Akses penuh ke semua acara</span>
            </div>
            <!-- <div class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-gray-600">Merchandise eksklusif</span>
            </div> -->
            <!-- <div class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm text-gray-600">Sertifikat kehadiran</span>
            </div> -->
          </div>
        </div>

        <!-- Form Pembelian Tiket -->
        <div class="p-6">
          <form id="buyTicketForm" class="space-y-5" @submit.prevent="buyTicket">
            <div>
              <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Jumlah Tiket</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <input id="quantity" v-model="quantity" type="number" min="1" disabled
                  class="block w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F5F]/20 focus:border-[#D52C2C] transition-all"
                  required>
              </div>
              <!-- <p class="mt-1 text-xs text-gray-500">Masukkan jumlah tiket yang ingin dibeli</p> -->
            </div>

            <!-- Voucher Code Input -->
            <div>
              <label for="voucherCode" class="block text-sm font-medium text-gray-700 mb-1">Kode Voucher</label>
              <div class="flex space-x-2">
                <div class="relative flex-grow">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14V6H4v10h12z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <input id="voucherCode" v-model="voucherCode" type="text" placeholder="Masukkan kode voucher"
                    class="block w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF5F5F]/20 focus:border-[#D52C2C] transition-all uppercase"
                    :disabled="voucherApplied">
                </div>
                <button type="button" @click="applyVoucher"
                  class="px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-all"
                  :class="{
                    'bg-red-500 hover:bg-red-600 text-white': voucherApplied,
                    'bg-gray-200 hover:bg-gray-300 text-gray-800': !voucherApplied
                  }" :disabled="isLoading">
                  {{ voucherApplied ? 'Batalkan' : 'Terapkan' }}
                </button>
              </div>
              <p v-if="voucherMessage" class="mt-1 text-xs" :class="voucherValid ? 'text-green-600' : 'text-red-500'">
                {{ voucherMessage }}
              </p>
              <p v-else class="mt-1 text-xs text-gray-500">Masukkan kode voucher jika ada</p>
            </div>

            <div class="pt-2">
              <!-- Price breakdown -->
              <div class="mb-4 p-3 bg-gray-50 rounded-lg">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm text-gray-600">Harga Tiket:</span>
                  <span class="font-medium">Rp {{ formatPrice(quantity * (activeTicket?.price || 0)) }}</span>
                </div>

                <div v-if="voucherApplied && voucherValid"
                  class="flex items-center justify-between mb-2 text-green-600">
                  <span class="text-sm">Diskon Voucher:</span>
                  <span class="font-medium">- Rp {{ formatPrice(voucherDiscount) }}</span>
                </div>

                <div class="border-t border-gray-200 pt-2 mt-2 flex items-center justify-between">
                  <span class="text-sm font-medium">Total Pembayaran:</span>
                  <span class="text-lg font-bold">Rp {{ formatPrice(finalPrice) }}</span>
                </div>
              </div>

              <button id="pay-button" type="submit"
                class="w-full py-3 px-4 bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white font-medium rounded-lg shadow-md hover:from-[#FF4545] hover:to-[#C52020] focus:outline-none focus:ring-2 focus:ring-[#FF5F5F]/50 transform transition-all duration-200"
                :disabled="isLoading || !activeTicket">
                <span v-if="isLoading" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  Memproses...
                </span>
                <span v-else>Beli Tiket Sekarang</span>
              </button>
            </div>
          </form>

          <div v-if="errorMessage" class="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd" />
              </svg>
              <p class="text-sm text-red-600">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer info -->
      <div class="mt-6 text-center text-sm text-gray-500">
        <p>Butuh bantuan? <a href="#" class="text-[#D52C2C] hover:text-[#FF5F5F]">Hubungi kami</a></p>
      </div>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { useRouter } from "vue-router";
const router = useRouter();

//verif dokumen
const showBlockModal = ref(false)
const isChecking = ref(true)
const selectedFile = ref(null);

// Reactive State  
const quantity = ref(1);
const ticketDetails = ref("");
const activeTicket = ref(null);
const errorMessage = ref("");
const isLoading = ref(false);

// Voucher related states
const voucherCode = ref("");
const voucherApplied = ref(false);
const voucherValid = ref(false);
const voucherDiscount = ref(0);
const voucherMessage = ref("");

const userData = JSON.parse(sessionStorage.getItem("userData"));
const userId = userData?.userId;
const role = userData?.role; 

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
  }
}

async function submitDocument() {
  if (!selectedFile.value) {
    return;
  }

  isLoading.value = true;
  const apiUrl = import.meta.env.VITE_API_BASE;
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData?.userId;

  const formData = new FormData();
  formData.append('userId', userId); // <== HARUS SESUAI DENGAN backend pakai req.body.userId
  formData.append('dokumen', selectedFile.value); // <== HARUS SESUAI DENGAN upload.single("dokumen")

  try {
    const response = await axios.post(`${apiUrl}/api/send-dokumen`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.data?.filename) {
      alert("Dokumen berhasil diupload!");
      showBlockModal.value = false;
    } else {
      alert("Gagal mengupload dokumen. Coba lagi.");
    }
  } catch (error) {
    console.error("Error uploading document:", error);
    alert("Terjadi kesalahan. Coba lagi.");
  } finally {
    isLoading.value = false;
  }
}

// Format price with thousand separator
function formatPrice(price) {
  return new Intl.NumberFormat('id-ID').format(price);
}

// Computed properties
const subTotal = computed(() => {
  if (!activeTicket.value) return 0;
  return quantity.value * activeTicket.value.price;
});

const finalPrice = computed(() => {
  return subTotal.value - voucherDiscount.value;
});

async function applyVoucher() {
  // If voucher is already applied, this acts as a cancel button
  if (voucherApplied.value) {
    resetVoucher();
    return;
  }

  // Validate if voucher code is empty
  if (!voucherCode.value.trim()) {
    voucherMessage.value = "Masukkan kode voucher terlebih dahulu";
    voucherValid.value = false;
    return;
  }

  try {
    isLoading.value = true;
    voucherMessage.value = "Memeriksa kode voucher...";

    const apiUrl = import.meta.env.VITE_API_BASE;

    const response = await axios.post(`${apiUrl}/api/check-voucher`, {
      code: voucherCode.value,
      productId: activeTicket.value?.productId
    });
    console.log("[INFO] Voucher response:", response.data);
    if (response.data.code === 200) {
      voucherValid.value = true;
      voucherApplied.value = true;
      voucherDiscount.value = response.data.data.discountAmount;
      voucherMessage.value = `Voucher berhasil diterapkan! Anda mendapatkan potongan harga Rp ${formatPrice(response.data.data.discountAmount)}`;
    } else {
      voucherValid.value = false;
      voucherApplied.value = false;
      voucherMessage.value = response.data.message || "Kode voucher tidak valid atau sudah kedaluwarsa";
    }

  } catch (error) {
    console.error("[ERROR] Gagal memvalidasi voucher:", error);
    voucherValid.value = false;
    voucherMessage.value = "Gagal memverifikasi voucher. Silakan coba lagi.";
  } finally {
    isLoading.value = false;
  }
}

// Reset voucher state
function resetVoucher() {
  voucherApplied.value = false;
  voucherValid.value = false;
  voucherDiscount.value = 0;
  voucherMessage.value = "";
  // We keep the voucherCode.value to allow the user to see what they entered
}

// Fungsi untuk mengambil data tiket dari backend  
async function fetchTicket() {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE;
    console.log("[INFO] Fetching from:", apiUrl);

    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const role = userData?.role;

    if (!role) {
      console.error("[ERROR] Role tidak ditemukan di sessionStorage");
      throw new Error("Role tidak ditemukan.");
    }

    const response = await axios.post(`${apiUrl}/api/get-ticket`, {
      role: role,
    });
    console.log("[INFO] Response status:", response.status);
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
        <h2 class="text-2xl font-bold">${activeTicket.value.name}</h2>  
        <div class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5EA2EF] to-[#0072F5]">
          Rp ${formatPrice(activeTicket.value.price)}
        </div>  
        <p class="text-gray-500 text-sm">Penawaran Terbatas</p>
      `;
      console.log("[INFO] Ticket details updated:", ticketDetails.value);
    } else {
      ticketDetails.value = `
        <div class="text-center py-6">
          <svg class="w-16 h-16 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="mt-2 text-lg font-medium text-gray-900">Tiket Tidak Tersedia</h3>
          <p class="mt-1 text-sm text-gray-500">Mohon coba kembali beberapa saat lagi.</p>
        </div>
      `;
      console.warn("[WARNING] Tidak ada tiket aktif yang tersedia.");
    }
  } catch (error) {
    console.error("[ERROR] Gagal mengambil tiket:", error.message);
    console.error("[DETAIL] Error objek:", error);
    ticketDetails.value = `
      <div class="text-center py-6">
        <svg class="w-16 h-16 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />
        </svg>
        <h3 class="mt-2 text-lg font-medium text-gray-900">Menunggu Server</h3>
        <p class="mt-1 text-sm text-gray-500">Sedang menghubungkan ke server...</p>
      </div>
    `;
  }
}

async function buyTicket() {
  try {
    errorMessage.value = "";
    isLoading.value = true;

    const apiUrl = import.meta.env.VITE_API_BASE;
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const userId = userData?.userId;

    if (!userId) {
      throw new Error("User ID tidak ditemukan. Silakan login terlebih dahulu.");
    }

    // Periksa apakah sudah ada order ID yang valid di session storage
    const storedOrderId = sessionStorage.getItem("orderId");

    if (storedOrderId) {
      // Jika order ID ada, cek status pembayaran menggunakan storedOrderId
      try {
        console.log("[INFO] Mengecek status order ID yang ada...");

        const response = await axios.get(`${apiUrl}/api/check-payment-status?token=${storedOrderId}`);
        console.log("[INFO] Status pembayaran:", response.data);

        // Jika status pembayaran pending atau sukses, lanjutkan
        if (response.data.transaction_status === "pending" || response.data.transaction_status === "success") {
          console.log("[INFO] Pembayaran masih pending atau sudah berhasil.");

          const snapScript = document.createElement("script");
          snapScript.src = "https://app.midtrans.com/snap/snap.js";
          snapScript.setAttribute("data-client-key", "Mid-client-RE6DmaCD9JsF11Mu");
          snapScript.onload = () => {
            const transactionToken = sessionStorage.getItem("transactionToken");

            // Pastikan token transaksi ada sebelum mencoba menggunakan window.snap.pay
            if (!transactionToken) {
              throw new Error("Token transaksi tidak ditemukan.");
            }

            window.snap.pay(transactionToken, {
              onSuccess: function (result) {
                console.log("[INFO] Pembayaran berhasil:", result);
                showToast("Pembayaran berhasil!", "success");
                const event = new CustomEvent("paymentSuccess");
                window.dispatchEvent(event);
                router.push("/riwayat");
              },
              onPending: function (result) {
                console.log("[INFO] Pembayaran pending:", result);
                showToast("Pembayaran masih pending!", "warning");
                isLoading.value = false;
              },
              onError: function (result) {
                console.log("[ERROR] Pembayaran gagal:", result);
                showToast("Pembayaran gagal!", "error");
              },
              onClose: function () {
                console.log("[INFO] Pembayaran ditutup oleh pengguna.");
                isLoading.value = false;
              },
            });
          }

          document.body.appendChild(snapScript);
          return; // Order ID sudah valid, tidak perlu buat transaksi baru
        } else {
          console.log("[INFO] Status pembayaran tidak valid, order ID expired.");
          // Order ID expired atau tidak valid, hapus dan lanjutkan proses
          sessionStorage.removeItem("orderId");
        }
      } catch (error) {
        console.error("[ERROR] Gagal mengecek status pembayaran:", error);
        sessionStorage.removeItem("orderId");
      }
    }

    // Jika tidak ada order ID atau order ID sudah kedaluwarsa, buat transaksi baru
    const requestData = {
      userId: userId,
      product_Id: activeTicket.value.productId,
      quantity: quantity.value,
    };

    // Tambahkan informasi voucher jika ada
    if (voucherApplied.value && voucherValid.value) {
      requestData.voucherCode = voucherCode.value;
      requestData.voucherDiscount = voucherDiscount.value;
    }

    const response = await axios.post(`${apiUrl}/api/buy-ticket`, requestData);

    const orderId = response.data.payment.orderId; // Order ID yang baru dibuat
    const transactionToken = response.data.token;
    console.log("[INFO] Order ID:", orderId);
    console.log("[INFO] Token transaksi:", transactionToken);

    if (orderId && transactionToken) {
      // Simpan order ID dan token transaksi di sessionStorage untuk digunakan nanti
      sessionStorage.setItem("orderId", orderId);
      sessionStorage.setItem("transactionToken", transactionToken);

      errorMessage.value = "";

      // Load Midtrans Snap
      const snapScript = document.createElement("script");
      snapScript.src = "https://app.midtrans.com/snap/snap.js";
      snapScript.setAttribute("data-client-key", "Mid-client-RE6DmaCD9JsF11Mu");
      snapScript.onload = () => {
        // Pastikan snap.js sudah terload sebelum melakukan pembayaran
        const transactionToken = sessionStorage.getItem("transactionToken");

        if (!transactionToken) {
          console.error("[ERROR] Token transaksi tidak ditemukan.");
          return;
        }

        window.snap.pay(transactionToken, {
          onSuccess: function (result) {
            console.log("[INFO] Pembayaran berhasil:", result);
            showToast("Pembayaran berhasil!", "success");
            const event = new CustomEvent("paymentSuccess");
            window.dispatchEvent(event);
            router.push("/riwayat");
          },
          onPending: function (result) {
            console.log("[INFO] Pembayaran pending:", result);
            showToast("Pembayaran masih pending!", "warning");
            isLoading.value = false;
          },
          onError: function (result) {
            console.log("[ERROR] Pembayaran gagal:", result);
            showToast("Pembayaran gagal!", "error");
          },
          onClose: function () {
            console.log("[INFO] Pembayaran ditutup oleh pengguna.");
            isLoading.value = false;
          },
        });
      };

      document.body.appendChild(snapScript);
    } else {
      throw new Error("Gagal mendapatkan order ID atau token transaksi");
    }
  } catch (error) {
    console.error("[ERROR] Pembelian tiket gagal:", error.response?.data || error.message);
    errorMessage.value = error.response?.data?.message || error.message || "Pembelian tiket gagal, coba lagi!";
    isLoading.value = false;
  }
}





// Custom toast notification
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `z-30 fixed top-4 right-4 p-4 rounded-lg shadow-lg max-w-xs transform transition-all duration-300 ease-out opacity-0 translate-y-2 ${type === 'success' ? 'bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-white' :
    type === 'error' ? 'bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white' :
      'bg-gradient-to-r from-[#F5A623] to-[#F59123] text-white'
    }`;

  toast.innerHTML = message;
  document.body.appendChild(toast);

  // Animasi masuk
  setTimeout(() => {
    toast.classList.remove('opacity-0', 'translate-y-2');
  }, 10);

  // Hapus setelah beberapa detik
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 4000);
}

const apiUrl = import.meta.env.VITE_API_BASE
// Panggil fungsi fetchTicket saat komponen dimuat  
onMounted(async () => {
  // Ambil tiket dulu (kalau butuh nunggu hasilnya, pakai await)
  await fetchTicket();

  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData?.userId;
  const role = userData?.role;

  if (!role || !userId) {
    console.warn("[INFO] Tidak ada role atau userId di session.");
    return;
  }

  // Role yang perlu diverifikasi
  if (["alumni", "keluarga_siswa"].includes(role)) {
    try {
      
      const apiUrl = import.meta.env.VITE_API_BASE
      const response = await axios.get(`${apiUrl}/api/all-request?userId=${userId}`);
      const verificationData = response.data.data.find(item => item.userId === userId)


      // Kalau belum ada data verifikasi
      if (!verificationData) {
        showBlockModal.value = true;
      }
      console.log("Sudah pernah upload dokumen")
    } catch (error) {
      console.warn("[INFO] Tidak ditemukan data verifikasi atau gagal fetch:", error);
      showBlockModal.value = true; // Anggap belum submit
    }
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Golden ratio transitions */
.transition-all {
  transition-timing-function: cubic-bezier(0.618, 0, 0.382, 1);
  /* Based on golden ratio */
}
</style>
