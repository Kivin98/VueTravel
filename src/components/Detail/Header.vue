<template>
    <div>
        <div class="header-abs" @click="back">
            <div class="iconfont header-abs-icon" v-show="showAbs">&#xe624;</div>
        </div>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <div class="iconfont city-back" @click="back">&#xe624;</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
            const top = document.documentElement.scrollTop
            
            if(top>50){
                let opacity = top/120
                console.log(opacity)
                if(opacity>1){
                    opacity=1
                }else{
                    opacity=opacity
                }
                this.opacityStyle={ opacity:opacity }
                this.showAbs=false
            }else{
                this.showAbs=true
            }
            // console.log(top)
        },
        back(){
            this.$router.push('/')
        }
    },
    activated() {
        window.addEventListener('scroll',this.handleScroll)   
    },
    //当页面将要关闭时执行该函数
    deactivated() {
        //对全局事件的解绑
        window.removeEventListener('scroll',this.handleScroll)
    },
}
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl';
    .header-abs 
        position absolute 
        left 0.2rem 
        top 0.2rem
        width 0.8rem
        height 0.8rem
        border-radius 0.4rem
        background #000
        text-align center
        line-height 0.8rem
        .header-abs-icon
            color #fff
            font-size 0.4rem
    .header-fixed
        position fixed
        z-index 2
        top 0
        height 0.86rem
        width 100%
        line-height:0.86rem
        background:$bgColor
        text-align center
        color #fff
        .city-back
            color #fff
            position absolute
            left 0.2rem
            top 0
            font-size 0.4rem
    
</style>
