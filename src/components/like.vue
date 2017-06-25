<template lang="html">
    <div>
        <!--<ul>
        <li v-for="item in musiclist" @click="play(item.id,item.name,item.picUrl,item.arName)">
            <p class="name">{{item.name}}</p>
            <p class="arName">{{item.arName}} . {{item.alName}}</p>
        </li>  
    </ul>-->
    <div class="header">
        <p>全部歌曲</p>
    </div>
    <router-link to="/">
    <img src="../public/left.png" alt="" class="back">
    </router-link>
    <div class="musiclist">
          <div class="music" @click="play(data.id, data.name,data.al.picUrl,data.al.name,data.ar[0].name)" v-for="data in musiclist" key="data.id" :data-id="data.id">
              <div class="music-name">{{data.name}}</div>
              <div class="music-info">{{data.al.name}}</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
      musiclist: []
    }
  },
  mounted () {
      this.isHaveList()
  },
  methods: {
      isHaveList () {
        this.axios.post(this.api.music.search + '周杰伦').then((res)=>{
        if(200 === res.data.code) {
          this.musiclist = res.data.result.songs
        }
        })
    },
      play (id,name,picUrl,alName,arName) {
           this.$store.state.picUrl = picUrl
           this.$store.state.name = name
           this.$store.state.singerName = arName
           this.$store.state.isPlay = true
           this.$store.state.avatarShow = false 
           this.$store.state.avatar1Show = true
           this.$store.state.rotImg1Show = true
           this.$store.state.rotImgShow = false
           let data ={
          id,
          name,
          picUrl,
          alName,
          arName
        }
        this.$store.state.musiclist.unshift(data)
        //    localStorage.setItem("item")
           this.axios.post("https://api.imjad.cn/cloudmusic/?type=song&id=" + id +"&br=128000").then((res)=>{
           if(200 === res.data.code){
           this.$store.state.src = res.data.data[0].url}})
        },
  }
}
</script>

<style lang="css" scoped>
*{
    text-decoration: none;
}
.header{
    height: 10rem;
    background-color: #2AAA6D;
}
.header p{
    text-align: center;
    font-size: 3rem;
    margin-top: 2.6rem;
    color:white;
}
.back{
    position: absolute;
    z-index: 1;
    top: 3.3rem;
    width: 3rem;
    height: 3rem;
    /*background-color: pink;*/
}
.musiclist{
    margin-top: 11rem;
    margin-left: 2rem;
}
.music{
    margin-bottom: 2rem;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
}
.music-name{
    font-size: 2.4rem;
}
.music-info{
    font-size: .8rem;
}
</style>