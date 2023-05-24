<script setup>
</script>

<template>
  <footer>
    <picture>
      <source media="(min-width: 640px)" srcset="@/assets/icons/GitHub-desktop.svg">
      <img src="@/assets/icons/GitHub.svg" alt="icono de github">
    </picture>
    <picture>
      <source media="(min-width: 640px)" srcset="@/assets/icons/Linkedin-desktop.svg">
      <img src="@/assets/icons/Linkedin.svg" alt="icono de Linkedin">
    </picture>
  </footer>
</template>

<style scoped lang="scss">

footer{
  @apply py-2 px-8 h-[10%] flex items-center gap-4;
  & img {
    @apply w-8 h-8 sm:w-14 sm:h-14;
  }
}
</style>
