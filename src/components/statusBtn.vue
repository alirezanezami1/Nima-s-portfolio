<script setup>
import waveBtn from './waveBtn.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const status = ref(null)
const isLoading = ref(true)

async function getFreelanceStatus() {
  const { data, error } = await supabase.from('freelance_status').select('*').single()

  if (error) {
    console.error('Error fetching status:', error.message)
  } else {
    status.value = data
  }
  isLoading.value = false
}

onMounted(() => {
  getFreelanceStatus()
})
</script>
<template>
  <div
    class="inline-flex justify-center items-center gap-2 p-3 pr-5 rounded-full border-[1px] border-borderColor2"
  >
    <waveBtn colorWave="bg-waveColorO" colorWave2="bg-waveColorO2" />
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
