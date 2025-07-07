<script setup>
defineProps({
  colorWave: {
    type: String,
    default: 'waveColor',
  },
})
</script>

<template>
  <div class="relative flex items-center justify-center p-[5px]">
    <span class="absolute h-[10px] w-[10px] rounded-full bg-waveColorG"></span>

    <span class="h-5 w-5 animate-ping-fast rounded-full bg-waveColorG2"></span>
  </div>
</template>
