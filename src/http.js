import axios from 'axios';
import {Toast} from 'antd-mobile';

// axios全局配置
axios.defaults.timeout = 50000;

// 请求拦截器
axios.interceptors.request.use(config => {
  Toast.loading('加载中', 0);
  
  if (
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete'
  ) {
    console.log(config.data);
  }
  
  return config;
}, error => {
  Toast.hide();
  return Promise.reject(error);
});


// 响应拦截器
axios.interceptors.response.use(res => {
  Toast.hide();
  console.log(res);
  return res.data;
}, error => {
  Toast.hide();
  return Promise.reject(error);
});


export default axios;