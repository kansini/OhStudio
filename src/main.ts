import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from "axios"

axios.defaults.baseURL = './api/'
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(ElementPlus).use(store).use(router).mount('#app')
