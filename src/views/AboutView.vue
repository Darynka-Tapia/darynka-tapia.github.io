<template>
  <h1 class="section-title">About me</h1>
  <p><strong>Web developer</strong> with more than 3 years of experience.</p>
  <p>I'm a <strong>self-taught</strong> person who likes to be constantly learning, with a current focus on the <strong>Frontend area</strong>.</p>

  <div class="activities">
    <p>🌱 I'm currently learning more about front-end and system design </p>
    <p>💻 I'm currently working with frontend (TypeScript y Vue.js)</p>
    <p>💬 Ask me about frontend and web design</p>
  </div>
</template>

<style scoped lang="scss">
.section-title{
  @apply text-[#BFACE2] text-4xl mb-7 sm:text-6xl sm:mb-12 sm:mt-4;
}
p{
  @apply text-white mb-2 text-lg sm:text-3xl;
  & strong { @apply text-[#BFACE2]}
}
.activities{
  @apply mt-6;
  & p{ @apply text-base sm:text-xl; }
}
</style>