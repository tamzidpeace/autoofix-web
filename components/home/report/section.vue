<script setup>
import Image1 from "../../../assets/img/reports/Group 1000010388.svg"
import Image2 from "../../../assets/img/reports/Group 1000010389 (1).svg"
import Image3 from "../../../assets/img/reports/Group 1000010389 (2).svg"

const Info = [
  {id:1, img:Image1, title:'Inventory Reports'},
  {id:2, img:Image2, title:'Sales Reports'},
  {id:3, img:Image3, title:'Customer Reports'},
]
</script>

<template>
    <section class="bg-white 3xl:px-[16.25rem] 3xl:py-[7.5rem] lg:px-[3rem] xl:px-[10rem] lg:py-[4rem] px-[1rem] py-[2.75rem] md:px-[3rem]">
        <div class="grid lg:grid-cols-2">
            <div class="hidden lg:flex items-center justify-center px-8">
                <img src="~/assets/img/report.png" alt="">
            </div>
            <div class="flex lg:items-center justify-center lg:justify-start">
                <div class="px-8">
                    <div class="mb-6 lg:mb-8">
                        <p class="text-2xl lg:text-[36px] text-center lg:text-start mb-1 font-bold lg:mb-4">Reports</p>
                        <p class="lg:text-gray-7 lg:text-base text-center lg:text-start text-sm text-gray-6">
                            Create unlimited invoices with professional and personalized templates. Automate reminders and
                            recurring invoices and get paid on time swimmingly.
                        </p>
                    </div>
                  <div class="lg:hidden flex justify-center px-8 mb-6">
                    <img src="~/assets/img/report.png" alt="">
                  </div>
                    <div class="grid grid-cols-1 mb-6">
                        <div class="pb-4" v-for="list in Info" :key="list.id">
                            <div class="flex items-center">
                                <img :src="list.img" alt="" class="hidden lg:block">
                                <img class="h-[24px] w-[24px] lg:hidden" :src="list.img" alt="">
                                <p class="text-sm lg:text-[24px] font-medium ps-4">{{ list.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> 