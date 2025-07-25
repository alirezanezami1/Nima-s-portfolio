<script setup>
import { useSupabaseData } from '@/composables/useSupabaseData'

const {
  data: skills,
  isLoading,
  error,
} = useSupabaseData('skills', {
  orderBy: 'created_at',
  ascending: false,
})
</script>

<template>
  <div v-if="isLoading">
    <div class="flex items-center justify-center">
      <div
        class="border-2 border-textColor4 border-solid rounded-full border-t-transparent w-5 h-5 animate-spin"
      ></div>
    </div>
  </div>
  <div v-else-if="error">مشکل در ارتباط با سرور</div>
  <div v-else class="relative">
    <div
      class="relative skills-cloud flex justify-start items-center flex-wrap gap-2 h-[300px] w-full"
    >
      <div
        v-for="skill in skills"
        :key="skill"
        class="px-4 py-2 transform rotate-[-6deg] inline-flex justify-center items-center gap-[10px] rounded-[50px] border-[1px] border-borderColor3 text-textColor2 text-[20px] font-normal leading-[140%]"
      >
        {{ skill.title }}
      </div>
    </div>
    <div class="background2"></div>
  </div>
</template>

<style>
.background2 {
  width: 350px !important;
  left: -20px !important;
  height: 164px;
  position: absolute;
  bottom: 0px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
}

.skills-cloud > *:nth-child(5) {
  position: absolute;
  right: -20px;
  bottom: 120px;
  transform: rotate(4deg);
}

.skills-cloud > *:nth-child(3) {
  position: absolute;
  bottom: 125px;
  left: 60px;
  transform: rotate(-34.321deg);
}
.skills-cloud > *:nth-child(1) {
  position: absolute;
  top: 55px;
  left: 25px;
  transform: rotate(-6deg);
}
.skills-cloud > *:nth-child(4) {
  position: absolute;
  bottom: 105px;
  left: -50px;
  transform: rotate(-48.546deg);
}
.skills-cloud > *:nth-child(2) {
  position: absolute;
  bottom: 50px;
  right: -30px;
  transform: rotate(24deg);
}
.skills-cloud > *:nth-child(6) {
  position: absolute;
  bottom: 30px;
  left: -35px;
  transform: rotate(-24deg);
}
.skills-cloud > *:nth-child(7) {
  position: absolute;
  bottom: 0;
  right: 30px;
  transform: rotate(0deg);
}
.skills-cloud > *:nth-child(8) {
  position: absolute;
  top: 60px;
  right: -40px;
  transform: rotate(30deg);
}
</style>
