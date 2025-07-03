<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

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
      class="w-[72px] h-[72px] rounded-3xl object-cover border-4 border-white shadow-profShadow"
    />
  </div>
  <div class="flex items-center justify-center" v-else>
    <div
      class="border-2 border-textColor border-solid rounded-full border-t-transparent w-5 h-5 animate-spin"
    ></div>
  </div>
</template>
