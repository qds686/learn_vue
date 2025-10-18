<script>
import Home from './views/Home.vue';
import Category from './views/Category.vue';
import About from './views/About.vue';
export default {
  components: {
    Home,
    Category,
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
    },
    homeClick(component){
      console.log("app:",component);
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
      <!-- 1.v-if进行判断逻辑，决定要显示哪一个组件 -->
      <!-- <template v-if="currentIndex === 0">
        <home></home>
      </template>
      <template v-else-if="currentIndex === 1">
        <about></about>
      </template>
      <template v-else-if="currentIndex === 2">
        <category></category>
      </template> -->

      <!-- 2.动态组件 -->
      <!-- is中的组件来自两个地方：1.全局注册的组件，2.局部注册的组件 -->
      <!-- 动态组件传递数据，子组件用props进行接收 -->
      <component name="hezi" 
                 :age="18" 
                 :is="tabs[currentIndex]" 
                 @home-click="homeClick"
      ></component>
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