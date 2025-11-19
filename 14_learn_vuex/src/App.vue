<script setup>
// import Home from './views/01_store基本使用.vue';
// import Home from './views/02_组件中使用mapState.vue';
// import Home from './views/03_核心二getters的基本使用.vue';
// import Home from './views/04_核心三mutations的基本使用.vue';
// import Home from './views/05_核心三组件中使用mapMutations.vue.vue';
// import Home from './views/06_核心四actions的基本使用.vue';
import Home from './views/07_核心四actions网络请求数据.vue';

</script>

<template>
  <!-- 访问store中的counter -->
  <h2>App当前计数：{{ $store.state.counter }}</h2>
  <hr>
  <home></home>
</template>

<style scoped></style>
