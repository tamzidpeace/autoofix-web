<script setup>
import {sections1, sections2} from "./data.js";
</script>
<template>
  <section>
      <div class="2xl:px-[16.25rem] 2xl:py-[7.75rem] bg-[#F0EEFE] lg:px-[6rem] lg:py-[4rem] px-[1rem] py-[44px]">
          <div class="flex flex-col items-center mb-8">
              <div class="mb-2">
                  <h1 class="text-4xl text-center font-bold">Frequently Asked Questions </h1>
              </div>
              <div class="text-center">
                  <h2>
                    Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web application for garage management with CMS
                  </h2>
              </div>
          </div>
          <div class="accordion-list lg:grid lg:grid-cols-2">
              <div class="col-span-1">
                  <HomeSharedBlockAccordion :items="sections1"/>
              </div>
              <div>
                  <HomeSharedBlockAccordion :items="sections2"/>
              </div>
          </div>
      </div>
  </section>
</template>

<style scoped>
.accordion-list {
  gap: 16px 30px;
}
</style>