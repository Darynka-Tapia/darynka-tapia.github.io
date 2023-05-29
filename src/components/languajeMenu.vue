<template>
  <div class="languaje-container">
    <span
      class="languaje"
      @click="selectLang('en')" 
      :class="{'selected': i18n.locale.value === 'en'}"
    > 
      EN
    </span>
    <span
      class="languaje"
      :class="{'selected': i18n.locale.value === 'es'}"
      @click="selectLang('es')"
    >
      ES
    </span>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const i18n = useI18n();
function selectLang(lang){
  i18n.locale.value = lang;
  
}
</script>

<style scoped lang="scss">
.languaje-container{
  @apply flex gap-2 mx-4;
}
  .languaje{
    @apply  text-white cursor-pointer;
  }
  .languaje.selected{
    @apply underline text-[#BFACE2] font-bold;
  }
</style>