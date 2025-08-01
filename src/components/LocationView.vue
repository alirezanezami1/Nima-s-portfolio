<script setup>
import BtnTitle from './BtnTitle.vue'
</script>

<template>
  <div class="flex justify-center flex-col items-center relative background4">
    <div
      class="flex justify-center items-center md:w-[364px] w-[333px] md:h-[364px] h-[330px] absolute md:-top-[65px] -top-[62px] z-10"
    >
      <img src="../assets/images/location/image (1).png" alt="" />
    </div>
    <div class="absolute z-20 -top-8 left-0">
      <BtnTitle title="My Location" class="bg-white" />
    </div>
    <div class="inline-flex flex-col justify-center items-center z-40 absolute top-52">
      <p class="text-[32px] font-semibold leading-[140%] text-textColor2">Gonbad-e Kavus</p>
      <p class="text-[20px] font-normal leading-[140%] text-textColor">Golestan , Iran</p>
    </div>
    <div
      class="background4 md:w-[370px] w-[345px] md:h-[380px] h-[345px] absolute z-30 md:-top-20 -top-10 rounded-e-[35px] rounded-b-[35px]"
    ></div>
  </div>
</template>

<style>
.background4 {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
}
</style>
