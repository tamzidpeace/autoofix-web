<template>
  <div>
    <!-- download section web+mobile start -->
    <section class="bg-[#DABDFF]">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!-- download left section -->
        <div
          class=" px-12 py-16 download-content-section flex justify-center items-center lg:justify-end text-black bg-[url('~/assets/img/downloadAppImageLeftSide.png')] relative"
        >
          <div class="w-[100%] lg:w-[90%]">
            <div class="text-center lg:text-left">
              <p class="text-5xl font-bold">Download the App</p>
              <br />
              <p class="text-5xl font-bold">Today and Get Started!</p>
            </div>
            <div class="mt-5 mb-10 text-center lg:text-left">
              <p class="text-lg">
                Fully automated Garage Management System(GMS) is a cloud-based
                mobile and responsive web application for garage management with
                CMS.
              </p>
            </div>
            <!-- download button group -->
            <div class="flex justify-center lg:justify-start">
              <button class="hidden lg:block">
                <img
                  src="~/assets/img/googleplaystorepcdownloadsection.png"
                  alt=""
                />
              </button>
              <button class="lg:hidden">
                <img src="~/assets/img/googleplaybtnmobile.png" alt="" />
              </button>
            </div>
            <!-- downloaded info section -->
            <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 w-100 text-center pt-12 w-full">
              <div class="border-r-2 pe-12">
                <p class="text-[28px] lg:text-[2.5rem] font-semibold">12.6K</p>
                <p>Downloads</p>
              </div>
              <div class="border-r-2 px-12">
                <p class="text-[28px] lg:text-[2.5rem] font-semibold">9.5K</p>
                <p>Happy Clients</p>
              </div>
              <div class="px-12">
                <p class="text-[28px] lg:text-[2.5rem] font-semibold">1.4K</p>
                <p>App Rated</p>
              </div>
            </div>
          </div>
          <img
            class="absolute top-[16%] left-[10%] animate-pulse"
            src="~/assets/img/download-section-circle.png"
            alt=""
          />
        </div>
        <!-- download right section -->
        <div
          class="pt-14 ps-8 download-image-section flex items-end justify-end"
        >
          <div class="relative">
            <img
              class="absolute top-[60%] left-[7%]"
              src="~/assets/img/dv.png"
              alt=""
            />
            <img class="" src="~/assets/img/downloadAppImage.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- download section web+mobile end -->
  </div>
</template>
