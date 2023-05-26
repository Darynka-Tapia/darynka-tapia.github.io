<template>
  <h1 class="section-title">Porfolio</h1>
  <div class="card-container">
    <image-card 
    v-for="data in projectsList" :key="data" :data="data"/>
  </div>
</template>

<script setup>
import imageCard from '@/components/image-card.vue'
import { projectsList } from '@/utils/projectsData.js'
</script>

<style scoped lang="scss">
.section-title{
  @apply text-[#BFACE2] text-4xl mb-7 sm:text-6xl sm:mb-12 sm:mt-4;
}
.card-container{
  @apply flex flex-wrap w-full gap-10 justify-center;
}
</style>