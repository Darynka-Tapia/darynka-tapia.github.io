<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <h1 class="section-title">{{ $t('about.title') }}</h1>
  <p><strong>{{ $t('about.firstParagraph.strong1') }}</strong> {{ $t('about.firstParagraph.text1') }}</p>
  <p>{{ $t('about.secondParagraph.text1') }}<strong>{{ $t('about.secondParagraph.strong1') }}</strong>{{ $t('about.secondParagraph.text2') }}<strong>{{ $t('about.secondParagraph.strong2') }}</strong></p>

  <div class="activities">
    <p>{{ $t('about.list.item1') }}</p>
    <p>{{ $t('about.list.item2') }}</p>
    <p>{{ $t('about.list.item3') }}</p>
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