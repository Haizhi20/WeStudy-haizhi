<template>
    <main>
      <div class="video">
          <div class="tittle">
              <h2>视频标题!!!</h2>
              <div><span>播放量:3000</span> <span>2022-5-20 11:35</span></div>
          </div>
          <div id="player">
              <Player :video_url="videoInfo.url"/>
          </div>
          <div class="func">

          </div>
          <div class="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error neque voluptatum, eius autem magnam veritatis possimus quasi quibusdam sequi voluptatibus voluptatem perspiciatis atque ratione dolores veniam corrupti. Enim, quis assumenda.
          </div>
      </div>
      <div class="info"></div>
  </main>
</template>

<script>
import Player from './Player.vue'
export default {
    name:'VideoPlay',
    components:{Player},
    data(){
        return{
            videoInfo:null,
        }
    },
    methods:{
        getVideo:async function(){
             const result=await this.$http({
                url:'/video/getVideoById',
                method:'get',
                params:{
                    id:this.$route.params.vid
                }
            })
            this.videoInfo=result.data
        }
    }
    ,
    created(){
        this.getVideo()
    }
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
    border: solid 1px ;
}
.info{
    display: flex;
    flex-direction: column;
    width:350px;
    height: 1000px;
    padding: 20px;
    border: solid 1px orange;
}
.tittle{
    margin: 15px 0 0 0;
    height: 60px;
    width: 100%;
    text-align: left;

}
.tittle>h2{
    font-size: 1.25em;
}
.tittle span{
    font-size: .75em;
    color:grey;
    margin-right: 20px;
}
#player{
    width: 100%;
    height: 700px;
    border: solid 1px red;
}
.func{
    width:100%;
    height: 60px;
    border-bottom: solid 1px rgba(225, 225, 225, 1);
}
.desc{
    text-align: left;
}
</style>