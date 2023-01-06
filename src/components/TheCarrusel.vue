<template>
	<div class="projects-container">
	  <div class="projects-container__body">
		<div class="projects-container__body-carousel" >
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
  import rpsGameIcon from '@/components/icons/projects/rps-game.svg';
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
					text: 'Rock, paper and scissors game',
					img: rpsGameIcon, // 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/rps-game.png?raw=true',
					description: 'Game with vue, JS, HTML, css Grid',
					github: 'https://github.com/Darynka-Tapia/rps-game', 
					linkPreview: 'https://rps-game-09.netlify.app/'
			  
				},
				{
					text: 'Calculator with css Grid',
					img: 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/calculator.png?raw=true',
					description: 'Calculator with HTML, CSS, css Grid',
					github: 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/tree/master/src/components/calculator', 
					linkPreview: 'https://darynka-tapia.netlify.app/#/calculator'
			  
				},
				{
					text: 'Parfum Card',
					img: 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/parfum-card.png?raw=true',
					description: 'Responsive card design, use HTML, CSS, css Flex',
					github: 'https://github.com/Darynka-Tapia/frontend-mentor-challenges/tree/master/product-preview-card', 
					linkPreview: 'https://darynka-tapia.github.io/frontend-mentor-challenges/product-preview-card/'
				},
				{
					text: 'Rating project',
					img: 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/project-rating.png?raw=true',
					description: 'Qualification selection design responsive, use HTML, CSS, Vuejs',
					github: 'https://github.com/Darynka-Tapia/frontend-mentor-vuejs-challenges/tree/master/src/components/rating', 
					linkPreview: 'https://darynka-tapia-frontend-mentor.netlify.app/#/rating'
				},
				{
					text: 'CashFlow',
					img: `https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/cashFlow.png?raw=true`,
					description: '',
					github: 'https://github.com/Darynka-Tapia/cashflow', 
					linkPreview: 'https://cashflow97.netlify.app/'
				},
				{
					text: 'Mini reproductor',
					img: `https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/mini-reproductor.png?raw=true`,
					description: '',
					github: 'https://github.com/Darynka-Tapia/reproductor', 
					linkPreview: 'https://mini-reproductor-dt.netlify.app'
				},
				{
					text: 'PlatziExchange',
					img: `https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/platzi-exchange.png?raw=true`,
					description: '',
					github: 'https://github.com/Darynka-Tapia/platzi-exchange', 
					linkPreview: 'https://platzi-coins.netlify.app/'
				},
				{
					text: 'Google clon',
					img: 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/google-clon.png?raw=true',
					description: '',
					github: 'https://github.com/Darynka-Tapia/proyectosplatzi/tree/master/desarrollo-web/clone-google', 
					linkPreview: 'https://darynka-tapia.github.io/proyectosplatzi/desarrollo-web/clone-google/'
			  
				},
				{
					text: 'Wikipedia clon',
					img: 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/wikipedia-clon.png?raw=true',
					description: '',
					github: 'https://github.com/Darynka-Tapia/proyectosplatzi/tree/master/desarrollo-web/clone-wiki', 
					linkPreview: 'https://darynka-tapia.github.io/proyectosplatzi/desarrollo-web/clone-wiki/'
			  
				},
				{
					text: 'Twitter clon (login and twits)',
					img: 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/tweeter-clone.png?raw=true',
					description: '',
					github: 'https://github.com/Darynka-Tapia/frontend-architecture/tree/master/vue__tweeter-clone', 
					linkPreview: 'https://darynka-tapia.github.io/frontend-architecture/vue__tweeter-clone/'
				},
				{
					text: 'profesional-blog',
					img: 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/profesional-blog.png?raw=true',
					description: '',
					github: 'https://github.com/Darynka-Tapia/frontend-architecture/tree/master/professional-blog', 
					linkPreview: 'https://darynka-tapia.github.io/frontend-architecture/professional-blog/'
				},
				{
					text: 'batatabit.png',
					img: 'https://github.com/Darynka-Tapia/darynka-tapia.github.io/blob/master/src/components/icons/projects/batatabit.png?raw=true',
					description: '',
					github: 'https://github.com/Darynka-Tapia/frontend-architecture/tree/master/mobileFirst', 
					linkPreview: 'https://darynka-tapia.github.io/frontend-architecture/mobileFirst/'
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
  	.projects-container {
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