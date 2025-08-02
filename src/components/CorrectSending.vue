<script setup>
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const handleMainPageClick = () => {
  closeModal()
}
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4"
    style="background: rgba(8, 9, 13, 0.64)"
    @click="closeModal"
  >
    <div
      class="bg-white w-full h-fit md:w-[542px] md:h-auto md:mx-auto rounded-tl-3xl rounded-tr-3xl md:rounded-3xl md:shadow-lg p-6 pt-8 md:p-8"
      @click.stop
    >
      <div class="flex justify-center items-start gap-[10px] flex-shrink-0">
        <div class="flex flex-col items-center gap-8 self-stretch p-8">
          <div class="flex flex-col justify-center items-center gap-6 self-stretch">
            <div
              class="flex justify-center items-center gap-[9px] w-[72px] h-[72px] rounded-xl bg-mainBg5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M6.75 18L14.25 25.5L29.25 10.5"
                  stroke="#008600"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="flex flex-col justify-center items-center gap-1 self-stretch text-center">
              <p class="text-[18px] font-semibold leading-[180%] text-textColor2 capitalize">
                Your request has been sent
              </p>
              <p class="text-[14px] font-normal leading-[200%] text-textColor capitalize">
                You will be contacted via email or phone within the next 2 hours
              </p>
            </div>
          </div>

          <button
            @click="handleMainPageClick"
            class="flex justify-center text-[14px] text-textColor2 hover:text-white hover:bg-black font-medium leading-[24px] items-center gap-2 w-full rounded-xl py-3 border-[1px] border-borderColor2 bg-transparent"
          >
            Main page
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M3.8335 10H17.1668M17.1668 10L12.1668 5M17.1668 10L12.1668 15"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mobile-specific adjustments */
@media (max-width: 640px) {
  .fixed {
    padding: 0;
  }
}
</style>
