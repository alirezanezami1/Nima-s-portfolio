<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CorrectSending from './CorrectSending.vue'
import WrongSending from './WrongSending.vue'
import emailjs from '@emailjs/browser'

const emit = defineEmits(['close'])

const formData = ref({
  fullName: '',
  email: '',
  subject: '',
  description: '',
})

const showSuccessModal = ref(false)
const showErrorModal = ref(false)
const isSending = ref(false)
const isClosing = ref(false)

const closeModal = () => {
  isClosing.value = true
  // Wait for animation to complete before emitting close event
  setTimeout(() => {
    emit('close')
  }, 300) // Match the animation duration
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
  // Don't call closeModal here, just reset the form
  formData.value = {
    fullName: '',
    email: '',
    subject: '',
    description: '',
  }
}

const closeErrorModal = () => {
  showErrorModal.value = false
}

const retrySending = () => {
  showErrorModal.value = false
  formData.value = {
    fullName: '',
    email: '',
    subject: '',
    description: '',
  }
}

const validateForm = () => {
  return (
    formData.value.fullName.trim() !== '' &&
    formData.value.email.trim() !== '' &&
    formData.value.subject.trim() !== '' &&
    formData.value.description.trim() !== ''
  )
}

const sendEmail = async (data) => {
  try {
    const templateParams = {
      to_email: 'your-gmail@gmail.com', // ایمیل Gmail خود را اینجا قرار دهید (مثل: nima@gmail.com)
      from_name: data.fullName,
      from_email: data.email,
      subject: data.subject,
      message: data.description,
    }

    const response = await emailjs.send(
      'service_xo229ph', // Service ID شما
      'template_2pbj6e4', // Template ID شما
      templateParams,
    )

    console.log('Email sent successfully:', response)
    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}

const sendRequest = async () => {
  if (!validateForm()) {
    alert('Please fill in all fields')
    return
  }

  isSending.value = true

  try {
    const success = await sendEmail(formData.value)

    if (success) {
      showSuccessModal.value = true
      // Don't close the modal system, just show success
    } else {
      showErrorModal.value = true
    }
  } catch (error) {
    console.error('Error sending email:', error)
    showErrorModal.value = true
  } finally {
    isSending.value = false
  }
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
  <Transition name="modal" appear>
    <div
      v-if="!showSuccessModal && !showErrorModal && !isClosing"
      class="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4"
      style="background: rgba(8, 9, 13, 0.64)"
      @click="closeModal"
    >
      <!-- Main Modal Content -->
      <div
        class="bg-white w-full h-fit md:w-[542px] md:h-auto md:mx-auto rounded-tl-3xl rounded-tr-3xl md:rounded-3xl md:shadow-lg p-6 pt-8 md:p-8"
        @click.stop
      >
        <!-- Header -->
        <div
          class="flex justify-between items-start mb-4 md:mb-6 pb-4 border-b border-borderColor2"
        >
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
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-[14px] font-medium leading-[24px] text-textColor2 mb-2"
              >Email address</label
            >
            <input
              v-model="formData.email"
              type="email"
              class="w-full pr-[14px] pl-4 py-3 text-[12px] leading-[24px] font-medium placeholder:font-normal placeholder:text-textColor placeholder:text-[12px] border border-mainBg bg-mainBg rounded-xl focus:outline-none focus:ring-2 focus:ring-mainBg focus:border-transparent"
              placeholder="Like : Nima Masoumi"
              required
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
              required
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
              class="w-full pr-[14px] pl-4 py-3 text-[12px] leading-[24px] font-medium placeholder:font-normal placeholder:text-textColor placeholder:text-[12px] border border-mainBg bg-mainBg rounded-xl focus:outline-none focus:ring-2 focus:ring-mainBg focus:border-transparent"
              placeholder="Write your description"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSending"
            class="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 text-sm md:text-base flex items-center justify-center"
          >
            <span v-if="isSending" class="flex items-center">
              <svg
                class="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
            <span v-else>Send request</span>
          </button>
        </form>
      </div>
    </div>
  </Transition>

  <!-- Success Modal -->
  <CorrectSending v-if="showSuccessModal" @close="closeSuccessModal" />

  <!-- Error Modal -->
  <WrongSending v-if="showErrorModal" @close="closeErrorModal" @retry="retrySending" />
</template>

<style scoped>
/* Mobile-specific adjustments */
@media (max-width: 640px) {
  .fixed {
    padding: 0;
  }
}

/* Modal transition styles */
.modal-enter-active {
  animation: modalEnter 0.3s ease-out;
}

.modal-leave-active {
  animation: modalEnter 0.1s reverse;
}

@keyframes modalEnter {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
