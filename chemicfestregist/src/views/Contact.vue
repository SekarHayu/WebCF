<template>
    <div class="bg-gray-300 flex justify-center items-center min-h-screen">

    <div class="items-center w-screen md:w-screen md:items-center md:justify-center sm:justify-center sm:p-32  p-8">
      <h1 class="text-2xl font-bold mb-4 text-center">Butuh Bantuan?</h1>
      <p class="text-center font-bold italic">Jika ada kendala atau hal yang ingin ditanyakan, silakan klik button berikut</p>

      <h1 class="text-center">
      <a
      :href="whatsappLink1"
      target="_blank"
      class="mt-6 inline-flex items-center px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
    >
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.047.538 4.05 1.552 5.794L0 24l6.393-1.61C8.116 23.465 10.03 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.82 0-3.601-.482-5.17-1.395l-.369-.213-3.794.956.983-3.715-.242-.386A9.93 9.93 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.634-6.608c-.252-.126-1.492-.736-1.723-.822-.231-.084-.4-.126-.569.126-.168.253-.653.822-.8.99-.147.168-.295.189-.547.063-.253-.126-1.068-.394-2.035-1.257a7.61 7.61 0 0 1-1.64-2.018c-.168-.253-.016-.39.126-.516.126-.11.295-.295.442-.442.148-.147.195-.253.295-.421s.053-.316-.021-.442c-.074-.126-.568-1.366-.777-1.867-.205-.501-.412-.434-.569-.442a1.159 1.159 0 0 0-.295.032c-.095.032-.758.296-1.041.59-.295.295-.777.777-.777 1.797s.796 2.085.907 2.23c.11.147 1.57 2.394 3.805 3.36 2.236.966 2.236.644 2.641.604.406-.037 1.492-.616 1.703-1.214.21-.599.21-1.113.147-1.214-.063-.101-.231-.168-.484-.295z"></path>
      </svg>
      Chat "Farah"
    </a></h1>
    <h1 class="text-center pt-4">Atau</h1>
    <h1 class="text-center">
      <a
      :href="whatsappLink2"
      target="_blank"
      class="mt-6 inline-flex items-center px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
    >
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.047.538 4.05 1.552 5.794L0 24l6.393-1.61C8.116 23.465 10.03 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.82 0-3.601-.482-5.17-1.395l-.369-.213-3.794.956.983-3.715-.242-.386A9.93 9.93 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.634-6.608c-.252-.126-1.492-.736-1.723-.822-.231-.084-.4-.126-.569.126-.168.253-.653.822-.8.99-.147.168-.295.189-.547.063-.253-.126-1.068-.394-2.035-1.257a7.61 7.61 0 0 1-1.64-2.018c-.168-.253-.016-.39.126-.516.126-.11.295-.295.442-.442.148-.147.195-.253.295-.421s.053-.316-.021-.442c-.074-.126-.568-1.366-.777-1.867-.205-.501-.412-.434-.569-.442a1.159 1.159 0 0 0-.295.032c-.095.032-.758.296-1.041.59-.295.295-.777.777-.777 1.797s.796 2.085.907 2.23c.11.147 1.57 2.394 3.805 3.36 2.236.966 2.236.644 2.641.604.406-.037 1.492-.616 1.703-1.214.21-.599.21-1.113.147-1.214-.063-.101-.231-.168-.484-.295z"></path>
      </svg>
      Chat "Arif"
    </a></h1>
        

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
        };
    },
    computed: {
    whatsappLink1() {
      return `https://wa.me/${this.phoneNumber1}?text=${encodeURIComponent(this.message)}`;
    },
    whatsappLink2() {
      return `https://wa.me/${this.phoneNumber2}?text=${encodeURIComponent(this.message)}`;
    },
  },
    };
  </script>
  

  
