<template>
  <div class="menu-hamburger">
    <div class="image-icon">
      <img
      @click="openMenu()" 
        src="https://raw.githubusercontent.com/Darynka-Tapia/darynka-tapia.github.io/master/src/assets/icons/Menu.svg" >
    </div>
    <Transition duration="550" name="nested">
      <ul class="list" v-if="isMenuShow">
        <router-link @click="closeMenu" to="/"><li>Home</li></router-link>
        <router-link @click="closeMenu" to="/about"><li>About</li></router-link>
        <router-link @click="closeMenu" to="/skills"><li>Skills</li></router-link>
        <router-link @click="closeMenu" to="/porfolio"><li>Porfolio</li></router-link>
        <router-link @click="closeMenu" to="/contact"><li>Contact</li></router-link>
      </ul>
    </Transition>
  </div>
  <div class="menu">
    <ul class="list">
      <router-link to="/"><li>Home</li></router-link>
      <router-link to="/about"><li>About</li></router-link>
      <router-link to="/skills"><li>Skills</li></router-link>
      <router-link to="/porfolio"><li>Porfolio</li></router-link>
      <router-link to="/contact"><li>Contact</li></router-link>
    </ul>
  </div>

</template>
<script setup>
import { ref, onUnmounted } from 'vue';

function closeMenu() { isMenuShow.value = false; }
const isMenuShow = ref(false)
function openMenu (){
  isMenuShow.value = !isMenuShow.value;
}

</script>

<style>
  .nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

</style>

<style scoped lang="scss">
.menu-hamburger{
  @apply w-full absolute top-0 left-0 flex sm:hidden flex-col items-end px-8 py-2 ;
  & .image-icon{
    @apply flex justify-center items-center h-[64px] ;
    & img {
      @apply sm:hidden w-9 h-9 cursor-pointer;
    }
  }
  & ul{
    @apply text-white gap-2 text-xl w-full flex flex-col justify-center items-center bg-[#0D0A25] py-4;
    & li{ @apply text-center border-b w-40 }
    & li:hover{
      @apply bg-white text-[#03001c] cursor-pointer;
    }
  }
}
.menu{
  ul{
    @apply hidden sm:flex text-white text-xl gap-4;
    & li:hover{
      @apply underline cursor-pointer;
    }
  }
  
}



</style>