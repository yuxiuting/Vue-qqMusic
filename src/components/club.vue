<template lang="html">
    <div>
        <v-index></v-index>
        <div class="wrap">
            <div class="music-banner">
                <mt-swipe :auto="2000">
                    <mt-swipe-item v-for="data in banner" key="data.id">
                        <img :src="data.src">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
         </div>
         <div class="t-int">
             <div class="img1">
                 <img src="../public/icons/singer.png" alt="" >
                 <span>歌手</span>
             </div>
             <div>
                 <img src="../public/icons/paihang.png" alt="">
                 <span>排行</span>
             </div>
             <div class="img3">
                 <img src="../public/icons/diantai.png" alt="" >
                 <span>电台</span>
             </div>
         </div>
         <div class="b-int">
             <div class="img1">
                 <img src="../public/icons/fenlei.png" alt="" >
                 <span>分类歌单</span>
             </div>
             <div>
                 <img src="../public/icons/shipingMV.png" alt="">
                 <span>视频</span>
             </div>
             <div class="img3">
                 <img src="../public/icons/zhuanji.png" alt="" >
                 <span>专辑</span>
             </div>
         </div>
         <h3>热 门 推 荐</h3>
         <div class="t-imglist">
             <div class="imglist1">
                 <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
             </div>
             <div>
                 <img src="http://i0.cnfolimg.com/file/201706/2_201706231317514071.png" alt="">
                 <p>想不到吧! 这些歌里竟然有嘻哈</p>
             </div>
             <div class="imglist3">
                 <img src="http://img1.imgtn.bdimg.com/it/u=3038099131,3656545288&fm=26&gp=0.jpg" alt="">
                 <p>不留遗憾,在离开前向你表白! 毕业季</p>
             </div>
         </div>
          <div class="b-imglist">
             <div class="imglist1">
                 <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498300675853&di=1f3fbd5f3356812be76b099b83ee98c0&imgtype=0&src=http%3A%2F%2Fent.southcn.com%2F8%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20141204%2F79%2F11057736024388472799.jpg" alt="">
                 <p>最热放送! 第28届金曲奖入围精选100首</p>
             </div>
             <div>
                 <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498895342&di=c6e0afec81505aad4ddb86000a5d7242&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.51ztzj.com%2Fupload%2Fimage%2F20150318%2Fsj201503181017_279x419.jpg" alt="">
                 <p>急性子福利: 让人清醒节奏感强的R&B</p>
             </div>
             <div class="imglist3">
                 <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1152140182,2596888398&fm=26&gp=0.jpg" alt="">
                 <p>99首精选情歌 | 没关系,我们就此结束吧</p>
             </div>
         </div>
    </div>
</template>

<script>
import index from '@/components/index.vue'
export default {
   data () {
       return {
             banner: [
                {'id':1, 'src':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498295434956&di=a722252571ba0d8a6f5f2f1bec5ed467&imgtype=0&src=http%3A%2F%2Fupload.admin5.com%2F2015%2F1014%2F1444782570656.jpg'},
                {'id':2, 'src':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3306550032,1016728609&fm=26&gp=0.jpg'},
                {'id':3, 'src':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498295528416&di=5c2df978a5be18f74ada9c13055ddd54&imgtype=0&src=http%3A%2F%2Fimg1.gamedog.cn%2F2014%2F11%2F05%2F193-141105142G30-L.jpg'},
                {'id':4, 'src':'http://img0.imgtn.bdimg.com/it/u=3161731462,2725502292&fm=26&gp=0.jpg'},
                {'id':5, 'src':'http://s14.sinaimg.cn/mw690/002lYTXVgy6R0fprchDcd&690'},
                {'id':6, 'src':'http://img1.cache.netease.com/catchpic/A/A4/A469B5BC575BCC287D4C54C6541DB22D.jpg'},
                {'id':7, 'src':'http://img3.imgtn.bdimg.com/it/u=2298090335,364604662&fm=26&gp=0.jpg'},
                {'id':8, 'src':'http://img2.imgtn.bdimg.com/it/u=3348080055,2254768449&fm=26&gp=0.jpg'},
                ]
       }
   } ,
   components: {
     "v-index": index
  }
}
</script>

<style lang="css" scoped> 
*{
    font-weight: normal;
}
.music-banner{
    position: absolute;
    top: 12rem;
    left: 0;
    right: 0;
    height: 23rem;
}
.music-banner img{
    width: 100%;
    height: 100%;
    float: left;
}
.t-int{
    margin-top: 40rem;
    display: flex;
    justify-content: center;
}
.t-int img{
    width: 6rem;
    height: 6rem;
    vertical-align: middle;
    margin-right: 1rem;
}
.t-int span{
    font-size: 2.5rem;
    vertical-align: middle;
}
.img1{
    position: absolute;
    left: 2rem;
}
.img3{
    position: absolute;
    right: 2rem;
}
.b-int{
    margin-top: 5rem;
    display: flex;
    justify-content: center;
}
.b-int img{
    width: 6rem;
    height: 6rem;
    vertical-align: middle;
    margin-right: 1rem;
}
.b-int span{
    font-size: 2.5rem;
    vertical-align: middle;
}
h3{
    margin-top: 4rem;
    text-align: center;
    font-size: 3.5rem;
    font-weight: normal;
}
.t-imglist{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}
.t-imglist img{
    width: 19rem;
    height: 20.1rem;
    /*margin-right: 1rem;*/
}
.t-imglist p{
    font-size: 1.9rem;
    width: 19rem;
}
.b-imglist{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}
.b-imglist img{
    width: 19rem;
    height: 20.1rem;
    /*margin-right: 1rem;*/
}
.b-imglist p{
    width: 19rem;
    font-size: 1.9rem;
}
.imglist1{
    position: absolute;
    left: 1.1rem;
}
.imglist3{
    position: absolute;
    right: 1.1rem;
}

</style>