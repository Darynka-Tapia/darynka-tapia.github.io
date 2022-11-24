<template>
    <div class="container-experience">
        <div class="side-left">
            <div class="circle-container">
                <div class="row" v-for="_ in 5">
                    <div class="circle" v-for="_ in 3"></div>
                </div>
            </div>
            <div class="text-left">EXPERIENCE</div>
            <div class="rectangle"></div>
        </div>
        <div class="my-experience">
            <div class="experiences">
                <img src="@/components/icons/experience/JavaScript.svg" alt="Javascript" />
                <img src="@/components/icons/experience/TypeScript.svg" alt="TypeScript" />
                <img src="@/components/icons/experience/VueJs.svg" alt="Vuejs" />
                <img src="@/components/icons/experience/PHPLogo.svg" alt="PHP" />
                <img src="@/components/icons/experience/iconh-tml.svg" alt="HTML 5" />
                <img src="@/components/icons/experience/CSS3.svg" alt="CSS 3" />
                <img src="@/components/icons/experience/Sass.svg" alt="Sass" />
                <img src="@/components/icons/experience/TailwindCSS.svg" alt="Tailwind Css" />
                <img src="@/components/icons/experience/Git.svg" alt="Git" />
                <img src="@/components/icons/experience/GitHub.svg" alt="Github" />
                <img src="@/components/icons/experience/MySQLLogo.svg" alt="MySQL" />

            </div>
        </div>
    </div>
</template>
<script setup>
    import theScrolling from "@/components/icons/scrolling.vue" 
</script>

<style lang="scss" scoped>
    .container-experience{
        @apply sm:max-w-6xl	sm:max-h-[1024px] w-full h-screen grid overflow-hidden mx-auto my-auto;
        grid-template-columns: 64px 1fr 64px;
        grid-template-rows: 1fr 54px;
        & .side-left{
            @apply flex items-center text-[color:var(--primary-color)] flex-col gap-3 justify-end;
            grid-row: 1 / 3;
            & .text-left{
                @apply whitespace-nowrap font-normal sm:text-[60px] text-[40px] ;
                writing-mode: vertical-lr;
                transform: rotate(180deg); 
            }
            & .rectangle{
                @apply bg-[color:var(--primary-color)] sm:w-[35px] w-[30px] sm:h-[65px] h-[50px]; 
            }
            & .circle-container{
                @apply sm:w-[35px] w-[30px] h-[50px] ml-[-4px] flex flex-col gap-[6px];
                transform: rotate(180deg);
                & .row{ 
                    @apply flex gap-1 justify-around;
                    & .circle {
                        @apply w-1.5 h-1.5 rounded-lg bg-[color:var(--primary-color)];
                    }
                }
            }
        }
        & .my-experience{
            @apply flex justify-center items-center;
            grid-column: 2 / 3;
            grid-row: 1 / 3;
            & .experiences{
                @apply grid sm:grid-cols-3 grid-cols-2 gap-4;
                & img{
                    @apply sm:w-[132px] sm:h-[132px] w-[88px] h-[88px] object-contain	;
                }
            }
        }
    }
</style>