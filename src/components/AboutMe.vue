<template>
    <div class="container-about">
        <div class="side-left">
            <div class="circle-container">
                <div class="row" v-for="_ in 5">
                    <div class="circle" v-for="_ in 3"></div>
                </div>
            </div>
            <div class="text-left">FRONT-END</div>
            <div class="rectangle"></div>
        </div>
        <div class="side-right">
            <div class="rectangle"></div>
            <div class="text-left">DEVELOPER</div>
            <div class="circle-container">
                <div class="row" v-for="_ in 5">
                    <div class="circle" v-for="_ in 3"></div>
                </div>
            </div>
        </div>
        <div class="about-me">
            <div class="card">
                <p class="seudoname">{ DTapia }</p>
                <div class="title">
                    <img src="@/components/icons/profile.svg" />
                    <h1> Hello, <br/>I'm Darynka Tapia</h1>
                    <p class="description">I'm full stack developer around 4 years old and 2 years old with speciality in front end developer</p>
                </div>
                <p class="subtitle">
                    With a passion to never stop learning
                </p>
            </div>
        </div>
        <div class="social-media-container">
            <div class="social-media">
                <img src="@/components/icons/GitHub.svg" alt="">
                <img src="@/components/icons/LinkedIn.svg" alt="">
            </div>
        </div>
        <div class="scrolling-icon">
            <the-scrolling />
        </div>
    </div>
</template>
<script setup>
    import theScrolling from "@/components/icons/scrolling.vue" 
</script>

<style lang="scss" scoped>
    .container-about{
        @apply sm:max-w-6xl	sm:max-h-[1024px] w-full h-full grid overflow-hidden mx-auto my-auto;
        grid-template-columns: 64px 1fr 64px;
        grid-template-rows: 118px 1fr 100px 54px;

        & .side-left, .side-right {
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
        & .side-left{
            @apply justify-end;
            grid-row: 2 / 5;
            & .text-left{ transform: rotate(180deg); }
        }
        .side-right{
            @apply justify-start;
            grid-column: 3 / 4;
            grid-row: 1 / 3;
        }
        .about-me{
            @apply flex justify-center items-center;
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            & .card {
                @apply flex justify-between items-center flex-col sm:px-10 px-4 py-4 text-white 
                bg-[color:var(--primary-color)] box-border rounded-br-[40px];
                width: 100%;
                min-width: 188px;
                max-width: 388px;
                height: 100%;
                min-height: 288px;
                max-height: 488px;
                & .title{
                    position: relative;
                    & h1{
                        @apply sm:text-4xl text-xl font-semibold ;
                    }
                    & p.description{
                        @apply sm:flex hidden text-lg;
                    }
                    img{
                        @apply absolute right-0 top-[-54px];
                    }
                }
                
                & .subtitle{
                   @apply text-end font-semibold;
                }
                
            }
        }
        & .social-media-container{
            @apply flex justify-end items-center;
            grid-column: 2 / 4;
            grid-row: 3 / 4;
            & .social-media {
                @apply flex gap-1 px-3 py-1;
                border-bottom: 3px solid #866EC7;
                & img{
                    @apply w-[30px] h-[30px] sm:w-[40px] sm:h-[40px];
                }
            }
        }
        & .scrolling-icon{
            @apply flex justify-center items-center;
            grid-column: 2 / 3;
            grid-row: 4 / 5;
        }
    }
</style>