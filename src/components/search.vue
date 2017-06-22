
<template lang="html">
    <div class="bg">
        <input @keypress.enter="SearchSub" type="text" v-model="keywords" placeholder="请输入内容">
        <router-link to="/">
          <span @click="back">取消</span>
        </router-link>
        <div class="hot" v-show="hotShow">
            <p>热门搜索</p>
            <div class="search" @click="SearchSub">周杰伦</div>
          
        </div>
        <div class="wrap">
        <div class="musiclist">
          <div class="music" @click="play(data.id, data.name)" v-for="data in musiclist" key="data.id" :data-id="data.id">
            <router-link to="/">
              <div class="music-name">{{data.name}}</div>
              <div class="music-info">
                {{data.ar.name}} - {{data.al.name}}
              </div>
              <div class="music-info" v-show="data.alia[0]">{{data.alia[0]}}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  data () {
    return {
      keywords: '',
      musiclist: [],
      hotShow: true
    }
  },
  mounted () {
    this.isHaveData(),
    this.$store.state.showFooter = false
  },
  methods: {
    back() {
    this.$store.state.showFooter = true
      
    },
    isHaveData () {
      let musiclist = localStorage.getItem('musicsearchdata');
      if (musiclist) {
        musiclist = JSON.parse(musiclist)
        // this.musiclist = musiclist.musicdata
        // 再次进入搜索，上一次的记录会在
        // this.keywords = musiclist.keywords
      }
    },
    SearchSub () {
      var hot = document.querySelector('.search').innerHTML
      // console.log(hot)
      this.hotShow = false
      let keywords = this.keywords || hot
      this.util.openIndicator()
      this.axios.post(this.api.music.search + keywords).then((res)=>{
        if(200 === res.data.code) {
          this.util.closeIndicator()
          this.musiclist = res.data.result.songs 
          console.log('名字'+ res.data.result.songs)
          // this.$store.state.name = res.data.result.songs.name
          // console.log(res.data) 
            let data = {
            keywords,
            'musicdata': res.data.result.songs
          }
        }
      })
    },
    play (id, name) {
       
        this.$store.state.name = name
        this.$store.state.showFooter = true
        this.axios.post("https://api.imjad.cn/cloudmusic/?type=song&id=" + id +"&br=128000").then((res)=>{
        if(200 === res.data.code){
        this.$store.state.src = res.data.data[0].url
        // console.log(res)
        }
      })
      this.$store.state.isPlay = true
    }
     
  }
}
//           let data = {
//             keywords,
//             'musicdata': res.data.result.songs
//           }
//           localStorage.setItem('musicsearchdata',JSON.stringify(data))
//         }else{
//           alert('数据请求失败')
//         }
//       }).catch((error)=>{
        
//         console.log(error)
//       })
//     }
//   }
// }
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    .bg{
        width: 100%;
        height: 7rem;
        background-color: #31C37C;
    }
    input{
       position: absolute;
       left: 0.9rem;
       top: 3rem;
       width: 85%;
       height: 2.8rem;
       padding: 0.3rem;
       background-color: #2AAA6D;
       border-radius: .5rem;
       border: none;
       font-size: 2rem;
       outline: none;
   }
   span{
       position: absolute;
       right: 2rem;
       top: 3.4rem;
       font-size: 2.1rem;
       color:white;
       font-weight: 200;
   }
/* 音乐列表  */
.musiclist{
   overflow: hidden;
    position: absolute;
    top: 8rem;
    font-size: 2rem;
    text-decoration: none;

}
.music{
    width: 100%;
    padding: 2rem;
    border-bottom: 1px solid #ccc;
}
.music-name{
    font-size: 3rem;
    color:#000000;
    font-weight: 400; 
    font-family: Arial,Helvetica,sans-serif;  
}
.music-info{
    font-size: 2rem;
    line-height: 1.3rem;
    margin-top: 2rem;
    color:#000000;
    font-weight: 400;
    font-family: Arial,Helvetica,sans-serif;
    
    
    
}


/* 音乐详情 */
.music-progress .mt-range-content{
    margin-right: 40px;
    margin-left: 10px;
}
.music-progress .mt-range-thumb{
    width: 30px;
    height: 30px;
    background: #26a2ff;
}
.music-progress .mt-range-runway{
    right: -30px;
}
.hot {
    position: absolute;
    top: 9rem;
}
.hot p{
    margin-left: 2rem;
    font-size: 2rem;
    color:#CCCCCC;
}
.hot .search{
    font-size: 2.1rem;
    margin-left: 5rem;
    margin-top: 1.5rem;
    color:#2AAA6D;
    font-weight: 200;
    border: 1px solid #2AAA6D;
    padding: 1rem;
    border-radius: 2.5rem;
}


</style>