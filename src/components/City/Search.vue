<template>
    <div>
        <div class="search">
            <input type="text"  class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <div>
                <ul>
                    <li v-for="item in list" :key="item.id" class="item  border-bottom" @click="handleClickCity(item.name)">{{item.name}}</li>
                </ul>
                <ul v-show="hasNodata">
                    <li class="item  border-bottom">没有找到相匹配的内容</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
   import Bscroll from 'better-scroll'
export default {
    props:{
        cities:{
            type:[Object,Array],
            default:[]
        }
    },
    data (){
        return {
            keyword:'',
            list:[]
        }
    },
    computed:{
        hasNodata(){
            return !this.list.length
        }
    },
    methods:{
        handleClickCity(city){
            this.$store.commit('mutationsHandleCity',city)
            this.$router.push('/')
        }
    },
    mounted (){
        this.scroll=new Bscroll(this.$refs.search)
    },
    watch:{
        keyword(){
            const result=[]
            if(!this.keyword){
                this.list=[]
                return 
            }
            for(let i in this.cities){
                this.cities[i].forEach((item) => {
                    if(item.spell.indexOf(this.keyword)>-1||item.name.indexOf(this.keyword)>-1){
                        result.push(item)
                        console.log(item)
                    }
                });
            }
            this.list=result
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .search
        height 0.76rem
        background $bgColor
        padding 0 0.1rem 
        .search-input
            width 100%
            height 0.66rem
            line-height 0.66rem
            text-align center
            padding 0 0.15rem
            box-sizing border-box
            border-radius 0.06rem
    .search-content
        z-index 1
        position absolute
        top 1.58rem
        bottom 0
        left 0
        right 0
        background #fff 
        overflow hidden
        .item
            line-height 0.54rem
            color #666
            padding 0.2rem 
</style>
