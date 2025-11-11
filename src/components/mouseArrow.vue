<script setup>
import ArrowBottom from '@/components/icons/ArrowBottom.vue'
import mouseIcon from '@/components/icons/mouseIcon.vue'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const { scrollToNextSection, scrollToElement } = useSmoothScroll()

const handleClick = () => {
  // انیمیشن کوچک برای آیکون
  const container = document.querySelector('.mouse-arrow-container')
  if (container) {
    container.style.transform = 'scale(0.95)'
    setTimeout(() => {
      container.style.transform = 'scale(1)'
    }, 150)
  }

  // تاخیر کوچک قبل از اسکرول
  setTimeout(() => {
    const projectsSection = document.getElementById('projects')

    if (projectsSection) {
      scrollToElement(projectsSection)
      return
    }

    scrollToNextSection()
  }, 100)
}
</script>
<template>
    <div
    class="mouse-arrow-container flex flex-col justify-center pb-6 cursor-pointer hover:opacity-80 transition-all duration-200"
    @click="handleClick"
  >
    <div class="flex justify-center items-center self-stretch p-2 aspect-square">
      <mouseIcon class="w-[24px]" />
    </div>
    <div class="flex justify-center items-center self-stretch p-2 aspect-square">
      <ArrowBottom class="w-[24px]" color="#868686" />
    </div>
  </div>
</template>
