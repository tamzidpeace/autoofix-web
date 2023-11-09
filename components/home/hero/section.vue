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

              <section class="flex relative">
                <button class="hidden lg:block">
                  <img
                    src="~/assets/img/pc-version-hero-section-btn (1).png"
                    alt=""
                  />
                </button>

                <button class="hidden lg:block ms-2">
                  <img
                    src="~/assets/img/pc-version-hero-section-btn (2).png"
                    alt=""
                  />
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

      <section class="flex justify-center relative pb-10">
        <button class="lg:hidden">
          <img src="~/assets/img/mobilepalystorebtn.png" alt="" />
        </button>
        <button class="lg:hidden ms-2">
          <img src="~/assets/img/demoelporebtn.png" alt="" />
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
