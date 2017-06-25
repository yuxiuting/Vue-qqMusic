<template>
  <div id="app">
  <!--<v-index></v-index>-->
  <router-view></router-view>
  <div class="footer" v-show="showFooter">
    <router-link to="/play">
      <img :src="picUrl" alt="" class="avatar" v-show="avatarShow" >
      <img :src="picUrl" alt="" class="avatar1" v-show="avatar1Show" >
      <div class="Name">
      <p class="name">{{name}}</p><br/>
      <small class="singerName">{{singerName}}</small>
      </div>
      </router-link>
      <audio :src="src" class="audio" v-bind:autoplay="isPlay" loop></audio>
      <img class="img" src="./public/icons/pause.png" alt="" @click="play" v-show="!isPlay">
      <img class="img1" src="./public/icons/play.png" alt="" @click="play" v-show="isPlay" >
  </div>
  </div>
</template>

<script>
// import index from '@/components/index.vue'
export default {
  name: 'app',
  data () {
    return {
      // Img1Show: true,
      // ImgShow: false
    }
  },
  computed: {
    isPlay() {
      return this.$store.state.isPlay
    },
    src() {
      return this.$store.state.src
    },
    name() {
      return this.$store.state.name
    },
    showFooter () {
      return this.$store.state.showFooter
    },
    picUrl(){
      return this.$store.state.picUrl
    },
    singerName(){
      return this.$store.state.singerName
    },
    avatarShow(){
      return this.$store.state.avatarShow
    },
    avatar1Show(){
      return this.$store.state.avatar1Show
    }
  },
  methods: {
    play () {
      this.$store.state.isPlay = !this.$store.state.isPlay
      var play = document.querySelector('.audio')
      // var p = document.querySelector('.avatar1')
      var p = document.querySelector('.avatar')
      if(!this.$store.state.isPlay) {
        play.pause()
        this.$store.state.avatar1Show = false
        this.$store.state.avatarShow = true
        this.$store.state.rotImg1Show = false
        this.$store.state.rotImgShow = true
      }else {
        play.play()
        this.$store.state.avatarShow = false
        this.$store.state.avatar1Show = true
        this.$store.state.rotImg1Show = true
        this.$store.state.rotImgShow = false
      }
},
      
      // var play = document.querySelector('.audio')
      // play.play()
      // this.Img1Show = false,
      // this.ImgShow = true
    
    // display () {
    //   this.$store.state.showFooter = false
    // }
    // pause () {
    //   var play = document.querySelector('.audio')
    //   play.pause()
    //   this.Img1Show = true,
    //   this.ImgShow = false
    // }, 
  }

}
</script>

<style lang="css" scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.footer{
  /*z-index:1;*/
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 11rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
}
.avatar{
  position: fixed;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
}
.avatar1{
  position: fixed;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  animation: rotate 10s linear infinite ;
  -webkit-animation: rotate 10s linear infinite;
  transform-origin: center center;

}
@keyframes rotate {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }

  }

.Name{
  color: #000000;
  margin-left: 10rem; 
  /*text-decoration: none; */
}
.footer .img,.img1{
  position: fixed;
  width: 6rem;
  height: 6rem;
  right: 8rem;
}
.name{
  font-size: 3rem;

}
.singerName{
  font-size: 2rem;
}
</style>
