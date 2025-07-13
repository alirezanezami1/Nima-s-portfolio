<script setup>
import statusBtn from './statusBtn.vue'
import ArrowBottom from './icons/ArrowBottom.vue'
import { computed, ref } from 'vue'

const txtAboutMe = ref(
  ' I believe that a successful user experience design begins with empathy for the users.Design, for me, is a tool to create positive, lasting human, personal, and social values. As a UX/UI designer, I strive to turn user problems into opportunities for innovation. My goal is to create experiences that not only address challenges but also leave a meaningful and memorable impact on users lives, while achieving business objectives.',
)

const showMore = ref(false)

const slicedTxt = computed(() => {
  return `${txtAboutMe.value.slice(0, 98)}...`
})
</script>
<template>
  <div class="flex flex-col justify-center items-center gap-8 pt-3">
    <!-- /// intro  -->
    <div class="flex flex-col justify-center items-center">
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
          <p class="text-textColor2 font-semibold block md:hidden -mt-7">masoumi !</p>
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
    <div
      class="flex flex-col justify-center items-start gap-[10px] rounded-2xl border-[1px] border-borderColor2 px-6 pt-6 pb-3"
    >
      <div class="flex justify-center items-center flex-col self-stretch gap-4">
        <div class="flex flex-col justify-center items-center self-stretch gap-4">
          <p class="text-textColor2 text-ellipsis text-[20px] leading-7 font-semibold">About me</p>
          <p class="text-textColor text-ellipsis text-[20px] leading-7 font-normal" v-if="showMore">
            {{ txtAboutMe }}
          </p>
          <p
            class="text-textColor text-ellipsis text-[20px] leading-7 font-normal"
            v-if="!showMore"
          >
            {{ slicedTxt }}
          </p>
          <div
            class="flex justify-center items-center gap-2 h-[40px] rounded-full text-textColor3 text-[16px] font-medium leading-[140%]"
            @click="showMore = !showMore"
          >
            Show <span v-if="!showMore">More</span> <span v-if="showMore">less</span>
            <ArrowBottom :class="{ 'transform rotate-180': showMore }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
