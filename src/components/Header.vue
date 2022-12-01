<script setup lang="ts">
import WaruLogo from '@/assets/logo.png'
const routes = [
    {
        icon: 'las la-pen',
        name: 'Minter',
        url: '/minter'
    },
    {
        icon: 'las la-user',
        name: 'My Nfts',
        url: '/my-nfts'
    },
    {
        icon: 'las la-exchange-alt',
        name: 'Transfer',
        url: '/xpr'
    },
]

</script>

<template>
    <header class="max-w-screen-xl mx-auto w-full flex justify-between h-10 py-7 xl:px-0 px-3 items-center">
        <router-link to="/">
            <div class="ss:hidden xs:flex flex-none">
                <img alt="OpenSwap" :src="WaruLogo" class="ss:h-6 xs:h-10" />
            </div>
            <div class="ss:flex xs:hidden flex-none">
                <img alt="OpenSwap" :src="WaruLogo" class="ss:h-6" />
            </div>
        </router-link>
        <div class="flex items-center lg:space-x-0 space-x-1 text-gray-500 ">
            <router-link v-for="route in routes" :to="route.url"
                class="flex items-center space-x-2 p-2 px-1 md:px-3 rounded-lg  outline-none hover:text-waruGreen-accent">
                <i :class="route.icon" class="text-xl "></i>
                <p class="text-sm hidden md:block ">{{ route.name }}</p>
            </router-link>
        </div>
    </header>
<div id="WaruXswap"></div>
<script src="https://app.debridge.finance/assets/scripts/widget.js"></script>
<script>
deBridge.widget({"v":"1","element":"WaruXswap","title":"WaruXswap","width":"600","height":"800","r":4631,"affiliateFeePercent":"0.3","affiliateFeeRecipient":"0x9fdcf9e4c3b9c8606803fada2734fabda2d24dc8","supportedChains":"{\"inputChains\":{\"1\":\"all\",\"56\":\"all\",\"137\":\"all\",\"42161\":\"all\",\"43114\":\"all\"},\"outputChains\":{\"1\":\"all\",\"56\":\"all\",\"137\":\"all\",\"42161\":\"all\",\"43114\":\"all\"}}","inputChain":137,"outputChain":137,"inputCurrency":"","outputCurrency":"0xe3627374ac4baf5375e79251b0af23afc450fc0e","address":"","showSwapTransfer":true,"amount":"25","lang":"en","mode":"deswap","isEnableBundle":false,"styles":"eyJiYWRnZSI6IiM5MzkzOTMiLCJib3JkZXJSYWRpdXMiOjgsInByaW1hcnkiOiJyZ2JhKDU2LDI1NSwxMDksMC43MSkiLCJmb250RmFtaWx5IjoiIn0=","theme":"dark"}) 
</script>

</template>
