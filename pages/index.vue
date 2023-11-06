<template>
  <main>
    <HomePageSection />
    <h1 class="text-3xl font-bold underline">Hello world !</h1>
    <!-- <template>
      <div>
        <h1>Welcome to the homepage</h1>
        <AppAlert>
          This is an auto-imported component
        </AppAlert>
      </div>
    </template> -->
    <!-- <ContentDoc /> -->
  </main>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>