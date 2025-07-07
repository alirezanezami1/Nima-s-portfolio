<script setup>
import waveBtn from './waveBtn.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient' // فایل اتصال به سوپابیس

// یک ref برای نگهداری اطلاعات وضعیت
const status = ref(null)
const isLoading = ref(true)

// تابعی برای خواندن اطلاعات از دیتابیس
async function getFreelanceStatus() {
  // .single() به سوپابیس می‌گوید که ما فقط منتظر یک ردیف هستیم
  // این تابع نتیجه را به صورت یک آبجکت برمی‌گرداند، نه یک آرایه
  const { data, error } = await supabase
    .from('freelance_status')
    .select('*') // تمام ستون‌ها را انتخاب می‌کنیم
    .single()

  if (error) {
    console.error('Error fetching status:', error.message)
  } else {
    status.value = data
  }
  isLoading.value = false
}

// بعد از بارگذاری کامپوننت، تابع را اجرا می‌کنیم
onMounted(() => {
  getFreelanceStatus()
})
</script>
<template>
  <div
    class="inline-flex justify-center items-center gap-2 p-3 pr-5 rounded-full border-[1px] border-borderColor2"
  >
    <waveBtn />
    <div class="text-[16px] font-medium text-textBlack flex justify-center items-center">
      <div v-if="isLoading">
        <p>Loading status...</p>
      </div>

      <div v-else-if="status">
        <h2>{{ status.title }}</h2>
      </div>
    </div>
  </div>
</template>
