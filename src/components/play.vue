<template lang="html">
    <div>
        <div class="t">
        <div class="img2">
        <router-link to="/">
          <img src="../public/icons/jiantou.png" alt="" class="back" @click="showFooter">
        </router-link>
        </div>
        <div class="name">
          <p class="song">{{name}}</p>
        </div>
        <img src="../public/icons/sandian.png" alt="" class="dot" @click="showFooter">
        </div>
        <div class="small">
            <small class="singer">— {{singerName}} —</small>
        </div>
        <img :src="picUrl" alt="" class="album-img">
        <div class="rot">
            <img :src="picUrl" alt="" class="rotImg" v-show="rotImgShow">
            <img :src="picUrl" alt="" class="rotImg1" v-show="rotImg1Show">
        </div>
        <!--<div class="img4">
        <img class="img" src="../public/icons/pause.png" alt="" @click="play" v-show="!isPlay">
        <img class="img1" src="../public/icons/play.png" alt="" @click="play" v-show="isPlay" >
        </div>-->
           
        <!--<p class="lyrics">{{lyrics}}</p> -->
   </div>
</template>

<script>

export default {
    computed: {
        picUrl () {
           return this.$store.state.picUrl 
        },
        lyrics () {
            return this.$store.state.lyrics 
        },
        name () {
            return this.$store.state.name
        },
        singerName () {
            return this.$store.state.singerName
        },
        rotImgShow () {
            return this.$store.state.rotImgShow
        },
        rotImg1Show () {
            return this.$store.state.rotImg1Show
        },
        src () {
            return this.$store.state.src
        },
        isPlay() {
      return this.$store.state.isPlay
       }
    },
    methods:{
        showFooter () {
            this.$store.state.showFooter = true
        },
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
    }
}
}
</script>

<style lang="css" scoped>
*{
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: Tahoma;
}
/*.back{
    z-index:1;
    position: absolute;
    left: 2rem;
    top: 4rem;
    width: 5rem;
    height: 5rem;
}*/
.t{
    width: 100%;
    position: absolute;
    top: 2rem;
    display: flex;
    justify-content: center;
    z-index:1;
}
.back{

    width: 5rem;
    height: 5rem;
    position: absolute;
    left: 2rem
    
}
.dot{

    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 2rem;

}
.album-img{
    position: fixed;
    width: 100%;
    height: 100%;
    filter: blur(30px);
}
.song{
    color: #ffffff;
    font-size: 4rem;
    font-weight: 200;
}
.small{
    width: 100%;
    position: absolute;
    top: 8rem;
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-weight: 200;
    font-size: 3rem;
    z-index:1;
}
.rot{
    position: absolute;
    top: 22rem;
    display: flex;
    justify-content: center;
    width: 100%;
}
.rotImg{
    z-index:1;
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
}
.rotImg1{
    z-index:1;
    width: 50rem;
    height: 50rem;
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
.img4{
    width: 100%;
    position: absolute;
    top: 90rem;
    display: flex;
    justify-content: center;
}
/*.img,
.img1{
    position: absolute;
    top: 80rem;
    left: 50rem;;
}*/



</style>