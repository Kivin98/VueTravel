<template>
  <div id="app">
   <keep-alive>
      <router-view/>

   </keep-alive>

  </div>
</template>

<script>
import FadeAnimation from '@/common/Fade/FadeAnimation'
export default {
  name: 'App',
  components:{
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
</style>
