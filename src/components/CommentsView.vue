<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useSupabaseData } from '@/composables/useSupabaseData'
import AudioPlayer from './AudioPlayer.vue'
import { ref } from 'vue'

import ArrowRight from './icons/ArrowRight.vue'
import ArrowLeft from './icons/ArrowLeft.vue'

const swiperInstance = ref(null)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const goNext = () => {
  swiperInstance.value?.slideNext()
}
const goPrev = () => {
  swiperInstance.value?.slidePrev()
}

const {
  data: comments,
  isLoading,
  error,
} = useSupabaseData('comments', {
  orderBy: 'created_at',
  ascending: false,
})
</script>

<template>
  <div v-if="isLoading"></div>
  <div v-else-if="error">مشکل در ارتباط با سرور</div>
  <div
    class="w-full custom-swiper-container bg-transparent flex justify-center -mt-4 items-center relative"
    v-else
  >
    <div class="absolute top-1/2 -translate-y-1/2 flex justify-between w-full z-10">
      <button
        @click="goPrev"
        class="w-[56px] h-[56px] p-4 bg-white rounded-full shadow-menuShadow flex items-center justify-center ml-8"
      >
        <ArrowLeft />
      </button>
      <button
        @click="goNext"
        class="w-[56px] h-[56px] p-4 bg-white rounded-full shadow-menuShadow flex items-center justify-center mr-8"
      >
        <ArrowRight />
      </button>
    </div>

    <Swiper
      @swiper="onSwiper"
      :modules="[Pagination]"
      :slides-per-view="'1'"
      :space-between="6"
      :loop="true"
      :pagination="{ clickable: true }"
      class="w-full"
    >
      <SwiperSlide v-for="comment in comments" :key="comment.id" class="">
        <div class="flex flex-col w-full items-center gap-[38px]">
          <AudioPlayer
            :audio-url="comment.audio_url"
            :total-duration-seconds="comment.duration_in_seconds"
            class="w-[388px]"
          />
          <div class="flex flex-col justify-center items-center gap-4">
            <div class="flex justify-center items-center w-[56px]">
              <img
                :src="comment.author_avatar_url"
                alt="profile"
                class="rounded-full aspect-square object-cover"
              />
            </div>
            <div class="flex flex-col justify-center items-center gap-1 self-stretch">
              <p class="text-[18px] font-bold leading-[140%] text-textColor2">
                {{ comment.author_name }}
              </p>
              <p class="text-[16px] font-medium leading-[140%] text-textColor">
                {{ comment.author_subtitle }}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="background"></div>
  </div>
</template>

<style scoped>
.custom-swiper-container :deep(.swiper-pagination-bullet) {
  @apply bg-[#F7F8F9] w-3 h-2 rounded-[50px] opacity-100 relative top-0 block md:hidden;
  transition: all 0.3s ease;
}

.custom-swiper-container :deep(.swiper-pagination-bullet-active) {
  @apply bg-[#FA6B11] w-6 rounded-[50px];
}
</style>
