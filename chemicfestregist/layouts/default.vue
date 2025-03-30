<template>
  <main class="flex flex-col mx-auto">
    <!-- Menggunakan komponen Header langsung tanpa pemisahan layout -->
    <Header />
    <router-view />
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
