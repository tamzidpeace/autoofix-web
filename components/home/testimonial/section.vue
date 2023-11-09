<template class="">

  <div class="testimonials-style">
    <div class="flex justify-center">
      <div class="w-[343px]">
        <p class="text-[24px] font-[700] text-center">Testimonials</p>
        <p class="text-center text-3xl">What our clients think about us?</p>
      </div>
    </div>
    <div class="flex justify-center h-[700px] items-center">
      <div class="w-5/6">
        <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
          <Slide v-for="slide in 5" :key="slide">
            <div class="carousel__item">
              <div class="relative p-[62px]">
                <div class="relative">
                  <img
                    class="absolute quotation-icon"
                    src="~/assets/img/quoatationicon.png"
                    alt=""
                  />
                  <div class="flex justify-center">
                    <img src="~/assets/img/t1.png" alt="" />
                  </div>
                  <div class="flex justify-center p-8">
                    <div class="text-center">
                      <h1 class="text-[20px] text-[#1C0081] font-[700]">
                        Darlene Robertson + {{ slide ?? "" }}
                      </h1>
                      <p class="font-[400] pt-2">
                        Branch Manager of Auto Garage
                      </p>
                      <p class="pt-8 font-[16px]"></p>
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
  </div>
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
  padding: 20px;
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
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
  /* border: 1px solid green; */
  height: 520px;
  padding-top: 10px;
  margin-top: 30px;
  background-color: white;
  border-radius: 15px;
  left: 10%;
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
  /* border: 1px solid rgb(0, 218, 18); */
  height: 520px;
  padding-top: 10px;
  margin-top: 30px;
  background-color: white;
  border-radius: 15px;
  left: -10%;
}

.carousel__slide--active {
  opacity: 1;
  width: 35%;
  transform: rotateY(0) scale(1.1);
  border-radius: 15px;
  height: 600px;
  /* background-color: #faf9ff; */
  background-color: white;
  z-index: 10;
}
.testimonials-style {
  background-color: #faf9ff !important;
}
.quotation-icon {
  top: -25%;
  left: -15%;
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
