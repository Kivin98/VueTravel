import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let defaultCity='北京'
try{
    if(localStorage.city){
        defaultCity=localStorage.city
    }
}catch(e){

}
export default new Vuex.Store({
    state:{
        city:localStorage.city || '北京',
        Logged:false,
        loginStorage:''
    },
    mutations:{
        mutationsHandleCity(state,payload){
            state.city=payload
                try{
                    if(localStorage.city){
                        localStorage.city=payload
                    }
                }catch(e){

                }
        },
        mutationHandleLogged:(state,payload)=>{
            state.Logged=payload
        },
        mutationLoginStorage:(state,payload)=>{
            state.loginStorage=payload
        }
    },
        
    
})