<script setup>
import statusBtn from './statusBtn.vue'
import ArrowBottom from './icons/ArrowBottom.vue'
import CallModal from './CallModal.vue'
import { computed, ref } from 'vue'
import { useSupabaseData } from '@/composables/useSupabaseData'
import MouseAboutRight from './icons/MouseAboutRight.vue'
import MouseAboutLeft from './icons/MouseAboutLeft.vue'

const txtAboutMe = ref(
  ' I believe that a successful user experience design begins with empathy for the users.Design, for me, is a tool to create positive, lasting human, personal, and social values. As a UX/UI designer, I strive to turn user problems into opportunities for innovation. My goal is to create experiences that not only address challenges but also leave a meaningful and memorable impact on users lives, while achieving business objectives.',
)

const showMore = ref(false)
const showModal = ref(false)

const slicedTxt = computed(() => {
  return `${txtAboutMe.value.slice(0, 98)}...`
})

const { data: mouse_txt } = useSupabaseData('mouse_txt', {
  orderBy: 'created_at',
  ascending: false,
})

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <section id="about">
    <div
      class="flex flex-col justify-center items-center gap-8 md:gap-8 pt-[150px] md:pt-[186px] relative"
    >
      <!-- /// intro  -->
      <div class="flex flex-col justify-center items-center md:gap-[40px]">
        <statusBtn />

        <div class="flex flex-col justify-center items-center gap-2 md:gap-0 self-stretch">
          <div
            class="px-1 md:px-0 flex flex-col justify-center items-center text-center text-[32px] md:text-[48px] leading-[175%] md:leading-none"
          >
            <p class="flex justify-center items-center self-stretch h-[112px]">
              <span class="text-textColor font-light">Hi I'm</span>
              <img
                src="../assets/images/Frame 1.png"
                class="w-[56px] md:w-[80px] h-[56px] md:h-[80px] mx-4"
                alt="logo"
              />
              <span class="text-textColor2 font-semibold">
                Nima <span class="hidden md:inline">masoumi !</span>
              </span>
            </p>
            <p class="text-textColor2 font-semibold block md:hidden -mt-7">masoumi !</p>
          </div>

          <p
            class="text-[24px] md:text-[40px] leading-[140%] flex justify-center items-center gap-2 text-textColor font-light text-center"
          >
            I'm a <span class="text-textColor2 font-normal">freelance</span>
            <span class="text-textColor3 font-bold">UIUX Designer</span>
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center gap-4 mb-10">
        <a
          href="#projects"
          class="px-6 py-3 text-[16px] leading-[20px] font-medium flex justify-center items-center gap-[10px] rounded-full border-[1px] border-borderColor2 bg-mainBg text-textColor2"
          ><button>My project</button></a
        >
        <button
          @click="openModal"
          class="px-6 py-3 text-[16px] leading-[20px] font-medium flex justify-center items-center gap-[10px] rounded-full border-[1px] border-borderColor6 bg-textColor2 text-white"
        >
          Book a call
        </button>
      </div>

      <!-- /// about me  -->
      <div
        class="flex flex-col justify-center items-start gap-[10px] rounded-2xl border-[1px] border-borderColor2 px-6 pt-6 pb-3 md:pb-6"
      >
        <div class="flex justify-center items-center flex-col self-stretch gap-4">
          <div class="flex flex-col justify-center items-center self-stretch gap-4 text-center">
            <p
              class="text-textColor2 text-ellipsis text-[20px] md:text-[24px] leading-7 font-semibold"
            >
              About me
            </p>
            <p
              class="text-textColor text-ellipsis text-[20px] leading-7 font-normal hidden md:block"
            >
              {{ txtAboutMe }}
            </p>
            <p
              class="text-textColor text-ellipsis text-[20px] leading-7 font-normal block md:hidden"
              v-if="showMore"
            >
              {{ txtAboutMe }}
            </p>
            <p
              class="text-textColor text-ellipsis text-[20px] leading-7 font-normal block md:hidden"
              v-if="!showMore"
            >
              {{ slicedTxt }}
            </p>
            <div
              class="flex md:hidden justify-center items-center gap-1 h-[40px] rounded-full text-textColor3 text-[16px] font-medium leading-[140%]"
              @click="showMore = !showMore"
            >
              Show <span v-if="!showMore">More</span> <span v-if="showMore">less</span>
              <ArrowBottom :class="{ 'transform rotate-180': showMore }" />
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-[297px] right-[144px] animate-float-slow hidden md:block">
        <div class="relative">
          <MouseAboutRight />
          <div class="absolute left-3">
            <div
              class="text-[14px] font-medium leading-[20px] text-white bg-[#36C1FF] py-1 px-3 rounded-e-[8px] rounded-bl-[8px]"
            >
              {{ mouse_txt[0]?.right }}
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-[210px] left-[164px] animate-float-slow-delayed hidden md:block">
        <div class="relative">
          <MouseAboutLeft />
          <div class="absolute -left-11">
            <div
              class="text-[14px] font-medium leading-[20px] text-white bg-[#9F65FF] py-1 px-3 rounded-s-[8px] rounded-br-[8px]"
            >
              {{ mouse_txt[0]?.left }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <CallModal v-if="showModal" @close="closeModal" />
  </section>
</template>

<style scoped>
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes float-slow-delayed {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-float-slow {
  animation: float-slow 4s ease-in-out infinite;
}

.animate-float-slow-delayed {
  animation: float-slow-delayed 3.5s ease-in-out infinite;
  animation-delay: 0.5s;
}
</style>
