<template>
<div id="root">
    <video
        :src="video_url"
        :controls="videoOptions.controls"

        webkit-playsinline="true"
        playsinline="true"
        x-webkit-airplay="allow"
        x5-playsinline
        style="width: 100%;height:100%;"

        autoplay="autoplay"
        ref="video">
    </video>
</div>
</template>

<script>
export default {
    name:'Player',
    data(){
        return {
            videoOptions: {
                controls:true,
                src:this.video_url, // url地址
                },
            player: null,
            playTime:'',
            seekTime:'',
            current:'',
        }
    },
    props:['video_url'],
    methods: {
            // initVideo:function() {
            //     //原生初始化视频方法
            //     let myVideo = this.$refs.video;
            //     //ontimeupdate
            //       myVideo.ontimeupdate = function() {myFunction()};
            //     //   let _this = this;

            //       function myFunction(){
            //           let playTime = myVideo.currentTime
            //           setTimeout(function () {
            //               localStorage.setItem("cacheTime",playTime)
            //           },500)
            //           let time = localStorage.getItem("cacheTime")
            //           // 当前播放位置发生变化时触发。
            //           if(playTime - Number(time) > 2){
            //               myVideo.currentTime = Number(time)
            //           }
            //       }
            // },

        },
}
</script>

<style scoped>
#root{
    background-color: #000;
    width: 100%;
    height: 100%;
}
</style>