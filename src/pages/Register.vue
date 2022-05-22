<template>
  <div class="form">
          <p>注册你的账户</p>
          <div class="jump">
              <span>已经有账户？</span>
              <router-link to="/login">立即登录</router-link>
          </div>
          <div class="container">
              <span >方向</span>
              <!-- <input type="text" placeholder="请输入邮箱" v-model="eMail"> -->
              <select v-model="select">
                  <option value="0">前端</option>
                  <option value="1">后端</option>
                  <option value="2">人工智能</option>
                  <option value="3">嵌入式</option>
                  <option value="4">大数据</option>
                  <option value="5">产品</option>
              </select>
          </div>
          <div class="container">
              <span :class="{warn:!usnOK}">用户名</span>
              <input type="text" placeholder="请输入用户名" v-model="username">
          </div>
          <div class="container">
              <span :class="{warn:!pswOK}">密码</span>
              <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="container">
              <span :class="{warn:!cpswOK}">确认密码</span>
              <input type="password" placeholder="请再次输入密码" v-model="checkPsw" @keyup.enter="submit()">
          </div>
          <div class="container">
              <button @click="submit()">注册</button>
          </div>
      </div>
</template>

<script>
export default {
name:'Register',
data(){
    return{
        isOK:false,
        select:0,
        username:'',
        password:'',
        checkPsw:'',
        usnOK:true,
        pswOK:true,
        cpswOK:true
    }
},
methods:{
    submit:async function(){
        this.checkUp()
        if(this.isOK){
            const result=await this.$http({
                method:'POST',
                url: '/user/register',
                params:{
                    userName:this.username,
                    userPwd:this.password,
                    userStudyType:this.select
                }
            })
            if(result.status==200){
                this.$router.push({path:'/login'})
            }
            else{
                this.$bus.$emit('RegisterFail',result.message)
            }
        }
    },
    checkUp:function(){
        this.usnOK=this.username===''?false:true
        this.pswOK=this.password===''?false:true
        this.eMailOK=this.eMail===''?false:true
        this.cpswOK=this.checkPsw===''||this.password!=this.checkPsw?false:true
        if(this.eMailOK&&this.usnOK&&this.pswOK&&this.cpswOK)
            this.isOK=true
        else
            this.isOK=false
    }
}
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
    width: 400px;
    height: 500px;
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
.container input,
.container select{
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