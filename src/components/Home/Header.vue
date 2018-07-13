<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
            
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
         <div class="header-right" @click="skipCity">
            {{this.$store.state.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>

    </div>
</template>
<script>
export default {
    name:'headerhome',
    methods:{
        skipCity(){
            this.$router.push('/city')
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .header
        display:flex
        line-height:0.86rem
        background:$bgColor
        color:#fff
        .header-left
            width:0.64rem
            float:left
            .back-icon
                font-size:0.4rem
                text-align:center
        .header-input
            flex:1
            background:#fff
            height:0.64rem
            border-radius:.1rem
            margin-top:0.12rem
            margin-left:0.2rem
            padding-left:0.2rem
            color:#ccc
            line-height:0.64rem
        .header-right
            min-width:1.04rem
            padding 0 0.1rem
            float:right
            text-align:center
            color #fff
            .arrow-icon
                font-size:0.2rem
                margin-left:-0.04rem
</style>