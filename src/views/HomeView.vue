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
import BtnTitle from '@/components/BtnTitle.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <AboutmeView />
    <mouseArrow />
    <projectsView />

    <div class="flex justify-between items-center gap-5 w-full">
      <FirstSlotComponent>
        <template #header>
          <BtnTitle title="My Experience" />
        </template>
        <template #default>
          <ExperienceView />
        </template>
      </FirstSlotComponent>
      <SecondSlotComponent width="w-[380px]">
        <template #header>
          <BtnTitle title="Skills" />
        </template>
        <template #default>
          <SkillsView />
        </template>
      </SecondSlotComponent>
    </div>

    <div class="flex justify-between items-center gap-5 w-full">
      <SecondSlotComponent width="w-[380px]" class="h-[380px]">
        <template #header>
          <BtnTitle title="Tools" />
        </template>
        <template #default>
          <ToolsView />
        </template>
      </SecondSlotComponent>
      <FirstSlotComponent class="h-[380px]">
        <template #header>
          <BtnTitle title="How I Work" />
        </template>
        <template #default>
          <HowIWork />
        </template>
      </FirstSlotComponent>
    </div>

    <div class="flex justify-between items-center gap-5 w-full">
      <FirstSlotComponent class="h-[380px]">
        <template #header>
          <BtnTitle title="Comments" />
        </template>
        <template #default>
          <CommentsView />
        </template>
      </FirstSlotComponent>
      <SecondSlotComponent width="w-[380px]">
        <template #header>
          <BtnTitle title="Skills" />
        </template>
        <template #default> </template>
      </SecondSlotComponent>
    </div>
  </div>
</template>
