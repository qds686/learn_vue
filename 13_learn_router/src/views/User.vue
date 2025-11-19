<script setup>
// 获取rout跳转的id
//   + optionsAPI: this.$route.params.id
//   + compositionAPI: 通过 useRoute函数获取
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute();
// 在同一个组件中跳转路由，setup中只执行一次
// 继续跳转需要导航守卫获取
console.log(route.params.id); 

// 在导航守卫中可以拿到后续每一次的跳转数据
onBeforeRouteUpdate((to , from) => {
  console.log("from:", from.params.id);
  console.log("to:", to.params.id);
});

</script>

<template>
  <div class="user">
    <h2>This is an user page</h2>
    <h2>User: {{ $route.params.id }}</h2>
  </div>
</template>

<style lang="less" scoped></style>