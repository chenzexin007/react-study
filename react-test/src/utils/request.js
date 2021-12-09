import axios from "axios"
import qs from "querystring"


// 错误处理
const errorHandle = (status, info) => {
  switch(status){
    case '':
      console.log(info)
      break;
  }
}

// 创建axios实例
const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

/**
 * 请求拦截
 */
instance.interceptors.request.use(
  config => {
    if(config.method === "post"){
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => Promise.reject(error)
)

/**
 * 响应拦截
 */
instance.interceptors.response.use(
  response => {
    if(response.status === 200){
      Promise.resolve(response)
    }else {
      Promise.reject(response)
    }
  },
  error => {
    const { response } = error
    errorHandle(response.status, response.info)
  }
)

export default instance