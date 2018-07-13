<template>
    <div>
        <header-home></header-home>
        <swiper-home :swiperList="swiper"></swiper-home>
        <icon-home :iconsList="icons"></icon-home>
        <recommend-home :recommendList="recommend"></recommend-home>
        <weekend-home :weekendList="weekend"></weekend-home>
        <user-home></user-home>
    </div>
</template>
<script>
import HeaderHome from './Header'
import SwiperHome from './Swiper'
import IconHome from './Icons'
import RecommendHome from './Recommend' 
import WeekendHome from './Weekend' 
import UserHome from './User'
import axios from 'axios'
export default {
    name:'home',
    components:{
        HeaderHome,
        SwiperHome,
        IconHome,
        RecommendHome,
        WeekendHome,
        UserHome
    },
    data(){
        return {
            swiper:[],
            icons:[],
            recommend:[],
            weekend:[]
        }
    },
    created(){
        this._SwiperHome()
    },
    methods:{
        _SwiperHome(){
            axios.get('http://127.0.0.1/list/home.php').then((res)=>{
                this.swiper=res.data.data.swiperList
                this.icons=res.data.data.iconsList
                this.recommend=res.data.data.recommendList
                this.weekend=res.data.data.weekendList
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    
</style>