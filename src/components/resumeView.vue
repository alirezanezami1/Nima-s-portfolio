<script setup>
defineProps({
  customClass: {
    type: String,
    default: 'p-3 md:p-4 rounded-2xl text-[16px] md:text-[18px] lg:text-[20px]',
  },
  btnSize: {
    type: String,
    default: 'w-[100px] md:w-[110px] lg:w-[116px] h-[20px] md:h-[22px] lg:h-[24px]',
  },
})
</script>

<template>
  <div
    :class="[
      `bg-white flex justify-center items-center gap-[8px] md:gap-[10px] font-semibold shadow-menuShadow cursor-pointer hover:bg-waveColorO text-textColor2 hover:text-white `,
      customClass,
    ]"
  >
    <div :class="[`flex justify-center items-center`, btnSize]">
      <a
        class="text-center leading-normal flex justify-center items-center gap-1 md:gap-2 text-[14px] md:text-[16px] lg:text-[18px]"
        href="https://twqfeiorchkzqdppurnm.supabase.co/storage/v1/object/public/assets/PDF/resume%20(3).pdf"
        target="_blank"
        download="Nima-Masoumi-Resume.pdf"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          class="hidden md:block md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px]"
        >
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Resume</a
      >
    </div>
  </div>
</template>
