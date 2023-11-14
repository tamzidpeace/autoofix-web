<script setup>
import ChassisIcon from "../../../assets/img/product/Group 1000010390.svg"
import EngineIcon from "../../../assets/img/product/Group 1000010390 (2).svg"
import TransmissionIcon from "../../../assets/img/product/Group 1000010390 (3).svg"
import BodyIcon from "../../../assets/img/product/Group 1000010390 (4).svg"

const ProductItem = [
  {id: 1 , title:'Chassis', description:'Foundation structure of any car that supports it from underneath.', image : ChassisIcon },
  {id: 2 , title:'Engine', description:'Produces combustion and moves the pistons', image : EngineIcon },
  {id: 3 , title:'Transmission System', description:'Under the front hood as part of the drive-train.', image : TransmissionIcon },
  {id: 4 , title:'The Body', description:'Roof, hood, fenders, trunk lid, doors, and windows.', image : BodyIcon },
]

</script>
<template>
  <div id="product">
    <!-- for web -->
      <section class="hidden lg:block bg-gray-3 3xl:px-[16.25rem] 3xl:py-[6rem] lg:px-[3rem] xl:px-[10rem] lg:py-[4rem]">
          <div class="grid grid-cols-2">
              <div class="flex items-center justify-end">
                  <div class="py-[86px] px-4">
                      <div class="mb-[3rem]">
                          <p class="text-4xl leading-[48px] font-bold">Products</p>
                          <p class="text-base mt-4 text-gray-6">As suggested by the name, wholesale auto spare parts are units that automobile owners can use as
                              replacements to exchange for a dysfunctional piece of their</p>
                      </div>
                          <div class="grid grid-cols-2 space-x-2">
                              <div :class="(item.id === 1 || item.id ===3) && 'mb-8'" v-for="(item ,index) in ProductItem" :key="index">
                                  <div class="flex items-center">
                                      <img :src="item.image" alt="Product Icon">
                                      <p class="text-2xl font-bold ps-4">{{ item.title }}</p>
                                  </div>
                                  <p class="ps-16 text-base text-gray-6">{{ item.description }}</p>
                              </div>
                          </div>
                  </div>
              </div>
              <div class="flex items-center justify-center p-[43px] rounded-[1rem] bg-blue-1">
                  <img src="~/assets/img/product/Group-3482-1%201.svg" alt="">
              </div>
          </div>
      </section>
        <!-- for phone -->
        <section class="lg:hidden bg-gray-3 py-12 px-4 md:px-[3rem]">
            <div class="">
                <div class="flex flex-col justify-center">
                    <p class="text-2xl font-bold text-center mb-1">Products</p>
                    <p class="text-center font-normal text-sm text-gray-6">As suggested by the name, wholesale auto spare parts are units that automobile
                      owners can use as
                      replacements to exchange for a dysfunctional piece of their
                    </p>
                </div>
                <div class="flex justify-center my-8">
                  <img class="h-[268px] w-[287px]" src="~/assets/img/product/Group-3482-1%201.svg" alt="">
                </div>
                    <div>
                        <div class="mb-3"  v-for="(item ,index) in ProductItem" :key="index">
                            <div class="flex items-center">
                                <img :src="item.image" alt="Product Image" class="h-[24px] w-[24px]">
                                <p class="text-base lg:text-md font-medium ps-4">{{ item.title }}</p>
                            </div>
                            <p class="ps-10 text-xs lg:text-base text-gray-6">{{ item.description }}</p>
                        </div>
                    </div>
            </div>
      </section>
  </div>
</template>