<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgURL" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        <span class="mpg-price">
                            <em class="mpg-price-num">{{item.isdesc}}</em>
                        </span>
                        
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        weekendList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            
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
    .item-img-wrapper
        height 0
        padding-bottom 33.9%
        overflow hidden
        .item-img
            width:100%
    .item-info
        height 0.9rem
        padding  0.2rem 0.1rem
        .item-title
            line-height 0.5rem
            padding-left 0.2rem
        .mpg-price-num
            line-height 0.5rem
            padding-left 0.2rem
            color: #616161
            font-size: .24rem;
</style>
