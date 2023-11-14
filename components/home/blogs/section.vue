<script setup>
import { blogInfo } from "./data.js";
import Eye from "../../../assets/img/blogs/Group.svg"
import Clock from "../../../assets/img/blogs/Vector.svg"
</script>
<template>
  <div id="blogs"
    class="3xl:px-[16.25rem] 3xl:py-[8.15rem] xl:px-[10rem] lg:px-[3rem] lg:py-[2rem] md:px-[3rem] px-[1rem] py-[2.75rem] bg-gray-1"
  >
    <div class="flex justify-between mb-8">
      <h1 class="lg:text-4xl text-[18px] font-bold py-2">Our Blogs</h1>
    </div>

    <!--     for web -->
    <ContentList path="/blogs" v-slot="{ list }">
      <div class="grid lg:grid-cols-2 gap-[30px]">
        <div class="w-full flex flex-wrap hidden lg:block">
          <div class="mb-3 w-full">
            <img
              :src="blogInfo[0].image"
              alt=""
              class="object-cover w-full rounded-[8px]"
            />
          </div>
          <div class="px-4">
            <div class="flex justify-between pb-3 text-gray-8">
              <a href="" class="font-sm font-medium text-purple-4"
                >Auto Garaze</a
              >
              <div class="flex font-normal text-sm text-center justify-between">
                <div class="flex items-center mr-4">
                  <img :src="Eye" alt="">
                  <span class="mx-2 text-gray-5"
                    >{{ list[0].views }} Views</span
                  >
                </div>
                <div class="flex items-center">
                  <img :src="Clock" alt="">
                  <span class="mx-2 text-gray-5"
                    >{{ list[0].read }} min read</span
                  >
                </div>
              </div>
            </div>
            <h1 class="text-4xl font-bold mb-4 line-clamp-2">{{ list[0].title }}</h1>
            <p class="font-normal text-base mb-6 line-clamp-3">
              {{ list[0].description }}
            </p>
            <nuxt-link
              :to="`/blog?k=${list[0].slug}`"
              class="text-[14px] hover:!text-blue-700 text-purple-1 cursor-pointer font-bold"
            >
              Read More
            </nuxt-link>
          </div>
        </div>

        <div class="flex flex-col hidden lg:block">
          <div class="flex mb-[30px]">
            <img
              :src="blogInfo[1].image"
              alt=""
              class="object-cover rounded-[8px]"
            />
            <div class="w-full pl-[29px]">
              <div class="flex justify-between pb-3 text-gray-8">
                <div>
                  <a href="" class="font-sm font-medium text-purple-4"
                    >Auto Garaze</a
                  >
                </div>
                <div class="flex items-center">
                  <img :src="Clock" alt="">
                  <span class="mx-2 text-gray-5"
                    >{{ list[1].read }} min read</span
                  >
                </div>
              </div>
              <h1 class="font-bold text-2xl mb-4 line-clamp-2">{{ list[1].title }}</h1>
              <p class="mb-6 line-clamp-3">{{ list[1].description }}</p>
              <nuxt-link
                :to="`/blog?k=${list[1].slug}`"
                class="text-[14px] hover:!text-blue-700 text-purple-1 cursor-pointer font-bold"
              >
                Read More
              </nuxt-link>
            </div>
          </div>

          <div class="flex justify-between mb-[30px]">
            <img
              :src="blogInfo[2].image"
              alt=""
              class="object-cover rounded-[8px]"
            />
            <div class="w-full pl-[29px]">
              <div class="flex justify-between pb-3 text-gray-8">
                <div>
                  <a href="#" class="font-sm font-medium text-purple-4"
                    >Auto Garaze</a
                  >
                </div>
                <div class="flex items-center">
                  <img :src="Clock" alt="">
                  <span class="mx-2 text-gray-5"
                    >{{ list[2].read }} min read</span
                  >
                </div>
              </div>
              <h1 class="font-bold text-2xl mb-4 line-clamp-2">{{ list[2].title }}</h1>
              <div class="overflow-hidden">
                <p class="mb-6 line-clamp-3">
                  {{ list[2].description }}
                </p>
                <nuxt-link
                  :to="`/blog?k=${list[2].slug}`"
                  class="text-[14px] hover:!text-blue-700 text-purple-1 cursor-pointer font-bold"
                >
                  Read More
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentList>

    <!--    for mobile-->
    <ContentList path="/blogs" v-slot="{ list }">
      <Swiper :rewind="true" :navigation="true" :modules="[SwiperNavigation]">
        <SwiperSlide v-for="(blog,  index) in list" :key="blog.id">
          <div class="w-full lg:hidden">
            <div class="mb-3 w-full flex flex-wrap">
              <img
                :src="blogInfo[index].image"
                alt=""
                class="w-full h-[22rem] w-full rounded-[8px]"
              />
            </div>
            <div class="px-4">
              <div class="flex justify-between pb-3 text-gray-8">
                <a href="" class="font-sm font-medium text-purple-4"
                  >Auto Garaze</a
                >
                <div
                  class="flex font-normal text-sm text-center"
                >
                  <div class="flex items-center">
                    <img :src="Clock" alt="" class="h-[20px] w-[20px]">
                    <span class="mx-2 text-gray-5"
                      >{{ blog.read }} min read</span
                    >
                  </div>
                </div>
              </div>
              <h1 class="text-[18px] font-bold mb-4">{{ blog.title }}</h1>
              <p class="font-normal text-[14px] mb-6 line-clamp-4">
                {{ blog.description }}
              </p>
              <nuxt-link
                :to="`/blog?k=${blog.slug}`"
                class="text-[14px] text-purple-1 cursor-pointer font-bold"
              >
                Read More
              </nuxt-link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ContentList>
  </div>
</template>
