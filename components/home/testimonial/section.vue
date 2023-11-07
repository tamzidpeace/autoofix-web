<script setup>
const testimonials = [
  {
    id: 1,
    name: "Darlene Robertson",
    title: "Branch Manager of Auto Garage",
    image: "",
    description:
        "Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS. Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS. Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS.",
  },
  {
    id: 2,
    name: "Darlene Robertson",
    title: "Branch Manager of Auto Garage",
    image: "",
    description:
        "Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS. Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS. Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS.",
  },
  {
    id: 3,
    name: "Darlene Robertson",
    title: "Branch Manager of Auto Garage",
    image: "",
    description:
        "Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS. Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS. Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS.",
  },
];
</script>

<template>
  <div class="2xl:px-[8rem] 2xl:pb-[5.25rem] 2xl:pt-[7.68rem]">
    <div>
      <h1 class="font-bold 2xl:text-3xl text-center mb-8">What our clients think about us?</h1>
      <div class="2xl:mx-[8.25rem] 2xl:pb-[3.5rem]">
        <div>
<!--          <Swiper
              :modules="[ SwiperNavigation, SwiperVirtual, SwiperPagination]"
              :slidesPerView="3"
              :centeredSlides="true"
              :spaceBetween="30"
              :navigation="true"
              :virtual="true"
              class="mySwiper"
              :pagination="{
      clickable: true,
    }"
          >
            <SwiperSlide
                v-for="(slideContent, index) in testimonials"
                :key="index"
                :virtualIndex="index"
            >
              <div
                  class="h-[540px] bg-[#FAF9FF] w-[745px] rounded-2xl flex justify-center border-2 border-sky-800"
              >
                <div class="relative p-4 h-full w-5/6 pt-12">
                  <div class="relative">
                    <img
                        class="absolute -top-[4%]"
                        src="~/assets/img/quoatationicon.png"
                        alt=""
                    />
                    <div class="flex justify-center">
                      <img src="~/assets/img/t1.png" alt="" />
                    </div>
                    <div class="flex justify-center p-8">
                      <div class="text-center">
                        <h1 class="text-[20px] text-[#1C0081] font-[700]">
                          Darlene Robertson
                        </h1>
                        <p class="font-[400] pt-2">Branch Manager of Auto Garage</p>
                        <p class="pt-8 font-[16px]">

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide
            >
          </Swiper>-->
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>

</template>