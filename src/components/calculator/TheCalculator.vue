<template>
    <div class="calculator-container">
        <div class="calculator">
            <div class="calculator-result">
                <span class="operation">10 + 9 = </span>
                <span class="result"> 19 </span>
            </div>
            <div class="calculator-grid">
                <div class="item erase-all">C</div>
                <div class="item erase"> ◄ </div>
                <div class="item percentage"> % </div>
                <div class="item divide"> / </div>
                <div class="item numbers">
                    <span
                        v-for="number in 9"
                        :key="number"
                        :class="`number number-${number}`"
                    >
                        {{ number }}
                    </span>
                </div>
                <div class="item point"> * </div>
                <div class="item point"> - </div>
                <div class="item point"> + </div>
                
                <div class="item point"> . </div>
                <div class="item number-cero"> 0 </div>
                <div class="item result"> = </div>
            </div> 
        </div>
        
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    //const NUMBERS = [0,1,2,3,4,5,6,7,8,9, '.', 'remove'];
    const result = ref('');
</script>

<style lang="scss" scoped>
.calculator-container{
    @apply w-full h-full grid justify-center items-center;
    box-sizing: border-box;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23b9b7bb' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    .calculator{
        @apply w-full h-full bg-[#F5F5F5];
        max-width: 320px;
        max-height: 568px;
        box-sizing: border-box;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

        .calculator-result{
            @apply w-full h-44 bg-[#E7E7E9] grid justify-end items-end px-4 py-2 text-end;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 60px;
            & .operation{
                @apply italic;
            }
            & .result{
                @apply text-6xl;
            }
        }
        .calculator-grid{
            @apply grid grid-rows-4 grid-cols-4 gap-2 p-4 bg-[#F5F5F5];
            & .item{
                @apply rounded-2xl text-center cursor-pointer;
            }
            & .item:not(.numbers):active{ @apply bg-gray-500 text-[#E7E7E9]; }
            & .item:not(.numbers, .result){
                @apply w-16 h-16 grid justify-center items-center;
                box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 8px;
            }
            & .item.numbers{ 
                @apply row-start-2 row-end-5 col-start-1 col-end-4
                grid grid-rows-3 grid-cols-3 gap-2 ;
                & .number{
                    @apply rounded-2xl grid justify-center items-center ;
                    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 8px;
                }
                & .number:active{ @apply bg-gray-500 text-[#E7E7E9]; }
            }
            & .item.result{
                @apply 
                rounded-2xl
                row-start-5 row-end-6
                col-start-3 col-end-5
                grid justify-center items-center;
                box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 8px;
            }
        }
    }
}
</style>