<script setup>
import { ref } from 'vue';
import AboutMe from '@/components/AboutMe.vue'
import MyExperience from '@/components/MyExperience.vue';
const isScrolledUp = ref('');
const isAboutMeVisible = ref(true);
const isMyExperienceVisible = ref(false);
const scrollNumber = ref(0);
window.addEventListener('wheel', function(e) {
	console.log('El boton intermedio (rueda) del ratón ha sido activado', e.deltaY);
	isScrolledUp.value = e.deltaY < 0 ? 'voy para arriba' : 'voy para abajo';
	console.log(isScrolledUp.value);
}); 

</script>

<template>
  <AboutMe/>
  <MyExperience/>
</template>

<style scoped>
</style>
