<template>
	<div class="app">
	  <div class="app__body">
		<div class="app__body-carousel" >
		  <transition
			:name="transitionName"
			mode="out-in"
		  >
			<div
			  :key="carouselNumber"
			  class="slide"
			>
			  <img
				:src="slideActive.img"
				class="slide__img"
				alt="image"
			  >
			  <span class="slide__text">
				<span class="slide__text--title">{{ slideActive.text }}</span>
				<span class="slide__text--description">{{ slideActive.description }}</span>
				<div class="slide__text--links">
					<a :href="slideActive.github" target="_blank"><img src="@/components/icons/GitHub-white.svg" alt="Github" /></a>
					<a :href="slideActive.linkPreview" target="_blank"><img src="@/components/icons/Link.svg" alt="Link" /></a>
				</div>
			  </span>
			</div>
		  </transition>
		  <div
			v-if="carouselNumber > 1"
			class="icon icon--left"
			@click="previousSlide"
		  >
			<i class="fas fa-chevron-left" />
		  </div>
		  <div
			v-if="carouselNumber < carouselDatas.length"
			class="icon icon--right"
			@click="nextSlide"
		  >
			<i class="fas fa-chevron-right" />
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		carouselNumber: 1,
		direction: 'next',
	  };
	},
	computed: {
		  carouselDatas() {
			return [
			  {
				text: 'Parfum Card',
				img: 'src/components/icons/projects/parfum-card.png',
				description: 'Diseño de card responsiva, usa HTML, CSS, css Flex',
				github: 'https://github.com/Darynka-Tapia/frontend-mentor-challenges/tree/master/product-preview-card', 
				linkPreview: 'https://darynka-tapia.github.io/frontend-mentor-challenges/product-preview-card/'
			  },
			  {
				text: 'Rating project',
				img: 'src/components/icons/projects/project-rating.png',
				description: 'Diseño de seleccion de calificacion, responsiva, usa HTML, CSS, Vuejs'
			  },
			  {
				text: 'CashFlow',
				img: 'src/components/icons/projects/cashFlow.png',
			  },
			  {
				text: 'Mini reproductor',
				img: 'src/components/icons/projects/mini-reproductor.png',
			  },
			  {
				text: 'PlatziExchange',
				img: 'src/components/icons/projects/platzi-exchange.png',
			  },
			]
		  },
		  slideActive() {
			return this.carouselDatas[this.carouselNumber - 1]
		  },
		  transitionName() {
			return `fade-${this.direction}`
		  },
		  ActiveDotCoordinate() {
			return `calc(${parseInt(100 * (this.carouselNumber - 1))}% + ${parseFloat(0.3 * (this.carouselNumber - 1))}rem)`;
		  },
	  },
	  methods: {
		  nextSlide() {
			this.direction = 'next';
			this.carouselNumber++;
		  },
		  previousSlide() {
			this.direction = 'prev';
			this.carouselNumber--;
		  }
	  },
  };
  </script>
  
<style lang="scss" scope>
  	.app {
		@apply flex flex-col items-center sm:justify-center justify-end w-full h-full py-4;
		overflow: auto;
		font-family: Helvetica, Arial, sans-serif;
		&__body {
			@apply flex flex-col w-full overflow-x-hidden rounded-md;
			background: linear-gradient(0deg, rgba(134,110,199,1) 0%, rgba(134,110,199,0.5) 72%);
			max-width: 500px;
			&-carousel {
				@apply relative;
				.slide {
					@apply flex flex-col items-center justify-center pb-4;
					min-height: 200px;
					&__img {
						@apply mb-4 w-full h-full object-cover rounded-md;
						border: 2px solid var(--primary-color);
						box-shadow: 0 3px 6px rgba(#000, .2);
					}
					&__text {
						@apply flex flex-col w-full text-white text-center;
						text-shadow: 0 3px 6px rgba(#000, .2);
						&--title{
							@apply text-lg font-semibold;
						}
						&--description {
							@apply text-base font-normal italic;
						}
						&--links{
							@apply flex mt-4 justify-end px-4 cursor-pointer; 
							& img{
								@apply w-6 h-6 sm:w-8 sm:h-8 object-contain;
								&:hover{ @apply opacity-60; }
							}
							
						}
					}
				}
				.icon {
					@apply absolute text-white text-xl p-4 cursor-pointer;
					top: calc(40% - 20px);
					color: var(--primary-color);
					i { filter: drop-shadow( 0 3px 6px rgba(#000, .2)); }
					&--left { left: 0; }
					&--right { right: 0; }
				}
			}
		}
  	}
	.fade-next-enter-active,
	.fade-next-leave-active {
		transition: .2s;
	}
	
	.fade-next-enter {
		transform: translateX(100%);
		opacity: 0;
	}
	
	.fade-next-leave-to {
		transform: translateX(-100%);
		opacity: 0;
	}
	
	.fade-prev-enter-active,
	.fade-prev-leave-active {
		transition: .2s;
	}
	
	.fade-prev-enter {
		transform: translateX(-100%);
		opacity: 0;
	}
	
	.fade-prev-leave-to {
		transform: translateX(100%);
		opacity: 0;
	}
  </style>