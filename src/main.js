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
      avatarShow: true,
      avatar1Show: false,
      rotImgShow: true,
      rotImg1Show: false,
      isPlay: false,
      lyrics: "",
      src: "https://m7.music.126.net/20170625114850/492d7b90d9726eec79445875011982c8/ymusic/dfea/389c/ac04/70c5db84ea78dcc8eb727124acec52a0.mp3",
      name: "When I Was Your Man",
      singerName:"Bruno Mars",
      picUrl: "https://p1.music.126.net/BgIHV6Bdc1fOL8exoLAHIg==/1694347418408441.jpg"
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

