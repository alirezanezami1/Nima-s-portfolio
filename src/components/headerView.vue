<script setup>
import profileView from './profileView.vue'
import resumeView from './resumeView.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('about')

const handleScroll = () => {
  const sections = navLinks.value.map((link) => document.getElementById(link.id))

  sections.forEach((section) => {
    if (!section) return

    const rect = section.getBoundingClientRect()
    const offset = 150 // Adjust this value based on your needs

    if (rect.top <= offset && rect.bottom >= offset) {
      activeSection.value = section.id
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = ref([
  { id: 'about', name: 'About me' },
  { id: 'projects', name: 'Project' },
  { id: 'experience', name: 'Experience' },
  { id: 'how-i-work', name: 'How I Work' },
  { id: 'contact', name: 'Contact me' },
])
</script>

<template>
  <div class="px-[130px] py-[52px] flex justify-center items-center gap-[152px] w-full bg-mainBg">
    <!-- /// profile  -->
    <profileView />

    <!-- /// menu  -->
    <div
      class="flex justify-center items-center gap-7 p-6 rounded-2xl border-4 bg-white border-borderColor shadow-menuShadow"
    >
      <a
        v-for="item in navLinks"
        :key="item"
        :href="`#${item.id}`"
        class="text-textColor font-normal leading-[140%]"
        :class="{ 'text-textColor2 font-medium': activeSection === item.id }"
        @click="activeSection = item.id"
      >
        {{ item.name }}
      </a>
    </div>
    <!-- /// downloadResume  -->
    <resumeView />
  </div>
</template>
