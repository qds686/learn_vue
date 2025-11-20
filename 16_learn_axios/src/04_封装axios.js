import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

createApp(App).mount('#app');

// -----------
class HYRequest {
  constructor(baseURL, timeout){
    this.instance = axios.create({
      baseURL: baseURL
    });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      axios.request(config).then(res => {
        resolve(res.data);
      }).catch(reject);
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" })；
  }
}

export default new HYRequest();