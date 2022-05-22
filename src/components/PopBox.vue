<template>
  <div id="box" @mouseleave="show()">
      <div class="info">
          <div>
              <h4>文章</h4>
              <p>0</p>
          </div>
          <div>
              <h4>关注</h4>
              <p>0</p>
          </div>
          <div>
              <h4>粉丝</h4>
              <p>0</p>
          </div>
      </div>
      <div class="func">
          <ul>
              <li><i class="el-icon-user"></i><router-link to="/profile">进入主页</router-link></li>
              <li><i class="el-icon-edit-outline"></i><router-link to="/profile">创作文章</router-link></li>
              <li><i class="el-icon-video-camera"></i><router-link to="/profile">上传视频</router-link></li>
              <li><i class="el-icon-switch-button"></i><a @click="logOut()">退出登陆</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'PopBox',
    data(){
        return {
            isLogin:false,
        }
    },
    methods: {
        logOut:function(){
            let udata=JSON.parse(window.localStorage.getItem('udata'))
            this.$logout({
                url:'/user/logout',
                method:'get',
                params:{
                    userId:udata.userId,
                    userName:udata.userName
                }
            }).then(()=>{
                this.show()
                this.$router.push({path:'/'})
            })//这里要用then将调用this.show，否则会先执行this.show再执行拦截器内的代码
            console.log('退出登陆了')
            
        },
        show:function(){
            this.$parent.showBox()
            this.$parent.isLogin()
        }
    },
}
</script>

<style scoped>
#box{
    position: absolute;
    top: 65px;
    right: 30px;
    width: 300px;
    height: 360px;
    color:#2c3e50!important;
    background-color: #fff;
    border-radius: 30px;
    box-shadow:  
    2px 2px 10px rgba(0, 0, 0, .2) ;
}
.info{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 120px;
    width: 100%;
    border-bottom: solid 1px rgba(0,0,0,.1);
}
.func{
    width:100%;
    height: 240px;
    padding: 20px;
}

.func ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
}
.func li{
    list-style: none;
}
.func a{
    text-decoration: none;
    color:inherit;
    margin-left: 10px;
    cursor: pointer;
}
</style>