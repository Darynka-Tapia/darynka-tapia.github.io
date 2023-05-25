<template>
  <h1 class="section-title">My Skils</h1>
  <p class="in-construction">In construction 🚧</p>

  <div class="skils">
    <span v-for="skil in skils" :key="skil">
      {{ skil.name }}
    </span>
  </div>
</template>

<script setup>
  const skils = [
    
    {icon: '', name: 'vuejs'},
    {icon: '', name: 'html5'},
    {icon: '', name: 'css'},
    {icon: '', name: 'javascript'},
    {icon: '', name: 'typescript'},
    {icon: '', name: 'tailwindcss'},
    {icon: '', name: 'bootstrap'},
    {icon: '', name: 'less'},
    {icon: '', name: 'sass'},
    {icon: '', name: 'java'},
    {icon: '', name: 'php'},
    {icon: '', name: 'laravel'},
    {icon: '', name: 'node.js'},
    {icon: '', name: 'jwt'},
    {icon: '', name: 'dart'},
    {icon: '', name: 'netlify'},
    {icon: '', name: 'firebase'},
    {icon: '', name: 'flutter'},
    {icon: '', name: 'unity'},
    {icon: '', name: 'blender'},
    {icon: '', name: 'figma'},
    {icon: '', name: 'mariadb'},
    {icon: '', name: 'postgres'},
    {icon: '', name: 'mysql'},
    {icon: '', name: 'mongodb'},
    {icon: '', name: 'sqlite'},
    {icon: '', name: 'canva'},
    {icon: '', name: 'jira'},
    {icon: '', name: 'eslint'},
    {icon: '', name: 'confluence'},
    {icon: '', name: 'notion'},
    {icon: '', name: 'postman'},
    {icon: '', name: 'trello'},
  ]
</script>

<style scoped lang="scss">
.section-title{
  @apply text-[#BFACE2] text-4xl mb-7 sm:text-6xl sm:mb-12 sm:mt-4;
}
.skils{
  @apply text-white flex flex-wrap gap-4 h-[calc(100%-108px)] sm:h-[calc(100%-150px)] overflow-auto	;
  & span{
    @apply px-2 py-1 rounded-lg uppercase text-sm;
  }
}

.in-construction{
  @apply w-full flex flex-col justify-center items-center text-white text-xl;
}
</style>