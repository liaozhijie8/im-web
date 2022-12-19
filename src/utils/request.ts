import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});
/* 请求拦截器 */
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
/* 响应拦截器 */
service.interceptors.response.use(
  (res) => {
    // if (res.code === 1) {
    //   return Promise.resolve(res);
    // } else {
    //   return Promise.reject(res.message);
    // }
    return res;
  },
  
  (err) => {
    return Promise.reject(err);
  }
);

export default service;
