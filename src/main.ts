import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/index.css'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

// 创建app
const app = createApp(App)

// 注入路由
app.use(router)

// 注入缓存
app.use(store)

// 注入多语言
app.use(i18n)

// 注入element-plus
app.use(ElementPlus)
// app.use(ElementPlus, { size: 'small', zIndex: 3000 })

// 挂载实例
app.mount('#app')

// createApp(App)
//   .use(store)
//   .use(ElementPlus, { size: "small", zIndex: 3000, locale })
//   .use(router)
//   .mount("#app");
