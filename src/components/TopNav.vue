<template>
<transition name="fade">
  <div id="root" v-show="show" :class="{'clarity':clarity}" >
      <div class="container" >
          <h1 class="logo">WeStudy</h1>
          <div class="menu" >
              <div class="menuItem" >
                  <router-link to="/" @mouseover="navHide()">首页</router-link>
              </div>
              <div class="menuItem">
                  <router-link to="/video/0" @mouseover="navHide()">视频</router-link>
              </div>
              <div class="menuItem">
                  <router-link to="/" @mouseover="navHide()">博客</router-link>
              </div>
              <div class="menuItem">
                  <router-link to="/" @mouseover="navHide()">资源</router-link>
              </div>
              <div class="menuItem login" v-if="!logined">
                  <router-link to="/login" @mouseover="navHide()">登录</router-link>
              </div>
              <div class="menuItem login" v-if="logined">
                  <router-link to="/profile" @mouseover="navHide()">{{uName}}</router-link>
              </div>
              <div class="menuItem avatarImg" @click="showBox()" v-if="logined">
                  <img src="../assets/haizhi.jpg" alt="">
                  <span class="el-icon-caret-bottom"></span>
              </div>
              <transition name="fade">
                <PopBox v-if="logined&&boxShow"/>
              </transition>
          </div>
      </div>
  </div>
</transition>
</template>

<script>
import PopBox from './PopBox.vue'
export default {
  components: { PopBox },
    name:'TopNav',
    data(){
        return {
            logined:false,
            boxShow:false,
            uName:'',
            avatarImg:'',
            scroll:0,
            show:true,
            clarity:true,//导航栏是否透明
        }
    },
    methods: {
    //头部导航栏显示隐藏功能
    navHide(){
      let scroll=Math.floor(document.body.scrollTop||document.documentElement.scrollTop)    //被卷去的头部
      let height=Math.floor(window.innerHeight) //获取浏览器可视窗口的高度
      let path=this.$route.path
      if(path==='/'){//是否在主页
          if(scroll>height-60){ //导航栏高度为60
            this.show=false //超过展示界面时隐藏导航栏
            this.clarity=false
          }else{
              this.clarity=true
          }
      }else{
          this.clarity=false
      }
      if(this.scroll>scroll){//滚轮上移显示导航
        this.show=true
      }
      this.scroll=scroll
    },
    //判断是否已经登陆
    isLogin:function(){
        let storage=window.localStorage
        if(storage.getItem('udata')){
            this.logined=true
            this.uName=JSON.parse(storage.getItem('udata')).userName
        }else{
            this.logined=false
        }
    },
    //路由跳转个人主页
    toProfile(){
        this.$router.push({path:'/profile'})
    },
    //路由跳转视频页
    toVideo:function(){
       this.$router.push({path:`/video/${0}`}) // 后续需要修改，识别用户学习方向渲染视频页
    },
    //展示弹出框
    showBox:function(){
        this.boxShow=!this.boxShow
    }
    },
    mounted(){

        //绑定鼠标滚轮事件
        window.onscroll=()=>{
          this.navHide()
        }
        //订阅消息，如果路由跳转到别的模块页面了，持续显示头部导航栏
        this.$bus.$on('pageChange',()=>{
            this.navHide()
            this.isLogin()
        })
    },
    beforeDestroy() {
         this.$bus.$off("pageChange")
    },
}
</script>

<style scoped>
#root{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    font-weight: 500;
    border-bottom: solid 1px rgba(202, 202, 202, 0.5);
    /* background: hsla(0,0%,100%,.8); */
    /* background-color: rgba(255, 255, 255, 0.8); */
    background-color: #fff;
    z-index: 2;
    transition: .3s;
}
.clarity{
    color: #fff!important;
    border-bottom: solid 2px rgba(202, 202, 202, 0)!important;
    background-color: rgba(255, 255, 255, 0)!important;
}
.clarity a{
    color:#fff!important;
}
/* #root::before{
    content: '';
    position: absolute;
    background: inherit;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 3000px rgba(225, 225, 225, 0.3);
    filter: blur(4px);
    z-index: -1;
} */
.container{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    min-width: 900px;
    height: 60px;

}
.logo{
    width: 200px;
    height: 60px;
    line-height: 60px;
    font-family:  Helvetica;
}
.menu{
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 500px;
    height: 60px;
}
.menuItem{
    margin-right: 20px;
    width: 60px;
    height: 100%;
    line-height: 60px;
    color: #2c3e50
}
.menuItem a{
    text-decoration: none;
    color:inherit;
}
.login{
    position: relative;
}
.login::before{
    content: "";
    display: block;
    height: 10px;
    border-right: 1px solid #bbbbbb;
    position: absolute;
    bottom: 24px;
    left: -16px;
}
.avatarImg{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.avatarImg img{
    width: 40px;
    height: 40px;
    border: solid 1px #cccccc;
    border-radius: 50%;
    background-color: #dddddd;
    overflow: hidden;
    cursor: pointer;
}

/*去除a标签下划线*/
a {
 text-decoration: none;
}
/*去除未被访问的a标签的下划线*/
a:link {
 text-decoration: none;
}
/*去除已经被访问过的a标签的下划线*/
a:visited {
 text-decoration: none;
}
/*去除鼠标悬停时的a标签的下划线*/
a:hover {
 text-decoration: none;
}
/*去除正在点击的a标签的下划线（鼠标按下，尚未松开）*/
a:active {
 text-decoration: none;
}
/*去除获得焦点的a标签的下划线（被鼠标点击过）*/
a:focus {
 text-decoration: none;
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