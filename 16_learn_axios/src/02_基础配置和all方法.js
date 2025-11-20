import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

createApp(App).mount('#app');

// -----------
// 1.baseUrl
const baseURL = "http://123.207.32.32:8000";

// 给axios配置基础配置
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 1000;

axios.get("/home/multidata").then(res => {
  console.log(res.data);
});

// 2.axios.all([]) 一次性发送多个请求
axios.all([
  axios.get("/home/multidata"),
  axios.get("http://123/207.32.32:9001/lyric?id=500665346")
]).then(res => {
  console.log(res);
});
