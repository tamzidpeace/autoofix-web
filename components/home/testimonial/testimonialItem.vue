<script setup>
import { ref } from 'vue';

const props = defineProps({
  slide: {
    type: Object,
    required: true,
  },
})
const testimonial = ref(props.slide);
</script>
<template>
  <div class="px-6 py-8 lg:px-0 lg:py-0">
    <div class="flex justify-center mb-4">
      <img src="~/assets/img/t1.png" alt="Testimonial" />
    </div>
    <div class="flex justify-center">
      <div class="text-center">
        <h1 class="text-base lg:text-2xl lg:custom text-[#1C0081] font-bold mb-1">{{ testimonial.title }}</h1>
        <p class="text-sm text-gray-7">{{ testimonial.profession }}</p>
        <p class="pt-6 text-sm text-gray-7">{{ testimonial.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel__slide--next > .custom {
  font-size: 14px !important;
}</style>
