<template>
  <div class="card">
    <div class="card__image">
      <img :src="props.data.image" alt="">
    </div>
    <div class="card__menu">
      <button :class="{'active': isAboutShow}" @click="changeTagToAbout(true)">About</button>
      <button :class="{'active': !isAboutShow}"  @click="changeTagToAbout(false)">Skills</button>
    </div>
    <div class="card__about" v-if="isAboutShow">
      <p class="card__about--name">{{props.data.name}}</p>
      <p class="card__about--description">{{props.data.description}}</p>
      <div class="card__about--links">
        <a v-if="props.data.links.figma !== ''" :href="props.data.links.figma" target="_blank">
          <picture>
            <img src="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/Figma.svg" alt="icono de github"> 
          </picture>
        </a>
        <a v-if="props.data.links.github !== ''" :href="props.data.links.github" target="_blank">
          <picture>
            <img src="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/GitHub-dark.svg" alt="icono de github"> 
          </picture>
        </a>
        <a v-if="props.data.links.demo !== ''" :href="props.data.links.demo" target="_blank">
          <picture>
            <img src="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/ExternalLink.svg" alt="icono de github"> 
          </picture>
        </a>
      </div>
    </div>
    <div class="card__skills" v-else>
      {{  props.data.demo  }}
      <span class="chips" v-for="skill in props.data.skills" :key="skill">{{ skill }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef } from 'vue';

const props = defineProps({
  data: Object
})

  const isAboutShow = ref(true);
  const changeTagToAbout = (flag) => {
    isAboutShow.value = flag;
  }
</script>

<style scoped lang="scss">
.card {
  @apply w-full max-w-sm rounded-xl overflow-hidden bg-white;
  &__image{
    @apply w-full;
  }
  &__menu{
    @apply w-full flex justify-between items-end ;
    & button {
      @apply w-full px-5 py-2 text-lg text-gray-400 bg-gray-200;
    }
    & button.active {
      @apply font-bold bg-white text-black;
    }
  }
  &__about{
    @apply flex flex-col items-center py-4 px-5 h-[140px];
    &--name{
      @apply text-xl font-bold;
    }
    &--description{
      @apply text-base font-normal text-center h-[48px] overflow-auto;
    }
    &--links{
      @apply w-full mt-2 flex justify-end gap-4 cursor-pointer;
    }
  }
  &__skills{
    @apply flex flex-row flex-wrap items-center py-4 px-5 h-[140px] gap-2 overflow-auto;
    & .chips{
      @apply flex items-center justify-center bg-[#301E67] text-white py-1 px-3 rounded-[20px]
      text-sm uppercase cursor-default;
      box-shadow: 0 2px 5px rgba(255, 255, 255, 0.2);
    }
  }
}
</style>