<script setup>
import headerView from '@/components/headerView.vue'
import FooterView from './components/FooterView.vue'
import CallModal from './components/CallModal.vue'
import { ref, provide } from 'vue'

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

// Provide modal functions to child components
provide('openModal', openModal)
</script>

<template>
  <headerView />
  <RouterView class="font-Roboto px-6 sm:px-8 xl:px-[50px] 2xl/2:px-[110px] xxl:px-[130px] bg-mainBg max-w-[1440px]" />
  <FooterView />

  <!-- Global Modal -->
  <CallModal v-if="showModal" @close="closeModal" />
</template>
