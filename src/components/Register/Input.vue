<template>
    <div>
        <div class="cls-input border-bottom border-top">
            <div class="input-text">
                <label for="t" class="contorl-label">账号</label>
                <div class="contorl-input">
                    <input type="text" v-model="inputtext" @input="changeInpurt" name="uname" id="t" ref="text" class="input" placeholder="用户名/邮箱/手机号">
                </div>
            </div>
            <div class="input-text">
                <label for="p" class="contorl-label">密码</label>
                <div class="contorl-input">
                    <input type="password" v-model="inputpwd" @input="changeInpurt" name="upwd" ref="pwd" class="input" id="p" placeholder="请输入密码">
                </div>
            </div>   
        </div>
        <div class="cls-btn">
            <button :class="{'btn':isbtn,'disabled':isdis} " ref="btn"    @click="doLogin">注册</button>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            isbtn:true,
            isdis:true,
            inputtext:'',
            inputpwd:'',
            loginState:[],
            
        } 
    },
    components:{
        Toast
    },
    methods:{
        doLogin(){
            if(!this.isdis){
               axios.get('http://127.0.0.1/list/userLogin.php',{
                   params:{
                       uname:this.inputtext,
                       pwd:this.inputpwd
                   }
               }).then((res)=>{
                    this.loginState=res.data
                    if(this.loginState.code===1){
                        Toast({
                            message: '登录成功',
                            duration:1500
                        })
                        localStorage.setItem('uid',this.inputtext)
                        let loginStorage=localStorage.getItem('uid')
                        this.mutationLoginStorage(loginStorage)
                        this.mutationHandleLogged(true)
                        console.log(sessionStorage)
                        setTimeout(()=>{
                            this.$router.go(-1)
                        },1500)
                    }else{
                        Toast({
                            message: '登录失败,请检查账号或密码',
                            duration:1500
                        });
                    }
               })
               
            }
        },
        changeInpurt(){
            if(this.inputtext && this.inputpwd){
                this.isdis=false   
            }else{  
                this.isdis=true
            } 
        },
        ...mapMutations(['mutationHandleLogged','mutationLoginStorage'])
    }
}
</script>
<style scoped lang="stylus">
    .cls-input
        margin-top 0.2rem
        border-bottom 0.01rem solid #ccc
        line-height 0.8rem
        padding-left 0.3rem
        .input-text
            display flex
            font-size 0.33rem
            border-bottom: .01rem solid #ddd;
            .contorl-label
                width 1.6rem
                color #25a4bb
                height 0.8rem
                line-height 0.8rem
                margin-top 0.1rem
            .contorl-input
                flex 1
                padding-bottom 0.01rem
                .input
                 width 100%
                 height 100%
                 color #000
                 border 0
    .cls-btn
        margin-top 0.3rem
        padding-left 0.3rem
        padding-right 0.3rem 
        margin-bottom 0.2rem 
        .btn
            width 100%
            background #25a4bb
            border 0   
            height 0.8rem  
            border-radius 0.1rem 
            color #fff
            font-size 0.4rem 
        .disabled
            background #85d1db 
</style>
