<template>
  <div id="root">
      <div class="top">
          <div class="ushow">
            <img src="../assets/preview.jpg" alt="">
            <div class="info">
                <span class="avatar"><img src="../assets/haizhi.jpg" alt=""></span>
                <div>
                    <h3>{{user.userName}}</h3>
                    <p>这个人很懒，什么都没有写</p>
                </div>
            </div>
          </div>
          <div class="unav">
              <div>
                <span v-for="(item,index) in nav" :key="index" :class="navAction==item?'navAction':''" @click="navChange(item,index)">{{item}}</span>
              </div>
          </div>
      </div>
          <main>
              <router-view></router-view>
          </main>
          <aside>

          </aside>
  </div>
</template>

<script>
export default {
    name:'Profile',
    data(){
        return {
            user:{
                userId:Number,
                userName:"",
                userPwd:"",
                userStudyType:Number
                },
                nav:['主页','文章','收藏'],
                navAction:'主页',
        }
    },
    methods:{
        getInfo:function(){
            let storage=window.localStorage
            this.user=JSON.parse(storage.getItem('udata'))
        },
        navChange:function(item,index){
            this.navAction=item
            switch(index){
                case 0:this.$router.push({path:'/article'});break
                case 1:this.$router.push({path:'/article'});break
                case 2:this.$router.push({path:'/article'});break
                default:break;
            }
        }
    },
    mounted(){
        this.getInfo()
    }
}
</script>

<style scoped>
#root{
    width: 1200px;
    margin: 60px auto;
    display: grid;
    grid-template-columns: 880px 300px;
    grid-template-rows: 360px 500px;
    grid-gap:20px;
}
.top{
    grid-column: 1/3;
    grid-row: 1/2;
}
.ushow{
    position: relative;
    width: 100%;
    height: 300px;
}
.ushow>img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.info{
    position: absolute;
    left: 50px;
    bottom: 25px;
    display: flex;
}
.info>div>h3{
    color: #fff;
}
.info>div>p{
    color: #fff;
    align-self: end;
}
.avatar{
    width: 60px;
    height: 60px;
    border: solid 1px ;
    border-radius: 50%;
    overflow: hidden;
}
.avatar>img{
    width: 100%;
    height: 100%;
}
.unav{
    height: 60px;
    width: 100%;
    border: solid 1px rgba(225, 225, 225, .8);
}
.unav>div{
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 100%;
    margin-left: 30px;
}
.unav>div>span{
    height: 100%;
    width: 100%;
    line-height: 60px;
    cursor: pointer;
}
.navAction{
    border-bottom: solid 2px #42A5F5;
}
main{
    grid-column: 1/2;
    grid-row: 2/3;
    margin-right: 20px;
    border: solid 1px red;
}
aside{
    grid-column: 2/3;
    grid-row: 2/3;
    border: solid 1px yellowgreen;
}
</style>