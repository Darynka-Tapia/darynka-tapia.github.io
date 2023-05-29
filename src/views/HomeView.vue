<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <div class="view-container">
    <p class="greetings">{{ $t('home.hello') }}</p>
    <p class="my-name">{{ $t('home.myName') }}</p>
    <div class="profession">
      <p>{{ $t('home.profession.iam') }}</p>
      <div class="container-text">
        <div class="text">
          <strong class="text-content">{{ $t('home.profession.frontend') }}</strong>
        </div>
        <div class="text">
          <strong class="text-content">{{ $t('home.profession.web') }}</strong>
        </div>
      </div>
        
    </div>
  </div>

  <div>

  </div>

</template>

<style>



</style>
<style scoped lang="scss">
.view-container{
  @apply flex flex-col w-full h-full justify-center;
  & .greetings {
    @apply text-2xl sm:text-3xl text-white;
  }
  & .my-name {
    @apply text-5xl sm:text-7xl text-[#BFACE2];
  }
  & .profession {
    @apply text-2xl sm:text-3xl text-white flex mt-2;
    & p{
      @apply w-20 sm:w-24
    }
    & .container-text{
      @apply relative w-[calc(100%-96px)] h-full;
      perspective: 1000px;
    }
  }
}

.text{
  @apply absolute top-0 left-0 w-full h-full;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    animation: flip-animation 10s infinite;
}
.text:nth-child(2) {
  animation-delay: 5s;
}
.text-content {
  @apply text-[#03001c] flex justify-center items-center bg-white h-full max-w-[250px] sm:max-w-[300px]
  px-2 rounded-2xl text-xl sm:text-3xl;
  
}
@keyframes flip-animation {
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  45% {
    transform: rotateX(-180deg);
    opacity: 0;
  }
  55% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
</style>
