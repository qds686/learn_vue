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
      <!-- 
        进入组件：created创建组件  离开组件：unmounted销毁组件 
        多个组件之间频繁的切换，性能不高，希望keep-alive
      -->
      <!-- 
        keep-alive 把组件缓存起来，离开组件后，状态和事件等不会清空，组件内部注释会报错 
        1.include="home,about"只缓存这两个组件
          + 组件中没有定义name选项，则全部不会缓存
          + 需要在定义组件的时候定义name选项
          + String|RegExp|Array，正则和数组需要动态绑定 :include="/a|b/" :include="['a', 'b']"
        2.exclude 和include相反
        3.max 最多可以缓存多少组件实例
          + 一旦达到这个数字，缓存组件中最近没有被访问的实例会被销毁
          + Number|String
      -->
      <!-- 
        组件的生命周期：activated进入keep-alive的组件，deactivated离开keep-alive的组件
      -->
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