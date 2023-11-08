<template>
  <div>
    <!-- <ContentRendererMarkdown :value="data" :data="mdcVars" />
    <button type="button" v-on:click="mdcVars.name = 'Hugo'">
      Change name btn
    </button> -->
  </div>

  <div class="hidden lg:block">
    <!-- body price section start -->
    <section
      class="h-[2223px] flex justify-center items-center bg-[#F2F2FD] lg:h-[64rem] lg:w-full"
    >
      <section class="lg:w-4/6">
        <!-- description section start -->
        <section class="text-center">
          <p class="p-2">Our Best Pricing Plan</p>
          <p class="text-3xl font-600 p-2">Choose plan that’s right for you</p>
        </section>
        <!-- description section end -->
        <!-- choose plan button section start -->
        <div class="flex w-full justify-center">
          <section
            class="lg:h-[58px] border-2 flex justify-center bg-white lg:w-3/12 rounded-full mb-10 mt-5"
          >
            <button
              class="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
            >
              Monthly
            </button>
            <button
              class="w-1/2 hover:bg-blue-600 hover:text-white text-dark-500 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
            >
              Yearly
            </button>
          </section>
        </div>
        <!-- choose plan button section end -->
        <!-- price section start -->
        <!-- grid grid-flow-col auto-cols-max -->
        <section
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4"
        >
          <!-- Price section 1 -->
          <section
            class="h-[629px] lg:h[714px] lg:w-[447pxx] bg-[#FFF] lg:bg-white rounded-3xl border-2 m-4 lg:m-0"
          >
            <div class="pt-8">
              <section class="flex justify-center">
                <img src="~/assets/img/carlight.png" alt="" />
              </section>
              <section class="flex justify-center">
                <p>Lite</p>
              </section>
              <section class="pt-4 lg:h-[450px]">
                <section class="flex justify-center">
                  <p class="m-0 text-5xl font-[600] leading-none">$2500</p>
                  <p class="m-0 mt-2 ms-2 font-[500]">/ Per Month</p>
                </section>
                <section class="pt-6 ps-4 pe-4">
                  <p class="text-[16px] mb-5">
                    Perfect for Standard Packages that are just getting started.
                    It is a long established the fact.
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
                  <section class="pt-4 lg:pt-1">
                    <p class="border-b-2 border-dark-500 w-3/6 border-black">
                      +10 More Features
                    </p>
                  </section>
                </section>
              </section>
              <section
                class="flex justify-center lg:mt-0 lg:h-[56px] pt-6 lg:pt-0"
              >
                <button
                  class="w-[311px] px-10 py-4 lg:py-0 lg:w-[296px] border-2 rounded-lg text-[#646BEE] font-600"
                >
                  Choose Plan
                </button>
              </section>
            </div>
          </section>
          <!-- Price section 2 -->
          <section
            class="h-[629px] lg:h[714px] lg:w-[447pxx] bg-[#646BEE] text-white rounded-3xl border-2 m-4 lg:m-0"
          >
            <div class="pt-4">
              <section class="flex justify-center">
                <img src="~/assets/img/yellowsmallcar.png" alt="" />
              </section>
              <section class="flex justify-center">
                <p>Plus</p>
              </section>
              <section class="pt-4 lg:h-[450px]">
                <section class="flex justify-center">
                  <p class="m-0 text-5xl font-[600] leading-none">$4500</p>
                  <p class="m-0 mt-2 ms-2 font-[500]">/ Per Month</p>
                </section>
                <section class="pt-6 ps-4 pe-4">
                  <p class="text-[16px] mb-5">
                    Perfect for Standard Packages that are just getting started.
                    It is a long established the fact.
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
                  <section class="pt-4 lg:pt-1">
                    <p class="border-b-2 w-3/6 border-white">
                      +10 More Features
                    </p>
                  </section>
                </section>
              </section>
              <section
                class="flex justify-center lg:mt-0 lg:h-[56px] pt-6 lg:pt-0"
              >
                <button
                  class="w-[311px] px-10 py-4 bg-white lg:py-0 lg:w-[296px] rounded-lg text-[#646BEE] font-600"
                >
                  Choose Plan
                </button>
              </section>
            </div>
          </section>
          <!-- Price section 3 -->
          <section
            class="h-[629px] lg:h[714px] lg:w-[447pxx] bg-[#FFF] lg:bg-white rounded-3xl border-2 m-4 lg:m-0"
          >
            <div class="pt-8">
              <section class="flex justify-center">
                <img src="~/assets/img/bi_truck.png" alt="" />
              </section>
              <section class="flex justify-center">
                <p>Enterprise</p>
              </section>
              <section class="pt-4 lg:h-[450px]">
                <section class="flex justify-center">
                  <p class="m-0 text-5xl font-[600] leading-none">$7500</p>
                  <p class="m-0 mt-2 ms-2 font-[500]">/ Per Month</p>
                </section>
                <section class="pt-6 ps-4 pe-4">
                  <p class="text-[16px] mb-5">
                    Perfect for Standard Packages that are just getting started.
                    It is a long established the fact.
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
                  <section class="pt-4 lg:pt-1">
                    <p class="border-b-2 border-dark-500 w-3/6 border-black">
                      +10 More Features
                    </p>
                  </section>
                </section>
              </section>
              <section
                class="flex justify-center lg:mt-0 lg:h-[56px] pt-6 lg:pt-0"
              >
                <button
                  class="w-[311px] px-10 py-4 lg:py-0 lg:w-[296px] border-2 rounded-lg text-[#646BEE] font-600"
                >
                  Choose Plan
                </button>
              </section>
            </div>
          </section>
        </section>
        <!-- price section end-->
      </section>
    </section>
    <!-- body price section end -->
  </div>
  <div class="lg:hidden h-[980px] bg-[#FFF] pt-5">
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
          <section
            class="lg:h-[58px] border-2 flex justify-center bg-white lg:w-3/12 rounded-full mb-10 mt-5"
          >
            <button
              class="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
            >
              Monthly
            </button>
            <button
              class="w-1/2 hover:bg-blue-600 hover:text-white text-dark-500 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
            >
              Yearly
            </button>
          </section>
        </div>
        <!-- choose plan button section end -->
        <!-- price section start -->
        <!-- grid grid-flow-col auto-cols-max -->
      </section>
    </section>
    <!-- :loop="true" -->
    <div class="h-[689px]">
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
        <SwiperSlide v-for="price in prices" :key="price.id">
          <div>
            <!-- Price section 1 -->
            <section
              class="rounded-3xl border-2 m-4"
              :class="[price.color, price.textColor]"
            >
              <div class="pt-8 h-full">
                <section class="flex justify-center">
                  <img src="~/assets/img/carlight.png" alt="" />
                </section>
                <section class="flex justify-center">
                  <p>{{ price?.title }}</p>
                </section>
                <section class="pt-4 lg:h-[450px]">
                  <section class="flex justify-center">
                    <p class="m-0 text-5xl font-[600] leading-none">
                      ${{ price?.priceMonth }}
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
                    <section class="pt-4 lg:pt-1">
                      <p class="border-b-2 border-dark-500 w-3/6 border-black">
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
                    Choose Plan
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
// const contentQuery = queryContent("prices", "1.lite");

