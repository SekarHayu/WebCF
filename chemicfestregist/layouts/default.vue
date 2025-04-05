<template>
  <main class="flex flex-col mx-auto">
    <!-- Menggunakan komponen Header langsung tanpa pemisahan layout -->
    <Header />
    <router-view />
    <!-- Footer -->
    <footer class="bg-gray-100 py-6 px-4 border-t border-gray-200">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-gray-600 text-sm mb-4">© 2025 Chemicfest #9 - Diselenggarakan oleh OSIS SMK-SMTI YOGYAKARTA</p>
        <div class="flex justify-center space-x-4">
          <a href="https://www.instagram.com/chemicevents" target="_blank" class="flex gap-1 items-center justify-center text-gray-500 hover:text-[#5EA2EF]">
            <i class="fab fa-instagram"></i>
            <span>@chemicevents</span>
          </a>
          <a href="https://www.instagram.com/chemic_fest" target="_blank" class="flex gap-1 items-center justify-center text-gray-500 hover:text-[#5EA2EF]">
            <i class="fab fa-instagram"></i>
            <span>@chemic_fest</span>
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import Header from '../src/components/Header.vue'; // Sesuaikan dengan path yang benar

export default {
  components: {
    Header,  // Daftarkan komponen Header
  },
};
</script>
