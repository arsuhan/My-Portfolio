import '@fortawesome/fontawesome-free/css/all.css'
import './assets/main.css'


// import AOS from 'aos'
import 'aos/dist/aos.css'
// vm0.isMenuOpen = true; // Vue DevTools থাকলে

import './assets/main.css'
// import { ref } from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// AOS.init({duration:1000});

const app = createApp(App)

app.use(router)
// app.use(AOS)

app.mount('#app')
