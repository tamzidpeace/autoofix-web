<template class="">
  <div class="testimonials-style 3xl:px-[16.25rem] 3xl:py-[6.25rem] xl:px-[10rem] lg:py-[4rem]">
    <div class="flex justify-center">
      <div class="mb-8">
        <p class="text-base font-semibold text-center text-blue-8 mb-2">Testimonials</p>
        <p class="text-center font-bold text-3xl">What our clients think about us?</p>
      </div>
    </div>
    <ContentList path="/testimonial" v-slot="{ list }">
    <div class="flex justify-center items-center">
      <div class="w-full relative">
        <img
            class="absolute quotation-icon z-20"
            src="~/assets/img/quoatationicon.png"
            alt=""
        />
        <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
          <Slide v-for="(slide,  index) in list" :key="index">
            <div class="carousel__item w-full">
              <div class="">
                <div class="">
                  <div class="flex justify-center mb-4">
                    <img src="~/assets/img/t1.png" alt="" />
                  </div>
                  <div class="flex justify-center">
                    <div class="text-center">
                      <h1 class="text-[20px] custom text-[#1C0081] font-[700] mb-1">
                        {{ slide.title }}
                      </h1>
                      <p class="text-sm text-gray-7">
                        {{ slide.profession }}
                      </p>
                      <p class="pt-6 text-base text-gray-7">
                        {{ slide.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
    </ContentList>
  </div>


<!--  for mobile-->
<!--  <div class="lg:hidden testimonials-style py-10 px-4" id="testimonial">
    <div class="flex justify-center">
      <div class="mb-8">
        <p class="text-base font-semibold text-center text-blue-8 mb-2">Testimonials</p>
        <p class="text-center font-bold text-3xl">What our clients think about us?</p>
      </div>
    </div>
    <ContentList path="/testimonial" v-slot="{ list }">
      <div class="flex justify-center items-center">
        <div class="w-full relative">
          <img
              class="absolute quotation-icon z-20"
              src="~/assets/img/quoatationicon.png"
              alt=""
          />
    <div class="">
      <Swiper
          :modules="[SwiperAutoplay, SwiperPagination, SwiperEffectCreative]"
          :slides-per-view="1"
          :effect="'creative'"
          :pagination="{
          clickable: true,
        }"
          :creative-effect="{
          prev: {
            shadow: false,
            translate: ['20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="(slide,  index) in list" :key="index">
          &lt;!&ndash; Price section 1 &ndash;&gt;
          <div class="w-full">
            <div class="">
              <div class="">
                <div class="flex justify-center mb-4">
                  <img src="~/assets/img/t1.png" alt="" />
                </div>
                <div class="flex justify-center">
                  <div class="text-center">
                    <h1 class="text-[20px] custom text-[#1C0081] font-[700] mb-1">
                      {{ slide.title }}
                    </h1>
                    <p class="text-sm text-gray-7">
                      {{ slide.profession }}
                    </p>
                    <p class="pt-6 text-base text-gray-7">
                      {{ slide.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
        </div>
      </div>
    </ContentList>

  </div>-->
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import { testimonials } from "./data.js";
import "vue3-carousel/dist/carousel.css";

// const testimonialsData = [...testimonials];
// console.log('testimonialsData', testimonialsData)


export default defineComponent({
name: "Autoplay",
components: {
  Carousel,
  Slide,
  Pagination,
  Navigation,
},
});

// onMounted() {

// }
</script>

<style scoped>
.carousel__slide {
  /*padding: 20px;*/
}

.carousel__viewport {
  /* perspective: 1000px; */
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
  /* background-color: gold; */
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
  /* background-color: rgb(38, 24, 231); */
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
  /* background-color: rgb(18, 209, 27); */
}

.carousel__slide--prev {
  transform: rotateY(-10deg) scale(0.95);
  padding: 25px 40px 25px 40px;
  /*height: 520px;*/
  margin-top: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: #303030;
  filter: grayscale(100%);
}

.carousel__slide--next {
  transform: rotateY(10deg) scale(0.95);
  /* border: 1px solid rgb(0, 218, 18); */
  /*height: 520px;*/
  padding: 25px 40px 25px 40px;
  margin-top: 20px;
  background-color: white;
  border-radius: 15px;
  left: -10%;
  filter: grayscale(100%);
}

.carousel__slide--active {
  opacity: 1;
  width: 45% !important;
  padding: 65px 80px 65px 80px;
  transform: rotateY(0) scale(0.9);
  border-radius: 15px;
  /*height: 600px;*/
  /* background-color: #faf9ff; */
  background-color: white;
  left: -5%;
  z-index: 10;
  box-shadow: 0 4px 24px 2px #54535B40;
}
.carousel__prev  {
  left: 30% !important;
}
.testimonials-style {
  background-color: #faf9ff !important;
}
.quotation-icon {
  top: 10%;
  left: 33%;
}

.carousel__slide--prev
  > .carousel__item
  > .relative
  > .relative
  > .quotation-icon {
  display: none;
}

.carousel__slide--next
  > .carousel__item
  > .relative
  > .relative
  > .quotation-icon {
  display: none;
}
.carousel__slide--next > .custom {
  font-size: 14px !important;
}
</style>
