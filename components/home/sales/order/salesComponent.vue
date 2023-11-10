<script setup>
 defineProps({
  title: String,
  description: String,
  salesAnalysis: {
    type: Object,
    default: () => ({})
  },
  image: String,
  sectionClasses: {
    type: String,
    default: ''
  },
});
</script>

<template>
  <section :class="sectionClasses">
    <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
      <div class="flex justify-center lg:items-center lg:justify-end">
        <div class="lg:py-[6rem] lg:mr-9">
          <div class="mb-6 lg:mb-8">
            <p class="text-2xl lg:text-[36px] text-center lg:text-start font-bold mb-1 lg:mb-4">{{ title }}</p>
            <p class="text-gray-6 text-sm lg:text-base text-center lg:text-start">{{ description }}</p>
          </div>
          <div class="flex lg:hidden justify-center mb-6">
            <img src="~/assets/img/soimagemobile.png" alt="">
          </div>
          <div>
            <div class="grid grid-cols-1">
              <div class="flex items-center mb-2">
                <img :src="salesAnalysis.icon" alt="">
                <p class="text-base lg:text-2xl lg:font-bold font-medium ps-4">{{ salesAnalysis.title }}</p>
              </div>
              <p class="ps-10 lg:ps-16 text-gray-6">{{ salesAnalysis.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex items-center justify-center">
        <img :src="image" alt="">
      </div>
    </div>
  </section>
</template>
<style scoped>

</style>
