<template>
    <div class="user">
        <span class="login" @click="doLogin" v-show="!Logged">登录</span>
        <span class="login" @click="doLogin" v-show="Logged">欢迎您：<i class="userLogin">{{uuid}}</i></span>
        <span class="login-clear" @click="loginClaer" v-show="Logged">注销</span>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    computed:{
        uuid(){
            return this.loginStorage
        },
        ...mapState(['Logged','loginStorage'])
    },
    methods:{
        doLogin(){
            this.$router.push('/Login')
        },
        loginClaer(){
            this.mutationHandleLogged(false)
            localStorage.clear()  
        },
        ...mapMutations(['mutationHandleLogged'])
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .user
        line-height 1.2rem
        height 1.2rem
        background #f6f6f6
        text-align center
        color $bgColor
        font-size 0.4rem
        .userLogin    
            margin-left 0.2rem
        .login-clear
            font-size 0.3rem
            color red
            padding 0.2rem 
             
</style>
