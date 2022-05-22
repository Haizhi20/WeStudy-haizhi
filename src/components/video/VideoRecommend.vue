<template>
  <ul >
      <li v-for="(item,index) in list" :key="index" @click="toVideo(item.id)">
          <img :src="item.img" >
          <span>
              <h4>{{item.title}}</h4>
              <div>{{item.userName}}</div>
          </span>
      </li>
  </ul>
</template>

<script>
export default {
    name:'VideoRecommend',
    data(){
        return{
            list:[]
        }
    },
    methods: {
        //获取所有视频信息
        getVideos:async function(){
            const result=await this.$http({
                url:'/video/queryVideo',
                method:'get',
            })
            this.list=result.data
        },
        //跳转视频页面
        toVideo:function(vid){
            this.$router.push({path:`/videoplay/${vid}`})
            location.reload()
        },
    },
    mounted() {
        this.getVideos()
    },
}
</script>

<style scoped>
ul{

    max-width: 300px;
    max-height:800px;
    overflow: hidden;
    border-top: solid 1px rgba(225, 225, 225, .8);

}
li{
    display:flex;
    padding: 10px;
    width: 100%;
    cursor: pointer;
}
li>img{
    flex:120px;
    width: 120px;
    height: 80px;
}
li>div{
    cursor: pointer;
}
h4{
    text-align: left;
}
h4:hover{
    color: #42A5F5;
}
li>span{
    flex: 170px;
    margin-left: 20px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
}
li>span>div{
    font-size: .85em;
    color: gray;
    text-align: left;
}
</style>