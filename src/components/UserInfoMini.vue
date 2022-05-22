<template>
  <div id="root">
      <div class="top">
          <img src="../assets/prod.png" alt="">
          <span>
              <h3>{{user.userName}}</h3>
              <p>简介简介简介</p>
          </span>
      </div>
      <div class="main">
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
  </div>
</template>

<script>
export default {
    name:'UserInfoMini',
    data(){
        return{
            user: {
              userId: "",
              userName: "",
              userStudyType: 0
            },
        }
    },

    methods: {
        getInfo:async function(id){
            const result=await this.$http({
                url:'/user/getUserById',
                method:'get',
                params:{
                    userId:id
                }
            })
            this.user=result.data
        }
    },
    created() {
        
    },
}
</script>

<style scoped>

.top{
    display:flex;
    height: 75px;
    width: 100%;
}
.top>img{
    width: 60px;
    height: 60px;
    margin: 5px 20px ;
    border-radius: 50%;
    overflow: hidden;
}
.top>span{
    margin: 10px 0;
    height: 75px;
    margin-left: 15px;
}
.main{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 120px;
    width: 100%;
    border-top: solid 1px rgba(0,0,0,.1);
}
</style>