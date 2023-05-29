<script setup>
import TheMenu from '@/components/hamburguerMenu.vue';

</script>
<template>
  <header>
    <picture>
      <source media="(min-width: 640px)" srcset="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/Logo-desktop.svg">
      <img src="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/Logo.svg" alt="Logo">
    </picture>
    <TheMenu />
  </header>
</template>

<style scoped lang="scss">

header{
  @apply py-2 px-8 h-[80px] flex items-center gap-4 justify-between;
  & img {
    @apply w-8 h-8 sm:w-14 sm:h-14;
  }
}
</style>
