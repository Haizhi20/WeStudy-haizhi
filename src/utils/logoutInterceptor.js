import axios from 'axios'
import cookie from 'js-cookie'
const instance = axios.create({
    baseURL: 'http://localhost:8082',
    withCredentials: true, //是否允许带cookie
    timeout: 10000
})
let storage = window.localStorage
instance.interceptors.response.use( //退出登录拦截
    res => {
        console.log('退出拦截：', res)
        let { status } = res.data
        if (status == 200) {
            cookie.remove('token')
            storage.removeItem('udata')
        } else {
            return status
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export default instance