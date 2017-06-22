<template lang="html">
    <div>
        <v-index></v-index>
        <img src="../public/icons/avatar.jpg" alt="">
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
   /*position: absolute;*/
   margin-top: 11.8rem; 
} 

</style>