<template>
    <div class="item">
        <div v-for="(item,index) in list" :key="index">
            <div class="item-title border-bottom" >
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div class="item-children">
                <list-detail :list="item.children"></list-detail>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ListDetail',
    props:{
        list:Array
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped lang="stylus">
    .item-title
        padding 0 0.2rem
        line-height 0.8rem
        height 0.8rem
        .item-title-icon
            display: inline-block
            position relative
            top 0.1rem
            width: .36rem;
            height: .36rem;
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem;
    .item-children
        padding 0 0.4rem
</style>
