<template>
    <div class="max-w-[1000px] mx-auto font-signika h-full">
      <!-- Header -->
      <div class="flex bg-dark p-6" style="background-image: url(pattern.png); background-size: cover;">
        <div class="mx-2 sm:mx-10 flex w-full">
            <img :src="maskot" alt="Chemicfest Maskot" class="w-16 sm:w-20" />
         
          <p class="pt-10 ms-auto text-white">E-Ticket</p>
        </div>
      </div>
  
      <!-- Informasi Acara -->
      <div class="text-5xl font-bold mt-5 mx-5 sm:mx-20">
        <div class="flex flex-col border-2 p-4 rounded-xl">
          <h5 class="text-2xl">Chemicfest #9</h5>
          <div class="flex flex-col sm:flex-row mt-4 gap-7">
            <div class="w-full sm:w-1/3">
              <img class="w-full rounded-lg" :src="posterUrl" alt="Poster" />
            </div>
            <div class="flex items-center gap-2">
                <span class="text-sm">✔️</span> <!-- Bisa diganti icon sesuai keinginan -->
                <p>OSIS SMK SMTI Yogyakarta</p>
                </div>

                <div class="flex items-center gap-2">
                <span class="text-xl">🕒</span>
                <p>17 Mei 2025</p>
                </div>

                <div class="flex items-center gap-2">
                <span class="text-xl">📍</span>
                <p>RRI PRO 2 Yogyakarta</p>
                </div>

          </div>
        </div>
  
        <!-- Informasi Pesanan -->
        <div class="flex flex-col mt-5 gap-4">
          <h5 class="text-xl">Informasi Pesanan</h5>
          <div class="flex flex-col sm:flex-row gap-2">
            <div class="flex flex-col w-full sm:w-2/3 border-2 rounded-xl p-4 gap-2">
                <div class="flex flex-col gap-2">
                    <p><strong>Kode Pesanan:</strong> (booking code)</p>
                    <p><strong>Nama Pemesan:</strong> (email aja)</p>
                    <p><strong>Berlaku Untuk:</strong> 1 Pax (jumlah tiket)</p>
                    <p><strong>Validitas Voucher:</strong> 17 Mei 2025</p>
                    </div>

            </div>
            <div class="flex flex-col w-full sm:w-1/3 border-2 rounded-xl p-4 gap-2 mx-auto text-center">
              <p class="font-bold text-lg">IDR 40.000</p>
              <img :src="qrCodeUrl" class="w-1/2 mx-auto" alt="QR Code" />
              <p class="font-light text-sm">Dibuat pada 17 Agustus 1945</p>
            </div>
          </div>
        </div>
  
        <!-- Syarat dan Ketentuan -->
        <div class="flex flex-col mt-5 gap-4 pb-4">
          <h5 class="text-xl">Syarat dan Ketentuan</h5>
          <p class="leading-loose text-base font-normal">
            - Maks. pembelian 2 tiket per akun/ID per show day. <br />
            - Wajib login ke akun chemicfest9.site untuk melakukan pembelian.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import maskot from '@/assets/img/chemicfest9_maskot.png';
  
  export default {
    data() {
      return {
        maskot: maskot,
        posterUrl: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit1440960gsm/events/2023/12/27/26f7e9fd-b5aa-4f6c-a3fb-cb12ed636c17-1703676912125-7c0ade6c962ab6022e890f4d7aea6229.jpg",
        qrCodeUrl: "https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png"
      };
    }
  };
  </script>
  
 
  
