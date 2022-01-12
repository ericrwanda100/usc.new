import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
AOS.init();

createApp(App).use(router).mount('#app')