// const { data } = await useAsyncData(() => queryContent("prices"));
// console.log("contentQuery", contentQuery);
// console.log("data", data);
// const mdcVars = ref({ name: "Maxime" });

// defineProps({
//   title: {
//     type: String,
//     default: "Default title",
//   },
//   description: {
//     type: String,
//     default: "Default description",
//   },
//   icon: {
//     type: String,
//     default: "IconMarkdown",
//   },
// });

const prices = [
  {
    id: 1,
    title: "Lite",
    priceMonth: 2500,
    priceYear: 4500,
    description:
      "Perfect for Standard Packages that are just getting started. It is a long established the fact.",
    options: [
      "Unlimited Support",
      "Sync data across devices",
      "Create Multiple Firms",
      "Check Profit on Invoices",
      "Keep different rates for each party",
      "Set multiple pricing for items",
      "Balance Sheet",
    ],
    image: "",
    color: "bg-[#FFF]",
  },
  {
    id: 2,
    title: "Plus",
    priceMonth: 4500,
    priceYear: 4500,
    description:
      "Perfect for Standard Packages that are just getting started. It is a long established the fact.",
    options: [
      "Unlimited Support",
      "Sync data across devices",
      "Create Multiple Firms",
      "Check Profit on Invoices",
      "Keep different rates for each party",
      "Set multiple pricing for items",
      "Balance Sheet",
    ],
    image: "",
    color: "bg-[#646BEE]",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Enterprise",
    priceMonth: 7500,
    priceYear: 4500,
    description:
      "Perfect for Standard Packages that are just getting started. It is a long established the fact.",
    options: [
      "Unlimited Support",
      "Sync data across devices",
      "Create Multiple Firms",
      "Check Profit on Invoices",
      "Keep different rates for each party",
      "Set multiple pricing for items",
      "Balance Sheet",
    ],
    image: "",
    color: "bg-[#FFF]",
  },
];
</script>
