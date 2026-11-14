
<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import playList1 from '@/assets/images/playList/Frame 92.png'
import playList2 from '@/assets/images/playList/Frame 93.png'
import playList3 from '@/assets/images/playList/Frame 94.png'

const PlayList = ref([
  { name: 'Imagine Dragons', cover: playList1 },
  { name: 'Shayea', cover: playList2 },
  { name: 'Arcane', cover: playList3 },
])

const activeIndex = ref(1)

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex
}
</script>

<template>
  <div
    class="relative flex flex-col justify-center items-center gap-3 pb-6 w-full min-w-0 min-h-[320px] mt-auto"
  >
    <!-- Playlist Slider -->
    <Swiper
      :slides-per-view="'auto'"
      :space-between="0"
      :centered-slides="true"
      :initial-slide="1"
      :loop="false"
      :grab-cursor="true"
      :allow-touch-move="true"
      class="playlist-swiper w-full"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        v-for="(item, index) in PlayList"
        :key="item.name"
        class="playlist-slide"
        :class="{ 'playlist-slide-active': index === activeIndex }"
      >
        <div class="flex flex-col justify-center items-center w-full">
          <img
            :src="item.cover"
            :alt="item.name"
            class="playlist-cover"
          />

          <p
            v-if="index === activeIndex"
            class="text-center text-[18px] md:text-[20px] font-semibold leading-[140%] text-textColor2 mt-3 whitespace-nowrap"
          >
            {{ item.name }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- SoundCloud Button -->
    <a
      class="flex justify-center items-center gap-2 cursor-pointer relative z-50 "
      href="https://soundcloud.com/nima-masoumi-566658420"
      target="_blank"
      rel="noopener noreferrer"
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

      <p class="text-[16px] leading-[140%] text-textColor">
        Play On Soundcloud
      </p>
    </a>
    <div class="background2 pointer-events-none"></div>
  </div>
</template>

<style scoped>
.background2 {
  z-index: 10;
}

.playlist-swiper {
  width: 100%;
  min-width: 0;
  overflow: hidden;
  padding-top: 20px;
  padding-bottom: 30px;
}

.playlist-slide {
  width: min(156px, 44%);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(24px) scale(0.82);
  opacity: 0.85;
  transition:
    transform 0.35s ease,
    opacity 0.35s ease;
}

.playlist-slide-active {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.playlist-cover {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 24px;
}
</style>
