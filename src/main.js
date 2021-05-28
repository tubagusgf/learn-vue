import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/v1'

createApp(App).use(router).mount('#app')
