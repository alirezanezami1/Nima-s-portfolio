<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useSupabaseData } from '@/composables/useSupabaseData'
import AudioPlayer from './AudioPlayer.vue'

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
  <div class="w-full bg-white flex justify-between items-center" v-else>
    چپ
    <Swiper :slides-per-view="'1'" :space-between="6" class="w-[388px]">
      <SwiperSlide v-for="comment in comments" :key="comment.id" class="w-[388px]">
        <div class="flex flex-col w-full items-center gap-[38px]">
          <AudioPlayer
            :audio-url="comment.audio_url"
            :total-duration-seconds="comment.duration_in_seconds"
            class="w-full"
          />
          <div class="flex flex-col justify-center items-center gap-4">
            <div class="flex justify-center items-center w-[56px]">
              <img
                :src="comment.author_avatar_url"
                alt="profile"
                class="rounded-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    راست
  </div>
</template>
