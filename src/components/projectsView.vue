<script setup>
import ArrowRightUp from './icons/ArrowRightUp.vue'
import ArrowBottom from './icons/ArrowBottom.vue'
import BtnTitle from './BtnTitle.vue'
import { ref, onMounted, computed } from 'vue'
import { supabase } from '@/lib/supabaseClient'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const swiperInstance = ref(null)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const allProjects = ref([])
const allCaseStudies = ref([])
const isLoading = ref(true)
const activeTab = ref('projects')

const showAllProjects = ref(false)

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

const displayedProjects = computed(() => {
  if (showAllProjects.value) {
    return allProjects.value
  } else {
    return allProjects.value.slice(0, 4)
  }
})
</script>

<template>
  <section id="projects">
    <div
      class="flex flex-col w-[345px] h-[682px] md:h-auto justify-center items-center rounded-[40px] shadow-menuShadow border-8 border-borderColor p-6 md:p-8 gap-8 md:w-full bg-mainBg2"
    >
      <!-- //// head -->
      <div
        class="flex justify-between flex-col gap-8 md:gap-0 md:flex-row items-start md:items-center w-full"
      >
        <BtnTitle title="My Projects" />
        <div class="flex justify-between w-full md:justify-center md:w-auto items-center gap-4">
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
        <div class="hidden md:grid md:grid-cols-4 gap-5">
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
                <img
                  src="../assets/images/Frame 48097816.png"
                  class="w-[32px] h-[32px]"
                  alt="img"
                />
                <span
                  class="h-10 w-10 animate-ping-fast rounded-full bg-waveColorG3 absolute"
                ></span>
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

        <!-- /// mobile  -->
        <div class="block md:hidden">
          <Swiper
            @swiper="onSwiper"
            :slides-per-view="'1.1'"
            :space-between="20"
            :modules="[Pagination]"
            :pagination="{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 4,
            }"
            class="flex flex-col justify-center items-center gap-2 rounded-2xl w-[300px]"
          >
            <SwiperSlide v-for="project in allProjects" :key="project.id" class="w-[297px]">
              <div class="relative">
                <img
                  :src="project.image_url"
                  :alt="project.title"
                  class="w-full h-auto bg-orange-200 rounded-2xl"
                />
                <!-- //// link  -->
                <div
                  class="flex absolute bottom-4 left-4 justify-end items-center cursor-pointer py-2 group pr-3 pl-4 bg-mainBg2 rounded-full border-[1.5px] border-borderColor2"
                >
                  <a target="_blank" :href="project.project_link" class="flex items-center gap-2">
                    <p class="text-[16px] font-medium leading-[140%] block">See More</p>
                    <ArrowRightUp class="w-[24px]" />
                  </a>
                </div>
              </div>
              <div class="flex flex-col justify-center items-start gap-3 w-full">
                <!-- //// title  -->
                <div class="flex justify-between items-center self-stretch mt-2">
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
                      class="flex py-2 px-3 justify-center items-center rounded-full border border-borderColor2 text-[12px] md:text-[14px] font-normal leading-[140%] text-textColor2"
                    >
                      {{ tag }}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </SwiperSlide>

            <!-- //// coming soon slide for mobile -->
            <SwiperSlide class="w-[297px]">
              <div
                class="w-full h-[400px] flex flex-col justify-center items-center px-8 py-[109px] rounded-2xl border-2 border-dashed border-borderColor2"
              >
                <div class="flex flex-col gap-8">
                  <!-- /// -->
                  <div class="relative flex items-center justify-center p-[5px]">
                    <img
                      src="../assets/images/Frame 48097816.png"
                      class="w-[32px] h-[32px]"
                      alt="img"
                    />
                    <span
                      class="h-10 w-10 animate-ping-fast rounded-full bg-waveColorG3 absolute"
                    ></span>
                  </div>
                  <!-- //// -->
                  <div class="flex flex-col gap-4 justify-center items-center text-center">
                    <p class="text-[16px] leading-[140%] font-medium text-textColor2">
                      Coming soon
                    </p>
                    <p class="text-[14px] leading-[140%] font-normal text-textColor">
                      New projects will be released soon, so stay tuned.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
        <div class="hidden md:flex relative w-full max-w-[1180px]">
          <!-- //// main content -->
          <div class="flex-1 w-full relative h-[330px]">
            <Swiper
              @swiper="onSwiper"
              :slides-per-view="1"
              :space-between="90"
              :direction="'vertical'"
              :modules="[Pagination, Mousewheel]"
              :pagination="{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 4,
              }"
              :allow-touch-move="true"
              :mousewheel="true"
              class="case-studies-swiper w-full h-full"
            >
              <SwiperSlide v-for="(caseStudy, index) in allCaseStudies" :key="caseStudy.id">
                <div class="flex flex-col justify-center items-center">
                  <div class="flex justify-center items-center gap-6 w-full mx-auto">
                    <!-- //// img  -->
                    <div class="relative flex-shrink-0">
                      <img
                        :src="caseStudy.cover_image_url"
                        :alt="caseStudy.title"
                        class="bg-mainBg3 w-[264px] h-[330px] rounded-2xl"
                      />
                      <!-- //// link  -->
                      <div
                        class="flex absolute bottom-4 left-4 justify-end items-center cursor-pointer py-2 pr-2 pl-2 group hover:pr-3 hover:pl-4 bg-mainBg2 rounded-full border-[1.5px] border-borderColor2"
                      >
                        <a
                          target="_blank"
                          :href="caseStudy.project_link"
                          class="flex items-center gap-2"
                        >
                          <p
                            class="text-[16px] font-medium leading-[140%] hidden group-hover:block"
                          >
                            See More
                          </p>
                          <ArrowRightUp class="w-[24px]" />
                        </a>
                      </div>
                    </div>

                    <!-- //// info  -->
                    <div class="flex flex-col items-start gap-20 flex-1 min-w-0">
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
                              <path
                                d="M1 1V33"
                                stroke="#E2E2E2"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                            </svg>
                          </span>
                          <p class="text-textColor text-[18px] font-normal leading-[140%]">
                            {{ caseStudy.project_name }}
                          </p>
                        </div>
                        <div class="flex flex-col items-start self-stretch gap-3">
                          <p class="text-[18px] leading-[140%] font-medium text-textColor2">
                            Designers :
                          </p>
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

                      <!-- //// coming soon message for last slide -->
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="block md:hidden">
          <Swiper
            @swiper="onSwiper"
            :slides-per-view="'1.1'"
            :space-between="20"
            :modules="[Pagination]"
            :pagination="{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 4,
            }"
            class="flex flex-col justify-center items-center gap-2 rounded-2xl w-[300px]"
          >
            <SwiperSlide v-for="caseStudy in allCaseStudies" :key="caseStudy.id" class="w-[297px]">
              <div class="relative">
                <img
                  :src="caseStudy.cover_image_url"
                  :alt="caseStudy.title"
                  class="w-full h-auto bg-orange-200 rounded-2xl"
                />
                <div
                  class="flex absolute bottom-4 left-4 justify-end items-center cursor-pointer py-2 group pr-3 pl-4 bg-mainBg2 rounded-full border-[1.5px] border-borderColor2"
                >
                  <a target="_blank" :href="caseStudy.project_link" class="flex items-center gap-2">
                    <p class="text-[16px] font-medium leading-[140%] block">See More</p>
                    <ArrowRightUp class="w-[24px]" />
                  </a>
                </div>
              </div>
              <div class="flex flex-col justify-center items-start gap-3 w-full">
                <div class="flex justify-between items-center self-stretch mt-2">
                  <div
                    class="flex justify-center items-center text-[16px] font-medium leading-[140%] gap-1"
                  >
                    <p class="text-textColor3">{{ caseStudy.title_mobile }}</p>
                    <p class="text-textColor2">Case Study</p>
                  </div>
                  <p class="text-[12px] font-normal leading-[140%] text-textColor">
                    {{ caseStudy.project_type_mobile }}
                  </p>
                </div>
                <Swiper :slides-per-view="'auto'" :space-between="6" class="w-full">
                  <SwiperSlide v-for="tag in caseStudy.tags" :key="tag" class="!w-auto">
                    <div
                      class="flex py-2 px-3 justify-center items-center rounded-full border border-borderColor2 text-[12px] md:text-[14px] font-normal leading-[140%] text-textColor2"
                    >
                      {{ tag }}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </SwiperSlide>

            <SwiperSlide class="w-[297px]">
              <div
                class="w-full h-[400px] flex flex-col justify-center items-center px-8 py-[109px] rounded-2xl border-2 border-dashed border-borderColor2"
              >
                <div class="flex flex-col gap-8">
                  <div class="relative flex items-center justify-center p-[5px]">
                    <img
                      src="../assets/images/Frame 48097816.png"
                      class="w-[32px] h-[32px]"
                      alt="img"
                    />
                    <span
                      class="h-10 w-10 animate-ping-fast rounded-full bg-waveColorG3 absolute"
                    ></span>
                  </div>
                  <div class="flex flex-col gap-4 justify-center items-center text-center">
                    <p class="text-[16px] leading-[140%] font-medium text-textColor2">
                      Coming soon
                    </p>
                    <p class="text-[14px] leading-[140%] font-normal text-textColor">
                      New projects will be released soon, so stay tuned.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-pagination) {
  position: relative !important;
  bottom: -10px !important;
  left: 50% !important;
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

/* Case Studies Swiper Styles */
:deep(.case-studies-swiper) {
  position: relative !important;
  overflow: hidden !important;
}

:deep(.case-studies-swiper .swiper-pagination) {
  position: absolute !important;
  left: 95% !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  width: auto !important;
  height: auto !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 8px !important;
  padding: 16px 8px !important;
  z-index: 10 !important;
}

:deep(.case-studies-swiper .swiper-pagination-bullet) {
  width: 20px !important;
  height: 8px !important;
  border-radius: 50px !important;
  background: #f7f8f9 !important;
  opacity: 1 !important;
  margin: 0 !important;
  left: 5px;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  display: block !important;
}

:deep(.case-studies-swiper .swiper-pagination-bullet:hover) {
  background: #f7f8f9 !important;
  transform: scale(1.1) !important;
}

:deep(.case-studies-swiper .swiper-pagination-bullet-active) {
  background: #fa6b11 !important;
  width: 32px !important;
  height: 12px !important;
  left: 0px;
  border-radius: 50px !important;
  transform: scale(1.1) !important;
  box-shadow: 0 2px 4px rgba(250, 107, 17, 0.3) !important;
}

:deep(.case-studies-swiper .swiper-pagination-bullet-active:hover) {
  background: #fa6b11 !important;
  transform: scale(1.15) !important;
}

/* Vertical Swiper Styles */
:deep(.case-studies-swiper .swiper-wrapper) {
  flex-direction: column !important;
}

:deep(.case-studies-swiper .swiper-slide) {
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(.case-studies-swiper .swiper-slide > div) {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
</style>
