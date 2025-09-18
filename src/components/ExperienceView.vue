<script setup>
import { useSupabaseData } from '@/composables/useSupabaseData'
import ExperienceIcon from './icons/ExperienceIcon.vue'

const {
  data: experiences,
  isLoading,
  error,
} = useSupabaseData('experiences', {
  orderBy: 'start-date',
  ascending: false,
})
</script>

<template>
  <section id="experience">
    <div v-if="isLoading">
      <div class="flex items-center justify-center">
        <div
          class="border-2 border-textColor border-solid rounded-full border-t-transparent w-5 h-5 animate-spin"
        ></div>
      </div>
    </div>
    <div v-else-if="error">مشکل در ارتباط با سرور</div>
    <div
      v-else
      class="relative h-[300px] overflow-y-auto w-[345px] sm:w-[330px] lg:w-full"
      style="scrollbar-width: none"
    >
      <div
        v-for="(item, index) in experiences"
        :key="item.id"
        class="flex justify-center items-start gap-3 lg:gap-6 min-w-full w-full"
        :class="{ '-mt-3 lg:-mt-2': index !== 0 }"
      >
        <ExperienceIcon />
        <div class="flex flex-col lg:flex-row justify-center items-center relative w-full">
          <div
            class="flex gap-2 flex-col lg:gap-0 lg:flex-row justify-between items-start lg:items-center w-full"
          >
            <p class="text-textColor2 font-semibold text-[16px] lg:text-[20px] leading-[140%]">
              {{ item.title }} {{ item.company }}
            </p>
            <div
              class="flex justify-center items-start gap-2 text-textColor text-[12px] lg:text-[18px] leading-[140%] font-normal"
            >
              {{ item.date_display }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="20"
                viewBox="0 0 2 20"
                fill="none"
              >
                <path d="M1 0V20" stroke="#E7E7E9" stroke-width="1.5" />
              </svg>
              {{ item.employment_type }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="20"
                viewBox="0 0 2 20"
                fill="none"
              >
                <path d="M1 0V20" stroke="#E7E7E9" stroke-width="1.5" />
              </svg>
              {{ item.job_type }}
            </div>
          </div>
        </div>
      </div>
      <div class="background"></div>
    </div>
  </section>
</template>

<style>
.background {
  width: 100%;
  height: 164px;
  position: absolute;
  bottom: -4px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
}

@media (max-width: 1280px) {
  .background {
    width: 85%;
  }
}
@media (max-width: 768px) {
  .background {
    width: 88%;
  }
}
</style>
