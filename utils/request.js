import axios from "axios";
import {MessageBox, Message} from 'element-ui';

import cookie from 'js-cookie';
// axios实例
const service = axios.create({
    baseURL: 'http://localhost',
    timeout: 15000
})


// http request 拦截器
service.interceptors.request.use(
    config => {
    // token 先不处理，后续使用时在完善
    // pp jk
    if(cookie.get('token')){
        // token值放到cookie里面
        config.headers['token'] = cookie.get('token')
    }
    return config
},
  err => {
    return Promise.reject(err)
})
// http response 拦截器
service.interceptors.response.use(
    response => {
        // 如果状态码是208，前端统一做拦截
        if(response.data.code == 208){
            // 弹出登录输入框
            // loginEvent.$emit('loginDialogEvent')
            return
        }else {
            if (response.data.code !== 200) {
                Message({
                    message: response.data.message,
                    type: 'error',
                    duration: 5 * 1000
                })
                return Promise.reject(response.data)
            } else {
                return response.data
            }
        }
    },
    error => {
        return Promise.reject(error.response)
})

export default service