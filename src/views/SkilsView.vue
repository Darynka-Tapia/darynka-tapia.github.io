<template>
  <h1 class="section-title">My Skils</h1>
  <div class="skils">
    <span class="chips" v-for="skil in skils" :key="skil">
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
    {icon: '', name: 'node.js'},
    {icon: '', name: 'tailwindcss'},
    {icon: '', name: 'bootstrap'},
    {icon: '', name: 'less'},
    {icon: '', name: 'sass'},
    {icon: '', name: 'java'},
    {icon: '', name: 'php'},
    {icon: '', name: 'laravel'},
    {icon: '', name: 'jwt'},
    {icon: '', name: 'netlify'},
    {icon: '', name: 'firebase'},
    {icon: '', name: 'flutter'},
    {icon: '', name: 'dart'},
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
  @apply flex flex-wrap justify-center gap-3 mt-5 overflow-auto h-[calc(100%-114px)] sm:h-auto sm:py-3;
}

.chips {
  @apply flex items-center justify-center bg-[#301E67] text-white py-2 px-3 rounded-[20px]
  text-sm uppercase opacity-0 cursor-default;
  animation: fade-in 1s forwards;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.2);
}
    
.chips:hover {
  @apply bg-[#BFACE2] text-[#301E67];
  transform: scale(1.05);
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>