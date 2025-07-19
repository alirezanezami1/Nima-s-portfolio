<script setup>
import waveBtn from './waveBtn.vue'
import ArrowRightUp from './icons/ArrowRightUp.vue'
import ArrowBottom from './icons/ArrowBottom.vue'
import { RouterLink } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// برای نگهداری لیست کامل پروژه‌ها و کیس استادی‌ها
const allProjects = ref([])
const allCaseStudies = ref([])
const isLoading = ref(true)
const activeTab = ref('projects')

// متغیری برای کنترل اینکه آیا "Show More" کلیک شده است یا نه
const showAllProjects = ref(false)

// تابعی برای خواندن همزمان هر دو جدول
async function fetchData() {
  const [projectsResponse, caseStudiesResponse] = await Promise.all([
    supabase.from('projects').select('*').order('display_order'),
    supabase.from('case_studies').select('*').order('created_at', { ascending: false }),
  ])

  if (projectsResponse.data) {
    allProjects.value = projectsResponse.data
  }
  if (caseStudiesResponse.data) {
    allCaseStudies.value = caseStudiesResponse.data
  }

  isLoading.value = false
}

onMounted(() => {
  fetchData()
})

// یک computed property برای نمایش لیست پروژه‌ها
// اگر showAllProjects برابر false باشد، فقط ۳ پروژه اول را برمی‌گرداند
// در غیر این صورت، تمام پروژه‌ها را برمی‌گرداند
const displayedProjects = computed(() => {
  if (showAllProjects.value) {
    return allProjects.value
  } else {
    return allProjects.value.slice(0, 4) // فقط ۳ آیتم اول
  }
})
</script>

