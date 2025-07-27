<script setup>
import { ref } from 'vue'

import avatarDefault from '@/assets/images/contact/Nima.png'
import avatarRight from '@/assets/images/contact/Nima (2).png'
import avatarLeft from '@/assets/images/contact/Nima (1).png'
import avatarBottom from '@/assets/images/contact/Nima (3).png'

import InstaIcon from './icons/InstaIcon.vue'
import LinkedInIcon from './icons/LinkedInIcon.vue'
import DribbbleIcon from './icons/DribbbleIcon.vue'
import BeIcon from './icons/BeIcon.vue'

const media = [
  { icon: InstaIcon, link: 'https://www.instagram.com/uiuxnm?igsh=MXFnczg1NThsdjN3bA==' },
  {
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/nimaeell?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  { icon: DribbbleIcon, link: 'https://dribbble.com/nimaell' },
  { icon: BeIcon, link: 'https://www.behance.net/nimaeell2' },
]

const avatars = {
  default: avatarDefault,
  right: avatarRight,
  left: avatarLeft,
  bottom: avatarBottom,
}

const currentAvatarSrc = ref(avatars.default)

const avatarContainer = ref(null)

function handleMouseLeave() {
  currentAvatarSrc.value = avatars.default
}

function handleMouseMove(event) {
  // از event.currentTarget استفاده می‌کنیم تا ابعاد div اصلی را بگیریم
  const container = event.currentTarget
  if (!container) return

  const { offsetX, offsetY } = event
  const { offsetWidth: width, offsetHeight: height } = container

  // ✅ ارتفاع ناحیه تعاملی را برابر با کل ارتفاع کانتینر در نظر می‌گیریم

  // شرط اصلی: اگر موس خارج از کانتینر بود (که با mouseleave کنترل می‌شود)
  // این شرط دیگر لازم نیست چون کل کانتینر فعال است

  // تعریف نواحی چپ، راست و پایین در کل کانتینر
  const leftZoneEnd = width * 0.4
  const rightZoneStart = width * 0.6
  // ناحیه پایین را بزرگتر می‌کنیم (مثلاً 40% پایینی کانتینر)
  const bottomZoneStart = height * 0.6

  // منطق تشخیص موقعیت موس
  if (offsetY > bottomZoneStart) {
    // اولویت با ناحیه پایین (محل آیکون‌ها)
    currentAvatarSrc.value = avatars.bottom
  } else if (offsetX < leftZoneEnd) {
    // سپس ناحیه چپ
    currentAvatarSrc.value = avatars.left
  } else if (offsetX > rightZoneStart) {
    // سپس ناحیه راست
    currentAvatarSrc.value = avatars.right
  } else {
    // مرکز
    currentAvatarSrc.value = avatars.default
  }
}
</script>

<template>
  <section id="contact">
    <div
      ref="avatarContainer"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      class="w-full h-full bg-transparent rounded-2xl flex flex-col gap-2 -mt-5 items-center justify-center cursor-pointer"
    >
      <div
        class="pt-6 px-[22px] w-[124px] flex justify-center overflow-hidden items-center aspect-square bg-white shadow-menuShadow rounded-[500px]"
      >
        <img
          :src="currentAvatarSrc"
          alt="Interactive Avatar"
          class="w-[80px] h-[104px] transition-opacity duration-200 object-cover"
        />
      </div>

      <p class="text-[18px] leading-[140%] text-textColor2 font-normal text-center">
        If you’ve come this far, <span class="font-bold">you get the vibe !</span>
      </p>
      <div class="flex justify-center items-center gap-2">
        <div
          v-for="item in media"
          :key="item"
          class="p-3 w-[56px] h-[56px] border-[1px] hover:text-white hover:bg-black hover:border-black border-borderColor2 rounded-full bg-white aspect-square flex-shrink-0 flex justify-center items-center"
        >
          <div class="w-[32px] h-[32px] flex justify-center items-center">
            <a :href="item.link" target="_blank">
              <component :is="item.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
