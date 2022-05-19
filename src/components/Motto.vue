<template>
  <div id="root">
      <div class="container">
          <span class="motto small">在WeStudy</span>
          <span class="motto big">与爱编程的你，做有挑战的事</span>
          <span class="arrow el-icon-bottom" style="cursor:pointer" @click="move()"></span>
      </div>
  </div>
</template>

<script>
export default {
    name:'Motto',// 翻译：座右铭 即首页展示
    methods: {
        //页面滚轮滑动效果
        move:function(){
            console.log('movemove')
            let height=Math.floor(window.innerHeight)//获取浏览器可视窗口的高度 目标距离
            let timer=setInterval(function(){
                let scroll=Math.floor(document.body.scrollTop||document.documentElement.scrollTop)//当前位置
                let step=Math.ceil((height-scroll)/30)//一步移动的距离 为了实现非线性动画
                let stepTo=scroll+step>height?height:scroll+step//移动到
                window.scrollTo(0,stepTo)
                if(scroll===height){
                    clearInterval(timer)
                }
            },3)
        }
    },
}
</script>

<style scoped>
#root{
    font-size: 18px;
}
.motto{
    color: #fff;
    z-index: 2;
}
.small{
    font-size: 2.5em;
    font-weight: 600;
    margin-bottom: 20px;
}
.big{
    font-size: 4em;
    font-weight: 600;
}
.arrow{
    position: absolute;

    bottom: 20px;
    border: solid 2px #fff;
    border-radius: 50%;
    font-size: 2em;
    color: #fff;
    z-index: 1;
}
.container{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #4481eb;
    background-image: 
    radial-gradient(closest-side,#64B5F6,#64b4f600),
    radial-gradient(closest-side,#4facfe,#4facfe00),
    radial-gradient(closest-side,#00f2fe,#00f1fe00),
    radial-gradient(closest-side,#66a6ff,#66a6ff00),
    radial-gradient(closest-side,#c2e9fb,#c2e9fb00)
    ;
    background-size: 
    130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax
    ;
    background-position:
    -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax
    ;
    background-repeat: cover;
    /* animation: 13s movement linear infinite; */

}
@keyframes movement {
        0%,100% {
            background-size: 
            130vmax 130vmax,
            80vmax 80vmax,
            90vmax 90vmax,
            110vmax 110vmax,
            90vmax 90vmax
            ;
            background-position:
            -80vmax -80vmax,
            60vmax -30vmax,
            10vmax 10vmax,
            -30vmax -10vmax,
            50vmax 50vmax
            ;
        }
        25%{
            background-size: 
            100vmax 100vmax,
            90vmax 90vmax,
            100vmax 100vmax,
            90vmax 90vmax,
            60vmax 60vmax
            ;
            background-position:
            -60vmax -90vmax,
            50vmax -40vmax,
            0vmax -20vmax,
            -40vmax -20vmax,
            40vmax 60vmax
            ;
        }
        50%{
            background-size: 
            80vmax 80vmax,
            110vmax 110vmax,
            80vmax 80vmax,
            60vmax 60vmax,
            80vmax 80vmax
            ;
            background-position:
            -50vmax -70vmax,
            40vmax -30vmax,
            10vmax 0vmax,
            20vmax 10vmax,
            30vmax 70vmax
            ;
        }
        75%{
            background-size: 
            90vmax 90vmax,
            90vmax 90vmax,
            100vmax 100vmax,
            90vmax 90vmax,
            70vmax 70vmax
            ;
            background-position:
            -50vmax -40vmax,
            50vmax -20vmax,
            20vmax 0vmax,
            -10vmax 10vmax,
            40vmax 50vmax
            ;
        }
    }
.container::after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
}

</style>