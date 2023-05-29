import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { messages } from './messages'

const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!,
  
  globalInjection: true,
  messages: messages
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
