<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AboutmeView from '@/components/AboutmeView.vue'
import mouseArrow from '@/components/mouseArrow.vue'
import projectsView from '@/components/projectsView.vue'
import FirstSlotComponent from '@/components/FirstSlotComponent.vue'
import SecondSlotComponent from '@/components/SecondSlotComponent.vue'
import SkillsView from '@/components/SkillsView.vue'
import ToolsView from '@/components/ToolsView.vue'
import HowIWork from '@/components/HowIWork.vue'
import ExperienceView from '@/components/ExperienceView.vue'
import CommentsView from '@/components/CommentsView.vue'
import ContactMeView from '@/components/ContactMeView.vue'
import ArticlesView from '@/components/ArticlesView.vue'
import PlayListView from '@/components/PlayListView.vue'
import LocationView from '@/components/LocationView.vue'
import BtnTitle from '@/components/BtnTitle.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { initScrollBasedAnimation } = useScrollAnimation()

const isLargeScreen = ref(false)

const updateScreenSize = () => {
  if (typeof window === 'undefined') {
    return
  }

  isLargeScreen.value = window.matchMedia('(min-width: 1024px)').matches
}

updateScreenSize()

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
  initScrollBasedAnimation()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5 mb-24 mx-auto max-w-[1440px]">
            <div
              data-scroll-based-animate="true"
              data-animation="animate__animated animate__fadeInUp"
              >
              <AboutmeView />
            </div>
    <div
      data-scroll-based-animate="true"
      data-animation="animate__animated animate__fadeInUp"
    >
      <mouseArrow />
    </div>
    <div
      data-scroll-based-animate="true"
      data-animation="animate__animated animate__fadeInUp"
    >
      <projectsView />
    </div>

    <div
      data-scroll-based-animate="true"
      data-animation="animate__animated animate__fadeInUp"
      class="flex justify-center xl:justify-between  flex-col sm:flex-row items-center sm:gap-2 lg:gap-5 gap-6 w-full"
    >
      <FirstSlotComponent>
        <template #header>
          <BtnTitle title="My Experience" />
        </template>
        <template #default>
          <ExperienceView />
        </template>
      </FirstSlotComponent>
      <SecondSlotComponent width="w-[345px] sm:w-[330px] lg:w-[380px]">
        <template #header>
          <BtnTitle title="Skills" />
        </template>
        <template #default>
          <SkillsView />
        </template>
      </SecondSlotComponent>
    </div>

    <div
      data-scroll-based-animate="true"
      data-animation="animate__animated animate__fadeInUp"
      class="flex justify-center xl:justify-between  flex-col sm:flex-row items-center sm:gap-2 lg:gap-5 gap-6 w-full"
    >
      <SecondSlotComponent width="w-[345px] sm:w-[330px] lg:w-[380px]" class="h-[380px] sm:h-[430px] lg:h-[340px] xl:h-[360px]">
        <template #header>
          <BtnTitle title="Tools" />
        </template>
        <template #default>
          <ToolsView />
        </template>
      </SecondSlotComponent>
      <FirstSlotComponent
        id="howIWork"
      >
        <template #header>
          <BtnTitle title="How I Work" class="relative top-2" />
        </template>
        <template #default>
          <HowIWork />
        </template>
      </FirstSlotComponent>
    </div>

    <div
      data-scroll-based-animate="true"
      data-animation="animate__animated animate__fadeInUp"
      class="flex flex-col  md:flex-row md:justify-between justify-center items-center gap-2 lg:gap-5 w-full"
    >
      <FirstSlotComponent class="w-[345px] sm:w-[680px] lg:w-[780px] h-[380px]">
        <template #header>
          <BtnTitle title="Comments" />
        </template>
        <template #default>
          <CommentsView />
        </template>
      </FirstSlotComponent>
      <SecondSlotComponent
        v-if="isLargeScreen"
        width="w-[345px] sm:w-[330px] lg:w-[380px] h-[380px]"
      >
        <template #header>
          <BtnTitle title="Contact Me" />
        </template>
        <template #default>
          <ContactMeView />
        </template>
      </SecondSlotComponent>
    </div>

    <div
      data-scroll-based-animate="true"
      data-animation="animate__animated animate__fadeInUp"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5 w-full"
    >
      <SecondSlotComponent
        v-if="!isLargeScreen"
        width="w-[345px] sm:w-[330px] lg:w-[380px] h-[380px]"
      >
        <template #header>
          <BtnTitle title="Contact Me" />
        </template>
        <template #default>
          <ContactMeView />
        </template>
      </SecondSlotComponent>
      <SecondSlotComponent width="w-[345px] sm:w-[330px] lg:w-[380px] h-[380px]" paddingX="px-0">
        <template #header>
          <BtnTitle title="My last articles" class="mx-5" />
        </template>
        <template #default>
          <ArticlesView />
        </template>
      </SecondSlotComponent>
      <SecondSlotComponent width="w-[345px] sm:w-[330px] lg:w-[380px] h-[380px] " paddingX="px-0">
        <template #header>
          <BtnTitle title="My Music Playlist" class="mx-5" />
        </template>
        <template #default>
          <PlayListView />
        </template>
      </SecondSlotComponent>
      <SecondSlotComponent width="w-[345px] sm:w-[330px] lg:w-[380px] h-[380px] relative" >
        <template #header>
          <BtnTitle title="My Location" class="hidden" />
        </template>
        <template #default>
          <LocationView />
        </template>
      </SecondSlotComponent>
    </div>
  </div>
</template>
