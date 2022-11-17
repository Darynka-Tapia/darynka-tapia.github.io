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
                Darynka Tapia
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

<style scoped>
    .container-about{
        /* background-color: cadetblue; */
        width: 100vw;
        height: 100%;
        display: grid;
        grid-template-columns: 64px 1fr 64px;
        grid-template-rows: 118px 1fr 100px 54px;
    }

    .side-left{
        /* background-color: blue; */
        grid-row: 2 / 5;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #866EC7;
        flex-direction: column;
        gap: 10px;
    }
    .side-left .rectangle{
        background-color: #866EC7;
        width: 30px;
        height: 50px;
        margin-left: -8px;
    }
    .side-left .circle-container{
        transform: rotate(180deg);
        width: 30px;
        height: 50px;
        margin-left: -10px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .side-left .circle-container .row{
        display: flex;
        gap: 4px;
    }
    .side-left .circle-container .row .circle{
        width: 6px;
        height: 6px;
        border-radius: 50px;
        background-color: #866EC7;
    }
    .side-left .text-left{
        transform: rotate(180deg);
        white-space: nowrap;
        writing-mode: vertical-lr;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        /* line-height: 64px; */
    }
    .side-right{
        grid-column: 3 / 4;
        grid-row: 1 / 3;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #866EC7;
        flex-direction: column;
        gap: 10px;
    }
    .side-right .rectangle{
        background-color: #866EC7;
        width: 30px;
        height: 50px;
        margin-right: -8px;
    }
    .side-right .circle-container{
        transform: rotate(180deg);
        width: 30px;
        height: 50px;
        margin-right: -4px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .side-right .circle-container .row{
        display: flex;
        gap: 4px;
    }
    .side-right .circle-container .row .circle{
        width: 6px;
        height: 6px;
        border-radius: 50px;
        background-color: #866EC7;
    }
    .side-right .text-left{
        /*transform: rotate(180deg);*/
        white-space: nowrap;
        writing-mode: vertical-lr;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        /* line-height: 64px; */
    }
    .about-me{
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .about-me .card{
        background-color: #866EC7;
        width: 188px;
        height: 288px;
        border-bottom-right-radius: 40px;
    }
    .social-media-container{
        grid-column: 2 / 4;
        grid-row: 3 / 4;
        display: flex;
        justify-content: end;
        align-items: center;
    }
    .social-media-container .social-media {
        display: flex;
        gap: 4px;
        padding: 4px 10px;
        border-bottom: 3px solid #866EC7;
    }
    .scrolling-icon{
        grid-column: 2 / 3;
        grid-row: 4 / 5;
        display: flex;
        justify-content: center;
        align-items: center;

    }
</style>