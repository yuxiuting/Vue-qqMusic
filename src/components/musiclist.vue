<template lang="html">
    <div>  
    <div class="header">
        <p class="intr">最近播放</p>
    </div>
    <router-link to="/">
    <img src="../public/left.png" alt="" class="back">
    </router-link>
    <ul>
        <li v-for="item in musiclist" @click="play(item.id,item.name,item.picUrl,item.arName)">
            <p class="name">{{item.name}}</p>
            <p class="arName">{{item.arName}} . {{item.alName}}</p>
        </li>  
    </ul>
    </div>
</template>

<script>

export default {
   computed: {
       musiclist () {
           return this.$store.state.musiclist
       }
   },
   methods: {
       play (id,name,picUrl,arName) {
           this.$store.state.picUrl = picUrl
           this.$store.state.name = name
           this.$store.state.singerName = arName
           this.$store.state.isPlay = true
           this.$store.state.avatarShow = false 
           this.$store.state.avatar1Show = true
           this.$store.state.rotImg1Show = true
           this.$store.state.rotImgShow = false
           this.axios.post("https://api.imjad.cn/cloudmusic/?type=song&id=" + id +"&br=128000").then((res)=>{
           if(200 === res.data.code){
           this.$store.state.src = res.data.data[0].url}})
        }, 
               
}
   }
</script>

<style lang="scss" scoped> 
*{
    margin: 0;
    padding: 0;
    width: 100%;
}
.back{
    position: absolute;
    z-index: 1;
    top: 3.3rem;
    width: 3rem;
    height: 3rem;
    /*background-color: pink;*/
}
.header{
    width: 100%;
    height: 10rem;
    background-color: #2AAA6D;
}
.header p{
    font-size: 3rem;
    margin-top: 2.5rem;
    color:white;
}
.list{
    color:#000000;
    font-size: 3rem;
    margin-top: 19rem;
}
ul{
    position: absolute;
    top: 12rem;
    left: 2rem;
    list-style: none;
    overflow-y: scroll;
}
li{
    width: 100%;
    border-bottom: 1px solid #ccc;
    margin-top: 2rem;
}
.name{
    font-size: 3rem;
    margin-bottom: 1rem;
}
.arName{
    font-size: 2rem;
    padding-bottom: 1.4rem;
    /*width: 100rem;*/
    /*border-bottom: 1px solid #000000;*/
}
</style>