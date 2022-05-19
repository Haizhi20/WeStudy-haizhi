<template>
  <div id="root">
      <div class="form">
          <p>登录你的账户</p>
          <div class="jump">
              <span>还没有账户？</span>
              <router-link to="/login/register">立即注册</router-link>
          </div>
          <div class="container">
              <span  :class="{warn:!usnOK}">用户名</span>
              <input type="text" placeholder="请输入用户名" v-model="username"  >
          </div>
          <div class="container">
              <span :class="{warn:!pswOK}">密码</span>
              <input type="password" placeholder="请输入密码" v-model="password"  @keyup.enter="submit()">
          </div>
          <div class="container">
              <button @click="submit(isOK)">登录</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:'LoginForm',
data(){
    return{
        isOK:false,
        username:'',
        password:'',
        usnOK:true,
        pswOK:true
    }
},
methods:{
    submit:async function(){
        this.checkUp()
        if(this.isOK){
            console.log('发送登录请求')
            const result=await this.$login({
                method:'GET',
                url: '/user/login',
                params:{
                    userName:this.username,
                    userPwd:this.password
                }
            })
            if(result.status==200){
                this.$router.push({path:'/'})
            }
            else{
                this.$bus.$emit('LoginFail',result)
               
            }
        }
    },
    checkUp:function(){
        console.log('checkUp被调用了');
        this.usnOK=this.username==''?false:true
        this.pswOK=this.password==''?false:true
        if(this.usnOK&&this.pswOK)
            this.isOK=true
        else
            this.isOK=false
    }
},
mounted(){

},
beforeDestroy() {
    
},
}
</script>

<style scoped>
#root{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.form{
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 360px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow:  
    5px 5px 10px rgba(0, 0, 0, .2) ;
    transition: .1s;
    z-index: 2;
}
.form:hover{
    transform: scale(1.05);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, .1),
    -5px -5px 10px rgba(225, 225, 225, .1) ;
}
.form p{
    width: 100%;
    font-size: 1.8em;
    font-weight: bold;
    margin-top:40px;
}
.jump{
    margin-top: 10px;
    margin-bottom: 20px;
}
.container{
    display: inherit;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 30px;
}
.container span{
    width: 80px;
    height: 100%;
    line-height: 40px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1em;
    color: #555555;
}
.container input{
    height: 40px;
    width: 200px;
    color: #333333;
    font-size: 0.9em;
    outline: none;
    border-style: none;
}
.container button{
    width: 150px;
    height: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1em;
    font-weight: 600;
    outline: none;
    background-color: #42A5F5;
    color: #fff;
    border-style: none;
    border-radius: 10px;
}
.container button:hover{
    cursor: pointer;

}
.container button:active{
    background-color: #1976D2;
}
.warn{
    color:red !important
}
</style>