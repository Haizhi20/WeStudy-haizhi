<template>
  <div id="root">
      <h2 class="tittle">
        探索你的学习方向
      </h2>
      <div class="container">
        <div class="item">
          <div class="circle">
            <img src="../assets/web.jpeg" alt="">
          </div>
            <p>前端</p>
        </div>
        <div class="item">
          <div class="circle">
            <img src="../assets/preview.jpg" alt="">
          </div>
            <p>后端</p>
        </div>
        <div class="item">
          <div class="circle">
            <img src="../assets/preview.jpg" alt="">
          </div>
            <p>UI</p>
        </div>
        <div class="item">
          <div class="circle">
            <img src="../assets/preview.jpg" alt="">
          </div>
            <p>安卓</p>
        </div>
        <div class="item">
          <div class="circle">
            <img src="../assets/prod.png" alt="">
          </div>
            <p>产品</p>
        </div>
        <div class="item">
          <div class="circle">
            <img src="../assets/preview.jpg" alt="">
          </div>
            <p>算法</p>
        </div>
        <div class="item">
          <div class="circle">
            <img src="../assets/preview.jpg" alt="">
          </div>
            <p>人工智能</p>
        </div>
        <div class="item">
          <div class="circle">
            <img src="../assets/preview.jpg" alt="">
          </div>
            <p>更多</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'Direction'
}
</script>

<style scoped>
#root{
  margin-bottom: 200px;
}
.tittle{
  position: relative;
  margin: 100px auto 50px auto;
  font-size: 2em;
}
.tittle::after{
  content: 'FEATURES';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 3.5em;
  letter-spacing: 0.1em;
  color: rgba(125, 125, 125,0.1);
  z-index: -1;
}
.container{
  display: flex;
  flex-wrap: wrap;
}
.item{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
  width: 300px;
}
.item p{
  margin-top: 20px;
  font-size: 1.5em;
  font-weight: 500;
}
.circle{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: .3s;
  overflow: hidden;
}
.circle:hover{
  cursor: pointer;
   box-shadow: 5px 5px 20px rgba(0, 0, 0, .3),
    -5px -5px 10px rgba(225, 225, 225, .3) 
}
.circle img{
  width: 100%;
  height: 100%;
  transition: .3s;
}
.circle img:hover{
  transform: scale(1.2);
}
</style>