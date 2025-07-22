<template>
  <div
    class="flex flex-col gap-8 justify-center items-start pt-8 px-8 bg-white rounded-[40px] border-8 border-borderColor shadow-menuShadow w-full"
  >
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>
