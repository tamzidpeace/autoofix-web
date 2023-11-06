<script setup>
import Logo from "../../assets/img/footer/Mask group (1).png"
</script>

<template>
  <div class="image-container px-[16.25rem] pt-[119px] text-white" >
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-4">
        <img :src="Logo" alt="">
        <div class="flex flex-col">
          <p>Join our subscribers list to get instant latest news and special offers</p>
          <input type="email" placeholder="Your Email" >
        </div>
      </div>
      <div class="col-span-2">
        <h1 class="text-2xl font-bold">Useful Link</h1>
        <div class="flex flex-col">
          <a href="#">About us</a>
          <a href="#">Contacts</a>
          <a href="#">Blogs</a>
          <a href="#">Support Service</a>
        </div>
      </div>
      <div class="col-span-2">
        <h1 class="text-2xl font-bold">Support</h1>
        <div class="flex flex-col">
          <a href="#">Community</a>
          <a href="#">Faqs</a>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div class="col-span-4">
        <h1 class="text-2xl font-bold">Get In Touch</h1>
        <p>23, Tropical Akhand Tower (Level: 03-04), Garib-e-Newaz Avenue, Sector: 11, Uttara, Dhaka - 1230</p>
        <a>Email: info@garazino.com</a>
        <div></div>
      </div>
    </div>
    <div class="flex justify-between pb-[20px]">
      <p>Copyright © 2023 Softzino Technologies</p>
      <div class="flex">
        <button>Google Play</button>
        <button>App Store</button>
      </div>
    </div>

  </div>

</template>

<style scoped>
.image-container {
  background-image: url('/assets/img/footer/Group 1000010443.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

</style>