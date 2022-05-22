import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import request from './utils/interceptors.js'
import login from './utils/loginInterceptor.js'
import logout from './utils/logoutInterceptor.js'
import ElementUI from './element/index';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

//将封装的axios拦截器挂载到vue原型
Vue.prototype.$http = request
Vue.prototype.$login = login
Vue.prototype.$logout = logout

Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    router,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')