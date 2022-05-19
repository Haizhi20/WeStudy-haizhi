<template>
<transition name="fade">
  <div id="alert" :class="{green:success}" v-show="isShow">
    {{message}}
  </div>
</transition>
</template>

<script>
export default {
  name:'Alert',
  data(){
    return {
      message:'',
      success:false,
      isShow:false,
      time:null
    }
  },methods: {
    revoke(){
      this.message=''
      this.isShow=false
      window.clearTimeout(this.time)
      this.time=null
      this.success=false
      console.log('计时器回调执行完毕')
    },
    show(message){
      this.message=message
      this.isShow=true
      console.log('消息收到了:',this.message)
      this.time=window.setTimeout(()=>{this.revoke()},3000)//使用箭头函数，解决setTimeout回调被立即执行的的bug
    }
  },
  mounted(){
    //事件总线-订阅消息
    this.$bus.$on('LoginFail',(msg)=>{
      this.show(msg)
    })
    this.$bus.$on('RegisterSuccess',(msg)=>{
      this.success=true
      this.show(msg)
    })
    this.$bus.$on('RegisterFail',(msg)=>{
      this.show(msg)
    })
  },beforeDestroy(){
    //取消订阅
    this.$bus.$off("Fail")
    this.$bus.$off("RegisterSuccess")
    this.$bus.$off("RegisterFail")
    clearTimeout(this.time)
  }
}
</script>

<style scoped>
#alert{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
  top: 100px;
  right: -150px;
  width: 300px;
  height: 60px;
  border-radius: 10px;
  background-color: #fff;
  /* color: #1976D2; */
  /* border: solid 2px #1976D2; */
  color: red;
  border: solid 1px red;
}
.green{
  color:green!important;
  border:solid 1px green!important;
}

.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-leave,.fade-enter-to{
  opacity: 1;
}
.fade-enter-active,.fade-leave-active{
  transition: all .3s;
}
</style>