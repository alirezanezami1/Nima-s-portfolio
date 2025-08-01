<script setup>
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const active = ref('Getting to know')
const activeSlide = ref(0)

const items = ref([
  {
    id: '01',
    title: 'Getting to know',
    name: 'Getting to know',
    description:
      "In the first stage, we'll have a Discovery Call to discuss your business goals, user needs, and project requirements. This helps us align our vision and set a clear path forward.",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="3" viewBox="0 0 64 3" fill="none"><path d="M4 0H0V8H4V0ZM60 8C62.2091 8 64 6.20914 64 4C64 1.79086 62.2091 0 60 0V8ZM4 4V8H60V4V0H4V4Z" fill="url(#paint0_linear_833_1006)"/><defs><linearGradient id="paint0_linear_833_1006" x1="4" y1="4.5" x2="60" y2="4.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FA6B11" stop-opacity="0"/><stop offset="1" stop-color="#FA6B11"/></linearGradient></defs></svg>',
  },
  {
    id: '02',
    title: 'Research',
    name: 'Research & Analysis',
    description:
      'Here, we define the structure and user experience. Using wireframes, we plan user flows, content hierarchy, and overall layout without focusing on visual details yet.',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="132" height="3" viewBox="0 0 132 3" fill="none"><path d="M4 0H0V8H4V0ZM128 8C130.209 8 132 6.20914 132 4C132 1.79086 130.209 0 128 0V8ZM4 4V8H128V4V0H4V4Z" fill="url(#paint0_linear_49_2756)"/><defs><linearGradient id="paint0_linear_49_2756" x1="4" y1="4.5" x2="128" y2="4.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FA6B11" stop-opacity="0"/><stop offset="1" stop-color="#FA6B11"/></linearGradient></defs></svg>',
  },
  {
    id: '03',
    title: 'UX Design',
    name: 'Wireframing & UX Design',
    description:
      "At this stage, I conduct research on the market, competitors, and user behavior to gain insights into the project's context. These findings guide future design decisions.",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="180" height="3" viewBox="0 0 180 3" fill="none"><path d="M4 0H0V8H4V0ZM176 8C178.209 8 180 6.20914 180 4C180 1.79086 178.209 0 176 0V8ZM4 4V8H176V4V0H4V4Z" fill="url(#paint0_linear_49_2760)"/><defs><linearGradient id="paint0_linear_49_2760" x1="4" y1="4.5" x2="176" y2="4.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FA6B11" stop-opacity="0"/><stop offset="1" stop-color="#FA6B11"/></linearGradient></defs></svg>',
  },
  {
    id: '04',
    title: 'UI Design',
    name: 'UI Design',
    description:
      'Once the UX is approved , I move on to the visual design phase . This includes defining colors , typography , icons , and graphic elements to create a polished interface that reflects your brand.',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="232" height="3" viewBox="0 0 232 3" fill="none"><path d="M4 0H0V8H4V0ZM228 8C230.209 8 232 6.20914 232 4C232 1.79086 230.209 0 228 0V8ZM4 4V8H228V4V0H4V4Z" fill="url(#paint0_linear_49_2764)"/><defs><linearGradient id="paint0_linear_49_2764" x1="4" y1="4.5" x2="228" y2="4.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FA6B11" stop-opacity="0"/><stop offset="1" stop-color="#FA6B11"/></linearGradient></defs></svg>',
  },
  {
    id: '05',
    title: 'Handoff',
    name: ' Handoff & Support',
    description:
      'After finalizing the design, I prepare and deliver organized files for developers. I also provide support during implementation and remain available to address any design-related questions.',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="285" height="3" viewBox="0 0 285 3" fill="none"><path d="M4 0H0V8H4V0ZM285 8C287.209 8 289 6.20914 289 4C289 1.79086 287.209 0 285 0V8ZM4 4V8H285V4V0H4V4Z" fill="url(#paint0_linear_50_2768)"/><defs><linearGradient id="paint0_linear_50_2768" x1="4" y1="4.5" x2="285" y2="4.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FA6B11" stop-opacity="0"/><stop offset="1" stop-color="#FA6B11"/></linearGradient></defs></svg>',
  },
])

const filtered = computed(() => {
  return items.value.filter((item) => item.title === active.value)
})

