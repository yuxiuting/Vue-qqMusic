<template lang="html">
    <div>
        <router-link to="/">
    <div class="header">
        <p class="intr">最近播放</p>
    </div>
    </router-link>
    </div>
</template>

<script>

export default {
   
  
}
</script>

<style lang="scss" scoped> 
*{
    margin: 0;
    padding: 0;
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
</style>