<template>
    <div>
        <header-city></header-city>
        <search-city :cities="cities"></search-city>
        <list-city :hotCities="hotCitie" :cities="cities" :letter="letter"></list-city>
        <alphabet-city :cities="cities" @change="handleLetterChange"></alphabet-city>
    </div>
</template>
<script>
import axios from 'axios'
import HeaderCity from './Header'
import SearchCity from './Search'
import ListCity from './list'
import AlphabetCity from './Alphabet'
export default {
    components:{
        HeaderCity,
        SearchCity,
        ListCity,
        AlphabetCity
    },
    data(){
        return {
            listcity:'',
            hotCitie:[],
            cities:[],
            letter:""
        }
    },
    mounted(){
        this.listcity=this.$store.state.city
        this.getCityInfo()
    },
    activated(){
        if(this.listcity!==this.$store.state.city){
            this.listcity=this.$store.state.city
            this.getCityInfo()
        }
    },
    methods:{
        getCityInfo(){
            axios.get('/static/mock/city.json?city='+this.$store.state.city).then((res)=>{
                this.hotCitie=res.data.data.hotCities
                this.cities=res.data.data.cities
                // console.log(this.cities)
            })
        },
        handleLetterChange (v) {
            this.letter=v
            console.log(v)
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
