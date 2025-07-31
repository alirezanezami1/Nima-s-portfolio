<template>
  <div
    class="flex flex-col gap-8 justify-center items-start pt-6 px-6 md:pt-8 md:px-8 bg-white rounded-[40px] border-8 border-borderColor shadow-menuShadow w-[360px] md:w-[780px]"
  >
    <header>
      <slot name="header"></slot>
    </header>
    <main class="w-full h-full">
      <slot></slot>
    </main>
  </div>
</template>
