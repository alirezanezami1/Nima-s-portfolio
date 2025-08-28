import './assets/css/main.css'
import './assets/css/font.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import emailjs from '@emailjs/browser'

emailjs.init('RG3Rzc36WWFWVLcbK')

const app = createApp(App)

app.use(router)

app.mount('#app')
