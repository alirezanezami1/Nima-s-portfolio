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
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><circle cx="8.83333" cy="5.00033" r="3.33333" stroke="#212121" stroke-width="1.5"/><ellipse cx="8.83333" cy="14.1663" rx="5.83333" ry="3.33333" stroke="#212121" stroke-width="1.5"/><path d="M16.333 1.66699C16.333 1.66699 17.9997 2.66699 17.9997 5.00033C17.9997 7.33366 16.333 8.33366 16.333 8.33366" stroke="#212121" stroke-width="1.5" stroke-linecap="round"/><path d="M14.667 3.33301C14.667 3.33301 15.5003 3.83301 15.5003 4.99967C15.5003 6.16634 14.667 6.66634 14.667 6.66634" stroke="#212121" stroke-width="1.5" stroke-linecap="round"/></svg>',
  },
  {
    id: '02',
    title: 'Research',
    name: 'Research & Analysis',
    description:
      'Here, we define the structure and user experience. Using wireframes, we plan user flows, content hierarchy, and overall layout without focusing on visual details yet.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><circle cx="10.0837" cy="9.58366" r="7.91667" stroke="#212121" stroke-width="1.5"/><path d="M15.917 15.417L18.8337 18.3337" stroke="#212121" stroke-width="1.5" stroke-linecap="round"/></svg>',
  },
  {
    id: '03',
    title: 'UX Design',
    name: 'Wireframing & UX Design',
    description:
      "At this stage, I conduct research on the market, competitors, and user behavior to gain insights into the project's context. These findings guide future design decisions.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#clip0_1130_244)">  <path d="M1.66699 10.0003C1.66699 6.07195 1.66699 4.10777 2.88738 2.88738C4.10777 1.66699 6.07195 1.66699 10.0003 1.66699C13.9287 1.66699 15.8929 1.66699 17.1133 2.88738C18.3337 4.10777 18.3337 6.07195 18.3337 10.0003C18.3337 13.9287 18.3337 15.8929 17.1133 17.1133C15.8929 18.3337 13.9287 18.3337 10.0003 18.3337C6.07195 18.3337 4.10777 18.3337 2.88738 17.1133C1.66699 15.8929 1.66699 13.9287 1.66699 10.0003Z" stroke="#212121"  stroke-width="1.5"/>  <path d="M5.83301 15L5.83301 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round"/>  <path d="M10 15V10" stroke="#212121" stroke-width="1.5" stroke-linecap="round"/>  <path d="M14.167 15V7.5" stroke="#212121"  stroke-width="1.5" stroke-linecap="round"/></g><defs>  <clipPath id="clip0_1130_244">    <rect width="20" height="20" fill="white"/>  </clipPath></defs></svg>',
  },
  {
    id: '04',
    title: 'UI Design',
    name: 'UI Design',
    description:
      'Once the UX is approved , I move on to the visual design phase . This includes defining colors , typography , icons , and graphic elements to create a polished interface that reflects your brand.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none"><path d="M11.6842 4.20382C12.0553 3.83273 12.1899 3.28645 12.0337 2.78548C11.8775 2.2845 11.4561 1.91271 10.94 1.8179C7.84162 1.24879 4.53061 2.26813 2.55082 5.23752C0.722363 7.97988 0.703168 11.6733 2.50929 14.4304C5.57278 19.1069 11.9115 19.5812 15.6394 15.8534C17.6541 13.8387 18.1171 11.3436 17.6771 8.73293C17.4998 7.68091 16.1762 7.29045 15.4219 8.04481C14.4276 9.03909 13.1509 8.99894 12.0099 8.17719C10.5559 7.13008 10.4351 5.45279 11.6473 4.24055L11.6842 4.20382Z" stroke="#212121"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.65945 9.28074C6.43893 9.28074 7.07083 8.64884 7.07083 7.86935C7.07083 7.08986 6.43893 6.45796 5.65945 6.45796C4.87996 6.45796 4.24806 7.08986 4.24806 7.86935C4.24806 8.64884 4.87996 9.28074 5.65945 9.28074Z" stroke="#212121"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.65729 14.2707C7.43678 14.2707 8.06868 13.6388 8.06868 12.8593C8.06868 12.0798 7.43678 11.4479 6.65729 11.4479C5.8778 11.4479 5.2459 12.0798 5.2459 12.8593C5.2459 13.6388 5.8778 14.2707 6.65729 14.2707Z" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.6472 15.2689C12.4267 15.2689 13.0586 14.637 13.0586 13.8575C13.0586 13.078 12.4267 12.4461 11.6472 12.4461C10.8677 12.4461 10.2358 13.078 10.2358 13.8575C10.2358 14.637 10.8677 15.2689 11.6472 15.2689Z" stroke="#212121" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    id: '05',
    title: 'Handoff',
    name: ' Handoff & Support',
    description:
      'After finalizing the design, I prepare and deliver organized files for developers. I also provide support during implementation and remain available to address any design-related questions.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M10.5 1.66634L10.5 8.33301M10.5 8.33301L13 5.83301M10.5 8.33301L8 5.83301" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.16699 10.833H4.80054C5.55485 10.833 5.93201 10.833 6.26353 10.9855C6.59505 11.138 6.8405 11.4243 7.3314 11.997L7.83592 12.5856C8.32682 13.1584 8.57227 13.4447 8.90379 13.5972C9.23531 13.7497 9.61247 13.7497 10.3668 13.7497H10.6339C11.3882 13.7497 11.7653 13.7497 12.0969 13.5972C12.4284 13.4447 12.6738 13.1584 13.1647 12.5856L13.6693 11.997C14.1602 11.4243 14.4056 11.138 14.7371 10.9855C15.0686 10.833 15.4458 10.833 16.2001 10.833H18.8337" stroke="#212121" stroke-width="1.5" stroke-linecap="round"/><path d="M14.667 1.77246C16.0213 1.90567 16.9329 2.20673 17.6133 2.88713C18.8337 4.10752 18.8337 6.0717 18.8337 10.0001C18.8337 13.9284 18.8337 15.8926 17.6133 17.113C16.3929 18.3334 14.4287 18.3334 10.5003 18.3334C6.57195 18.3334 4.60777 18.3334 3.38738 17.113C2.16699 15.8926 2.16699 13.9284 2.16699 10.0001C2.16699 6.0717 2.16699 4.10752 3.38738 2.88713C4.06778 2.20673 4.97937 1.90567 6.33366 1.77246" stroke="#212121" stroke-width="1.5" stroke-linecap="round"/></svg>',
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
  <section>
    <!-- //// desktop  -->
    <div class="hidden md:flex flex-col justify-center items-start gap-6">
      <div
        class="flex justify-center items-start flex-grow flex-basis-0 flex-shrink-0 w-full rounded-[50px] bg-mainBg"
      >
        <button
          v-for="item in items"
          :key="item.id"
          class="px-5 py-3 text-[16px] font-medium leading-[140%] flex justify-center gap-[3px] items-center"
          @click="active = item.title"
          :class="{
            'bg-white border-[1px] border-borderColor2 rounded-full flex gap-5 justify-center items-center':
              active === item.title,
          }"
        >
          <div v-html="item.icon" :class="{ 'opacity-35': active !== item.title }"></div>
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
        <SwiperSlide v-for="item in items" :key="item.id" class="px-4">
          <div class="relative flex flex-col justify-center items-center">
            <!-- Step Indicator -->
            <div
              class="w-[295px] flex items-center gap-3 justify-center text-[16px] leading-[140%] font-medium relative mb-6 py-[10px] border-[1px] border-borderColor2 rounded-[50px]"
            >
              <div v-html="item.icon" class="opacity-35"></div>
              <span class="text-textColor2">{{ item.title }}</span>
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
