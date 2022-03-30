import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 全局样式
import './assets/style/reset.css'

const app = createApp(App)
// 注册路由
app.use(router)
app.mount('#app')
