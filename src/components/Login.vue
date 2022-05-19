<template>
  <div id="root">
      <div class="UIzone">
          <Alert/>

          <img src="../assets/Charco - Hi.png" alt="">
      </div>
      <div class="forms">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Alert from './Alert.vue'
export default {
    name:'Login',
    components: {
        Alert
    }
}


</script>

<style scoped>

#root{
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
}
.UIzone{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: #42A5F5;
}
.forms{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: #fdfdfd;
}
.contain{
    position: relative;
}

</style>