<script setup>
import linkedinIcon from '@/assets/icons/Linkedin.svg';
import linkedinDesktopIcon from '@/assets/icons/Linkedin-desktop.svg';
import GitHubIcon from '@/assets/icons/GitHub.svg';
import GitHubDesktopIcon from '@/assets/icons/GitHub-desktop.svg';

</script>

<template>
  <footer>
    <picture>
      <source media="(min-width: 640px)" srcset="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/GitHub-desktop.svg">
      <img src="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/GitHub.svg" alt="icono de github"> 
    </picture>
    <picture>
      <source media="(min-width: 640px)" srcset="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/LinkedIn-desktop.svg">
      <img src="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/LinkedIn-desktop.svg" alt="icono de Linkedin">
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
