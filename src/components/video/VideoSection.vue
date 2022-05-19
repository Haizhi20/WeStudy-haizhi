<template>
  <div class="container">
        <section  v-for="(item,index) in list" :key="index">
                <div class="tittle">
                    <span>{{index+1}}</span>
                    <p>{{section[index]}}</p>
                </div>
                <ul class="videos">
                    <!-- <li v-for="(item) in list[index]" :key="item.id"> -->
                    <li v-for="(item) in list" :key="item.id">
                        <VideoCard :author="'moao'" :headline="item.tittle" :vid="item.id" :synopsis="'嗨嗨害'" :video_image="item.img" :num="index+1"/>
                    </li>
                    
                </ul>
        </section>
        <section id="final">
           <div class="tittle">
                <span>{{section.length}}</span>
                <p>恭喜你学完了所有课程，完结撒花！</p>
            </div> 
        </section>
  </div>
</template>

<script>
import VideoCard from './VideoCard.vue'
export default {
  components: { VideoCard },
    name:'VideoSection',
    data(){
        return {
            list:[
                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],

                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],
                
                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],

                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],

                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],

                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],

                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],

                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],
            ]
        }
    },
    props:['section'],
    methods:{
        //获取章节视频信息
        getSections:async function(){
            const result=await this.$http({
                url:'/video/queryVideo',
                method:'get',
            })
            console.log('video拿到的结果',result)
            this.list=result.data
        }
    },
    mounted() {
        this.getSections(this.$route.params.cid)//获取路由传的参
    },
}
</script>

<style scoped>
.container{
    max-width: 1280px;
    padding-top: 30px;
    margin: 0 auto;
}
section{
    position: relative;
    width: 100%;
    padding-bottom: 20px;
    border-left: solid 2px rgba(220, 220, 220, .9);
}
#final{
    position: relative;
    width: 100%;
    padding-bottom: 0;
    border-left: solid 2px rgba(220, 220, 220, .9); 
}
#final span{
    top: 0.1em;
}
.tittle{
    display: flex;
    align-items: center;
}
.tittle span{
    position: absolute;
    left: -16px;
    top: 0px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 1.2em;
    font-weight: 600;
    border-radius: 50%;
    background-color: #42A5F5;
}
.tittle p{
    margin-left: 45px;
    height:1.5em;
    font-size: 1.5em;
    font-weight: 600;
    color: #42A5F5;
}

.videos{
    display: flex;
    flex-wrap: wrap;
    max-width: 1248px;
    margin-left: 30px;
}
.videos li{
    display: inline-block;
    margin: 15px 15px ;
}
</style>