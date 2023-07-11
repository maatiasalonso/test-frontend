import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// Configuración layout
app.mixin({
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('h-full');
        document.documentElement.classList.add('bg-gray-100');
        document.documentElement.classList.add('h-full');
    });
  },
});

app.mount('#app');
