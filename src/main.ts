/* eslint-disable perfectionist/sort-imports */

// core
import { createApp } from 'vue'
import { pinia } from "@/pinia"
import { router } from "@/router"
import { installPlugins } from "@/plugins"
import App from "@/App.vue"
// 引入 Element Plus 国际化
import ElementPlus from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import "element-plus/dist/index.css"
// css
import "normalize.css"
import "nprogress/nprogress.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "vxe-table/lib/style.css"
import "@@/assets/styles/index.scss"
import "virtual:uno.css"

// 创建应用实例
const app = createApp(App)

// 安装插件（全局组件、自定义指令等）
installPlugins(app)

// 安装 pinia router ElementPlus
app.use(pinia).use(router).use(ElementPlus)

app.use(ElementPlus, {
  locale: zhCn
})

// router 准备就绪后挂载应用
router.isReady().then(() => {
  app.mount("#app")
})
