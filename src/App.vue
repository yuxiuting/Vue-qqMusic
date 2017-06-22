<template>
  <div id="app">
  <!--<v-index></v-index>-->
  <router-view></router-view>
  <div class="footer" v-show="showFooter">
      <p class="name">{{name}}</p>
      <audio :src="src" class="audio" v-bind:autoplay="isPlay"></audio>
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
    }
  },
  methods: {
    play () {
      this.$store.state.isPlay = !this.$store.state.isPlay
      var play = document.querySelector('.audio')
      if(!this.$store.state.isPlay) {
        play.pause()
      }else {
        play.play()
      }
      // var play = document.querySelector('.audio')
      // play.play()
      // this.Img1Show = false,
      // this.ImgShow = true
    },
    // pause () {
    //   var play = document.querySelector('.audio')
    //   play.pause()
    //   this.Img1Show = true,
    //   this.ImgShow = false
    // }, 
  }

}
</script>

<style lang="scss" scroped>
*{
  margin: 0;
  padding: 0;
}
.footer{
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 11rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
}
.name{
  font-size: 2.8rem;
  color: #000000;

  margin-left: 1rem;
  
}
.footer img{
  position: fixed;
  width: 6rem;
  height: 6rem;
  right: 8rem;
}
</style>
