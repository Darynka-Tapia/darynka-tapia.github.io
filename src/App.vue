<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from '@/components/footer.vue'
import HeaderView from '@/components/header.vue'

</script>

<template>
  <HeaderView />
  <main>
    <RouterView />
  </main>
  <FooterView />
</template>

<style scoped lang="scss">
main{
  @apply py-2 px-8 h-[80%]; 
}
</style>
