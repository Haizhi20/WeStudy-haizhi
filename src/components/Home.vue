<template>
  <div id="root">
      <Motto/>
      <div class="background">

      </div>
      <div class="container">
      <Direction/>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Motto from './Motto.vue'
import Direction from './Direction.vue'
import Footer from './Footer.vue'
export default {
name:'Home',
components:{ Motto, Direction, Footer },
methods:{
    toRouter:function() {
        this.$router.push({
            path:'/login'
        })
    }
}
}

</script>

<style scoped>
#root{
    width: 100%;
}
.container{
    max-width: 1200px;
    margin: 0 auto;
    height:3000px;/* 用于测试主页内容，后续删除 */
}
.background{
    background-color: rgba(0, 0, 0, 0.3);
    background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%);
    border-bottom-left-radius: 50% 40%;
    border-bottom-right-radius: 50% 40%;
    height: 50vh;
    width: 100%;

}
</style>