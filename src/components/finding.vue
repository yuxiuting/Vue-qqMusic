<template lang="html">
    <div>
    <v-index></v-index>
        <img src="http://www.sznews.com/travel/images/attachement/jpg/site3/20091116/001e4f9d7beb0c6b08c922.jpg" alt="" class="img1">
        <img src="http://posters.imdb.cn/jz-pic/1037850/NCq0nJ7Ea_1186332718.jpg" alt="" class="img2">
        <img src="http://img5.imgtn.bdimg.com/it/u=3973248356,1821544717&fm=26&gp=0.jpg" alt="" class="img3">
        <img src="http://www.xinmanduo.com/pic/oip/f7879cc0fbf21f5aa23ff65f189eaddb.jpg" alt="" class="img4">
   </div>
</template>

<script>
import index from '@/components/index.vue'
export default {
    components: {
        "v-index": index
    }
}
</script>

<style lang="css" scoped>
*{
    margin-top: 6rem;
}
.img1{
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 40rem;
}
.img2{
    position: absolute;
    margin-top: 47rem;
    left: 0;
    right: 0;
    width: 100%;
    height: 40rem;
}
.img3{
    position: absolute;
    margin-top: 88rem;
    left: 0;
    right: 0;
    width: 100%;
    height: 40rem;
}
.img4{
    position: absolute;
    margin-top: 129rem;
    left: 0;
    right: 0;
    width: 100%;
    height: 40rem;
}
</style>