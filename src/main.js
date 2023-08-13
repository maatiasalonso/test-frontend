import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import Tooltip from 'primevue/tooltip'
import 'primevue/resources/themes/lara-light-blue/theme.css'

const app = createApp(App)
app.use(PrimeVue)

// Configuración layout
app.mixin({
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.classList.add('h-full')
      document.documentElement.classList.add('bg-gray-100')
      document.documentElement.classList.add('h-full')
    })
  }
})

app.directive('tooltip', Tooltip)
app.mount('#app')
