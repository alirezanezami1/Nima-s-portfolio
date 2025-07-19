<script setup>
defineProps({
  customClass: {
    type: String,
    default: 'p-4 rounded-2xl text-[20px]',
  },
  btnSize: {
    type: String,
    default: 'w-[116px] h-[24px]',
  },
})
</script>

<template>
  <div
    :class="[
      `bg-white flex justify-center items-center gap-[10px] font-semibold shadow-menuShadow cursor-pointer hover:bg-waveColorO text-textColor2 hover:text-white `,
      customClass,
    ]"
  >
    <div :class="[`flex justify-center items-center`, btnSize]">
      <a
        class="text-center leading-normal"
        href="https://twqfeiorchkzqdppurnm.supabase.co/storage/v1/object/public/assets/PDF/resume%20(3).pdf"
        target="_blank"
        download="Nima-Masoumi-Resume.pdf"
        >Resume</a
      >
    </div>
  </div>
</template>
