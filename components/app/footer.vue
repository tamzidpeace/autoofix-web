<script setup>
import Logo from "../../assets/img/footer/Mask group (1).png"
import TireImg from "../../assets/img/footer/Ellipse 1669.png"
import Twitter from "../../assets/img/footer/Icon/Social icon.svg"
import Linkend from "../../assets/img/footer/Icon/Social icon (1).svg"
import Facebook from "../../assets/img/footer/Icon/Social icon (2).svg"
import Pinterest from "../../assets/img/footer/Icon/Social icon (3).svg"
import Telegram from "../../assets/img/footer/Icon/Social icon (4).svg"
import Instagram from "../../assets/img/footer/Icon/Social icon (5).svg"

const usefulLinks = [
  { id: 1, text: "About us", url: "#about" },
  { id: 2, text: "Contacts", url: "#contact" },
  { id: 3, text: "Blogs", url: "#blogs" },
];
const supportLinks = [
  { id: 1, text: "Community", url: "#" },
  { id: 2, text: "Faqs", url: "#faqs" },
];
const Img = [Twitter ,Linkend,  Facebook, Pinterest, Telegram, Instagram ]
let buttonClass = 'flex items-center border space-x-2 border-white p-1 rounded-[4px] h-[40px]';
</script>

<template>
  <div class="image-container z-10 px-[1rem] py-[16px] text-white relative 3xl:px-[16.25rem] 3xl:py-[3.75px] xl:px-[10rem] xl:pt-[94px] lg:px-[4rem]">
    <div class="absolute top-[-20px] left-[30%] right-[30%] md:top-[-35px] lg:top-[-45px] xl:top-[-65px] z-[-1]"><img src="~/assets/img/footer/Vector%203.png" alt=""/></div>
    <div class="absolute hidden lg:block 3xl:hidden top-[-10px] lg:left-[61%] md:top-[-40px] z-[-1]"><img src="~/assets/img/footer/Vector%205.png" alt=""/></div>
    <div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:mt-0 lg:mb-[32px] mb-4">
      <div class="col-span-1">
        <img :src="Logo" alt="" class="lg:mb-3">
        <div class="flex flex-col">
          <p>Join our subscribers list to get instant latest news and special offers</p>
          <div class="flex">
            <input type="email" class="text-gray-700 z-20 border-none" placeholder="Your Email" >
            <button class="bg-yellow-7 flex rounded items-center px-2">Subscribe
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 5.99854V7.99854H14.59L5 17.5885L6.41 18.9985L16 9.40854V17.9985H18V5.99854H6Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-1 grid grid-cols-2">
        <div class="flex flex-col">
          <h1 class="lg:text-2xl text-base lg:mb-3 font-bold">Useful Link</h1>
        <span v-for="link in usefulLinks">
          <a :key="link.id" :href="link.url" class="mb-3 lg:text-base text-xs">{{ link.text }}</a>
        </span>
        </div>
        <div class="flex flex-col">
          <h1 class="lg:text-2xl text-base lg:mb-3 font-bold">Support</h1>
          <span v-for="link in supportLinks">
            <a :key="link.id" :href="link.url" class="mb-3 lg:text-base text-xs">{{ link.text }}</a>
          </span>
        </div>
      </div>
      <div class="col-span-1 lg:mb-2">
        <h1 class="lg:text-2xl lg:mb-3 text-base font-bold">Get In Touch</h1>
        <p class="lg:mb-2 lg:text-base text-xs">23, Tropical Akhand Tower (Level: 03-04), Garib-e-Newaz Avenue, Sector: 11, Uttara, Dhaka - 1230</p>
        <a class="lg:text-base text-xs">Email: info@garazino.com</a>
        <div class="flex space-x-4 lg:mb-2 lg:mt-2">
          <img v-for="item in Img" :src="item" :key="item" alt="Social Icon">
        </div>
      </div>
    </div>
    <div class="z-10">
       <img :src="TireImg" alt="" class="absolute 3xl:left-[80px] left-[40px] lg:block hidden bottom-0 z-10">
         <div class="absolute bottom-[90px] right-[220px] left-[220px]">
           <hr class="h-px bg-white w-full border-1 lg:block hidden">
         </div>
        <img :src="TireImg" alt="" class="absolute 3xl:right-[80px] lg:block hidden right-[40px] bottom-0 z-10">
     </div>
    <hr class="h-px bg-white w-full border-1 lg:hidden">
    <div class="flex justify-between lg:px-[5.5rem] items-center">
      <p class="lg:text-base text-[#D0D5DD] font-normal text-xs">Copyright © 2023 Softzino Technologies</p>
      <div class="lg:block hidden">
        <div class="flex space-x-6">
          <button :class="buttonClass">
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15639 0.965197C1.03827 1.2327 0.973022 1.56046 0.973022 1.94172V24.0577C0.973022 24.4398 1.03835 24.7676 1.15661 25.035L13.1905 12.9993L1.15639 0.965197ZM1.85161 25.7542C2.29766 25.9451 2.87953 25.8845 3.51402 25.5247L17.6711 17.4799L13.8976 13.7065L1.85161 25.7542ZM18.5736 16.9682L23.015 14.4447C24.412 13.6497 24.412 12.3507 23.015 11.5567L18.5716 9.03184L14.6047 12.9993L18.5736 16.9682ZM17.6698 8.51943L3.51402 0.475724C2.87949 0.115146 2.29759 0.054983 1.85153 0.246121L13.8976 12.2922L17.6698 8.51943Z" fill="white"/>
            </svg>
            <span class="flex flex-col items-start"><span class="text-[8px]">GET IT ON</span>
            <span class="text-md font-bold">Google Play</span></span>
          </button>
          <button :class="buttonClass">
            <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.769 12.2991C15.7907 10.6181 16.6934 9.02751 18.1256 8.14705C17.2221 6.85673 15.7088 6.03863 14.1344 5.98937C12.4552 5.81311 10.8272 6.9942 9.97149 6.9942C9.09922 6.9942 7.78172 6.00687 6.36299 6.03606C4.51374 6.0958 2.78977 7.14719 1.89007 8.76393C-0.0439277 12.1123 1.39866 17.0334 3.25127 19.74C4.17817 21.0654 5.26145 22.5458 6.6789 22.4933C8.06596 22.4358 8.584 21.6088 10.2583 21.6088C11.9171 21.6088 12.4031 22.4933 13.8493 22.4599C15.3377 22.4358 16.2754 21.1287 17.1698 19.7908C17.8358 18.8464 18.3483 17.8027 18.6882 16.6983C16.9391 15.9585 15.771 14.1982 15.769 12.2991Z" fill="white"/>
              <path d="M13.0373 4.20937C13.8489 3.23516 14.2487 1.98298 14.1518 0.71875C12.912 0.84897 11.7668 1.44153 10.9443 2.37836C10.14 3.29369 9.72143 4.52384 9.80056 5.73975C11.0408 5.75252 12.2601 5.17602 13.0373 4.20937Z" fill="white"/>
            </svg>
            <span class="flex flex-col items-start">
            <span class="text-[8px]">Download on the </span>
            <span class="text-md font-bold">App Store</span>
          </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  background-image: url('/assets/img/footer/Vector 4 (1).png');
  background-size: cover;
  background-repeat: round;
  width: 100%;
  height: 100%;
}

</style>