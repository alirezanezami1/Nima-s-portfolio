<script setup>
defineProps({
  colorWave: {
    type: String,
    default: 'bg-waveColorG',
  },
  colorWave2: {
    type: String,
    default: 'bg-waveColorG2',
  },
})
</script>

<template>
  <div class="relative flex items-center justify-center p-[5px]">
    <span :class="[`absolute h-[10px] w-[10px] rounded-full`, colorWave]"></span>

    <span :class="[`h-5 w-5 animate-ping-fast rounded-full `, colorWave2]"></span>
  </div>
</template>
