<script setup>
const props = defineProps({
  items : {
    Array
  }
});
const list = ref(
    props.items.map((item) => {
      return {...item, open : false}
    })
);
function showHide(item) {
  item.open = !item.open
}
</script>

<template>
  <div v-for="(item,index) in list" :key="index" id="accordion-color"
       data-accordion="collapse"
       class="mb-2"
       :class="[item.open && 'border border-1 border-[#646BEE]']"
  >
      <h2 class="p-4 xl:text-lg text-md"
      :class = "[item.open ? 'bg-[#646BEE] text-white' : 'text-[#6D6D6D] border border-solid bg-[#FBFBFB] border-1 border-[#F0EEFE] shadow-sm border-l-4 border-l-[#646BEE] rounded-[4px] rounded-l-[6px]']"
      >
          <button type="button"
                  @click="showHide(item)"
                  class="lg:h-[2rem] h-[1rem] flex items-center justify-between w-full font-medium text-left"
          >
              <span>{{ item.title }}</span>
              <svg v-if="!item.open" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7143 10.2857H10.2857V16.7143C10.2857 17.4214 9.70714 18 9 18C8.29286 18 7.71429 17.4214 7.71429 16.7143V10.2857H1.28571C0.578571 10.2857 0 9.70714 0 9C0 8.29286 0.578571 7.71429 1.28571 7.71429H7.71429V1.28571C7.71429 0.578571 8.29286 0 9 0C9.70714 0 10.2857 0.578571 10.2857 1.28571V7.71429H16.7143C17.4214 7.71429 18 8.29286 18 9C18 9.70714 17.4214 10.2857 16.7143 10.2857Z" fill="#6D6D6D"/>
              </svg>
              <svg v-else width="18" height="3" viewBox="0 0 18 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 1.5C18 2.32843 17.3284 3 16.5 3H1.5C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0H16.5C17.3284 0 18 0.671573 18 1.5Z" fill="white"/>
              </svg>
          </button>
      </h2>
      <div class="p-4 bg-[#FBFBFB]" :class="{hidden : !item.open}">
          <div class="font-normal text-base">
              <p class="text-[#4E4E4E]">{{ item.content }}</p>
          </div>
      </div>
  </div>
</template>

<style scoped>
</style>