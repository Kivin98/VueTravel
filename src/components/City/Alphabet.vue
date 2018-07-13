<template>
    <ul class="list">
        <li class="item" v-for="item in letter" :key="item" 
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handkeTouchMove"
        @touchend="handeleTouchEnd"
        :ref="item"
        >{{item}}</li>  
    </ul>
</template>
<script>
export default {
    props:{
        cities:{
            type:[Object,Array],
            default:[]
        }
    },
    data(){
        return {
            touchStatus:false,
            timer:null
        }
    },
    computed:{
        letter(){
            const letter = []
            for(let i in this.cities){
                letter.push(i)
            }
            return letter
        }
    },
    updated(){
        this.startY=this.$refs['A'][0].offsetTop
    },
    methods:{
        handleLetterClick(e){
            this.$emit("change",e.target.innerText)
            
        },
        handleTouchStart(){
            this.touchStatus=true
        },
        handkeTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                setTimeout(()=>{
                    const startY=this.$refs['A'][0].offsetTop
                    const clientY=e.touches[0].clientY-76
                    const index =Math.floor((clientY-startY)/21)
                    if(index>=0&&index<this.letter.length){
                        this.$emit("change",this.letter[index])
                    }
                },16)
                
                // console.log(index)
            }
        },
        handeleTouchEnd(){
            this.touchStatus=true
        }
    }
}
</script>
<style scoped lang="stylus">
@import '~@/assets/styles/varibles.styl';
    .list
        position absolute
        right 0.1rem
        top 1.55rem
        bottom 0
        display flex
        justify-content center
        flex-direction column
        .item
            margin-bottom 0.15rem
            color $bgColor
            text-align center
            font-size 0.25rem
</style>
