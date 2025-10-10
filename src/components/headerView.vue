<script setup>
import headerMobile from './headerMobile.vue'
import profileView from './profileView.vue'
import resumeView from './resumeView.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('about')

const handleScroll = () => {
  const sections = navLinks.value.map((link) => document.getElementById(link.id))

  sections.forEach((section) => {
    if (!section) return

    const rect = section.getBoundingClientRect()
    const offset = 200 // Adjust this value based on your needs

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
  { id: 'howIWork', name: 'How I Work' },
  { id: 'contact', name: 'Contact me' },
])

const scrollToSection = (sectionId) => {
  console.log('Trying to scroll to:', sectionId) // برای دیباگ

  const element = document.getElementById(sectionId)
  console.log('Element found:', element) // برای دیباگ

  if (element) {
    // استفاده از getBoundingClientRect برای محاسبه دقیق
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const elementTop = rect.top + scrollTop
    const headerHeight = 150
    const targetPosition = elementTop - headerHeight

    console.log('Element top:', elementTop)
    console.log('Target position:', targetPosition)
    console.log('Current scroll:', scrollTop)

    // اسکرول به موقعیت محاسبه شده
    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth'
    })

    // به‌روزرسانی activeSection
    activeSection.value = sectionId
    console.log('Scroll command executed')
  } else {
    console.error('Element not found:', sectionId)
  }
}
</script>

<template>
  <div
    class="font-Roboto hidden md:flex md:px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[130px] py-[40px] lg:py-[45px] xl:py-[52px] justify-center items-center md:gap-[20px] lg:gap-[50px] xl:gap-[120px] 2xl:gap-[220px] bg-transparent fixed w-full z-50"
    style="background: linear-gradient(180deg, #F7F8F9 0%, rgba(247, 248, 249, 0.00) 100%);"
  >
    <!-- /// profile  -->
    <profileView />

    <div class="flex justify-center items-center md:gap-[20px] lg:gap-[50px] xl:gap-[80px] 2xl:gap-[152px]">
      <div
        class="flex justify-center items-center gap-4 md:gap-5 lg:gap-6 p-4 md:p-5 lg:p-6 rounded-2xl border-4 bg-white border-borderColor shadow-menuShadow"
      >
        <a
          v-for="item in navLinks"
          :key="item"
          href="#"
          @click.prevent="scrollToSection(item.id)"
          class="text-textColor font-normal text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] leading-[140%] cursor-pointer"
          :class="{ 'text-textColor2 font-semibold': activeSection === item.id }"
        >
          {{ item.name }}
        </a>
      </div>
      <!-- /// downloadResume  -->
      <resumeView />
    </div>
    <!-- /// menu  -->
  </div>
  <div class="flex md:hidden w-full p-6 fixed z-50"
  style="background: linear-gradient(180deg, #F7F8F9 0%, rgba(247, 248, 249, 0.00) 100%);"
  >
    <headerMobile :navLinks="navLinks" />
  </div>
</template>
