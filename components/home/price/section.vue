<template>
    <!-- body price section start -->
    <section class="hidden lg:flex justify-center bg-gray-4 3xl:px-[16.25rem] 3xl:py-[7.5rem] lg:px-[3rem] xl:px-[10rem] lg:py-[4rem] items-center">
      <section>
        <!-- description section start -->
        <section class="text-center">
          <p class="mb-2">Our Best Pricing Plan</p>
          <p class="text-3xl font-bold mb-8">Choose plan that’s right for you</p>
        </section>
        <!-- description section end -->
        <!-- choose plan button section start -->
        <div class="flex w-full justify-center">
          <div v-if="selectedPrice === 'month'">
            <section
              class="flex justify-center bg-white mb-8 rounded-[100px]"
            >
              <button
                class="bg-purple-1 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-[100px] focus:outline-none focus:ring focus:ring-blue-300"
                @click="perMonthPrice"
              >
                Monthly
              </button>
              <button
                class="hover:bg-blue-600 hover:text-white text-dark-500 font-semibold py-3 px-8 rounded-[100px] focus:outline-none focus:ring focus:ring-blue-300"
                @click="perYearPrice"
              >
                Yearly
              </button>
            </section>
          </div>
          <div v-if="selectedPrice === 'year'">
            <section
              class="flex justify-center bg-white rounded-[100px] mb-8"
            >
              <button
                class="hover:bg-blue-600 hover:text-white text-dark-500 font-semibold py-3 px-8 rounded-[100px] focus:outline-none focus:ring focus:ring-blue-300"
                @click="perMonthPrice"
              >
                Monthly
              </button>
              <button
                class="bg-purple-1 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-[100px] focus:outline-none focus:ring focus:ring-blue-300"
                @click="perYearPrice"
              >
                Yearly
              </button>
            </section>
          </div>
        </div>
        <!-- choose plan button section end -->
        <!-- price section start -->
        <!-- grid grid-flow-col auto-cols-max -->
        <section
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <!-- Price section 1 -->
          <div v-for="price in priceData">
            <section
              class="rounded-2xl px-6 py-8"
              :class="[price.bgColor, price.textColor]"
            >
              <!-- :class="[price.color, price.textColor]" -->
              <div class="">
                <section class="flex justify-center mb-4">
                  <img :src="price.image" alt="pricelogo" />
                </section>
                <section class="flex justify-center text-[20px] font-semibold">
                  <p>{{ price.title }}</p>
                </section>
                <section class="mb-8">
                  <section class="flex justify-center items-center">
                    <p class="m-0 text-md lg:text-4xl font-semibold leading-none">
                      ৳{{ price?.price ?? 0 }}
                    </p>
                    <p class="text-[20px] ms-2 font-semibold">/ Per Month</p>
                  </section>
                  <section class="pt-6">
                    <p class="text-[16px] font-medium mb-7">
                      {{ price?.description ?? " " }}
                    </p>
                    <section class="" v-for="option in price.options">
                      <div class="flex justify-start item-center mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="url(#paint0_linear_510_818)"/>
                          <path d="M10.8193 15.6354C10.7845 15.6354 10.7503 15.6263 10.7201 15.6091C10.6898 15.5918 10.6646 15.5669 10.647 15.537C9.98236 14.4047 8.21082 11.9939 8.19236 11.9693C8.16393 11.9305 8.15038 11.8829 8.1542 11.835C8.15801 11.7871 8.17893 11.7422 8.21313 11.7085L8.75775 11.17C8.79106 11.1371 8.83486 11.1169 8.88153 11.113C8.9282 11.109 8.97477 11.1216 9.01313 11.1485L10.7777 12.3793C11.6699 11.2232 12.6749 10.1587 13.7777 9.20157C14.2017 8.82754 14.6535 8.4863 15.1293 8.1808C15.1604 8.16214 15.1961 8.1523 15.2324 8.15234H16.1147C16.1552 8.15236 16.1947 8.16468 16.2281 8.18768C16.2615 8.21068 16.2871 8.24327 16.3015 8.28113C16.3159 8.31899 16.3185 8.36034 16.3089 8.39971C16.2993 8.43908 16.278 8.4746 16.2477 8.50157C13.7447 10.7323 11.0224 15.4847 10.9954 15.5323C10.9781 15.5628 10.953 15.5881 10.9228 15.6058C10.8925 15.6234 10.8582 15.6329 10.8231 15.6331L10.8193 15.6354Z" fill="white"/>
                          <defs>
                            <linearGradient id="paint0_linear_510_818" x1="4.92" y1="18.86" x2="18.84" y2="4.64" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#9D79FF"/>
                              <stop offset="1" stop-color="#7747FD"/>
                            </linearGradient>
                          </defs>
                        </svg>
                        <p class="ps-2">{{ option ?? "" }}</p>
                      </div>
                    </section>
                  </section>
                </section>
                <section class="flex justify-center">
                  <button
                    class="border xl:px-[6.25rem] lg:px-[4rem] py-4 rounded-[8px] text-purple-1"
                    :class="price.textColor, price.border"
                  >
                    Contact Us
                  </button>
                </section>
              </div>
            </section>
          </div>
        </section>
        <!-- price section end-->
      </section>
    </section>
    <!-- body price section end -->
  <div class="lg:hidden bg-[#FFF] pt-5">
    <!-- body price section start -->
    <section class="flex justify-center items-center">
      <section class="lg:w-4/6">
        <!-- description section start -->
        <section class="text-center">
          <p class="p-2 font-[500]">Our Best Pricing Plan</p>
          <p class="text-3xl font-600 p-2">Choose plan that’s right for you</p>
        </section>
        <!-- description section end -->
        <!-- choose plan button section start -->
        <div class="flex w-full justify-center">
          <div v-if="selectedPrice === 'month'">
            <section
              class="border-2 flex justify-center bg-white rounded-full mb-10 mt-5"
            >
              <button
                class="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                @click="perMonthPrice"
              >
                Monthly
              </button>
              <button
                class="w-1/2 hover:bg-blue-600 hover:text-white text-dark-500 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                @click="perYearPrice"
              >
                Yearly
              </button>
            </section>
          </div>
          <div v-if="selectedPrice === 'year'">
            <section
              class="border-2 flex justify-center bg-white rounded-full mb-10 mt-5"
            >
              <button
                class="w-1/2 hover:bg-blue-600 hover:text-white text-dark-500 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                @click="perMonthPrice"
              >
                Monthly
              </button>
              <button
                class="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                @click="perYearPrice"
              >
                Yearly
              </button>
            </section>
          </div>
        </div>
        <!-- choose plan button section end -->
        <!-- price section start -->
        <!-- grid grid-flow-col auto-cols-max -->
      </section>
    </section>
    <!-- :loop="true" -->
    <div class="border-2 border-red-800">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :effect="'creative'"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="price in priceData" :key="price.id">
          <div>
            <!-- Price section 1 -->
            <section
              class="rounded-3xl border-2 m-4"
              :class="[price.color, price.textColor]"
            >
              <div class="pt-8 h-full">
                <section class="flex justify-center">
                  <img :src="price.image ?? ''" alt="" />
                </section>
                <section class="flex justify-center">
                  <p>{{ price?.title }}</p>
                </section>
                <section class="pt-4 lg:h-[450px]">
                  <section class="flex justify-center">
                    <p class="m-0 text-5xl font-[600] leading-none">
                      ${{ price?.price }}
                    </p>
                    <p class="m-0 mt-2 ms-2 font-[500]">/ Per Month</p>
                  </section>
                  <section class="pt-6 ps-4 pe-4">
                    <p class="text-[16px] mb-5">
                      {{ price.description }}
                    </p>
                    <section class="lg:h-[225px]">
                      <div class="flex mb-2">
                        <img
                          class="pe-3"
                          src="~/assets/img/righticon.png"
                          alt=""
                        />
                        <p>Unlimited Support</p>
                      </div>
                      <div class="flex mb-2">
                        <img
                          class="pe-3"
                          src="~/assets/img/righticon.png"
                          alt=""
                        />
                        <p>Sync data across devices</p>
                      </div>
                      <div class="flex mb-2">
                        <img
                          class="pe-3"
                          src="~/assets/img/righticon.png"
                          alt=""
                        />
                        <p>Create Multiple Firms</p>
                      </div>
                      <div class="flex mb-2">
                        <img
                          class="pe-3"
                          src="~/assets/img/righticon.png"
                          alt=""
                        />
                        <p>Check Profit on Invoices</p>
                      </div>
                      <div class="flex mb-2">
                        <img
                          class="pe-3"
                          src="~/assets/img/righticon.png"
                          alt=""
                        />
                        <p>Keep different rates for each party</p>
                      </div>
                      <div class="flex mb-2">
                        <img
                          class="pe-3"
                          src="~/assets/img/righticon.png"
                          alt=""
                        />
                        <p>Set multiple pricing for items</p>
                      </div>
                      <div class="flex">
                        <img
                          class="pe-3"
                          src="~/assets/img/righticon.png"
                          alt=""
                        />
                        <p>Balance Sheet</p>
                      </div>
                    </section>
                    <section class="py-4" v-if="price == 2">
                      <p class="border-b-2 border-white w-3/6">
                        +10 More Features
                      </p>
                    </section>
                    <section class="py-4" v-else>
                      <p class="border-b-2 border-dark-500 w-3/6">
                        +10 More Features
                      </p>
                    </section>
                  </section>
                </section>
                <section
                  class="flex justify-center lg:mt-0 lg:h-[56px] pt-6 pb-6"
                >
                  <button
                    class="w-[311px] px-10 py-4 lg:py-0 lg:w-[296px] border-2 rounded-lg text-[#646BEE] font-600"
                    :class="[price.textColor]"
                  >
                    Contact Us
                  </button>
                </section>
              </div>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <!-- body price section end -->
  </div>
</template>

<script setup>
import { prices } from "./pricedata";
const selectedPrice = ref("month");
let priceData = ref([...prices]);
let pricesData = [];

const perMonthPrice = () => {
  selectedPrice.value = "month";
  priceData.value = [...prices];
};

const perYearPrice = () => {
  selectedPrice.value = "year";
  let pricePerYear = [];
  priceData.value.map((price) => {
    let priceObject = { ...price, price: price.price * 10 };
    pricePerYear.push(priceObject);
  });
  priceData.value = pricePerYear;
};
</script>
