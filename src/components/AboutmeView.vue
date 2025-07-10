<script setup>
import statusBtn from './statusBtn.vue'
</script>
<template>
  <div class="flex flex-col justify-center items-center gap-8 pt-10">
    <!-- /// intro  -->
    <div class="flex flex-col justify-center items-center gap-6">
      <statusBtn />

      <div class="flex flex-col justify-center items-center gap-2 md:gap-8 self-stretch">
        <div
          class="px-1 flex flex-col justify-center items-center text-center text-[32px] md:text-[48px] leading-[175%] md:leading-none"
        >
          <p class="flex justify-center items-center self-stretch h-[112px]">
            <span class="text-textColor font-light">Hi I’m</span>
            <img src="../assets/images/Frame 1.png" class="w-[56px] h-[56px] mx-3" alt="logo" />
            <span class="text-textColor2 font-semibold">
              Nima <span class="hidden md:inline">masoumi !</span>
            </span>
          </p>
          <p class="text-textColor2 font-semibold block md:hidden -mt-5">masoumi !</p>
        </div>

        <p
          class="text-[24px] md:text-[40px] leading-[140%] flex justify-center items-center gap-2 text-textColor font-light text-center"
        >
          I’m a <span class="text-textColor2 font-normal">freelance</span>
          <span class="text-textColor3 font-bold">UIUX Designer</span>
        </p>
      </div>
    </div>

    <!-- /// about me  -->
  </div>
</template>
