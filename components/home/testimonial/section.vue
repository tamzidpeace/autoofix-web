<script setup>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import TestimonialItem from "./testimonialItem.vue";

defineComponent({
  name: "Autoplay",
  components: {
    TestimonialItem,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});

</script>
<template>
  <div id="about" class="testimonials-style 3xl:px-[16.25rem] 3xl:py-[6.25rem] xl:px-[10rem] lg:py-[4rem] md:px-[2rem] py-10 px-4">
    <div class="flex justify-center">
      <div class="mb-8">
        <p class="text-base font-semibold text-center text-blue-8 mb-4">Testimonials</p>
        <p class="text-center font-bold text-2xl lg:text-3xl">What our clients think about us?</p>
      </div>
    </div>
    <ContentList path="/testimonial" v-slot="{ list }">
    <div class="flex justify-center items-center">
      <div class="w-full relative">
        <img
            class="absolute hidden lg:block quotation-icon z-20"
            src="~/assets/img/quoatationicon.png"
            alt=""
        />
        <img
            class="absolute lg:hidden quotation-icon-mobile z-20"
            src="~/assets/img/quoatationicon.png"
            alt=""
        />
        <!-- for web -->
        <div class="hidden lg:block">
          <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
            <Slide v-for="(slide,  index) in list" :key="index">
              <div class="carousel__item w-full">
                  <TestimonialItem
                      :slide="slide"
                  />
              </div>
            </Slide>
            <template #addons>
              <Pagination />
              <Navigation class="customm"/>
            </template>
          </Carousel>
        </div>
        <!-- for mobile-->
        <div class="bg-white rounded-[8px] lg:hidden"  style="box-shadow: 0 2px 12px 1px #54535B40;">
            <Swiper
                :modules="[SwiperAutoplay, SwiperPagination, SwiperEffectCreative]"
                :slides-per-view="1"
                :effect="creative"
                :pagination="{clickable: true}"
                :creative-effect="{ prev: { shadow: false, translate: ['20%', 0, -1],}, next: {translate: ['100%', 0, 0], },}"
            >
              <SwiperSlide v-for="(slide,  index) in list" :key="index">
                <TestimonialItem
                    :slide="slide"
                />
              </SwiperSlide>
            </Swiper>
          </div>
      </div>
    </div>
    </ContentList>
  </div>
</template>

<style scoped>

.carousel__slide--sliding {
  transition: 0.5s;
  /* background-color: gold; */
}

.carousel__slide {
  opacity: 0.9;
  /*transform: rotateY(-20deg) scale(0.9);*/
  /* background-color: rgb(38, 24, 231); */
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
  /* background-color: rgb(18, 209, 27); */
}

.carousel__slide--prev {
  transform: rotateY(-10deg) scale(0.95);
  padding: 25px 40px 25px 40px;
  height: 30%;
  margin-top: 51px;
  background-color: white;
  border-radius: 15px;
  z-index: -1;
  opacity: 70%;
  right: 1%;
  font-size: 12px;
  width: 50% !important;
  filter: grayscale(100%);
}

.carousel__slide--next {
  transform: rotateY(10deg) scale(0.95);
  /* border: 1px solid rgb(0, 218, 18); */
  height: 30%;
  margin-top: 51px;
  padding: 25px 40px 25px 40px;
  background-color: white;
  border-radius: 15px;
  left: -51%;
  width: 50% !important;
  z-index: -1;
  opacity: 70%;
  font-size: 12px !important;
  filter: grayscale(100%);
}

.carousel__slide--active {
  opacity: 1;
  width: 54% !important;
  padding: 65px 80px 65px 80px;
  transform: rotateY(0) scale(0.9);
  border-radius: 15px;
  /* background-color: #faf9ff; */
  background-color: white;
  left: -27%;
  z-index: 10;
  box-shadow: 0 4px 24px 2px #54535B40;
}

 .carousel__next, .carousel__prev  {
  border-radius: 28px !important;
  background: white !important;
  border: 1px solid #EAECF0 !important;
  height: 48px !important;
  width: 48px !important;
}
.carousel__next.customm {
  right: 26% !important;
}
.testimonials-style {
  background: #e8e6fc !important;
}
.quotation-icon {
  top: 10%;
  left: 28%;
}
.quotation-icon-mobile {
  top: 5%;
  left: 5%;
  height: 32px;
  width: 32px;
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
</style>
