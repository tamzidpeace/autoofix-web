<script setup>
useHead({
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://fav.farm/%F0%9F%9A%98' },
    ],
    title: 'Autoofix',
    titleTemplate: '%s - http://autoofix.com/',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Autoofix is the best software platform for running garage business.' },
    ],
})
</script>
<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
