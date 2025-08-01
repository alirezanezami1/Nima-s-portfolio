<template>
  <div class="flex relative flex-col justify-center items-center w-full gap-1">
    <Swiper
      :slides-per-view="2"
      :space-between="24"
      :centered-slides="true"
      :initial-slide="1"
      class="w-full h-[200px] flex justify-center items-center z-50"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        v-for="(item, index) in PlayList"
        :key="index"
        class="flex flex-col justify-center items-center relative -bottom-6 z-50"
        :class="{ 'relative -top-0': index === activeIndex }"
      >
        <img :src="item.cover" alt="playlist cover" class="rounded-3xl w-[156px]" />
        <p
          class="text-center relative md:-left-2 md:text-[20px] text-[18px] left-0 font-semibold leading-[140%] text-textColor2 mt-2"
          v-if="index === activeIndex"
        >
          {{ item.name }}
        </p>
      </SwiperSlide>
    </Swiper>

    <!-- //// btn  -->
    <a
      class="flex justify-center items-center gap-2 relative -left-2 cursor-pointer z-50"
      href="https://soundcloud.com/nima-masoumi-566658420"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
      >
        <path
          d="M14.1057 6.23473C15.5203 7.00399 15.5203 8.99536 14.1057 9.76462L5.56441 14.4094C4.18957 15.157 2.5 14.1839 2.5 12.6444L2.5 3.35494C2.5 1.81546 4.18957 0.842356 5.56441 1.58999L14.1057 6.23473Z"
          stroke="#FA6B11"
          stroke-width="1.5"
        />
      </svg>
      <p class="text-[16px] leading-[140%] text-textColor">Play On Soundcloud</p>
    </a>
    <div class="background3 md:w-[380px] w-[345px] md:h-[232px] h-[232px] z-0"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import playList1 from '@/assets/images/playList/Frame 92.png'
import playList2 from '@/assets/images/playList/Frame 93.png'
import playList3 from '@/assets/images/playList/Frame 94.png'

const PlayList = ref([
  { name: 'Amagine Dragons', cover: playList1 },
  { name: 'Shayea', cover: playList2 },
  { name: 'Arcane', cover: playList3 },
])

const activeIndex = ref(1)

// Update activeIndex when slide changes
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex
}
</script>

<style>
.background3 {
  position: absolute;
  bottom: -25px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
}
</style>
