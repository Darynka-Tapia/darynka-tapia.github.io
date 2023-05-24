<script setup>
</script>

<template>
  <footer>
    <a href="https://github.com/Darynka-Tapia" target="_blank">
      <picture>
        <source media="(min-width: 640px)" srcset="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/GitHub-desktop.svg">
        <img src="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/GitHub.svg" alt="icono de github"> 
      </picture>
    </a>
    <a href="https://www.linkedin.com/in/abril-tapia" target="_blank">
      <picture>
        <source media="(min-width: 640px)" srcset="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/LinkedIn-desktop.svg">
        <img src="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/LinkedIn-desktop.svg" alt="icono de Linkedin">
      </picture>
    </a>
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
