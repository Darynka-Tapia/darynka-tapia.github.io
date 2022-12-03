<script setup>
import { ref } from 'vue';
import AboutMe from '@/components/AboutMe.vue'
import MyExperience from '@/components/MyExperience.vue';
import MyProjects from '@/components/MyProjects.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
	<div class="the-layout">
		<AboutMe />
		<MyExperience />
		<MyProjects />
	</div>
</template>

<style lang="scss" scope>
.the-layout{
	@apply w-full h-full;
	background-image: var(--bg-image-pattern);
}
</style>
