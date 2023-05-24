<script setup>
import LogoIcon from '@/assets/icons/Logo.svg';
import LogoDesktopIcon from '@/assets/icons/Logo-desktop.svg';

</script>
<template>
  <header>
    <picture>
      <source media="(min-width: 640px)" :srcset="LogoDesktopIcon">
      <img :src="LogoIcon" alt="Logo">
    </picture>
  </header>
</template>

<style scoped lang="scss">

header{
  @apply py-2 px-8 h-[10%] flex items-center gap-4;
  & img {
    @apply w-8 h-8 sm:w-14 sm:h-14;
  }
}
</style>
