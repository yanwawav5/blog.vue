import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
import axios from 'axios'

// import './assets/prism/prism.css'
// import Prism from 'prismjs'
// Vue.use(Prism)
// Prism.highlightAll()
//全局注册axios
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = 'http://localhost:5001/'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$tinymce = tinymce 
Vue.use(VueTinymce)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// vue跳转新页面后回到顶部
router.afterEach((to,from,next)=>{
　　　　window,scrollTo(0,0)
　　})

import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

