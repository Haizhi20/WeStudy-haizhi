<template>
  <div id="app">
    <TopNav />
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from './components/TopNav'
export default {
  name: 'App',
  components: {
    TopNav
  },data(){
    return {

    }
  },
  updated() {
     this.$bus.$emit('pageChange')
  },
}
</script>

<style>
*{
    padding: 0%;
    margin: 0%;
    box-sizing: border-box;
}
body{
  min-width: 900px;
  max-width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
