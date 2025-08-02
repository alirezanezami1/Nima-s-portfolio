<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close'])

const formData = ref({
  fullName: '',
  email: '',
  subject: '',
  description: '',
})

const closeModal = () => {
  emit('close')
}

const sendRequest = () => {
  // Handle form submission here
  console.log('Form submitted:', formData.value)
  closeModal()
}

// Prevent body scrolling when modal is open
onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
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
      <!-- Header -->
      <div class="flex justify-between items-start mb-4 md:mb-6 pb-4 border-b border-borderColor2">
        <div class="flex-1 pr-4">
          <h2 class="text-[18px] font-semibold leading-[24px] text-textColor2 mb-2">
            Call reservation request
          </h2>
          <p class="text-[12px] text-textColor font-normal leading-[24px]">
            Complete the form below to be contacted at your requested time
          </p>
        </div>
        <button
          @click="closeModal"
          class="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="sendRequest" class="space-y-3 md:space-y-4">
        <!-- Full Name -->
        <div>
          <label class="block text-[14px] font-medium leading-[24px] text-textColor2 mb-2"
            >Full name</label
          >
          <input
            v-model="formData.fullName"
            type="text"
            class="w-full pr-[14px] pl-4 py-3 text-[12px] leading-[24px] font-medium placeholder:font-normal placeholder:text-textColor placeholder:text-[12px] border border-mainBg bg-mainBg rounded-xl focus:outline-none focus:ring-2 focus:ring-mainBg focus:border-transparent"
            placeholder="Like : Nima Masoumi"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-[14px] font-medium leading-[24px] text-textColor2 mb-2"
            >Email address</label
          >
          <input
            v-model="formData.email"
            type="text"
            class="w-full pr-[14px] pl-4 py-3 text-[12px] leading-[24px] font-medium placeholder:font-normal placeholder:text-textColor placeholder:text-[12px] border border-mainBg bg-mainBg rounded-xl focus:outline-none focus:ring-2 focus:ring-mainBg focus:border-transparent"
            placeholder="Like : Nima Masoumi"
          />
        </div>

        <!-- Subject -->
        <div>
          <label class="block text-[14px] font-medium leading-[24px] text-textColor2 mb-2"
            >Subject</label
          >
          <input
            v-model="formData.subject"
            type="text"
            class="w-full pr-[14px] pl-4 py-3 text-[12px] leading-[24px] font-medium placeholder:font-normal placeholder:text-textColor placeholder:text-[12px] border border-mainBg bg-mainBg rounded-xl focus:outline-none focus:ring-2 focus:ring-mainBg focus:border-transparent"
            placeholder="Like :  Like designing a service website"
          />
        </div>

        <!-- Description -->
        <div>
          <label class="block text-[14px] font-medium leading-[24px] text-textColor2 mb-2"
            >Description</label
          >
          <textarea
            v-model="formData.description"
            rows="4"
            class="w-full resize-none pr-[14px] pl-4 py-3 text-[12px] leading-[24px] font-medium placeholder:font-normal placeholder:text-textColor placeholder:text-[12px] border border-mainBg bg-mainBg rounded-xl focus:outline-none focus:ring-2 focus:ring-mainBg focus:border-transparent"
            placeholder="Write your description"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-textColor2 md:bg-mainBg2 border-[1px] border-borderColor2 hover:bg-black hover:text-white text-white md:text-textColor2 py-[10px] md:py-3 rounded-xl transition-colors duration-200 text-[14px] leading-[24px] font-normal"
        >
          Send request
        </button>
      </form>
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
