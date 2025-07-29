<script setup>
import { useSupabaseData } from '@/composables/useSupabaseData'
import ArrowRight from './icons/ArrowRight.vue'

const {
  data: Articles,
  isLoading,
  error,
} = useSupabaseData('Articles', {
  orderBy: 'created_at',
  ascending: false,
})
</script>
<template>
  <div class="flex flex-col justify-center items-center overflow-hidden w-full relative">
    <div class="flex justify-center items-end gap-2 w-[548px] h-[188px] flex-shrink-0">
      <img
        v-for="(item, index) in Articles"
        :key="item.id"
        :src="item.imgUrl"
        class="w-[156px] h-[156px] rounded-lg bg-transparent border-borderShadow object-cover relative flex justify-center"
        :class="{
          'scale-125 z-10 w-[172px] h-[172px] p-[5px] -top-4': index === 1,
          '-bottom-1': index !== 1,
        }"
        alt="picture"
      />
    </div>
    <!-- /// btn  -->
    <button
      class="py-2 pr-3 pl-4 border-[1px] border-borderColor2 text-textColor2 rounded-full hover:bg-[#F7F8F9] hover:border-white focus:bg-black focus:border-black focus:text-white"
    >
      <a
        class="flex justify-center items-center gap-2 text-[16px] font-medium leading-[150%]"
        href="https://www.linkedin.com/in/nimaeell?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
      >
        See on Linkedin
        <ArrowRight class="w-[20px]" />
      </a>
    </button>
  </div>
</template>
