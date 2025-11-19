<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// router.push/replace，使用对象的时候可以通过path和name两种方式跳转页面
// 使用name跳转不会进行重定向
const homeSpanClick = () => {
  // 跳转到首页
  // router.push("/home");
  router.push({
    // name: "home"
    path: '/home',
    // http://localhost:5173/home?name=hezi&age=18
    query: {
      name: 'hezi',
      age: 18
    }
  });
};

const aboutBtnClick = () => {
  // 跳转到关于
  router.push("/about?lx=my");
};

</script>

<template>
  <div class="app">
    <h2>This is an app page</h2>
    <div class="nav">
      <!-- 
      to：字符串和对象，对象动态绑定类型
      replace：不会记录路径，直接替换 
      active-class:选中的时候自定义类名 active-class="link-active"
      -->
      <router-link :to="{ path: '/home' }" replace>首页</router-link>
      <router-link to="/about" replace>关于</router-link>
      <router-link to="/user/11" replace>用户11</router-link>
      <router-link to="/user/12" replace>用户12</router-link>

      <!-- 其他元素的页面跳转 -->
       <span @click="homeSpanClick">首页</span>
       <button @click="aboutBtnClick">关于</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.router-link-active {
  color: red;
  font-size: 20px;
}
</style>