//axios封装
import axios from 'axios'
import cookie from 'js-cookie'
const instance = axios.create({
        baseURL: 'http://localhost:8082',
        withCredentials: true, //是否允许带cookie
        timeout: 10000
    })
    //拦截器

instance.interceptors.response.use( //通用拦截
    res => {
        console.log(res)
        let { data, message, status } = res.data
        if (status == 200) {
            return { data, message }
        } else if (status == 100) {
            return message
        } else {
            return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.request.use( // 给需要在请求头附上token的请求的axios实例设置请求拦截
    config => {
        if (cookie.get('token')) {
            config.headers['token'] = cookie.get('token')
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
export default instance