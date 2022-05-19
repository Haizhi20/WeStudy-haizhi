<template>
  <div id="root">
      <div class="top">
          <div class="ushow">
            <img src="../assets/preview.jpg" alt="">
            <div class="info">
                <span class="avatar"><img src="../assets/preview.jpg" alt=""></span>
                <div>
                    <h3>Mao</h3>
                    <p>这个人很懒，什么都没有写</p>
                </div>
            </div>
          </div>
          <div class="unav"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Profile'
}
</script>

<style scoped>
#root{
    width: 1200px;
    margin: 0 auto;
    border: solid 1px red;
}
.ushow{
    position: relative;
    margin-top: 60px;
    width: 100%;
    height: 300px;
}
.ushow>img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.info{
    position: absolute;
    left: 50px;
    bottom: 25px;
    display: flex;
}
.info>div>h3{
    color: #fff;
}
.info>div>p{
    color: #fff;
    align-self: end;
}
.avatar{
    width: 60px;
    height: 60px;
    border: solid 1px ;
    border-radius: 50%;
    overflow: hidden;
}
.avatar>img{
    width: 100%;
    height: 100%;
}
</style>