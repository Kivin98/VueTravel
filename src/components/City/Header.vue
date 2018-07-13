<template>
    <transition>
        <div class="header">
            城市选择
            <div class="iconfont city-back" @click="back">&#xe624;</div>
        </div>
    </transition>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .header
        position relative
        height 0.86rem
        line-height:0.86rem
        background:$bgColor
        text-align center
        color #fff
        font-size 0.35rem
        .city-back
            color #fff
            position absolute
            left 0.2rem
            top 0
            font-size 0.4rem
</style>
