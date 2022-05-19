<template>
    <div id="root">
        <div class="top">
            <div class="container">
                <h2>WeStudy，以学为伴，一生相伴</h2>
                <nav class="nav">
                    <span v-for="(item,index) in navList" :key="index" @click="direction(index)" :class="{active:direcIndex==index}">{{item}}</span>
                </nav>
            </div>
        </div>
        <main class="container">
            <VideoSection :key="componentKey" :section="this.sections[direcIndex]"/>
        </main>
        <Footer/>
       
    </div>
</template>

<script>
import Footer from '../Footer.vue'
import VideoSection from './VideoSection.vue'

export default {
    name:'Video',
    components:{ Footer, VideoSection},
    data(){
        return {
            direcIndex:0,
            componentKey:0,
            navList:['前端','后端','嵌入式','产品','爬虫','大数据'],
            list:[
                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],

                // [{id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},
                // {id:1,author:'moao',headline:'HTML入门',synopsis:'最基础的前端知识，网页的骨架',video_image:'../assets/preview.jpg'},],
            ],
            sections:[
                ['前端基础','前端进阶','数据库入门','走进大前端','大前端框架','移动端开发','深入底层','技能提升','走进企业'],
                ['JavaSE','前端入门','MySQL','JavaWeb','SSM框架','微服务开发','深入底层','技能提升','走进企业'],
            ]
        }
    },
    methods: {
        // //请求视频列表信息
        // require:async function(){
        //     const result=await this.$http({
        //         url:'/video/queryVideo',
        //         method:'get',
        //     })
        //     console.log('video拿到的结果',result)
        //     this.list=result.data
        // },
        //根据用户选择的方向提供视频信息
        direction:function(index){
            this.direcIndex=index
            this.$router.push({path:`/video/${index}`}) 
            this.componentKey+=1    //更新key值以重新渲染组件
        }
    },
    mounted(){
        // this.require()
        this.direcIndex=this.$route.params.cid
    }
}
</script>

<style scoped>
#root{
    width: 100%;
    background-color: #EFF3F5;
}
.top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 100%;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    /* background-image: linear-gradient(to top, #42A5F5 0%,  #89f7fe 100%); */
    /* background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%); */
    /* background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%); */
}
.top h2{
    color: #fff;
    font-size: 2.5em;
    margin: 60px 0;
}
.nav{
    display: flex;
    justify-self: end;
    justify-content: space-evenly;
}
.nav span{
    color: #fff;
    font-weight: 600;
    padding: 5px 20px;
    margin: 0 20px;
    background-color: rgba(255, 255, 255, 0.3);
    background: hsla(0,0%,100%,.1);
    border-radius: 5px;
    cursor: pointer;
}
.container{
    max-width: 1280px;
    padding-top: 30px;
    margin: 0 auto;
}

.active{
    background-color: lightgreen!important;
}
</style>