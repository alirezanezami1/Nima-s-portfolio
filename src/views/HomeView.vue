<script setup>
import AboutmeView from '@/components/AboutmeView.vue'
import mouseArrow from '@/components/mouseArrow.vue'
import projectsView from '@/components/projectsView.vue'
import FirstSlotComponent from '@/components/FirstSlotComponent.vue'
import ExperienceView from '@/components/ExperienceView.vue'
import BtnTitle from '@/components/BtnTitle.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-[20px]">
    <AboutmeView />
    <mouseArrow />
    <projectsView />
    <FirstSlotComponent>
      <template #header>
        <BtnTitle title="My Experience" />
      </template>
      <template #default>
        <ExperienceView />
      </template>
    </FirstSlotComponent>
  </div>
</template>
