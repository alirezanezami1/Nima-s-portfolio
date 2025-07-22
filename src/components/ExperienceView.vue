<script setup>
import { useSupabaseData } from '@/composables/useSupabaseData'

// به همین سادگی! تمام منطق در کامپوزبل پنهان شده است
const {
  data: experiences,
  isLoading,
  error,
} = useSupabaseData('experiences', {
  orderBy: 'start-date',
  ascending: false,
})
</script>

<template>
  <section id="experience">
    <h2 class="text-2xl font-bold mb-6">My Experience</h2>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="timeline">
      <div v-for="exp in experiences" :key="exp.id">
        <h3>{{ exp.role }} at {{ exp.company }}</h3>
      </div>
    </div>
  </section>
</template>
