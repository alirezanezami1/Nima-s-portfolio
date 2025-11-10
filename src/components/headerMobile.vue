<script setup>
import menuView from './icons/menuView.vue'
import xView from './icons/xView.vue'
import { ref } from 'vue'
import profileView from './profileView.vue'
import resumeView from './resumeView.vue'

defineProps({
  navLinks: {
    type: Array,
  },
})

// cs

const activeSection = ref('about')

const openMenu = ref(false)

const scrollToSection = (sectionId) => {
  console.log('Trying to scroll to:', sectionId) // برای دیباگ

  const element = document.getElementById(sectionId)
  console.log('Element found:', element) // برای دیباگ

  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const elementTop = rect.top + scrollTop
    const headerHeight = 200
    const targetPosition = elementTop - headerHeight

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth'
    })

    activeSection.value = sectionId
    openMenu.value = false
  }
}
</script>

<template>
  <div
    class="flex p-[14px] gap-8 flex-col items-start w-full border-4 border-borderColor bg-mainBg2 rounded-[20px] shadow-menuShadow"
  >
    <div class="flex justify-between items-center self-stretch z-50">
      <div
        class="flex justify-center items-center p-[10px] rounded-xl border-[1px] border-borderColor2"
        @click="openMenu = !openMenu"
      >
        <Transition name="icon" mode="out-in">
          <menuView v-if="!openMenu" key="menu" />
          <xView v-else key="x" />
        </Transition>
      </div>
      <profileView size="w-[44px] h-[44px] rounded-xl border-2 hidden sm:block" />
      <div class="flex justify-between sm:justify-center items-center w-[183px] sm:w-auto">
        <profileView size="w-[44px] h-[44px] rounded-xl border-2 block sm:hidden" />
        <resumeView
          customClass="p-3 rounded-xl text-[16px] border-[1px] border-borderColor2"
          btnSize="w-auto h-auto"
        />
      </div>
    </div>

    <!-- /// menu //  -->
    <Transition
      enter-from-class="opacity-0 -translate-y-2/3"
      enter-active-class="transition-all duration-300 ease-in-out"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in-out"
      leave-to-class="opacity-0 -translate-y-20"
    >
      <div class="flex flex-col justify-center items-center gap-2 self-stretch" v-if="openMenu">
        <a
          v-for="item in navLinks"
          :key="item"
          href="#"
          class="text-textColor font-normal text-[16px] leading-[140%] flex justify-center items-center py-[13px] self-stretch rounded-2xl"
          :class="{
            'bg-headerBg  font-semibold text-textHeader': activeSection === item.id,
          }"
          @click.prevent="scrollToSection(item.id)"
        >
          {{ item.name }}
        </a>
      </div>
    </Transition>
  </div>
</template>

<style>
.icon-enter-active,
.icon-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.icon-enter-from,
.icon-leave-to {
  opacity: 0;
}
</style>
