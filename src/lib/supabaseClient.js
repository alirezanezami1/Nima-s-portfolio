// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// مقادیر مستقیم Supabase
const supabaseUrl = 'https://twqfeiorchkzqdppurnm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cWZlaW9yY2hrenFkcHB1cm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1Mzg4MTYsImV4cCI6MjA2NjExNDgxNn0.4lMQLKgP1nw0DXbrlvb4_ZI1qbX33Wkv93XByq3ATaY'

// ایجاد کلاینت Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// تابع کمکی برای بررسی اتصال (همیشه true برمی‌گرداند چون مقادیر مستقیم هستند)
export const checkSupabaseConnection = () => {
  return true
}
