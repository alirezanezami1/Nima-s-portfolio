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
  handleScroll()
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

  const element = document.getElementById(sectionId)

  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const elementTop = rect.top + scrollTop
    const headerHeight = 150
    const targetPosition = elementTop - headerHeight

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth'
    })

    activeSection.value = sectionId
  }
}
</script>

<template>
  <div
    class="font-Roboto hidden lg:flex mx-auto max-w-[1180px] w-full py-[40px] px-6 xl:px-0 lg:py-[45px] xl:py-[52px] justify-between items-center  bg-transparent fixed left-1/2 -translate-x-1/2 z-50"
    style="background: linear-gradient(180deg, #F7F8F9 0%, rgba(247, 248, 249, 0.00) 100%);"
  >
    <!-- /// profile  -->
    <profileView />

    <div class="flex justify-center items-center gap-2.5 rounded-2xl p-6 border-4 bg-white border-borderColor shadow-menuShadow">
      <div
        class="flex justify-center items-center gap-7"
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
    </div>

    <resumeView />

  </div>
  <div class="flex lg:hidden w-full p-6 fixed z-50"
  style="background: linear-gradient(180deg, #F7F8F9 0%, rgba(247, 248, 249, 0.00) 100%);"
  >
    <headerMobile :navLinks="navLinks" />
  </div>
</template>
