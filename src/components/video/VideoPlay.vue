<template>
    <main>
      <div class="video">
          <div class="title">
              <h2>{{videoInfo.title}}</h2>
              <div><span>播放量:3000</span> <span>2022-5-20 11:35</span></div>
          </div>
          <div id="player">
              <Player  :video_url="videoInfo.url"/>
          </div>
          <div class="func">

          </div>
          <div class="desc">
              视频简介Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error neque voluptatum, eius autem magnam veritatis possimus quasi quibusdam sequi voluptatibus voluptatem perspiciatis atque ratione dolores veniam corrupti. Enim, quis assumenda.
          </div>
      </div>
      <div class="info">
          <UserInfoMini ref="authorInfo" />
          <div>
              <VideoRecommend/>
          </div>
      </div>
  </main>
</template>

<script>
import UserInfoMini from '../UserInfoMini.vue'
import Player from './Player.vue'
import VideoRecommend from './VideoRecommend.vue'
export default {
    name:'VideoPlay',
    components:{Player, UserInfoMini, VideoRecommend},
    data(){
        return{
            videoInfo:{
                id:'',
                title:'',
                img:'',
                type:0,
                url:'',
                userId:'',
                userName:''
            },
        }
    },
    methods:{
        getVideo:async function(){
            this.$http({
                url:'/video/getVideoById',
                method:'get',
                params:{
                    id:this.$route.params.vid
                }
            }).then((result)=>{
                this.videoInfo=result.data
                console.log('videoInfo的数据',this.videoInfo.userId)
                this.$refs.authorInfo.getInfo(this.videoInfo.userId)
            })
        }
    }
    ,
    created() {
        this.getVideo()
    },
}

 
</script>

<style scoped>
main{
    display: flex;
    max-width: 1500px;
    margin: 60px  auto 0;
}
.video{
    width: 1150px;
    height: 1000px;

    background:#fff;
}
.info{
    display: flex;
    flex-direction: column;
    width:350px;
    height: 1000px;
    padding-left:20px;
}
.title{
    margin: 15px 0 0 0;
    height: 60px;
    width: 100%;
    text-align: left;

}
.title>h2{
    font-size: 1.5em;
}
.title span{
    font-size: .75em;
    color:grey;
    margin-right: 20px;
}
#player{
    width: 100%;
    height: 700px;
}
.func{
    width:100%;
    height: 60px;
    border-bottom: solid 1px rgba(225, 225, 225, 1);
}
.desc{
    text-align: left;
    padding: 10px;
}
</style>