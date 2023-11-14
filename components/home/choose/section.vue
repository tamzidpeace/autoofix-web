<script setup>
import Tick from "../../../assets/img/price/teenyicons_tick-small-solid.svg"
import Arrow from "../../../assets/img/footer/Icon/ic_outline-arrow-outward.svg"

const Info = [
  {id: 1, title:'Carefully Designed'},
  {id: 2, title:'Seamless Sync'},
  {id: 3, title:'Choose A App'},
  {id: 4, title:'User Interactive'}
]
</script>

<template>
    <!-- for web -->
    <section class="hidden lg:block bg-[#FDFCFD] 3xl:px-[16.25rem] 3xl:py-[6.5rem] xl:px-[10rem] lg:px-[3rem] lg:py-[4rem]">
        <div class="grid grid-cols-2 h-full">
            <div class="flex items-center justify-end">
                <div class="">
                    <div class="mb-6">
                        <p class="text-[36px] font-bold mb-6">Why Choose Autoofix?</p>
                        <p class="text-gray-6">Fully automated Garage Management System(GMS) is a cloud-based mobile and responsive web
                            application for garage management with CMS. You can manage your whole garage system through this
                            system and manage your website also.</p>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-2 gap-2 mb-8">
                            <div class="mb-4" v-for="list in Info" :key="list.id">
                                <div class="flex items-center">
                                    <img class="w-[34px] h-[34px]" :src="Tick" alt="">
                                    <p class=" font-medium ps-4">{{ list.title }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <button class="px-6 rounded-[4px] hover:opacity-70 items-center text-center py-4 bg-purple-1 text-white flex">
                              <span>Learn More</span>
                              <img class="w-[24px] h-[24px]" :src="Arrow" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <img class="w-10/12" src="~/assets/img/autoofix.png" alt="">
            </div>
        </div>
    </section>
    <!-- for phone -->
    <section class="lg:hidden bg-[#FDFCFD] px-[1rem] py-[2.75rem] md:px-[3rem]">
        <div class="">
            <div class="flex justify-center mb-4">
                <div class="">
                    <p class="text-[24px] font-bold text-center mb-1">Why Choose Autoofix?</p>
                    <p class="text-center text-sm text-gray-6">Fully automated Garage Management System(GMS) is a cloud-based mobile and
                        responsive web
                        application for garage management with CMS. You can manage your whole garage system through this
                        system and manage your website also.</p>

                </div>
            </div>
            <div class="flex justify-center mb-2">
                <img src="~/assets/img/autofixmobile.png" alt="">
            </div>
            <div class="">
                <div class="grid grid-cols-1 mb-4">
                    <div class="mb-3"  v-for="list in Info" :key="list.id">
                        <div class="flex items-center">
                            <img class="w-[24px] h-[24px]" :src="Tick" alt="">
                            <p class="font-medium ps-4">{{ list.title }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <button class="px-6 rounded-[4px] hover:opacity-70 items-center text-center py-4 bg-purple-1 text-white flex">
                      <span>Learn More</span>
                      <img class="w-[24px] h-[24px]" :src="Arrow" alt="">
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>