<script setup>
import ArrowBottom from '@/components/icons/ArrowBottom.vue'
import mouseIcon from '@/components/icons/mouseIcon.vue'
</script>
<template>
  <div class="flex flex-col justify-center py-12 md:py-16">
    <div class="flex justify-center items-center self-stretch p-2 aspect-square">
      <mouseIcon class="w-[24px]" />
    </div>
    <div class="flex justify-center items-center self-stretch p-2 aspect-square">
      <ArrowBottom class="w-[24px]" color="#868686" />
    </div>
  </div>
</template>
