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
      class="w-[72px] h-[72px] rounded-3xl object-cover border-4 border-white shadow-lg"
    />
  </div>
</template>
