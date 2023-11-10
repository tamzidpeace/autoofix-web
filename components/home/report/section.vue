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
    <!-- for web -->
    <section class="hidden lg:block bg-white 3xl:px-[16.25rem] 3xl:py-[7.5rem] lg:px-[3rem] xl:px-[10rem] lg:py-[4rem]">
        <div class="grid grid-cols-2">
            <div class="flex items-center justify-center px-8">
                <img src="~/assets/img/report.png" alt="">
            </div>
            <div class="flex items-center justify-start ">
                <div class="px-8">
                    <div class="mb-8">
                        <p class="text-[36px] font-bold mb-4">Reports</p>
                        <p class="text-gray-7">Create unlimited invoices with professional and personalized templates. Automate reminders and
                            recurring invoices and get paid on time swimmingly.</p>
                    </div>
                    <div class="grid grid-cols-1 mb-6">
                        <div class="pb-4" v-for="list in Info" :key="list.id">
                            <div class="flex items-center">
                                <img :src="list.img" alt="">
                                <p class="text-[24px] font-medium ps-4">{{ list.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- for phone -->
    <section class="lg:hidden bg-white px-[1rem] py-[2.75rem] md:px-[3rem]">
        <div class="">
            <div class="flex justify-center">
                <div class="mb-6">
                    <p class="text-[24px] font-bold text-center mb-1">Reports</p>
                    <p class="text-center text-sm text-gray-6">Create unlimited invoices with professional and personalized templates. Automate
                        reminders and
                        recurring invoices and get paid on time swimmingly</p>

                </div>
            </div>
            <div class="flex justify-center px-8 mb-6">
                <img src="~/assets/img/report.png" alt="">
            </div>
            <div>
                <div class="grid grid-cols-1">
                    <div class="pb-4" v-for="list in Info" :key="list.id">
                        <div class="flex items-center">
                          <img class="h-[24px] w-[24px]" :src="list.img" alt="">
                          <p class="text-sm font-medium ps-4">{{ list.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> 