<template>
  <div class="bg-gradient-to-b from-white to-gray-50 min-h-screen">

    <!-- Main Content -->
    <div class="pb-12 px-4 py-6 lg:px-0">
      <div class="max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="bg-gradient-to-r from-[#5EA2EF]/10 to-[#0072F5]/10 rounded-3xl p-8 mb-10">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <h1 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-transparent bg-clip-text">Butuh Bantuan?</h1>
              <p class="text-gray-700 mb-6">Kami siap membantu menjawab semua pertanyaan Anda tentang Chemicfest #9. Tim support kami tersedia untuk memastikan pengalaman Anda berjalan lancar.</p>
              
              <div class="hidden md:block">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-[#5EA2EF]/20 flex items-center justify-center mr-3">
                    <i class="fas fa-check text-[#0072F5]"></i>
                  </div>
                  <p class="text-gray-700">Informasi tiket dan harga</p>
                </div>
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-[#5EA2EF]/20 flex items-center justify-center mr-3">
                    <i class="fas fa-check text-[#0072F5]"></i>
                  </div>
                  <p class="text-gray-700">Pembelian dan pembayaran</p>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-[#5EA2EF]/20 flex items-center justify-center mr-3">
                    <i class="fas fa-check text-[#0072F5]"></i>
                  </div>
                  <p class="text-gray-700">Informasi acara dan jadwal</p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 mx-auto text-center">
              <img src="/image/cs.png" alt="Customer Support" class="rounded-xl w-96 mx-auto text-center" />
            </div>
          </div>
        </div>
        
        <!-- Contact Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <!-- Contact Card 1 -->
          <div class="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div class="bg-gradient-to-r from-[#6FEE8D] to-[#17c964] p-5 text-white">
              <h2 class="text-xl font-bold flex items-center">
                <i class="fas fa-headset mr-2"></i> Support Specialist
              </h2>
              <p class="opacity-90 mt-1">Informasi Tiket & Registrasi</p>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#17c964]">
                  <img src="/image/woman.jpg" alt="Farah" class="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">Farah</h3>
                  <p class="text-gray-600 text-sm">Senin - Jumat, 09:00 - 17:00</p>
                </div>
              </div>
              <p class="text-gray-700 mb-5 text-sm">Spesialis tiket dan proses registrasi. Farah akan membantu Anda dengan pertanyaan seputar pembelian tiket, pembayaran, dan pendaftaran.</p>
              <a
                :href="whatsappLink1"
                target="_blank"
                class="w-full inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-[#6FEE8D] to-[#17c964] rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition duration-300"
              >
                <i class="fab fa-whatsapp text-xl mr-2"></i>
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
          
          <!-- Contact Card 2 -->
          <div class="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div class="bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] p-5 text-white">
              <h2 class="text-xl font-bold flex items-center">
                <i class="fas fa-info-circle mr-2"></i> Event Coordinator
              </h2>
              <p class="opacity-90 mt-1">Informasi Acara & Venue</p>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#0072F5]">
                  <img src="/image/man.jpg" alt="Arif" class="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">Arif</h3>
                  <p class="text-gray-600 text-sm">Senin - Sabtu, 10:00 - 18:00</p>
                </div>
              </div>
              <p class="text-gray-700 mb-5 text-sm">Koordinator acara Chemicfest #9. Arif dapat menjawab pertanyaan tentang rundown acara, informasi guest star, dan detail lokasi venue.</p>
              <a
                :href="whatsappLink2"
                target="_blank"
                class="w-full inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition duration-300"
              >
                <i class="fab fa-whatsapp text-xl mr-2"></i>
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        <!-- FAQ Section -->
        <div class="bg-white rounded-2xl shadow-md p-8 mb-10">
          <h2 class="text-2xl font-bold mb-6 text-center">Pertanyaan Umum</h2>
          <div class="space-y-4">
            <div class="border border-gray-200 rounded-xl overflow-hidden">
              <div class="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer" @click="toggleFaq(1)">
                <h3 class="font-medium text-gray-800">Bagaimana cara membeli tiket Chemicfest #9?</h3>
                <i :class="[activeFaq === 1 ? 'fa-chevron-up' : 'fa-chevron-down', 'fas text-gray-500']"></i>
              </div>
              <div v-if="activeFaq === 1" class="px-4 py-3 text-gray-700">
                <p>Tiket Chemicfest #9 dapat dibeli secara online melalui website resmi kami. Cukup daftar akun, pilih tiket yang diinginkan, lakukan pembayaran, dan e-tiket akan dikirimkan ke email Anda.</p>
              </div>
            </div>
<!--             
            <div class="border border-gray-200 rounded-xl overflow-hidden">
              <div class="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer" @click="toggleFaq(2)">
                <h3 class="font-medium text-gray-800">Apa saja jenis tiket yang tersedia?</h3>
                <i :class="[activeFaq === 2 ? 'fa-chevron-up' : 'fa-chevron-down', 'fas text-gray-500']"></i>
              </div>
              <div v-if="activeFaq === 2" class="px-4 py-3 text-gray-700">
                <p>Kami menyediakan beberapa jenis tiket: Regular, VIP, dan VVIP dengan berbagai keuntungan berbeda. Tiket Regular memberikan akses ke semua area umum, VIP mendapatkan akses ke area eksklusif, dan VVIP termasuk meet & greet dengan guest star.</p>
              </div>
            </div>
            
            <div class="border border-gray-200 rounded-xl overflow-hidden">
              <div class="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer" @click="toggleFaq(3)">
                <h3 class="font-medium text-gray-800">Apakah tiket bisa direfund atau ditukar?</h3>
                <i :class="[activeFaq === 3 ? 'fa-chevron-up' : 'fa-chevron-down', 'fas text-gray-500']"></i>
              </div>
              <div v-if="activeFaq === 3" class="px-4 py-3 text-gray-700">
                <p>Tiket yang sudah dibeli tidak dapat direfund, namun dapat dialihkan ke orang lain dengan konfirmasi ke tim kami terlebih dahulu.</p>
              </div>
            </div> -->
          </div>
        </div>
        
        <!-- Buy Ticket Banner -->
        <div class="bg-gradient-to-r from-[#FF5F5F] to-[#D52C2C] rounded-2xl p-6 mb-10 shadow-md">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="text-white mb-4 md:mb-0">
              <h2 class="text-2xl font-bold">Jangan Lewatkan Chemicfest #9!</h2>
              <p class="mt-2 opacity-90">Dapatkan tiket sekarang sebelum kehabisan. Penampilan spesial dari bintang tamu dan berbagai acara menarik menunggu Anda.</p>
            </div>
            <div>
              <router-link to="/registrasi" class="inline-flex items-center px-6 py-3 bg-white text-[#D52C2C] font-bold rounded-lg hover:shadow-lg transition duration-300">
                <i class="fas fa-ticket-alt mr-2"></i>
                <span>Beli Tiket Sekarang</span>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Email Alternative -->
        <!-- <div class="bg-white rounded-2xl shadow-md overflow-hidden text-center p-8">
          <h2 class="text-xl font-bold mb-4">Alternatif Kontak</h2>
          <p class="text-gray-700 mb-6">Anda juga dapat menghubungi kami melalui email untuk pertanyaan lebih lanjut:</p>
          <a href="mailto:info@chemicfest.com" class="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
            <i class="fas fa-envelope mr-2"></i>
            <span>info@chemicfest.com</span>
          </a>
        </div> -->
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber1: "6285647542561", 
      phoneNumber2: "6281542780426", 
      message: "Halo! Saya ingin bertanya tentang Chemicfest",
      activeFaq: null
    };
  },
  computed: {
    whatsappLink1() {
      return `https://wa.me/${this.phoneNumber1}?text=${encodeURIComponent(this.message)}`;
    },
    whatsappLink2() {
      return `https://wa.me/${this.phoneNumber2}?text=${encodeURIComponent(this.message)}`;
    }
  },
  methods: {
    toggleFaq(id) {
      this.activeFaq = this.activeFaq === id ? null : id;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Hover effects */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Transition effects */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>