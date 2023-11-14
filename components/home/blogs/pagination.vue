
<script setup>
 defineProps({
  currentPage: Number,
  totalPages: Number,
  changePage: Function,
})

</script>

<template>
  <div class="space-x-4 hidden lg:block">
    <button :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)" >
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_510_1409)">
          <rect width="56" height="56" rx="28" fill="white" fill-opacity="0.9"/>
          <path d="M35 28H21M21 28L28 35M21 28L28 21"
                :stroke="currentPage === 1 ? '#BBBBBB' : '#646BEE'"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#EAECF0"/>
        </g>
        <defs>
          <filter id="filter0_b_510_1409" x="-8" y="-8" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_1409"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_1409" result="shape"/>
          </filter>
        </defs>
      </svg>
    </button>
    <button :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_510_1410)">
          <rect width="56" height="56" rx="28" fill="#F9FAFB"/>
          <path d="M21 28H35M35 28L28 21M35 28L28 35"
                :stroke="currentPage === totalPages ? '#BBBBBB' : '#646BEE'"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="#EAECF0"/>
        </g>
        <defs>
          <filter id="filter0_b_510_1410" x="-8" y="-8" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_510_1410"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_510_1410" result="shape"/>
          </filter>
        </defs>
      </svg>
    </button>
  </div>
</template>
