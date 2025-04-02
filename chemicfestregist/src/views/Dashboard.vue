<template>
  <div class="bg-gray-50 flex justify-center items-center min-h-screen relative overflow-hidden text-gray-900 py-10">
    <!-- Background blur circles -->
    <div class="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-[#5EA2EF]/30 to-[#0072F5]/20 blur-3xl"></div>
    <div class="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-[#6FEE8D]/30 to-[#17c964]/20 blur-3xl"></div>
    
    <!-- Main content container (with golden ratio width relative to viewport) -->
    <div class="w-full max-w-md mx-auto px-6 py-12 relative z-10">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C]">Chemicfest #9</h1>
        <p class="text-gray-600 mt-2">Jadikan momen terbaikmu</p>
      </div>
      
      <!-- Card container with golden ratio proportions -->
      <div class="grid grid-cols-1 gap-6">
        <!-- Main card -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <!-- Card image with golden ratio height -->
          <div class="relative h-0 pb-[61.8%] overflow-hidden"> <!-- Golden ratio: 1/1.618 = 0.618 or ~61.8% -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#5EA2EF] to-[#0072F5] flex items-center justify-center">
              <div class="text-white text-center p-6">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <h3 class="text-xl font-bold">Tiket Chemicfest</h3>
                <p class="text-blue-100">Edisi Terbatas</p>
              </div>
            </div>
          </div>
          
          <!-- Card content -->
          <div class="p-6">
            <h2 class="text-xl font-bold mb-3">Beli Tiket Sekarang</h2>
            <p class="text-gray-600 mb-6">Dapatkan pengalaman tak terlupakan pada acara Chemicfest yang akan datang. Jangan sampai kehabisan!</p>
            
            <!-- Features list -->
            <ul class="mb-6 space-y-2">
              <li class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Akses ke semua sesi utama</span>
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Harga Termurah</span>
              </li>
              <!-- <li class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sertifikat kehadiran</span>
              </li> -->
            </ul>
            
            <!-- Primary CTA button -->
            <router-link to="/tiket"
              class="block w-full py-3 px-4 bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] text-white text-center font-medium rounded-lg shadow-md hover:from-[#FF4545] hover:to-[#C52020] transform transition-all duration-300 hover:shadow-lg">
              Beli Sekarang
            </router-link>
          </div>
        </div>
        
        <!-- Secondary card -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="p-6 flex items-center">
            <div class="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#6FEE8D]/20 to-[#17c964]/20 mr-4">
              <svg class="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-semibold">Cek Riwayat Tiket</h3>
              <p class="text-sm text-gray-500">Lihat pembelian tiket sebelumnya</p>
            </div>
            <router-link to="/riwayat" class="ml-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#6FEE8D] to-[#17c964] hover:from-[#5EDE7D] hover:to-[#16B954]">
              Lihat
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Bottom info -->
      <div class="mt-8 text-center text-sm text-gray-500">
        <p>Butuh bantuan? <a href="/contact" class="text-[#D52C2C] hover:text-[#FF5F5F]">Hubungi kami</a></p>
      </div>
    </div>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Golden ratio transitions */
.transition-all {
  transition-timing-function: cubic-bezier(0.618, 0, 0.382, 1); /* Based on golden ratio */
}
</style>