<script setup>
let buttonClass = 'flex items-center text-white space-x-4 rounded-[4px] h-[56px]';
</script>

<template>
  <!-- body hero section mobile & web start-->
  <section class="bg-purple-1 3xl:pl-[16.25rem] 3xl:pr-[5.2rem] 3xl:pt-[6.3rem] xl:px-[10rem] lg:px-[3rem] lg:py-[4rem] px-[1rem] py-[2.75rem] relative">
    <section
      class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-4"
    >
      <!-- left-side-section start -->
      <section
        class="flex items-center justify-center lg:py-[9.8rem]"
      >
        <section class="">
          <section class="relative">
            <section
              class="absolute -left-[30%] lg:-left-[20%] lg:-top-[20%] z-0 "
            >
              <img
                class="w-[40%] md:w-[80%] lg:w-[80%]"
                src="~/assets/img/right-gra.png"
                alt="rightsection"
                srcset=""
              />
            </section>
            <section class="z-10 relative ">
              <p
                class="text-white font-bold mb-2 text-[24px] text-center lg:text-left lg:text-[3rem]  2xl:text-[4rem] w-full"
              >
                Best Application for Your Business & Solution.
              </p>
              <p
                class="text-white text-sm font-normal lg:text-2xl mb-4 text-center lg:text-left"
              >
                Autoofix is the best software platform for running garage
                business.
              </p>

              <section class="hidden lg:flex relative">
                  <button class="border border-white p-3" :class="buttonClass">
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15639 0.965197C1.03827 1.2327 0.973022 1.56046 0.973022 1.94172V24.0577C0.973022 24.4398 1.03835 24.7676 1.15661 25.035L13.1905 12.9993L1.15639 0.965197ZM1.85161 25.7542C2.29766 25.9451 2.87953 25.8845 3.51402 25.5247L17.6711 17.4799L13.8976 13.7065L1.85161 25.7542ZM18.5736 16.9682L23.015 14.4447C24.412 13.6497 24.412 12.3507 23.015 11.5567L18.5716 9.03184L14.6047 12.9993L18.5736 16.9682ZM17.6698 8.51943L3.51402 0.475724C2.87949 0.115146 2.29759 0.054983 1.85153 0.246121L13.8976 12.2922L17.6698 8.51943Z" fill="white"/>
                    </svg>
                    <span class="flex flex-col items-start"><span class="text-xs">GET IT ON</span>
                      <span class="text-md md:text-2xl font-medium">Google Play</span></span>
                  </button>
                  <button class="ms-4 bg-yellow-7 px-4" :class="buttonClass">
                      <span class="text-md md:text-2xl font-medium">Demo Explore</span>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0V2H9.59L0 11.59L1.41 13L11 3.41V12H13V0H1Z" fill="white"/>
                      </svg>
                  </button>
                <div
                  class="hidden lg:block absolute lg:left-[90%] lg:top-[-2.5rem]"
                >
                  <img src="~/assets/img/rbtnleft.png" alt="" class="" />
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
      <!-- left-side-section end -->
      <!-- right-side-section start-->
      <section
        class="flex items-start justify-center lg:items-center lg:justify-start"
      >
        <section class="relative hidden lg:block">
          <img src="~/assets/img/laptop.png" alt="" class="" />
          <section
            class="absolute top-[5rem] hover:animate-bounce lg:left-[1.5%] lg:top-[11rem]"
          >
            <img
              class="w-10 lg:w-full"
              src="~/assets/img/tabler_car-crash.png"
              alt="car"
            />
          </section>
          <section
            class="absolute animate-bounce left-[90%] top-[8rem] lg:top-[19.5rem]"
          >
            <img src="~/assets/img/bouncecar.png" alt="car" />
          </section>
        </section>
        <section class="lg:hidden md:block">
          <img src="~/assets/img/mobileviewgroupimageherosection.png" alt="" />
        </section>
      </section>
      <section class="flex justify-center lg:hidden relative pb-10">
        <button class="border border-white p-3" :class="buttonClass">
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.15639 0.965197C1.03827 1.2327 0.973022 1.56046 0.973022 1.94172V24.0577C0.973022 24.4398 1.03835 24.7676 1.15661 25.035L13.1905 12.9993L1.15639 0.965197ZM1.85161 25.7542C2.29766 25.9451 2.87953 25.8845 3.51402 25.5247L17.6711 17.4799L13.8976 13.7065L1.85161 25.7542ZM18.5736 16.9682L23.015 14.4447C24.412 13.6497 24.412 12.3507 23.015 11.5567L18.5716 9.03184L14.6047 12.9993L18.5736 16.9682ZM17.6698 8.51943L3.51402 0.475724C2.87949 0.115146 2.29759 0.054983 1.85153 0.246121L13.8976 12.2922L17.6698 8.51943Z" fill="white"/>
          </svg>
          <span class="flex flex-col items-start"><span class="text-xs">GET IT ON</span>
                      <span class="text-2xl font-medium">Google Play</span></span>
        </button>
        <button class="ms-4 bg-yellow-7 px-4" :class="buttonClass">
          <span class="text-2xl font-medium">Demo Explore</span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0V2H9.59L0 11.59L1.41 13L11 3.41V12H13V0H1Z" fill="white"/>
          </svg>
        </button>
      </section>

      <!-- right-side-section end-->
      <!-- icon-car place in middle of the screen start-->
      <!-- <section class="hidden lg:block">
          <section
            class="absolute border-2 border-red-800 z-10 left-[20%] -top-[20%]"
          >
            <img src="~/assets/img/dashboardcariconwhite.png" alt="car" />
          </section>
      </section> -->
      <!-- icon-car place in middle of the screen end-->
    </section>
    <!-- white car position -->
    <div class="hidden lg:block absolute -top-[-62%] left-[50%]">
      <img src="~/assets/img/dashboardcariconwhite.png" alt="">
    </div>
  </section>
</template>
