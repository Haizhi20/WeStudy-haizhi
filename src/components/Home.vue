<template>
  <div id="root">
      <Motto/>
      <div class="container">
      <Direction/>
      <Intro/>
      </div>
  </div>
</template>

<script>
import Motto from './Motto.vue'
import Direction from './Direction.vue'
import Intro from './Intro.vue'
export default {
name:'Home',
components:{
    Motto,
    Direction,
Intro
},
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
</style>