<script setup>
import waveBtn from './waveBtn.vue'

defineProps({
  title: String,
})
</script>
<template>
  <div class="flex justify-center items-center py-2 pr-4 pl-3 gap-1 rounded-full shadow-menuShadow">
    <waveBtn colorWave="bg-waveColorO" colorWave2="bg-waveColorO2" />
    <p class="text-[16px] font-medium leading-[140%] text-textColor2">{{ title }}</p>
  </div>
</template>
