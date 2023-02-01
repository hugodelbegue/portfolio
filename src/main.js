import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueWriter from "vue-writer";

import './assets/scss/main.scss'
import './assets/js/script.js'

const app = createApp(App)

app.use(router)
// app.use(VueWriter)

app.mount('#app')
