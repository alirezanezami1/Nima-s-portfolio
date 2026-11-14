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
  <div v-if="isLoading" class="w-full max-md:min-h-[345px] flex items-center justify-center">
    <div class="flex items-center justify-center">
      <div
        class="border-2 border-textColor4 border-solid rounded-full border-t-transparent w-5 h-5 animate-spin"
      ></div>
    </div>
  </div>
  <div v-else-if="error" class="w-full max-md:min-h-[345px] flex items-center justify-center">
    مشکل در ارتباط با سرور
  </div>
  <div v-else class="relative h-full w-full max-md:min-h-[345px]">
    <div
      class="relative skills-cloud flex justify-start items-center gap-2 w-full max-md:min-h-[345px]"
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
  width: 100% !important;
  left: 0px !important;
  height: 100% !important;
  position: absolute;
  bottom: 0px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
}

.skills-cloud > *:nth-child(5) {
  position: absolute;
  right: 0px;
  bottom: -70px;
  transform: rotate(20deg);
}

.skills-cloud > *:nth-child(4) {
  position: absolute;
  bottom: -165px;
  left: 60px;
  transform: rotate(-34.321deg);
}
.skills-cloud > *:nth-child(1) {
  position: absolute;
  top: 50px;
  left: 25px;
  transform: rotate(-6deg);
}
.skills-cloud > *:nth-child(3) {
  position: absolute;
  bottom: -175px;
  left: -12px;
  transform: rotate(-48.546deg);
}
.skills-cloud > *:nth-child(2) {
  position: absolute;
  bottom: -200px;
  right: 5px;
  transform: rotate(24deg);
}
.skills-cloud > *:nth-child(6) {
  position: absolute;
  bottom: -250px;
  left: 0px;
  transform: rotate(-24deg);
}
.skills-cloud > *:nth-child(7) {
  position: absolute;
  bottom: -265px;
  right: 40px;
  transform: rotate(0deg);
}
.skills-cloud > *:nth-child(8) {
  position: absolute;
  top: 85px;
  right: 0px;
  transform: rotate(30deg);
}

@media screen and (max-width: 768px) {
  .skills-cloud > *:nth-child(5) {
    position: absolute;
    right: 0px;
    bottom: 30px;
    transform: rotate(20deg);
  }

  .skills-cloud > *:nth-child(4) {
    position: absolute;
    bottom: 164px;
    left: 30px;
    transform: rotate(-45deg);
  }
  .skills-cloud > *:nth-child(1) {
    position: absolute;
    top: 45px;
    left: 12px;
    transform: rotate(6deg);
  }
  .skills-cloud > *:nth-child(3) {
    position: absolute;
    bottom: 175px;
    left: -12px;
    transform: rotate(-48.546deg);
  }
  .skills-cloud > *:nth-child(2) {
    position: absolute;
    bottom: 112px;
    right: 0px;
    transform: rotate(45deg);
  }
  .skills-cloud > *:nth-child(6) {
    position: absolute;
    bottom: 75px;
    left: 0px;
    transform: rotate(-24deg);
  }
  .skills-cloud > *:nth-child(7) {
    position: absolute;
    bottom: 10px;
    right: 80px;
    transform: rotate(0deg);
  }
  .skills-cloud > *:nth-child(8) {
    position: absolute;
    top: 140px;
    right: -19px;
    transform: rotate(45deg);
  }
}
</style>
