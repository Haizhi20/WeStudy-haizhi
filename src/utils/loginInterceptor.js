import axios from 'axios'
import cookie from 'js-cookie'
const instance = axios.create({
    baseURL: 'http://localhost:8082',
    withCredentials: true, //是否允许带cookie
    timeout: 10000
})
let storage = window.localStorage
instance.interceptors.response.use( //登录拦截
    res => {
        console.log('登陆拦截：', res)
        let { data, msg, status, token } = res.data
        if (status == 200) {
            cookie.set('token', token, { expires: 3 }) //设置3天过期
            storage.setItem('udata', JSON.stringify(data))
            return { status, msg }
        } else if (status == 100) {
            console.log('登陆失败')
            return data
        } else {
            return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export default instance