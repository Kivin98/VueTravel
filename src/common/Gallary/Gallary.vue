<template>
    <div class="container" @click="closeContainer">
        <div class="warpper">
            <swiper :options="swiperOption">
            <swiper-slide>
                <img src="http://img1.qunarzz.com/sight/p0/1803/56/56f59615373d8dbba3.water.jpg_r_800x800_31653ab3.jpg" class="gallary-img">
            </swiper-slide>
            <swiper-slide>
                <img src="http://img1.qunarzz.com/sight/p0/1803/f9/f9150e0e156d6052a3.water.jpg_r_800x800_57f9c532.jpg" class="gallary-img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        closeContainer(){
            this.$emit('close')
        }
    }
}
</script>
<style scoped lang="stylus">
    .container
        display flex
        justify-content center
        flex-direction column
        z-index 99
        position absolute
        left 0
        top 0
        bottom 0
        right 0
        background #000
        .warpper >>> .swiper-container
            overflow inherit
        .warpper
           height 0
           width 100% 
           padding-bottom 66%
           background #000
           color red
           .gallary-img
                width 100%
           .swiper-pagination
                color:#fff
                bottom -1rem
</style>
