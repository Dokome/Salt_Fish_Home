import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { VMdEditor /* , RecycleScroller  */, CustomDirectives } from './plugins'

// 全局样式
import './assets/style/reset.css'
// import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const app = createApp(App)
// 注册路由
app.use(router)
// pinia
app.use(createPinia())
// 使用富文本编辑器
app.use(VMdEditor)
// 使用虚拟列表 (暂时取消)
// app.component('RecycleScroller', RecycleScroller)
// 自定义指令
app.use(CustomDirectives)
app.mount('#app')
