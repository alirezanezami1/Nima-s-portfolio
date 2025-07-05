<script setup>
import menuView from './icons/menuView.vue'
import xView from './icons/xView.vue'
import { ref } from 'vue'
import profileView from './profileView.vue'
import resumeView from './resumeView.vue'
</script>

<template>
  <div
    class="flex p-[14px] gap-[10px] flex-col items-start w-full border-4 border-borderColor bg-mainBg2 rounded-[20px] shadow-menuShadow"
  >
    <div class="flex justify-between items-center self-stretch">
      <div class="flex justify-center items-center p-3 rounded-xl border-[1px] border-borderColor2">
        <menuView />
      </div>
      <profileView size="w-[44px] h-[44px] rounded-xl border-2" />
      <resumeView
        customClass="p-3 rounded-xl text-[16px] border-[1px] border-borderColor2"
        btnSize="w-auto h-auto"
      />
    </div>
  </div>
</template>
