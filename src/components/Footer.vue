<template>
  <footer class="footer">
            <div class="container">
                <div class="menu">
                    <img src="../assets/haizhi.jpg">
                    <div>
                        <h3>关于我们</h3>
                        <ul>
                            <li>团队介绍</li>
                            <li>加入我们</li>
                            <li>联系我们</li>
                            <li>帮助中心</li>
                        </ul>
                    </div>
                    <div>
                        <h3>功能服务</h3>
                        <ul>
                            <li>首页</li>
                            <li>视频</li>
                            <li>博客</li>
                            <li>资源</li>
                        </ul>
                    </div>
                    <div>
                        <h3>公众平台</h3>
                        <ul>
                            <li>微信公众号</li>
                            <li>csdn</li>
                            <li>抖音</li>
                            <li>掘金</li>
                        </ul>
                    </div>
                    
                </div>
                <div class="copyright">
                    <small>Copyright © 海智科技有限公司粤ICP备 - xxxxxxxxxxx号</small>
                </div>
            </div>
        </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
    .footer{
    margin-top: 30px;
    height: 280px;
    background-color: #fff;
    border-top: solid 1px rgba(225, 225, 225, .8)
}
.container{
    max-width: 1400px;
    padding-top: 30px;
    margin: 0 auto;
}
.menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 230px;
}
.menu li{
    list-style: none;
    margin: 10px 0;
}
.menu>img{
    height: 180px;
    width: 180px;
    transition: .3s;
}
.menu>img:hover{
    transform: scale(1.1);
}
.copyright{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: solid 1px rgba(225, 225, 225, .8);
}

</style>