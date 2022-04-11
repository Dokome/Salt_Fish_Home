import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MdEditor from './plugins/MdEditor'
// 全局样式
import './assets/style/reset.css'

const app = createApp(App)
// 注册路由
app.use(router)
// 使用富文本编辑器
app.use(MdEditor)
app.mount('#app')
