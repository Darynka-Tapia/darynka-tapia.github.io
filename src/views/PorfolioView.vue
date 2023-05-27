<template>
  <h1 class="section-title">Porfolio</h1>
  <div class="search">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="25" height="25" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_205_277" transform="scale(0.0192308)"/>
      </pattern>
      <image id="image0_205_277" width="52" height="52" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFaklEQVR4nNVaW4gcVRC94BON+EBFQQXRD0EN4vsJih/i80fFD/FDk40uCVHzEP3Q+PgRQ4gKElcEQUiiXdVG1hCNu3PvrAb8WZRoFBON21W9uzGoSBLNxrgPqe6Z9fbt3uz0dM9k9kDDMN1T955761adqh6lCsB4Q+dUke41wCs00moD3CNX7fMKA8E98ozqZBiPLzZALxnk7w3yVIPXDvlN5SO6SHUKjDd8hUHyNdJEDiKJK/otEPZDOP8oEtk7TwO9aZDGmyWSviJbb2x9f8/JbSVT9fhyg/TjDBPbp5E2GI8XVn2+5gtv9KzBnsHj5JLP8p2BsEsjbdRA+zN3DPgH4/Nl7SGD4W0y6dREgHZWgB/r7R05qVFb8qxGXqCBdmUtjIzVcjIaeczx/4MaebkxU8c2a1d2zyCvTNvmMQPhrap1bsaJnYlWtkTXMH54vQYedXeqAnRpWWNMBwD3zGjkr+VMqJJh/PA8g7TdPVOlBgodRbPkzrSCjE1KI+9xSK0tM8+M22emHRFI3M8AH7IW8V9x++KGkXzH1ZarNkEjv+DsEhSWM9pWAEA7i0Sz/OPvnWe7nsylkEzSSC/bKyR5RrUZBqnb8ZBVBYwlhOa+PEmzLEh000gHrLP0XVOGRN5roElruze4z1R8uq+MSc86F+APLEKTW/2fz85tJKpn7ATn8UL7vudNHaORflJtgEZalHA7P7g7t5GoELOMiKhMDALB7fL9l+vpdNViaAivc+TWstxGDPCaxA6tHzkzeT8q5qa0R1epFkNczCG0OreRqGy2jHjejuPt+xrZi0M5P69ajC1bdp2QVPbcUz4h4M9r9wZVmwlppHdKdznJ2vWo0+/xtaqNLmeA1+Q2EtU4lhF30lIqWytmVKt1XbKYfDq/EWk1JYyEXfZ9jfRQIgoCPVgmicRYHj2eHCu8s4zEutG+3+ftPtUg/2MlvP2lqOEMTAegWPoc3vbxb6cUlj4yYVf6GOS3HZ31S583coFqofQxwNuaNlbPNdaEF9j3B/zg3MRg8YC/agxuKoNMPIewy7HffJoQqW6XD1KpSkPDfkZjeL/tmrVBDxmgF0X+FyEjqcIA707YLdpCNkCYmCzyytQzPj2V2TmNdouWDWwaPr+psZGedaLbu6oo+iGcnyzBeUzCaLaYpT9SpGq5ShKwhHqN/IzB4BHjBw8cSQdWILjRLsHjADR0iSoDBvh1pxQelUZG6rlNQ6cZ5FcN0O9ZxOKLxjXyJ1mLUofsaKpJUqSwy4w00p5NTmx7Fql6aSENQnE36dZo5HUa6JUod81yBmIy9K0jdb5xz25hSKcn1WiUVTzCSudF1Ru+wd2Zmkf0tqSXUc1oBYufS3emSCMwimZIzzlnxiUFBujq+IUZPTGTd5TWrI9XlrrzEKslzUWJ0NzwRX9pjx8uhZT0mtNnatrfD0gPQPSXVJqilGUH5JLPUfUpK4z8YSop/x8Vv9LAfbOR0kgTbrIvGijWSkcz/+rOOMGD4lJRUHlv6EQN9GkjpIwjnAtBBKn4d5FXkgbobwP01oAXXJjVt5iVFNCkuK4qE7FM4lUSclNSKHNl+bABGojUgFM81iG6reHdBZoUV1atgJyVCoZ3xXmIXqu/1o+q4Egm8R2N6DwNwdJcLguykNStOhVSikTumJOUBl6sOhUSmvOeTx27/BLVqTAeP9oMKY30pOpURH8FaCDYmJT7BUtVp0JCc25SSBNVoFtUp0JeGui87oe8TnUyDFJ3rp0C3qw6HRp4caOkpBZTcwEGeclspKQK+MzjM9RcgY5UfTYpDfyn+15rTkBDsNQNFLIz/X5w5dGeW9MwHt0cdXKBN8uZcd3sP9eeZYPE9UvkAAAAAElFTkSuQmCC"/>
      </defs>
    </svg>
    <select name="" id="" v-model="skillSelected" @change="selectSkill">
      <option :value="skill.name" v-for="skill in skills" :key="skill">{{ skill.name }}</option>
    </select>
  </div>
  <div class="card-container">
    <div v-if="projects.length === 0" class="text-white font-bold text-xl">Sorry, there is no example project for that skill yet. 💔</div>
    <image-card 
      v-for="data in projects"
      :key="data"
      :data="data"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import imageCard from '@/components/image-card.vue'
import { skills } from '@/utils/skillsList.js'
import { useProjects } from '@/stores/useProjects.js'

const { projects, getProjects} = useProjects()

const skillSelected = ref('');
function selectSkill(){
  getProjects(skillSelected.value)
}
</script>

<style scoped lang="scss">
.section-title{
  @apply text-[#BFACE2] text-4xl mb-7 sm:text-6xl sm:mb-6 sm:mt-4;
}
.card-container{
  @apply flex flex-wrap w-full gap-10 justify-center;
}
.search{
  @apply flex gap-3 border-2 border-[#BFACE2] pl-4 pr-3 py-2 rounded-xl w-52 mb-4;
  & select{
    @apply w-full bg-transparent text-[#BFACE2] outline-none;
    & option { 
      @apply text-[#03001C] bg-[#BFACE2] font-bold
    }
  }
}
</style>