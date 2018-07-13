<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
                    <div class="button" @click="handleClickCity(item.name)">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div v-for="( item, key ) in cities" :key="item.id" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" v-for="i in item" :key="i.id">
                    <div class="item border-bottom" @click="handleClickCity(i.name)">{{i.name}}</div>
                </div>
            </div>
          
        </div>
      </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    props:{
        hotCities:{
            type:Array,
            default:[]
        },
        cities:{
            type:[Object,Array],
            default:[]
        },
        letter:{
            type:String,
            default:[]
        }
    },
    created(){
        // console.log(this.letter)
    },
    mounted () {
        this.scroll=new Bscroll(this.$refs.wrapper)
    },
    methods:{
        handleClickCity(city){
            this.$store.commit('mutationsHandleCity',city)
            this.$router.push('/')
        }
    },
    watch:{
        letter () {
            if(this.letter){
                const element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
            // console.log(this.letter)
        }   
    }
}
</script>
<style scoped lang="stylus">
  .border-topbottom
   &:before
    border-color:#777
   &:after
    border-color:#777
  .border-bottom
   &:before
    border-color:#777
 .list
  position absolute
  top 1.6rem
  left 0
  right 0
  bottom 0
  overflow hidden 
  .title 
    height 0.4rem
    line-height 0.4rem
    background #eee
    padding 0.1rem 0  0.1rem 0.2rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem 
    .button-wrapper
        float left
        width 33.3%
        .button
            padding 0.1rem
            text-align center
            border 0.02rem solid #ccc
            margin 0.1rem
            border-radius 0.07rem
  .item-list
    .item
        line-height 0.54rem
        color #666
        padding 0.2rem 

</style>
