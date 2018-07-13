import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import City from '@/components/City/City'
import Detail from '@/components/Detail/Detail'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path:'/detail/:id',
      name:'Tetail',
      component:Detail
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path:'/Register',
      name:'Register',
      component:Register
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
