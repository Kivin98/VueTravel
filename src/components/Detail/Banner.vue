<template>
    <div>
        <div class="banner" @click="showGallary">
            <img src="//img1.qunarzz.com/sight/p0/1801/4e/4ee5653be58dcb1a3.water.jpg_600x330_f82a1d80.jpg" class="banner-img" alt="">
            <div class="banner-info">
                <div class="banner-title">香港迪士尼乐园</div>
                <div class="banner-number">
                    <span class="iconfont">&#xe692;</span>
                    13
                </div>
            </div>
        </div>
        <fade-animation>
        <gallary-banner v-show="gallaryOnoff" @close="closeContainer"></gallary-banner>
        </fade-animation>
    </div>
</template>
<script>
import GallaryBanner from '@/common/Gallary/Gallary'
import FadeAnimation from '@/common/Fade/FadeAnimation'
export default {
    components:{
        GallaryBanner,
        FadeAnimation
    },
    data (){
        return{
            gallaryOnoff:false
        }
    },
    methods:{
        showGallary(){
            this.gallaryOnoff=true
        },
        closeContainer(){
            this.gallaryOnoff=false
        }
    }
}
</script>
<style scoped lang="stylus">
    .banner
        overflow hidden
        position relative
        height 0
        padding-bottom 55%
        .banner-info
            display flex
            position absolute
            bottom 0
            left 0
            right 0
            color #fff
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex 1
                padding  0.2rem 
                font-size 0.32rem
            .banner-number
                padding 0 0.2rem
                border-radius 0.2rem
                background rgba(0,0,0,0.8)
                height .32rem
                line-height 0.32rem
                margin-top 0.25rem
                font-size 0.25rem
</style>
