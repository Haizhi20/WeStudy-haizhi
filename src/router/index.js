import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'home',
            path: '/',
            component: resolve => require(['@/components/Home'], resolve) //异步组件路由懒加载
        }, {
            name: 'login',
            path: '/login',
            component: resolve => require(['@/components/Login'], resolve),
            children: [
                { path: '/', component: resolve => require(['@/pages/LoginForm'], resolve) },
                { path: 'register', component: resolve => require(['@/pages/Register'], resolve) }
            ]
        }, {
            naem: 'video',
            path: '/video/:cid',
            component: resolve => require(['@/components/video/Video'], resolve),
        }, {
            naem: 'videoplay',
            path: '/videoplay/:vid',
            component: resolve => require(['@/components/video/VideoPlay'], resolve),
        },
        {
            naem: 'profile',
            path: '/profile',
            component: resolve => require(['@/components/Profile'], resolve),
        },
    ]
})
router.beforeEach((to, from, next) => {
    //路由跳转前回到页面头部
    window.scrollTo(0, 0)
        //进入个人主页前判断token，没有则跳转登陆页面
    const token = localStorage.getItem('token')
    if (to.path == '/profile' && !token)
        next({ path: '/login' })
    else
        next()
})
export default router