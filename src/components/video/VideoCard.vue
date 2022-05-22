<template>
  <div id="root" >
      <div class="image" @click="toVideoPlay()">
          <img :src="video_image" >
          <span>{{num}}</span>
      </div>
      <div class="intro" @click="toVideoPlay()">
          <div id="title">
            <h4>{{headline}}</h4>
            <p>{{synopsis}}</p>
          </div>
          <div id="author">{{author}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'VideoCard',   
    data() {
        return {
            
        }
    },
    props:['author','headline','vid','synopsis','video_image','num'],
    methods:{
        toVideoPlay:function(){
            this.$router.push({path:`/videoplay/${this.vid}`})
        }
    }
}
</script>

<style scoped>
#root{
    box-sizing: border-box;
    background-color: #fff!important;
    height: 300px;
    min-width: 200px;
    padding: 15px;
    border-radius: 5px;
    overflow: hidden;
    border: solid 1px rgba(225, 225, 225, .8);
    transition: .5s;
}
#root:hover{
    background-color: #f9f9f9!important;
}
.image{
    position: relative;
    cursor: pointer;
}
.image img{
    width: 250px;
    height: 150px;
    border-radius: 7px;
    transition: .5s;
}
.image img:hover{
    transform: scale(1.05);
}
.image span{
    position: absolute;
    color: #fff;
    height: 25px;
    width: 25px;
    left: 20px;
    bottom: 20px;
    font-size: .9em;
    font-weight: 500;
    line-height: 25px;
    background-color: rgba(0,0,0,.1);
    border-radius: 50%;
}
.intro{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100px;
}
#title{
    cursor: pointer;
}
#title h4{
    text-align: left;
}
#title h4:hover{
    color: #42A5F5;
}
#title p{
    font-size: .85em;
    color: gray;
}
#author{
    color: grey;
    font-size: .95em;
    cursor: pointer;
}
</style>