<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

defineProps({
  size: {
    type: String,
    default: 'w-[60px] h-[60px] md:w-[66px] md:h-[66px] lg:w-[72px] lg:h-[72px] rounded-2xl md:rounded-3xl border-4',
  },
})

const profile = ref(null)

async function getProfile() {
  const { data, error } = await supabase.from('profile').select('avatar_url').single()

  if (error) {
    console.error('Error fetching profile:', error)
  } else {
    profile.value = data
  }
}

onMounted(() => {
  getProfile()
})
</script>

<template>
  <div v-if="profile && profile.avatar_url">
    <img
      :src="profile.avatar_url"
      alt="Profile Picture"
      :class="[` object-cover  border-white shadow-profShadow`, size]"
    />
  </div>
  <div class="flex items-center justify-center" v-else>
    <div
      class="border-2 border-textColor border-solid rounded-full border-t-transparent w-5 h-5 animate-spin"
    ></div>
  </div>
</template>
