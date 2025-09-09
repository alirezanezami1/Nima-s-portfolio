<script setup>
const emit = defineEmits(['close', 'retry'])

const closeModal = () => {
  emit('close')
}

const retrySending = () => {
  emit('retry')
  closeModal() // Close the error modal first
}
</script>

<template>
  <div
    class="fixed inset-0 z-[100000] flex items-end md:items-center justify-center md:p-4"
    style="background: rgba(8, 9, 13, 0.64); backdrop-filter: blur(4px);"
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
              class="flex justify-center items-center gap-[9px] w-[72px] h-[72px] rounded-xl bg-red-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M18 12V18M18 24H18.015M33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18Z"
                  stroke="#FF334C"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="flex flex-col justify-center items-center gap-1 self-stretch text-center">
              <p class="text-[18px] font-semibold leading-[180%] text-textColor2 capitalize">
                There was a problem sending the request.
              </p>
              <p class="text-[14px] font-normal leading-[200%] text-textColor capitalize">
                Please check your internet connection and try again. If the problem persists,
                contact me via Telegram.
              </p>
            </div>
          </div>

          <div class="flex gap-3 w-full">
            <button
              @click="retrySending"
              class="flex justify-center items-center w-full gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 text-sm"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M15.8035 6.70839L15.2142 6.11913C12.6107 3.51563 8.38961 3.51563 5.78612 6.11913C3.18262 8.72262 3.18262 12.9437 5.78612 15.5472C8.38961 18.1507 12.6107 18.1507 15.2142 15.5472C16.7282 14.0332 17.3618 11.9721 17.1149 10.0003M15.8035 6.70839H12.2679M15.8035 6.70839V3.17285"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
              Try Again
            </button>
          </div>
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
