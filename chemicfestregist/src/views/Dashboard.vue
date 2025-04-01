<template>
  <div class="bg-gray-300 flex justify-center items-center min-h-screen text-gray-900">

    <div class="w-full max-w-md mx-auto p-4">
      <div class="grid grid-cols-1 gap-4">
        <!-- Card Beli Tiket (muncul kalau belum ada riwayat) -->
        <div class="bg-white shadow-md rounded-2xl p-6 text-center">
          <h2 class="text-xl font-bold mb-2">Beli Tiket</h2>
          <p class="text-gray-600 mb-4">Pesan tiket untuk acara Chemicfest sekarang!</p>
          <router-link to="/tiket"
            class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition">
            Beli Sekarang</router-link>
        </div>
        <router-link to="/riwayat"
          class="text-center px-4 py-2 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition">
          Lihat Riwayat Tiket</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>