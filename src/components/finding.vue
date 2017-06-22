<template lang="html">
    <div>
    <v-index></v-index>
   <h1></h1>
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
    margin-top: 12rem;
}
</style>