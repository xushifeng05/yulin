import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';  //引入element的css
import 'vant/lib/index.css'                       //引入vant的css
import store from "./store";                      //引入vuex
import axios from './router/axios'                //引入axios
import qs from 'qs'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$qs = qs
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')

axios.defaults.baseURL = '/api'



