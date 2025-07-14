<script setup>
import waveBtn from './waveBtn.vue'
import ArrowBottom from './icons/ArrowBottom.vue'
import { ref, onMounted, computed } from 'vue'
import { supabase } from '@/lib/supabaseClient'

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
    <!-- ////  -->
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

    <!-- ////  -->
    <div v-if="activeTab === 'projects'">
      <div class="grid md:grid-cols-4 gap-5">
        <div
          v-for="project in displayedProjects"
          :key="project.id"
          class="flex justify-center items-center"
        >
          <img :src="project.image_url" :alt="project.title" class="w-full h-auto" />
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

    <!-- ////  -->
  </div>
</template>