<template>
  <div
    class="flex flex-col justify-center items-center rounded-[40px] shadow-menuShadow border-8 border-borderColor p-6 md:p-8 gap-8 w-full bg-mainBg2"
  >
    <!-- //// head -->
    <div class="flex justify-between items-center w-full">
      <div
        class="flex justify-center items-center py-2 pr-4 pl-3 gap-2 rounded-full shadow-menuShadow"
      >
        <waveBtn colorWave="bg-waveColorO" colorWave2="bg-waveColorO2" />
        <p class="text-[16px] font-medium leading-[140%] text-textColor2">My Projects</p>
      </div>
      <div class="flex justify-center items-center gap-4">
        <button
          @click="activeTab = 'projects'"
          :class="[
            'flex py-3 px-5 justify-center items-center gap-[10px] rounded-full border-[1px] border-borderColor2 text-[16px] font-medium leading-[140%] bg-mainBg2 text-textColor2',
            { 'text-white bg-textColor2 border-borderColor3': activeTab === 'projects' },
          ]"
        >
          Projects
        </button>
        <button
          @click="activeTab = 'case_studies'"
          :class="[
            'flex py-3 px-5 justify-center items-center gap-[10px] rounded-full border-[1px] border-borderColor2 text-[16px] font-medium leading-[140%] bg-mainBg2 text-textColor2',
            { 'text-white bg-textColor2 border-borderColor3': activeTab === 'case_studies' },
          ]"
        >
          Case Studies
        </button>
      </div>
    </div>

    <!-- //// main -->

    <!-- //// loader  -->
    <div class="flex items-center justify-center mt-5" v-if="isLoading">
      <div
        class="border-2 border-textColor border-solid rounded-full border-t-transparent w-5 h-5 animate-spin"
      ></div>
    </div>

    <div v-if="activeTab === 'projects'">
      <!-- //// info  -->
      <div class="grid md:grid-cols-4 gap-5">
        <div
          v-for="project in displayedProjects"
          :key="project.id"
          class="flex flex-col justify-center items-center gap-2 rounded-2xl"
        >
          <div class="relative">
            <img
              :src="project.image_url"
              :alt="project.title"
              class="w-full h-auto bg-orange-200 rounded-2xl"
            />
            <!-- //// link  -->
            <div
              class="flex absolute bottom-4 left-4 justify-end items-center cursor-pointer py-2 pr-2 pl-2 group hover:pr-3 hover:pl-4 bg-mainBg2 rounded-full border-[1.5px] border-borderColor2"
            >
              <a target="_blank" :href="project.project_link" class="flex items-center gap-2">
                <p class="text-[16px] font-medium leading-[140%] hidden group-hover:block">
                  See More
                </p>
                <ArrowRightUp class="w-[24px]" />
              </a>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start gap-3 w-full">
            <!-- //// title  -->
            <div class="flex justify-between items-center self-stretch">
              <div
                class="flex justify-center items-center text-[16px] font-medium leading-[140%] gap-1"
              >
                <p class="text-textColor3">{{ project.title }}</p>
                <p class="text-textColor2">Website</p>
              </div>
              <p class="text-[12px] font-normal leading-[140%] text-textColor">
                {{ project.project_type }}
              </p>
            </div>
            <!-- //// slider  -->
            <Swiper :slides-per-view="'auto'" :space-between="6" class="w-full">
              <SwiperSlide v-for="tag in project.tags" :key="tag" class="!w-auto">
                <div
                  class="flex py-2 px-3 justify-center items-center rounded-full border border-borderColor2 text-[14px] font-normal leading-[140%] text-textColor2"
                >
                  {{ tag }}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <!-- //// coming soon  -->
        <div
          class="w-full h-auto flex flex-col justify-center items-center px-8 py-[109px] rounded-2xl border-2 border-dashed border-borderColor2"
          v-if="showAllProjects"
        >
          <div class="flex flex-col gap-8">
            <!-- /// -->
            <div class="relative flex items-center justify-center p-[5px]">
              <img src="../assets/images/Frame 48097816.png" class="w-[32px] h-[32px]" alt="img" />
              <span class="h-10 w-10 animate-ping-fast rounded-full bg-waveColorG3 absolute"></span>
            </div>
            <!-- //// -->
            <div class="flex flex-col gap-4 justify-center items-center text-center">
              <p class="text-[16px] leading-[140%] font-medium text-textColor2">Comming soon</p>
              <p class="text-[14px] leading-[140%] font-normal text-textColor">
                New projects will be released soon, so stay tuned.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- //// btn  -->
      <div v-if="allProjects.length > 3" class="mt-8 hidden md:flex justify-center items-center">
        <button
          @click="showAllProjects = !showAllProjects"
          class="inline-flex justify-center items-center font-medium gap-1 py-3 pr-3 pl-[18px] rounded-full border-[1px] border-borderColor2"
        >
          Show <span v-if="!showAllProjects">More</span> <span v-if="showAllProjects">Less</span>
          <ArrowBottom color="#212121" :class="{ 'transform rotate-180': showAllProjects }" />
        </button>
      </div>
    </div>

    <div v-if="activeTab === 'case_studies'">
      <div class="flex justify-center items-center gap-8">
        <!-- //// slide  -->
        <div
          v-for="caseStudy in allCaseStudies"
          :key="caseStudy.id"
          class="flex justify-center items-center gap-6"
        >
          <!-- //// img  -->
          <div class="relative">
            <img
              :src="caseStudy.cover_image_url"
              :alt="caseStudy.title"
              class="bg-mainBg3 w-[264px] h-[330px]"
            />
            <!-- //// link  -->
            <div
              class="flex absolute bottom-4 left-4 justify-end items-center cursor-pointer py-2 pr-2 pl-2 group hover:pr-3 hover:pl-4 bg-mainBg2 rounded-full border-[1.5px] border-borderColor2"
            >
              <a target="_blank" :href="caseStudy.project_link" class="flex items-center gap-2">
                <p class="text-[16px] font-medium leading-[140%] hidden group-hover:block">
                  See More
                </p>
                <ArrowRightUp class="w-[24px]" />
              </a>
            </div>
          </div>

          <!-- //// info  -->
          <div class="flex flex-col items-start gap-20 flex-1-0-0">
            <div class="flex flex-col items-start gap-6 self-stretch">
              <div class="flex items-center gap-4 self-stretch">
                <p class="text-textColor2 text-[24px] font-semibold leading-[140%]">
                  {{ caseStudy.title }}
                </p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="34"
                    viewBox="0 0 2 34"
                    fill="none"
                  >
                    <path d="M1 1V33" stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
                <p class="text-textColor text-[18px] font-normal leading-[140%]">
                  {{ caseStudy.project_name }}
                </p>
              </div>
              <div class="flex flex-col items-start self-stretch gap-3">
                <p class="text-[18px] leading-[140%] font-medium text-textColor2">Designers :</p>
                <div class="flex items-center self-stretch gap-[11px]">
                  <div
                    class="flex items-center -mr-5"
                    v-for="designer in caseStudy.designers"
                    :key="designer"
                  >
                    <img
                      :src="designer.avatar_url"
                      alt=""
                      class="w-[32px] h-[32px] object-cover rounded-full"
                    />
                  </div>
                  <div class="ml-6 flex items-center gap-2">
                    <div v-for="(designer, index) in caseStudy.designers" :key="designer">
                      <p class="text-textColor text-[18px] font-normal leading-[140%]">
                        {{ designer.name
                        }}{{ index !== caseStudy.designers.length - 1 ? ' , ' : '' }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="self-stretch text-[18px] text-textColor font-normal">
              {{ caseStudy.description }}
            </p>
          </div>
        </div>

        <!-- //// pagination  -->
      </div>
    </div>

    <!-- ////  -->
  </div>
</template>
