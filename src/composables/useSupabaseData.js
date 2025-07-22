// src/composables/useSupabaseData.js

import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

export function useSupabaseData(tableName, options = {}) {
  const data = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  const fetchData = async () => {
    try {
      let query = supabase.from(tableName).select('*')

      if (options.orderBy) {
        query = query.order(options.orderBy, { ascending: options.ascending || false })
      }

      const { data: fetchedData, error: fetchError } = await query

      if (fetchError) throw fetchError
      data.value = fetchedData
    } catch (err) {
      error.value = err.message
      console.error(`Error fetching from ${tableName}:`, err)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchData)

  return { data, isLoading, error }
}
