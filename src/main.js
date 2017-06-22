import Vue from 'vue'
import App from './App'
import router from './router'
// 模块化分离  有利于main.js 精简 减少流程 只给模块入口
import mint from '@/library/mint'
import axiosJs from 'axios'
import Vuex from 'vuex'
// ajax请求过期时间，最长5秒，如果超时不候
axiosJs.defaults.timeout = 5000


Vue.config.productionTip = false
// 将axios 放入到vue原型链中，所有的组件都可使用
Vue.prototype.axios = axiosJs
Vue.use(Vuex)
// api有很多，将它单独封装一个模块
import APIJS from './assets/js/api.js'
Vue.prototype.api=APIJS

import UtilJS from './assets/js/util.js'
Vue.prototype.util = UtilJS
const store = new Vuex.Store({
    state: {
      musiclist: [],
      showFooter: true,
      isPlay: false,
      src: "https://m8.music.126.net/20170621113735/8f8a6ebdfa57e06727105fd31ecd6b00/ymusic/ef85/56ab/1f05/ac15bd3cebe8a1ed0855c277c1f9e9d5.mp3",
      name: "祝我生日快乐",
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  mint,
  store,
  components: { App }
})

