<script setup>
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
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5 mb-24">
    <AboutmeView />
    <mouseArrow />
    <projectsView />

    <div
      class="flex md:justify-between justify-center flex-col md:flex-row items-center md:gap-5 gap-6 w-full"
    >
      <FirstSlotComponent class="w-[345px] md:w-[780px]">
        <template #header>
          <BtnTitle title="My Experience" />
        </template>
        <template #default>
          <ExperienceView />
        </template>
      </FirstSlotComponent>
      <SecondSlotComponent width="w-[345px] md:w-[380px]">
        <template #header>
          <BtnTitle title="Skills" />
        </template>
        <template #default>
          <SkillsView />
        </template>
      </SecondSlotComponent>
    </div>

    <div
      class="flex md:justify-between justify-center flex-col md:flex-row items-center gap-5 w-full"
    >
      <SecondSlotComponent width="w-[345px] md:w-[380px]" class="h-[380px]">
        <template #header>
          <BtnTitle title="Tools" />
        </template>
        <template #default>
          <ToolsView />
        </template>
      </SecondSlotComponent>
      <FirstSlotComponent class="w-[345px] md:w-[780px] h-[380px]">
        <template #header>
          <BtnTitle title="How I Work" />
        </template>
        <template #default>
          <HowIWork />
        </template>
      </FirstSlotComponent>
    </div>

    <div
      class="flex flex-col md:flex-row md:justify-between justify-center items-center gap-5 w-full"
    >
      <FirstSlotComponent class="w-[345px] md:w-[780px] h-[380px]">
        <template #header>
          <BtnTitle title="Comments" />
        </template>
        <template #default>
          <CommentsView />
        </template>
      </FirstSlotComponent>
      <SecondSlotComponent width="w-[345px] md:w-[380px] h-[380px]">
        <template #header>
          <BtnTitle title="Contact Me" />
        </template>
        <template #default>
          <ContactMeView />
        </template>
      </SecondSlotComponent>
    </div>

    <div class="grid justify-center items-center gap-5 grid-cols-1 md:grid-cols-3 w-full">
      <SecondSlotComponent width="w-[345px] md:w-[380px] h-[380px]" paddingX="px-0">
        <template #header>
          <BtnTitle title="My last articles" class="mx-5" />
        </template>
        <template #default>
          <ArticlesView />
        </template>
      </SecondSlotComponent>
      <SecondSlotComponent width="w-[345px] md:w-[380px] h-[380px] " paddingX="px-0">
        <template #header>
          <BtnTitle title="My Music Playlist" class="mx-5" />
        </template>
        <template #default>
          <PlayListView />
        </template>
      </SecondSlotComponent>
      <SecondSlotComponent width="w-[345px] md:w-[380px] h-[380px]" class="relative">
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
