<script>
// 异步导入文件，import可以让 webpack/vite 打包的时候进行分包处理
import("./utils/math").then(res => {
  res.sum(20, 30);
});

import { defineAsyncComponent } from 'vue';
import Home from './views/Home.vue';
import About from './views/About.vue';

// 错误做法
// import Category from './views/Category.vue';
// import("./views/Category.vue")
// 正确做法，异步导入组件
const AsyncCategory = defineAsyncComponent(() => import("./views/Category.vue"));

export default {
  components: {
    Home,
    Category: AsyncCategory,
    About
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentIndex: 0
    }
  },
  methods: {
    // 点击不同的按钮，显示不同的组件
    btnClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="index">
        <button :class="{ active: index === currentIndex }" @click="btnClick(index)">{{ item }}</button>
      </template>
    </div>
    <div class="view">
      <keep-alive include="home,about">
        <component :is="tabs[currentIndex]"></component>
      </keep-alive>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tabs {
  button.active {
    color: red;
  }
}
</style>