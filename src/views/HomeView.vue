<script setup>
import AboutmeView from '@/components/AboutmeView.vue'
import mouseArrow from '@/components/mouseArrow.vue'
import projectsView from '@/components/projectsView.vue'
import FirstSlotComponent from '@/components/FirstSlotComponent.vue'
import SecondSlotComponent from '@/components/SecondSlotComponent.vue'
import SkillsView from '@/components/SkillsView.vue'
import ToolsView from '@/components/ToolsView.vue'
import ExperienceView from '@/components/ExperienceView.vue'
import BtnTitle from '@/components/BtnTitle.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-[20px]">
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

    <div class="flex justify-between items-center gap-5 w-full h-[365px]">
      <SecondSlotComponent width="w-[364px]" class="h-[365px]">
        <template #header>
          <BtnTitle title="Tools" />
        </template>
        <template #default>
          <ToolsView />
        </template>
      </SecondSlotComponent>
      <FirstSlotComponent>
        <template #header>
          <BtnTitle title="How I Work" />
        </template>
        <template #default> hi </template>
      </FirstSlotComponent>
    </div>
  </div>
</template>