const onSlideChange = (swiper) => {
  activeSlide.value = swiper.activeIndex
}
</script>

<template>
  <section id="how-i-work">
    <!-- //// desktop  -->
    <div class="hidden md:flex flex-col justify-center items-start gap-6">
      <div class="flex justify-between items-start flex-shrink-0 w-full rounded-[50px] bg-mainBg">
        <button
          v-for="item in items"
          :key="item.id"
          class="px-6 py-3 text-[16px] font-medium leading-[140%]"
          @click="active = item.title"
          :class="{
            'bg-white border-[1px] border-borderColor2 rounded-full flex gap-[10px] justify-center items-center':
              active === item.title,
          }"
        >
          {{ item.title }}
        </button>
      </div>
      <div class="flex flex-col justify-center items-start gap-5">
        <div class="relative h-[64px] w-full flex items-end">
          <span class="text-textColor4 text-[64px] font-bold leading-[140%] absolute -bottom-1">{{
            filtered[0].id
          }}</span>
          <p class="text-[24px] font-bold leading-[140%] text-textColor2 text-start">
            {{ filtered[0].name }}
          </p>
        </div>
        <p class="text-[18px] font-medium leading-[140%] text-textColor">
          {{ filtered[0].description }}
        </p>
      </div>
    </div>

    <!-- //// mobile  -->
    <div class="md:hidden h-full">
      <Swiper
        :modules="[Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="20"
        :pagination="{
          clickable: true,
          type: 'bullets',
          dynamicBullets: false,
          dynamicMainBullets: 1,
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        @slide-change="onSlideChange"
        class="how-i-work-swiper"
      >
        <SwiperSlide v-for="(item, index) in items" :key="item.id" class="px-4">
          <div class="relative flex flex-col justify-center items-center">
            <!-- Step Indicator -->
            <div
              class="w-[295px] flex items-center justify-center text-[16px] leading-[140%] font-medium relative mb-6 py-[10px] border-[1px] border-borderColor2 rounded-[50px]"
            >
              <div class="absolute left-4">
                <span class="text-textColor4">{{ item.id }}</span>
              </div>
              <span class="text-textColor2">{{ item.title }}</span>
              <div
                class="absolute -left-1 bottom-0"
                :class="index === 0 ? 'left-1' : index === 4 ? '-left-2' : 'left-0'"
                v-html="item.svg"
              ></div>
            </div>

            <div class="relative h-[56px] w-full flex items-end mt-4">
              <span
                class="text-textColor4 text-[64px] font-bold leading-[140%] absolute -bottom-3"
                >{{ item.id }}</span
              >
              <p class="text-[20px] font-bold leading-[140%] text-textColor2 text-start">
                {{ item.name }}
              </p>
            </div>

            <div class="relative z-10 w-full mt-4">
              <p class="text-[18px] font-medium text-textColor leading-[25px]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.how-i-work-swiper {
  --swiper-pagination-color: #fa6b11;
  --swiper-pagination-bullet-inactive-color: #e5e7eb;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-horizontal-gap: 4px;
}

/* Enhanced Pagination Styling */
:deep(.swiper-pagination) {
  position: relative !important;
  bottom: 10px !important;
  left: 0 !important;
  width: 100% !important;
  text-align: center !important;
  padding: 16px 0 !important;
}

:deep(.swiper-pagination-bullet) {
  width: 12px !important;
  height: 8px !important;
  border-radius: 50px !important;
  background: #f7f8f9 !important;
  opacity: 1 !important;
  margin: 0 6px !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  display: inline-block !important;
}

:deep(.swiper-pagination-bullet:hover) {
  background: #d1d5db !important;
  transform: scale(1.05) !important;
}

:deep(.swiper-pagination-bullet:hover) {
  background: #e5e7eb !important;
  transform: scale(1.1) !important;
}

:deep(.swiper-pagination-bullet-active) {
  background: #fa6b11 !important;
  width: 24px !important;
  height: 8px !important;
  border-radius: 50px !important;
  transform: scale(1.1) !important;
  box-shadow: 0 2px 4px rgba(250, 107, 17, 0.3) !important;
}

:deep(.swiper-pagination-bullet-active:hover) {
  background: #fa6b11 !important;
  transform: scale(1.15) !important;
}
</style>
