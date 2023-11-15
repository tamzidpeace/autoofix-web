<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
      const isCurrentPage = (path) => {
        return route.path === path || route.hash === path;
      };
    const navItems = [
      {id: 1, name: 'Home', path:'/'},
      {id: 2, name: 'Features', path:'feature'},
      {id: 3, name: 'Testimonials', path:'testimonial'},
      {id: 4, name: 'Prices', path:'price'},
      {id: 5, name: 'FAQs', path:'faqs'},
      {id: 6, name: 'Blogs', path:'blogs'},
      {id: 7, name: 'Contact Us', path:'contact'},
    ]
    const scrollToElement = (elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };
</script>
<template>
  <header>
    <nav class="bg-white border-gray-200 p-2 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <NuxtLink to="/">
          <img src="~/assets/img/Mask%20group.svg" class="h-8 mr-3" alt="Autofix Logo" />
        </NuxtLink>
        <div class="flex md:order-2">
          <button type="button" class="hidden rounded-[4px] px-4 py-2 xl:px-6 xl:py-3 lg:flex bg-purple-1 text-white space-x-2 font-medium">
            Demo Explore
            <img src="~/assets/img/footer/Icon/ic_outline-arrow-outward.svg" class="h-6 w-6" alt="Autofix Logo" />
          </button>
          <button data-collapse-toggle="navbar-cta" type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul
              class="flex flex-col font-medium md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
              <NuxtLink
                  v-for="item in navItems" :key="item.path"
                  class="block text-sm cursor-pointer xl:text-base py-2 px-2 hover:text-purple-1"
                  @click="scrollToElement(item.path)"
              >
                {{ item.name }}
              </NuxtLink>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

