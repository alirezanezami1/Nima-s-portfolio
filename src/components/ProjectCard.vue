<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import ArrowRightUp from './icons/ArrowRightUp.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})


const shouldEnableInfiniteScroll = (tags) => {
  return Array.isArray(tags) && tags.length > 1
}

const getAutoplaySettings = (tags) => {
  if (!shouldEnableInfiniteScroll(tags)) return false

  return {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    waitForTransition: true,
  }
}

const getDuplicatedTags = (tags) => {
  if (!Array.isArray(tags) || tags.length === 0) return []

  if (!shouldEnableInfiniteScroll(tags)) return tags

  return [...tags, ...tags, ...tags]
}

</script>

<template>
  <article class="flex w-full min-w-0 flex-col items-center justify-center gap-2 rounded-2xl">
    <div class="relative w-full min-w-0">
      <img
        :src="project.image_url"
        :alt="project.title"
        class="block h-auto w-full rounded-2xl bg-orange-200"
      />

      <div
        class="group absolute bottom-4 left-4 flex cursor-pointer items-center justify-end rounded-full border-[1.5px] border-borderColor2 bg-mainBg2 py-2 pl-2 pr-2 hover:pl-4 hover:pr-3"
      >
        <a
          :href="project.project_link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2"
        >
          <p
            class="block text-[16px] font-medium leading-[140%] sm:hidden sm:group-hover:block"
          >
            See More
          </p>
          <ArrowRightUp class="w-[20px] xl:w-[24px]" />
        </a>
      </div>
    </div>

    <div class="flex w-full min-w-0 flex-col items-start justify-center gap-3">
      <div class="flex w-full min-w-0 items-center justify-between gap-2">
        <div
          class="flex min-w-0 items-center gap-1 text-[16px] font-medium leading-[140%] lg:text-[10px] xl:text-[14px]"
        >
          <p class="truncate text-textColor3">{{ project.title }}</p>
          <p class="shrink-0 text-textColor2">Website</p>
        </div>

        <p
          class="shrink-0 text-[12px] font-normal leading-[140%] text-textColor lg:text-[10px] xl:text-[12px]"
        >
          {{ project.project_type }}
        </p>
      </div>


      <Swiper
        :slides-per-view="'auto'"
        :space-between="4"
        :modules="[Autoplay]"
        :autoplay="getAutoplaySettings(project.tags)"
        :speed="3000"
        :loop="shouldEnableInfiniteScroll(project.tags)"
        :loop-additional-slides="project.tags?.length || 0"
        :watch-overflow="false"
        class="tags-swiper w-full min-w-0 max-w-full"
      >
        <SwiperSlide
          v-for="(tag, index) in getDuplicatedTags(project.tags)"
          :key="`${tag}-${index}`"
          class="!w-auto"
        >
          <div
            class="flex items-center justify-center whitespace-nowrap rounded-full border border-borderColor2 px-3 py-2 text-[12px] font-normal leading-[140%] text-textColor2 sm:text-[14px] lg:text-[10px] xl:text-[12px]"
          >
            {{ tag }}
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  </article>
</template>
