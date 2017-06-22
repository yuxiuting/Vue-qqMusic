<template lang="html">
    <div>
    <v-index></v-index>
  <div class="wrapper">
    <div class="intr">
        <div class="timer">
            <img src="../public/icons/dengji.png" alt="">
            <span @click="intrshow">0分钟</span>
        </div>
        <div class="avatar" @click="intrshow">
            <img src="../public/icons/avatar.jpg" alt="">
            <transition name="fold">
                <div class="intr1" v-show="intrShow">
                    <h1>余秀婷</h1>
                    <h2>求职意向 :</h2>
                    <p>web前端工程师</p>
                    <h2>个人信息 ：</h2>
                    <p>东华理工大学(本科)<br/><br/>软件工程(2018年毕业)<br/><br/>15907094249<br/><br/>916356730@qq.com</p>
                    <br/><br/>
                    <h2>技术栈 :</h2>
                    <h3>【前端】 :</h3>
                    <p class="get">HTML / HTML5 &nbsp&nbsp&nbsp CSS &nbsp&nbsp&nbsp SASS &nbsp&nbsp&nbsp AJAX</p>
                    <p class="get">JavaScript(ES6,ES5) &nbsp&nbsp&nbsp jQuery &nbsp&nbsp&nbsp Babel</p>
                    <p class="get">Vue.JS &nbsp&nbsp&nbsp 微信小程序</p>
                    <h3>【后端】 :</h3>
                    <p class="get1">Node.js (express)</p>
                    <h3>【自动化构建】 :</h3>
                    <p class="get1">Webpack</p>
                </div>
            </transition>
        </div>
        <div class="vip">
            <img src="../public/icons/vvip.png" alt="">
            <span @click="intrshow">开通</span>
        </div>
    </div>
    <p class="username" @click="intrshow">{{username}}</p>
    <div class="intr-songs">
        <div class="t-intr-songs">
            <div class="t-intr-songs1">
                <router-link to="/total">
                <img src="../public/icons/yinfu.png" alt="">
                <p>全部歌曲</p>
                <small>55</small>
                </router-link> 
            </div>
            <div class="t-intr-songs1">
                <img src="../public/icons/download.png" alt="">
                <p>下载歌曲</p>
                <small>55</small>
            </div>
            
            <div class="t-intr-songs1">
                <router-link to="/musiclist">
                <img src="../public/icons/zuijin.png" alt="">
                <p>最近播放</p>
                <small>55</small>
                </router-link>
            </div>
            
        </div>
        <div class="b-intr-songs">
            <div class="b-intr-songs1">
                <img src="../public/icons/heart.png" alt="">
                <p>我喜欢</p>
                <small>55</small>
            </div>
            <div class="b-intr-songs1">
                <img src="../public/icons/mv.png" alt="">
                <p>下载MV</p>
            </div>
            <div class="b-intr-songs1">
                <img src="../public/icons/cd.png" alt="">
                <p>已购音乐</p>
            </div>
        </div>
    </div>
    <div class="blank"></div>
  </div>
  <div class="radio">
      <div class="radio1">
        <img src="../public/icons/run.jpg" alt="">
        <!--<img src="" alt="">-->
        <div class="title">
        <p>个性电台</p>
        <small>听 Seve 的人也喜欢听这些歌曲</small>
        </div>
      </div>
      <div class="radio2">
        <img src="../public/icons/run.jpg" alt="">
        <!--<img src="" alt="">-->
        <div class="title2">
        <p>NIKE跑步电台</p>
        <small>新增万首中文跑步歌曲,点燃你的2017</small>
        </div>
      </div>
  </div>
  <div class="blank1"></div>
  <div class="songlist">
      <p class="title">我 的 歌 单 1</p>
  </div>
  <div class="list">
      <img src="../public/icons/jay1.jpg" alt="">
      <div class="number">
          <p>哦耶。的2015年特别纪念</p>
          <small>46首</small>
      </div>
  </div>
    <div class="list">
      <img src="../public/icons/jay1.jpg" alt="">
      <div class="number">
          <p>哦耶。喜欢的歌</p>
          <small>46首</small>
      </div>
  </div>
  <div class="blank2">
      
  </div>
  </div>
</template>

<script>
import index from '@/components/index.vue'
export default {
    data () {
        return {
            intrShow: false,
            username: '余秀婷'
        }
    },
    components: {
        "v-index": index
    },
    methods: {
      intrshow () {
         this. intrShow = ! this.intrShow
      }
    }
}
</script>

<style lang="scss">
@import '../assets/style/header.scss';
</style>