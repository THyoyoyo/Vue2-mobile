import axios from 'axios'
import store from '@/store'
import main from "@/main"
import router from '@/router'
// import VueRouter from 'vue-router'
// import Vue from 'vue'
import { Toast, Notify } from 'vant';
let arr = window.location.href.split("/");
// create an axios instance
const service = axios.create({
    baseURL: '/api', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 20000, // request timeout
    retryDelay: 1000, // 请求间隙
    retry: 2, // 重试次数
    // withCredentials: true, // 是否携带cookie信息
    // headers: {
    //     'Content-Type': 'application/json; charset=*'
    // },
});

// 请求拦截器
service.interceptors.request.use(

    config => {
        // do something before request is sent

        if (store.state.token != '') {
            //  如果登录 则携带
            config.headers['Authorization'] = store.state.token
        }
        //  config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

        return config
    },
    error => {
        // do something with request error
        ////console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data

        if (res.code == 401 || res.code == 403) {
            // Toast({
            //     message: '登录失效',
            //     onClose: () => {
            //         console.log("登录失效了");
            //     }
            // });
            localStorage.clear();
            store.commit("logout");
            return res;
        }
        return res
    },
    error => {
        //console.log('err' + error) // for debug
        // message({
        //     showClose: true,
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        Notify({ type: 'danger', message: '与服务器断开连接', duration: 3000 });
        return Promise.reject(error)
    }
)

export default service