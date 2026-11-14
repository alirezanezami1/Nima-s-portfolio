<script setup>
import BtnTitle from './BtnTitle.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center relative w-full min-w-0 max-md:min-h-[345px]">
    <div
      class="flex justify-center items-center w-full h-full"
    >
      <img src="../assets/images/location/image.jpg" alt="location" class="rounded-[40px] object-cover self-stretch" />
    </div>
    <div class="absolute top-6 left-6">
      <BtnTitle title="My Location" class="bg-white" />
    </div>
    <div class="flex flex-col justify-center items-center z-40 fixed bottom-6">
      <p class="text-[32px] font-semibold leading-[140%] text-textColor2">Tehran</p>
      <p class="text-[20px] font-normal leading-[140%] text-textColor">Tehran , Iran</p>
    </div>
    <div class="backgroundLocation"></div>
  </div>
</template>

<style>
.backgroundLocation {
  position: absolute;
  width: 100% !important;
  left: 0px !important;
  height: 100% !important;
  bottom: -8px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
}
</style>
