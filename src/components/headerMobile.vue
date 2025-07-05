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

const activeSection = ref('about')

const openMenu = ref(false)
</script>

<template>
  <div
    class="flex p-[14px] gap-8 flex-col items-start w-full border-4 border-borderColor bg-mainBg2 rounded-[20px] shadow-menuShadow"
  >
    <div class="flex justify-between items-center self-stretch z-50">
      <div
        class="flex justify-center items-center p-3 rounded-xl border-[1px] border-borderColor2"
        @click="openMenu = !openMenu"
      >
        <menuView v-if="!openMenu" />
        <xView v-if="openMenu" />
      </div>
      <div class="flex justify-between items-center w-[183px]">
        <profileView size="w-[44px] h-[44px] rounded-xl border-2" />
        <resumeView
          customClass="p-3 rounded-xl text-[16px] border-[1px] border-borderColor2"
          btnSize="w-auto h-auto"
        />
      </div>
    </div>

    <!-- /// menu  -->
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
          :href="`#${item.id}`"
          class="text-textColor font-normal text-[16px] leading-[140%] flex justify-center items-center py-[13px] self-stretch rounded-2xl"
          :class="{
            'border-[1px] border-borderColor2 font-semibold text-textColor2':
              activeSection === item.id,
          }"
          @click="activeSection = item.id"
        >
          {{ item.name }}
        </a>
      </div>
    </Transition>
  </div>
</template>
