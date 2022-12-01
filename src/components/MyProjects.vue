<template>
    <div class="container-experience">
        <div class="side-right">
            <div class="rectangle"></div>
            <div class="text-left">PROJECTS</div>
            <div class="circle-container">
                <div class="row" v-for="_ in 5">
                    <div class="circle" v-for="_ in 3"></div>
                </div>
            </div>
        </div>
        <div class="project-active">
            <TheCarrusel/>
        </div>
    </div>
</template>
<script setup>
    import TheCarrusel from "@/components/TheCarrusel.vue" 

</script>

<style lang="scss" scoped>
    .container-experience{
        @apply sm:max-w-6xl	sm:max-h-[1024px] w-full h-full grid overflow-hidden mx-auto my-auto;
        grid-template-columns: 64px 1fr 64px;
        grid-template-rows: 1fr 54px;
        & .side-right {
            @apply flex items-center text-[color:var(--primary-color)] flex-col gap-3;
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
            & .text-left{
                @apply whitespace-nowrap font-normal sm:text-[60px] text-[40px] ;
                writing-mode: vertical-lr;
            }
        }
        .side-right{
            @apply justify-start;
            grid-column: 3 / 4;
            grid-row: 1 / 3;
        }

        & .project-inactive-left{
            @apply bg-green-400;
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }
        & .project-inactive-right{
            @apply bg-pink-400;
            grid-column: 5 / 6;
            grid-row: 2 / 3;
        }
        & .project-active{
            @apply flex justify-center items-end px-7;
            grid-column: 1 / 3;
            grid-row: 1 / 2;
        }
        
    }
</style>