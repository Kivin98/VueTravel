<template>
    <div>
        <banner-detail></banner-detail>
        <header-detail></header-detail>
        <div class="content">
            <list-detail :list="detailList"></list-detail>
        </div>
    </div>
</template>
<script>
import BannerDetail from './Banner.vue'
import HeaderDetail from './Header.vue'
import ListDetail from './List.vue'
export default {
    components:{
        BannerDetail,
        HeaderDetail,
        ListDetail
    },
    data(){
        return {
            detailList:[
                {title:'儿童票',children:[
                    {title:'儿童票一馆联票',children:[
                        {title:'儿童票一馆联票 -- 西环路连锁店销售'}
                        
                    ]},
                    {title:'儿童票二馆联票',children:[
                        {title:'儿童票二馆联票 -- 火车站连锁店销售'}
                    ]}
                ]},
                {title:'成人票'},
                {title:'学生票'},
                {title:'特价票'}
            ]
        }
    }
}
</script>
<style scoped lang="stylus">
    .content
        height 20rem
</style>
