<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import WaveSurfer from 'wavesurfer.js'

const props = defineProps({
  audioUrl: {
    type: String,
    required: true,
  },
  // پراپرتی جدید برای دریافت زمان کل از دیتابیس
  totalDurationSeconds: {
    type: Number,
    default: 0,
  },
})

const waveform = ref(null)
const wavesurferInstance = ref(null)
const isPlaying = ref(false)

// وضعیت‌های زمانی برای نمایش در تمپلیت
const currentTime = ref(0)
const totalDuration = ref(props.totalDurationSeconds)

// محاسبه زمان باقی‌مانده به صورت شمارش معکوس
const remainingTime = computed(() => {
  return Math.max(0, totalDuration.value - currentTime.value)
})

// تابع برای فرمت کردن زمان
function formatDuration(seconds) {
  if (isNaN(seconds) || seconds < 0) return '00:00'
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
}

onMounted(() => {
  if (waveform.value) {
    wavesurferInstance.value = WaveSurfer.create({
      container: waveform.value,
      url: props.audioUrl,
      waveColor: '#E5E7EB',
      progressColor: '#F97316',
      height: 32,
      barWidth: 4,
      cursorWidth: 0,
      barGap: 4,
      barRadius: 4,
    })

    // Event Listeners
    wavesurferInstance.value.on('play', () => {
      isPlaying.value = true
    })
    wavesurferInstance.value.on('pause', () => {
      isPlaying.value = false
    })
    wavesurferInstance.value.on('finish', () => {
      isPlaying.value = false
      currentTime.value = 0
    })

    // فقط زمان فعلی را آپدیت می‌کنیم
    wavesurferInstance.value.on('timeupdate', (time) => {
      currentTime.value = time
    })

    // برای اطمینان، زمان کل را بعد از آماده شدن هم ست می‌کنیم
    wavesurferInstance.value.on('ready', (duration) => {
      totalDuration.value = duration
    })
  }
})

onBeforeUnmount(() => {
  if (wavesurferInstance.value) {
    wavesurferInstance.value.destroy()
  }
})

const togglePlay = () => {
  if (wavesurferInstance.value) {
    wavesurferInstance.value.playPause()
  }
}
</script>

<template>
  <div
    class="flex relative items-center w-[340px] justify-center gap-4 border-4 border-borderColor shadow-menuShadow bg-white py-3 pr-5 pl-3 rounded-full"
  >
    <button
      @click="togglePlay"
      class="w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center rounded-full"
    >
      <span
        v-if="!isPlaying"
        class="p-[14px] rounded-full flex justify-center items-center w-[48px] aspect-square border-[1px] border-borderColor2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M17.0071 7.79378C18.7754 8.75535 18.7754 11.2446 17.0071 12.2061L6.33051 18.0121C4.61196 18.9466 2.5 17.7302 2.5 15.8059L2.5 4.19404C2.5 2.26969 4.61196 1.05331 6.33051 1.98786L17.0071 7.79378Z"
            fill="#212121"
          />
        </svg>
      </span>
      <span
        v-else
        class="p-[14px] rounded-full flex justify-center items-center w-[48px] aspect-square border-[1px] border-borderColor2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M1.66675 4.99996C1.66675 3.42861 1.66675 2.64294 2.1549 2.15478C2.64306 1.66663 3.42873 1.66663 5.00008 1.66663C6.57143 1.66663 7.3571 1.66663 7.84526 2.15478C8.33341 2.64294 8.33341 3.42861 8.33341 4.99996V15C8.33341 16.5713 8.33341 17.357 7.84526 17.8451C7.3571 18.3333 6.57143 18.3333 5.00008 18.3333C3.42873 18.3333 2.64306 18.3333 2.1549 17.8451C1.66675 17.357 1.66675 16.5713 1.66675 15V4.99996Z"
            fill="#212121"
          />
          <path
            d="M11.6667 4.99996C11.6667 3.42861 11.6667 2.64294 12.1549 2.15478C12.6431 1.66663 13.4287 1.66663 15.0001 1.66663C16.5714 1.66663 17.3571 1.66663 17.8453 2.15478C18.3334 2.64294 18.3334 3.42861 18.3334 4.99996V15C18.3334 16.5713 18.3334 17.357 17.8453 17.8451C17.3571 18.3333 16.5714 18.3333 15.0001 18.3333C13.4287 18.3333 12.6431 18.3333 12.1549 17.8451C11.6667 17.357 11.6667 16.5713 11.6667 15V4.99996Z"
            fill="#212121"
          />
        </svg>
      </span>
    </button>
    <div ref="waveform" class="w-full"></div>
    <div class="text-[16px] font-medium leading-[140%] text-textColor2">
      <span>{{ formatDuration(remainingTime) }}</span>
    </div>
    <!-- //// svg  -->
    <div class="absolute w-[72px] h-[42px] bottom-[-38px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="34"
        viewBox="0 0 72 34"
        fill="none"
      >
        <path
          d="M23.8519 27.8272C30.2374 35.277 41.7626 35.277 48.1481 27.8272L72 0H0L23.8519 27.8272Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>
