<template>
  <div class="bg-gradient-to-b from-white to-gray-50 min-h-screen">
    <!-- Header Banner -->
    <div class="bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white py-10 px-4 mb-8 shadow-md">
      <div class="max-w-4xl mx-auto text-center my-14">
        <h1 class="text-2xl sm:text-3xl font-bold mb-2">Daftar Akun Chemicfest #9</h1>
        <p class="opacity-90 max-w-lg mx-auto">Buat akun untuk mendapatkan akses ke semua event Chemicfest dan nikmati
          penawaran khusus!</p>
      </div>
    </div>

    <!-- Main Content -->
    <main class="flex flex-col items-center justify-center w-full p-5">
      <!-- Event Promo Card -->
      <div class="max-w-4xl w-full mb-8 bg-white rounded-xl shadow-sm overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div
            class="md:w-1/3 bg-gradient-to-br from-[#FF5F5F] to-[#D52C2C] p-6 text-white flex flex-col justify-center">
            <h2 class="text-xl font-bold mb-2">Event Spesial!</h2>
            <p class="mb-4 text-white/90">Jangan lewatkan penampilan spesial dari guest star dan berbagai acara menarik!
            </p>
            <div class="flex items-center mb-2">
              <i class="fas fa-calendar-alt mr-2"></i>
              <span>17 Mei 2025</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2"></i>
              <span>Sportorium UMY</span>
            </div>
          </div>
          <div class="md:w-2/3 p-6">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                :class="[formStep >= 2 ? 'bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-white' : 'bg-gray-200 text-gray-500']">
                <i class="fas" :class="[formStep >= 2 ? 'fa-check' : 'fa-user']"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Langkah 1: Buat Akun</h3>
                <p class="text-sm text-gray-600">Isi formulir untuk membuat akun Chemicfest</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                :class="[formStep >= 3 ? 'bg-gradient-to-r from-[#6FEE8D] to-[#17c964] text-white' : 'bg-gray-200 text-gray-500']">
                <i class="fas" :class="[formStep >= 3 ? 'fa-check' : 'fa-envelope']"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Langkah 2: Verifikasi OTP</h3>
                <p class="text-sm text-gray-600">Verifikasi email Anda dengan kode OTP</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                <i class="fas fa-ticket-alt"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Langkah 3: Beli Tiket</h3>
                <p class="text-sm text-gray-600">Pilih tiket dan nikmati acara Chemicfest #9!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Registration Form Card -->
      <div v-if="formStep === 1" class="max-w-3xl w-full bg-white rounded-xl shadow-sm overflow-hidden mb-16">
        <div class="p-6 border-b border-gray-100">
          <h2 class="text-xl font-bold text-gray-800">Data Registrasi</h2>
          <p class="text-gray-600 text-sm">Lengkapi data di bawah ini dengan informasi yang valid</p>
        </div>
        <ul>
          <label class="block text-gray-700 pl-6 mt-3 text-sm font-medium mb-2" for="grid-first-name">
                Pilih role
              </label>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-0 mt-3 text-dark pl-6 mb-6  text-gray-600 text-sm mx-auto ">
                 <div class="form-control my-auto">
                    <label class="label cursor-pointer gap-2 justify-start">
                       <input 
                          v-model="selectedRole" 
                          value="pelajar" 
                          type="radio" 
                          name="role" 
                          class="radio checked:bg-dark dark:checked:bg-white"
                          @change="console.log('ROLE BARU:', selectedRole)" 
                        />
                      <span class="label-text pl-2">Pelajar</span>
                    </label>
                  </div>
                  <div class="form-control my-auto">
                    <label class="label cursor-pointer gap-2 justify-start">
                          <input 
        v-model="selectedRole" 
        value="guru" 
        type="radio" 
        name="role" 
        class="radio checked:bg-dark dark:checked:bg-white"
        @change="console.log('ROLE BARU:', selectedRole)" 
  />
                      <span class="label-text pl-2">Guru</span>
                    </label>
                  </div>
                  <div class="form-control my-auto">
                    <label class="label cursor-pointer gap-2 justify-start">
                      <input 
    v-model="selectedRole" 
    value="alumni" 
    type="radio" 
    name="role" 
    class="radio checked:bg-dark dark:checked:bg-white"
    @change="console.log('ROLE BARU:', selectedRole)" 
  />
                      <span class="label-text pl-2">Alumni</span>
                    </label>
                  </div>
                  <div class="form-control my-auto">
                    <label class="label cursor-pointer gap-2 justify-start">
                      <input 
    v-model="selectedRole" 
    value="keluarga_siswa" 
    type="radio" 
    name="role" 
    class="radio checked:bg-dark dark:checked:bg-white"
    @change="console.log('ROLE BARU:', selectedRole)" 
  />
                      <span class="label-text pl-2">Keluarga Siswa</span>
                    </label>
                  </div>  
                  <div class="form-control my-auto">
                    <label class="label cursor-pointer gap-2 justify-start">
                      <input 
    v-model="selectedRole" 
    value="mahasiswa" 
    type="radio" 
    name="role" 
    class="radio checked:bg-dark dark:checked:bg-white"
    @change="console.log('ROLE BARU:', selectedRole)" 
  />
                      <span class="label-text pl-2">Mahasiswa</span>
                    </label>
                  </div>
                </div>
                </ul>

          

            <div v-if="selectedRole" class="mt-6 p-6" :key="role">
              <h2 class="text-xl font-bold text-gray-800">Form Registrasi untuk {{ selectedRole }}</h2>
              <p class="text-gray-600 text-sm">Lengkapi data sesuai dengan role yang dipilih.</p>

          <!-- Form untuk Siswa -->
              <div v-if="selectedRole === 'pelajar'">
                <form id="registerForm" class="p-6" @submit.prevent="handleRegister">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <!-- Nama Lengkap -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-first-name">
                        Nama Lengkap
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-user text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-first-name" type="text" v-model="formPelajar.name" placeholder="Contoh: John Doe">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Harap masukkan nama yang valid</p>
                    </div>

                    <!-- Username -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-username">
                        Username
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-at text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-username" type="text" v-model="formPelajar.username" placeholder="Contoh: johndoe">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Username minimal 5 karakter</p>
                    </div>

                    <!-- Email -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-email">
                        Email
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-email" type="email" v-model="formPelajar.email" placeholder="Contoh: example@gmail.com">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Email akan digunakan untuk verifikasi dan notifikasi penting</p>
                    </div>

                    <!-- Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-password">
                        Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-password" type="password" v-model="formPelajar.password" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Password minimal 8 karakter</p>
                    </div>

                    <!-- Konfirmasi Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-checkpassword">
                        Konfirmasi Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-checkpassword" type="password" v-model="formPelajar.checkpassword" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Pastikan password sama dengan di atas</p>
                    </div>

                    <!-- Nomor Telepon -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-telephone">
                        Nomor Telepon
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-phone text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-telephone" type="text" v-model="formPelajar.phoneNumber" placeholder="Contoh: 08123456789">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Nomor aktif untuk informasi tiket</p>
                    </div>

                    
                  </div>

                  <!-- Terms and Conditions -->
                  <!-- <div class="mt-6 mb-8">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" v-model="termsAccepted"
                          class="h-4 w-4 text-[#5EA2EF] border-gray-300 rounded focus:ring-[#5EA2EF]">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="text-gray-700">Saya menyetujui <a href="#"
                            class="text-[#5EA2EF] hover:underline">syarat dan ketentuan</a> yang berlaku</label>
                      </div>
                    </div>
                  </div> -->

                  <!-- Submit Button -->
                  <div class="flex flex-col sm:flex-row gap-4 mt-6">
                    <button type="submit" :disabled="isLoading"
                      class="flex-1 py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5EA2EF] flex justify-center items-center">
                      <span v-if="isLoading" class="mr-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                          viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                          </path>
                        </svg>
                      </span>
                      <span>{{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}</span>
                    </button>
                    <a href="/login"
                      class="flex-1 py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center">
                      Sudah Punya Akun
                    </a>
                  </div>
                </form>
              </div>
              <div v-if="selectedRole === 'alumni'" class="text-sm">
                        
                <form id="registerForm" class="p-6" @submit.prevent="handleRegister">
                  <!--
                  <div class="w-full mb-2">
                           Area unggahan 
                          <p class="mb-2 ms-0 text-gray-700 text-sm font-medium  ">Upload Ijazah</p>
                          <div class="mx-auto">
                            <input id="ijazah" type="file" @change="handleFileChange('alumni', $event)"
                              class="w-full text-dark dark:text-white text-sm bg-white dark:bg-gray-700 border  dark:border-gray-600 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-white-1 dark:file:bg-gray-800 file:hover:brightness-150 file:text-black dark:file:text-white rounded-lg" />
                          </div>
                        </div>-->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <!-- Nama Lengkap -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-first-name">
                        Nama Lengkap
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-user text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-first-name" type="text" v-model="formAlumni.name" placeholder="Contoh: John Doe">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Harap masukkan nama yang valid</p>
                    </div>

                    <!-- Username -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-username">
                        Username
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-at text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-username" type="text" v-model="formAlumni.username" placeholder="Contoh: johndoe">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Username minimal 5 karakter</p>
                    </div>

                    <!-- Email -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-email">
                        Email
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-email" type="email" v-model="formAlumni.email" placeholder="Contoh: example@gmail.com">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Email akan digunakan untuk verifikasi dan notifikasi penting</p>
                    </div>

                    <!-- Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-password">
                        Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-password" type="password" v-model="formAlumni.password" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Password minimal 8 karakter</p>
                    </div>

                    <!-- Konfirmasi Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-checkpassword">
                        Konfirmasi Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-checkpassword" type="password" v-model="formAlumni.checkpassword" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Pastikan password sama dengan di atas</p>
                    </div>

                    <!-- Nomor Telepon -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-telephone">
                        Nomor Telepon
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-phone text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-telephone" type="text" v-model="formAlumni.phoneNumber" placeholder="Contoh: 08123456789">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Nomor aktif untuk informasi tiket</p>
                    </div>

                  
                  </div>

                  <!-- Terms and Conditions -->
                  <!-- <div class="mt-6 mb-8">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" v-model="termsAccepted"
                          class="h-4 w-4 text-[#5EA2EF] border-gray-300 rounded focus:ring-[#5EA2EF]">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="text-gray-700">Saya menyetujui <a href="#"
                            class="text-[#5EA2EF] hover:underline">syarat dan ketentuan</a> yang berlaku</label>
                      </div>
                    </div>
                  </div> -->

                  <!-- Submit Button -->
                  <div class="flex flex-col sm:flex-row gap-4 mt-6">
                    <button type="submit" :disabled="isLoading"
                      class="flex-1 py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5EA2EF] flex justify-center items-center">
                      <span v-if="isLoading" class="mr-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                          viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                          </path>
                        </svg>
                      </span>
                      <span>{{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}</span>
                    </button>
                    <a href="/login"
                      class="flex-1 py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center">
                      Sudah Punya Akun
                    </a>
                  </div>
                </form>
              </div>
              <div v-if="selectedRole === 'guru'">
                <form id="registerForm" class="p-6" @submit.prevent="handleRegister">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                  <!-- Pilih Ruangan -->
                  <div class="col-span-2 md:col-span-1">
                    <label class="block text-gray-700 text-sm font-medium mb-2">Pilih Ruangan</label>
                    <select
                      v-model="formGuru.room"
                      class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                    >
                      <option disabled value="">-- Pilih Ruangan --</option>
                      <option  v-for="(room, index) in roomOptions" :key="index" :value="room">
                        {{ room }}
                      </option>
                    </select>
                  </div>

                  <!-- Pilih Nama -->
                  <div class="col-span-2 md:col-span-1">
                    <label class="block text-gray-700 text-sm font-medium mb-2">Pilih Nama</label>
                    <select
                      v-model="formGuru.name"
                      class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                      :disabled="!formGuru.room" 
                    >
                      <option disabled value="">-- Pilih Nama --</option>
                      <option
                        v-for="(name, index) in GuruList[formGuru.room] || []"
                        :key="index"
                        :value="name"
                      >
                        {{ name }}
                      </option>
                    </select>
                  </div>
                

                    <!-- Username -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-username">
                        Username
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-at text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-username" type="text" v-model="formGuru.username" placeholder="Contoh: johndoe">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Username minimal 5 karakter</p>
                    </div>

                    <!-- Email -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-email">
                        Email
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-email" type="email" v-model="formGuru.email" placeholder="Contoh: example@gmail.com">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Email akan digunakan untuk verifikasi dan notifikasi penting</p>
                    </div>

                    <!-- Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-password">
                        Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-password" type="password" v-model="formGuru.password" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Password minimal 8 karakter</p>
                    </div>

                    <!-- Konfirmasi Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-checkpassword">
                        Konfirmasi Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-checkpassword" type="password" v-model="formGuru.checkpassword" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Pastikan password sama dengan di atas</p>
                    </div>

                    <!-- Nomor Telepon -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-telephone">
                        Nomor Telepon
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-phone text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-telephone" type="text" v-model="formGuru.phoneNumber" placeholder="Contoh: 08123456789">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Nomor aktif untuk informasi tiket</p>
                    </div>

                    </div>

                  <!-- Terms and Conditions -->
                  <!-- <div class="mt-6 mb-8">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" v-model="termsAccepted"
                          class="h-4 w-4 text-[#5EA2EF] border-gray-300 rounded focus:ring-[#5EA2EF]">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="text-gray-700">Saya menyetujui <a href="#"
                            class="text-[#5EA2EF] hover:underline">syarat dan ketentuan</a> yang berlaku</label>
                      </div>
                    </div>
                  </div> -->

                  <!-- Submit Button -->
                  <div class="flex flex-col sm:flex-row gap-4 mt-6">
                    <button type="submit" :disabled="isLoading"
                      class="flex-1 py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5EA2EF] flex justify-center items-center">
                      <span v-if="isLoading" class="mr-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                          viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                          </path>
                        </svg>
                      </span>
                      <span>{{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}</span>
                    </button>
                    <a href="/login"
                      class="flex-1 py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center">
                      Sudah Punya Akun
                    </a>
                  </div>
                </form>
              </div>
              <div v-if="selectedRole === 'keluarga_siswa'">
                <form id="registerForm" class="p-6" @submit.prevent="handleRegister">
                  <!--
                  <p class="text-gray-700 text-sm font-medium mb-2 mt-3" for="dokumen">Upload KK</p>
                        <div class="w-full ">
                          <div class="mx-auto mt-1 mb-2">
                            <input type="file" id="dokumen" name="dokumen"  @change="handleFileChange('keluarga_siswa', $event)"
                              class="w-full text-dark dark:text-white text-sm bg-white dark:bg-gray-700 border  dark:border-gray-600 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-white-1 dark:file:bg-gray-800 file:hover:brightness-150 file:text-black dark:file:text-white rounded-lg" />
                          </div>                         
                        </div>-->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <!-- Nama Lengkap -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-first-name">
                        Nama Lengkap
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-user text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-first-name" type="text" v-model="formKeluargaSiswa.name" placeholder="Contoh: John Doe">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Harap masukkan nama yang valid</p>
                    </div>

                    <!-- Username -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-username">
                        Username
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-at text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-username" type="text" v-model="formKeluargaSiswa.username" placeholder="Contoh: johndoe">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Username minimal 5 karakter</p>
                    </div>

                    <!-- Email -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-email">
                        Email
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-email" type="email" v-model="formKeluargaSiswa.email" placeholder="Contoh: example@gmail.com">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Email akan digunakan untuk verifikasi dan notifikasi penting</p>
                    </div>

                    <!-- Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-password">
                        Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-password" type="password" v-model="formKeluargaSiswa.password" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Password minimal 8 karakter</p>
                    </div>

                    <!-- Konfirmasi Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-checkpassword">
                        Konfirmasi Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-checkpassword" type="password" v-model="formKeluargaSiswa.checkpassword" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Pastikan password sama dengan di atas</p>
                    </div>

                    <!-- Nomor Telepon -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-telephone">
                        Nomor Telepon
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-phone text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-telephone" type="text" v-model="formKeluargaSiswa.phoneNumber" placeholder="Contoh: 08123456789">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Nomor aktif untuk informasi tiket</p>
                    </div>

                  
                  </div>

                  <!-- Terms and Conditions -->
                  <!-- <div class="mt-6 mb-8">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" v-model="termsAccepted"
                          class="h-4 w-4 text-[#5EA2EF] border-gray-300 rounded focus:ring-[#5EA2EF]">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="text-gray-700">Saya menyetujui <a href="#"
                            class="text-[#5EA2EF] hover:underline">syarat dan ketentuan</a> yang berlaku</label>
                      </div>
                    </div>
                  </div> -->

                  <!-- Submit Button -->
                  <div class="flex flex-col sm:flex-row gap-4 mt-6">
                    <button type="submit" :disabled="isLoading"
                      class="flex-1 py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5EA2EF] flex justify-center items-center">
                      <span v-if="isLoading" class="mr-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                          viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                          </path>
                        </svg>
                      </span>
                      <span>{{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}</span>
                    </button>
                    <a href="/login"
                      class="flex-1 py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center">
                      Sudah Punya Akun
                    </a>
                  </div>
                  </form>
              </div>
              <div v-if="selectedRole === 'mahasiswa'">
                <form id="registerForm" class="p-6" @submit.prevent="handleRegister">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <!-- Nama Lengkap -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-first-name">
                        Nama Lengkap
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-user text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-first-name" type="text" v-model="formMahasiswa.name" placeholder="Contoh: John Doe">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Harap masukkan nama yang valid</p>
                    </div>

                    <!-- Username -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-username">
                        Username
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-at text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-username" type="text" v-model="formMahasiswa.username" placeholder="Contoh: johndoe">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Username minimal 5 karakter</p>
                    </div>

                    <!-- Email -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-email">
                        Email
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-email" type="email" v-model="formMahasiswa.email" placeholder="Contoh: example@gmail.com">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Email akan digunakan untuk verifikasi dan notifikasi penting</p>
                    </div>

                    <!-- Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-password">
                        Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-password" type="password" v-model="formMahasiswa.password" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Password minimal 8 karakter</p>
                    </div>

                    <!-- Konfirmasi Password -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-checkpassword">
                        Konfirmasi Password
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-lock text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-checkpassword" type="password" v-model="formMahasiswa.checkpassword" placeholder="*****">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Pastikan password sama dengan di atas</p>
                    </div>

                    <!-- Nomor Telepon -->
                    <div class="col-span-2 md:col-span-1">
                      <label class="block text-gray-700 text-sm font-medium mb-2" for="grid-telephone">
                        Nomor Telepon
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-phone text-gray-400"></i>
                        </div>
                        <input
                          class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
                          id="grid-telephone" type="text" v-model="formMahasiswa.phoneNumber" placeholder="Contoh: 08123456789">
                      </div>
                      <p class="text-gray-500 text-xs mt-1">Nomor aktif untuk informasi tiket</p>
                    </div>
                  </div>

                  <!-- Terms and Conditions -->
                  <!-- <div class="mt-6 mb-8">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" type="checkbox" v-model="termsAccepted"
                          class="h-4 w-4 text-[#5EA2EF] border-gray-300 rounded focus:ring-[#5EA2EF]">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="text-gray-700">Saya menyetujui <a href="#"
                            class="text-[#5EA2EF] hover:underline">syarat dan ketentuan</a> yang berlaku</label>
                      </div>
                    </div>
                  </div> -->

                  <!-- Submit Button -->
                  <div class="flex flex-col sm:flex-row gap-4 mt-6">
                    <button type="submit" :disabled="isLoading"
                      class="flex-1 py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5EA2EF] flex justify-center items-center">
                      <span v-if="isLoading" class="mr-2">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                          viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                          </path>
                        </svg>
                      </span>
                      <span>{{ isLoading ? 'Memproses...' : 'Daftar Sekarang' }}</span>
                    </button>
                    <a href="/login"
                      class="flex-1 py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center">
                      Sudah Punya Akun
                    </a>
                  </div>
                </form>
              </div>
              

            </div>
     
      </div>
          
        
     

      <!-- OTP Verification Card -->
      <div v-if="formStep === 2" class="max-w-md w-full bg-white rounded-xl shadow-sm overflow-hidden mb-16">
        <div class="p-6 border-b border-gray-100 text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-envelope-open-text text-[#5EA2EF] text-xl"></i>
          </div>
          <h2 class="text-xl font-bold text-gray-800">Verifikasi OTP</h2>
          <p class="text-gray-600 text-sm">Masukkan kode OTP yang dikirim ke email Anda</p>
        </div>

        <div class="p-6">
          <div class="text-center mb-6">
            <p class="text-sm text-gray-600 mb-4">Kami telah mengirimkan kode OTP ke:</p>
            <div class="font-medium text-gray-800 bg-gray-50 py-2 px-4 rounded-lg mb-4">{{ email }}</div>
            <p class="text-xs text-gray-500">Jika tidak menerima kode, periksa folder spam atau klik kirim ulang</p>
          </div>

          <!-- OTP Input -->
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-medium mb-2" for="otp-input">
              Kode OTP
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 text-center font-bold tracking-wider focus:outline-none focus:bg-white focus:border-[#5EA2EF] transition-colors"
              id="otp-input" type="text" v-model="otpCode" maxlength="6" placeholder="Masukkan 6 digit kode">
          </div>

          <!-- Timer -->
          <div class="text-center mb-6">
            <p class="text-sm text-gray-600">
              Kode akan berakhir dalam:
              <span class="font-medium text-[#5EA2EF]">{{ formatTime(timer) }}</span>
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col gap-3">
            <button @click="verifyOtp" :disabled="isVerifying || otpCode.length !== 6"
              class="py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all flex justify-center items-center disabled:opacity-70">
              <span v-if="isVerifying" class="mr-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
              </span>
              <span>{{ isVerifying ? 'Memverifikasi...' : 'Verifikasi Kode' }}</span>
            </button>
            <button @click="resendOtp" :disabled="canResend === false"
              class="py-3 px-6 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all text-center disabled:opacity-70">
              Kirim Ulang Kode
            </button>
          </div>

          <!-- Back to Registration -->
          <div class="mt-6 text-center">
            <button @click="formStep = 1" class="text-sm text-[#5EA2EF] hover:underline">
              &larr; Kembali ke Form Registrasi
            </button>
          </div>
        </div>
      </div>

      <!-- Registration Success Card -->
      <div v-if="formStep === 3" class="max-w-md w-full bg-white rounded-xl shadow-sm overflow-hidden mb-16">
        <div class="p-6 text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-check text-[#17c964] text-3xl"></i>
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-2">Registrasi Berhasil!</h2>
          <p class="text-gray-600 mb-6">Akun Anda telah berhasil didaftarkan dan diverifikasi.</p>

          <!-- Next Action Buttons -->
          <div class="flex flex-col gap-3">
            <a href="/login"
              class="py-3 px-6 bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] text-white font-medium rounded-lg hover:shadow-md transition-all text-center">
              Masuk ke Akun
            </a>
          </div>
          
        </div>
      
      </div>
      
  
        

    </main>



    <!-- Alert Modal -->
    <div v-if="showAlert" class="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
        <div class="p-4 border-b"
          :class="{ 'bg-red-50 border-red-100': alertType === 'error', 'bg-green-50 border-green-100': alertType === 'success', 'bg-blue-50 border-blue-100': alertType === 'info' }">
          <div class="flex items-center">
            <div class="flex-shrink-0 mr-3">
              <div class="w-8 h-8 rounded-full flex items-center justify-center" :class="{
                'bg-red-100 text-red-500': alertType === 'error',
                'bg-green-100 text-green-500': alertType === 'success',
                'bg-blue-100 text-blue-500': alertType === 'info'
              }">
                <i class="fas" :class="{
                  'fa-exclamation-circle': alertType === 'error',
                  'fa-check-circle': alertType === 'success',
                  'fa-info-circle': alertType === 'info'
                }"></i>
              </div>
            </div>
            <h3 class="text-lg font-semibold" :class="{
              'text-red-800': alertType === 'error',
              'text-green-800': alertType === 'success',
              'text-blue-800': alertType === 'info'
            }">{{ alertTitle }}</h3>
          </div>
        </div>
        <div class="p-4">
          <p class="text-gray-700 mb-4">{{ alertMessage }}</p>
          <div class="flex justify-end">
            <button @click="showAlert = false"
              class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default {
  name: 'RegisterPage',
  setup() {
    // Form state
    const formStep = ref(1);
    const selectedRole = ref(null);
    const roomOptions = ref([]);
    const GuruList = ref({});
    const formPelajar = ref({ name: '', username: '', email: '', password: '', checkpassword: '', phoneNumber: '' });
    const formGuru = ref({ name: '', username: '', email: '', password: '', checkpassword: '', phoneNumber: '' });
    const formAlumni = ref({ name: '', username: '', email: '', password: '', checkpassword: '', phoneNumber: '' });
    const formMahasiswa= ref({ name: '', username: '', email: '', password: '', checkpassword: '', phoneNumber: '' });
    const formKeluargaSiswa = ref({ name: '', username: '', email: '', password: '', checkpassword: '', phoneNumber: '' });
    const selectRole = (role) => {
      if (!selectedRole.value) {
        selectedRole.value = role
      }
    }
    const fileData = ref({
      alumni: null,
      keluarga_siswa: null,
    });
    const termsAccepted = ref(false);

    // OTP verification
    const otpCode = ref('');
    const timer = ref(300);
    const canResend = ref(false);
    let timerInterval = null;

    // Loading states
    const isLoading = ref(false);
    const isVerifying = ref(false);

    // Alert modal
    const showAlert = ref(false);
    const alertType = ref('info'); // 'info', 'success', 'error'
    const alertTitle = ref('');
    const alertMessage = ref('');

    // Format remaining time
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Format kirim file
    const handleFileChange = async (category, event) => {
      const formData = new FormData();
      const file = fileData.value[selectedRole.value];  
      formData.append('dokumen', file);
      formData.append('userId', userId);

      try {
        const apiUrl = import.meta.env.VITE_API_BASE;
        const response = await axios.post(`${apiUrl}/api/send-dokumen`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log("Dokumen berhasil diupload:", response.data);
      } catch (error) {
        console.error("Gagal mengupload dokumen:", error);
      }   };



    // Start OTP timer
    const startTimer = () => {
      timer.value = 300;
      canResend.value = false;
      clearInterval(timerInterval);

      timerInterval = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          clearInterval(timerInterval);
          canResend.value = true;
        }
      }, 1000);
    };

    // Show alert message
    const showAlertMessage = (type, title, message) => {
      alertType.value = type;
      alertTitle.value = title;
      alertMessage.value = message;
      showAlert.value = true;
    };

    // Handle registration form submission
    const handleRegister = async () => {
      // Basic validation
          if (selectedRole.value === 'pelajar') {
            if (!formPelajar.value.name || !formPelajar.value.username || !formPelajar.value.email || !formPelajar.value.password || !formPelajar.value.checkpassword || !formPelajar.value.phoneNumber) {
              showAlertMessage('error', 'Data Tidak Lengkap', 'Harap lengkapi semua data dalam formulir Siswa!');
              return;
            }

            if (formPelajar.value.password !== formPelajar.value.checkpassword) {
              showAlertMessage('error', 'Password Tidak Sama', 'Password dan konfirmasi password tidak cocok!');
              return;
            }

          } else if (selectedRole.value === 'alumni') {
            if (!formAlumni.value.name || !formAlumni.value.username || !formAlumni.value.email || !formAlumni.value.password || !formAlumni.value.checkpassword || !formAlumni.value.phoneNumber) {
              showAlertMessage('error', 'Data Tidak Lengkap', 'Harap lengkapi semua data dalam formulir Guru!');
              return;
            }

            if (formAlumni.value.password !== formAlumni.value.checkpassword) {
              showAlertMessage('error', 'Password Tidak Sama', 'Password dan konfirmasi password tidak cocok!');
              return;
            }

          } else if (selectedRole.value === 'guru') {
            if (!formGuru.value.name || !formGuru.value.username || !formGuru.value.email || !formGuru.value.password || !formGuru.value.checkpassword || !formGuru.value.phoneNumber) {
              showAlertMessage('error', 'Data Tidak Lengkap', 'Harap lengkapi semua data dalam formulir Guru!');
              return;
            }

            if (formGuru.value.password !== formGuru.value.checkpassword) {
              showAlertMessage('error', 'Password Tidak Sama', 'Password dan konfirmasi password tidak cocok!');
              return;
            } } else if (selectedRole.value === 'keluarga_siswa') {
                if (!formKeluargaSiswa.value.name || !formKeluargaSiswa.value.username || !formKeluargaSiswa.value.email || !formKeluargaSiswa.value.password || !formKeluargaSiswa.value.checkpassword || !formKeluargaSiswa.value.phoneNumber) {
                  showAlertMessage('error', 'Data Tidak Lengkap', 'Harap lengkapi semua data dalam formulir Keluarga Siswa!');
                  return;
                }

                if (formKeluargaSiswa.value.password !== formKeluargaSiswa.value.checkpassword) {
                  showAlertMessage('error', 'Password Tidak Sama', 'Password dan konfirmasi password tidak cocok!');
                  return;
                }

              } else if (selectedRole.value === 'mahasiswa') {
                if (!formMahasiswa.value.name || !formMahasiswa.value.username || !formMahasiswa.value.email || !formMahasiswa.value.password || !formMahasiswa.value.checkpassword || !formMahasiswa.value.phoneNumber) {
                  showAlertMessage('error', 'Data Tidak Lengkap', 'Harap lengkapi semua data dalam formulir Mahasiswa!');
                  return;
                }

                if (formMahasiswa.value.password !== formMahasiswa.value.checkpassword) {
                  showAlertMessage('error', 'Password Tidak Sama', 'Password dan konfirmasi password tidak cocok!');
                  return;
                }
              }

      // if (!termsAccepted.value) {
      //   showAlertMessage('error', 'Syarat dan Ketentuan', 'Harap setujui syarat dan ketentuan yang berlaku!');
      //   return;
      // }

      isLoading.value = true;
      let payload = {}
      let userData = {}

        if (selectedRole.value === 'pelajar') {
      payload = {
        ...formPelajar.value,
        role: 'pelajar'
      };

      userData = {
        name: formPelajar.value.name,
        username: formPelajar.value.username,
        email: formPelajar.value.email,
        phoneNumber: formPelajar.value.phoneNumber,
        role: 'pelajar'
      };

    } else if (selectedRole.value === 'alumni') {
      payload = {
        ...formAlumni.value,
        role: 'alumni'
      };

      userData = {
        name: formAlumni.value.name,
        username: formAlumni.value.username,
        email: formAlumni.value.email,
        phoneNumber: formAlumni.value.phoneNumber,
        role: 'alumni'
      };

    } else if (selectedRole.value === 'guru') {
      payload = {
        ...formGuru.value,
        role: 'guru'
      };

      userData = {
        name: formGuru.value.name,
        username: formGuru.value.username,
        email: formGuru.value.email,
        phoneNumber: formGuru.value.phoneNumber,
        role: 'guru'
      };

    } else if (selectedRole.value === 'keluarga_siswa') {
      payload = {
        ...formKeluargaSiswa.value,
        role: 'keluarga_siswa'
      };

      userData = {
        name: formKeluargaSiswa.value.name,
        username: formKeluargaSiswa.value.username,
        email: formKeluargaSiswa.value.email,
        phoneNumber: formKeluargaSiswa.value.phoneNumber,
        role: 'keluarga_siswa'
      };

    } else if (selectedRole.value === 'mahasiswa') {
      payload = {
        ...formMahasiswa.value,
        role: 'mahasiswa'
      };

      userData = {
        name: formMahasiswa.value.name,
        username: formMahasiswa.value.username,
        email: formMahasiswa.value.email,
        phoneNumber: formMahasiswa.value.phoneNumber,
        role: 'mahasiswa'
      };
    }

      try {     
        sessionStorage.setItem('userData', JSON.stringify(userData));
        // Send registration data to API
        const apiUrl = import.meta.env.VITE_API_BASE;
        const response = await axios.post(`${apiUrl}/api/register`, payload);

        const userId = response.data.userId;

        // Kirim file dokumen jika ada
        if (userId && fileData.value.dokumen) {
          await handleFileChange(userId, fileData.value.dokumen); // Kirim file dokumen
        }

        // Move to OTP verification step
        formStep.value = 2;
        startTimer(); // Start the OTP countdown timer

        showAlertMessage('success', 'Registrasi Berhasil', 'Silakan verifikasi email Anda dengan memasukkan kode OTP yang telah dikirim.');
      } catch (error) {
        console.error('Error registrasi:', error.response ? JSON.stringify(error.response.data) : error.message);
        const errorMessage = error.response?.data?.message || 'Terjadi kesalahan saat registrasi';
        showAlertMessage('error', 'Registrasi Gagal', errorMessage);
      } finally {
        isLoading.value = false;
      }
    };

    // Verify OTP code
    const verifyOtp = async () => {
      if (otpCode.value.length !== 6) {
        showAlertMessage('error', 'Kode OTP Tidak Valid', 'Harap masukkan 6 digit kode OTP!');
        return;
      }

      isVerifying.value = true;

      try {
        const apiUrl = import.meta.env.VITE_API_BASE;
        const userData = JSON.parse(sessionStorage.getItem('userData'));

        // Ensure email exists
        if (!userData?.email) {
          showAlertMessage('error', 'Data Tidak Ditemukan', 'Email tidak ditemukan. Silakan registrasi ulang.');
          formStep.value = 1;
          return;
        }

        const response = await axios.post(`${apiUrl}/api/validation/verifyotp`, {
          users: userData.email,
          otp: otpCode.value
        });

        if (response.data.data.verified) {
          // OTP verification successful
          sessionStorage.removeItem("userData"); // Clean up session storage

          // Move to success step
          formStep.value = 3;
          clearInterval(timerInterval); // Clear the timer

          showAlertMessage('success', 'Verifikasi Berhasil', 'Akun Anda telah berhasil diverifikasi! Anda sekarang dapat masuk dan membeli tiket.');
        } else {
          showAlertMessage('error', 'Verifikasi Gagal', 'Kode OTP yang Anda masukkan tidak valid. Silakan coba lagi.');
        }
      } catch (error) {
        console.error('Gagal verifikasi OTP:', error.response ? error.response.data : error);
        const errorMessage = error.response?.data?.message || 'Terjadi kesalahan saat verifikasi OTP';
        showAlertMessage('error', 'Verifikasi Gagal', errorMessage);
      } finally {
        isVerifying.value = false;
      }
    };

    // Resend OTP code
    const resendOtp = async () => {
      const userData = JSON.parse(sessionStorage.getItem('userData'));

      if (!userData?.email) {
        showAlertMessage('error', 'Data Tidak Ditemukan', 'Email tidak ditemukan. Silakan registrasi ulang.');
        formStep.value = 1;
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_BASE;
        await axios.post(`${apiUrl}/api/validation/getotp`, { users: userData.email });

        // Restart the timer
        startTimer();

        showAlertMessage('info', 'OTP Terkirim', 'Kode OTP baru telah dikirim ke email Anda.');
      } catch (error) {
        console.error('Gagal mengirim ulang OTP:', error);
        showAlertMessage('error', 'Pengiriman Gagal', 'Gagal mengirim ulang kode OTP. Silakan coba lagi nanti.');
      }
    };

    // Cleanup on component unmount
    onUnmounted(() => {
      clearInterval(timerInterval);
      
      }
    );
    
    // Initialize animation on mount
    onMounted(async () => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
      try {
          const res = await axios.get('https://api.sheetbest.com/sheets/42d559ab-7a40-4037-900d-fea798575c25') //
          const data = res.data

          const grouped = {}
          const uniqueRooms = new Set()

          data.forEach(entry => {
            const ruangan = entry.Ruangan?.trim()
            const nama = entry['Nama Guru']?.trim()

            if (ruangan && nama) {
              uniqueRooms.add(ruangan)
              if (!grouped[ruangan]) {
                grouped[ruangan] = []
              }
              grouped[ruangan].push(nama)
            }
          })

          roomOptions.value = Array.from(uniqueRooms)
          GuruList.value = grouped

        } catch (err) {
          console.error('Gagal ambil data dari GSheet:', err)
        }
    });
    
    return {
      formStep,
      selectedRole,
      GuruList,
      roomOptions,
      formPelajar,
      formAlumni,
      formKeluargaSiswa,
      formGuru,
      formMahasiswa,
      selectRole,
      termsAccepted,
      handleFileChange,
      otpCode,
      timer,
      canResend,
      isLoading,
      isVerifying,
      showAlert,
      alertType,
      alertTitle,
      alertMessage,
      handleRegister,
      verifyOtp,
      resendOtp,
      formatTime,
      showAlertMessage
    };
  },
  methods: {
    resetFormByRole(role) {
      this.register = {
      part_name: '',
      name: '',
      username: '',
      email: '',
      phone: '62',
      password: '',
      repassword: '',
    };
  }
}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: textfield;
  -moz-appearance: textfield;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Smooth transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Focus ring styling */
*:focus-visible {
  outline: 2px solid #5EA2EF;
  outline-offset: 2px;
}
</style>
