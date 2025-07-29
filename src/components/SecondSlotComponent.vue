<script setup>
defineProps({
  width: {
    type: String,
    default: 'w-full',
  },
  paddingX: {
    type: String,
    default: 'px-8',
  },
})
</script>
<template>
  <div
    :class="[
      'flex flex-col gap-8 justify-center items-start pt-8 bg-white rounded-[40px] border-8 border-borderColor shadow-menuShadow',
      width,
      paddingX,
    ]"
  >
    <header>
      <slot name="header"></slot>
    </header>
    <main class="w-full h-full">
      <slot></slot>
    </main>
  </div>
</template>
