<template>
    <div>
        <div class="header border-bottom">
            <div class="header-left" @click="back">
                <div class="iconfont back-icon">&#xe624;</div>
            </div>
            <div class="header-text">
                登录
            </div>
            <div class="header-right" @click="doRegister">
                注册
            </div>
        </div>
        <div class="tab">
            <div class="tab-item">
                <div class="item-number cur">
                    账号登录
                </div>
                <div class="item-msg">
                    短信登录    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        },
        doRegister(){
            this.$router.push('/Register')
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl';
    .header
        display flex
        line-height:0.9rem
        background:$bgColor
        color:#fff
        .header-left
            float left
            width 0.64rem
            .back-icon
                text-align center
                font-size 0.35rem
                color: #75ffff
        .header-text
            flex 1
            text-align center
            font-size 0.38rem
        .header-right 
            width 0.84rem
            font-size 0.3rem
            color: #75ffff
    .tab 
        line-height:0.4rem
        background:$bgColor
        padding 0.1rem
        box-sizing border-box
        text-align center
        .tab-item
            border-radius 0.1rem
            border 0.01rem solid #fff
            padding 0.01rem 0.02rem 0.03rem 0.01rem
            color #fff
            .item-number
                display table-cell
                line-height 0.65rem
                width 1%
               
            .item-msg
                display table-cell
                line-height 0.65rem
                width 1%   
            .cur 
                background #fff
                border-radius 0.1rem
                border-top 0.01rem solid $bgColor
                border-left 0.01rem solid $bgColor
                color: #25a4bb
                
</style>
