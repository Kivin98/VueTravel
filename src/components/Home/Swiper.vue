<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img 
        :src="item.imgURL" 
        class="swiper-img">
       </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    props:{
        swiperList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            swiperOption:{
                pagination : '.swiper-pagination',
                loop:true
            }  
        }
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
    .wrapper
        width:100%
        height:0
        overflow:hidden
        padding-bottom:26.67%
        .swiper-img
            width:100%
</style>
