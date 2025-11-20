import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

createApp(App).mount('#app');

// -----------
const instance1 = axios.create({
  baseURL: "http://123/207.32.32:9001",
  timeout: 6000,
  headers: {}
});