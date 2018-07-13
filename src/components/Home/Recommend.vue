<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.id" @click="recommendClick(item.id)">
                <img class="item-img" :src="item.imgURL" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        <span class="mpg-price">￥
                            <em class="mpg-price-num">{{item.isdesc}}</em>
                        </span>
                        起
                    </p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        recommendList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
           
        }
    },
    methods:{
        recommendClick(id){
            this.$router.push('/detail/'+id)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .title
        margin-top:0.2rem
        line-height:0.8rem
        background:#eee
        text-indent:0.2rem
    .item
        overflow:hidden
        display:flex
        height:1.9rem
    .item-img
        width:1.7rem
        height 1.7rem
        padding :0.2rem 
    .item-info   
        flex:1
        padding:0.1rem
        position relative
        .item-title 
            position absolute
            top:0.3rem
            line-height:0.54rem
            font-size:0.32rem
        .item-desc
            position absolute
            bottom 0.1rem
            font-size: .24rem
            line-height: .4rem
            .mpg-price
                color: #ff8300
                .mpg-price-num
                    font-size 0.4rem
                    margin-left -0.1rem
        .item-button
            position:absolute
            top 0.5rem
            right:0.2rem
            border-radius 0.06rem
            line-height 0.44rem
            background #ff8300
            padding 0.2rem
            color #fff
</style>
