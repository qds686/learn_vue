<script>
import TabControl from './TabControl.vue';

export default {
  components: {
    TabControl
  },
  data() {
    return {
      products: {
        pageContents: ["衣服列表", "鞋子列表", "裤子列表"]
      },
      currentIndex: 0
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<template>
  <div class="app">
    <!-- 1.tab-control -->
    <tab-control :titles="['衣服', '鞋子', '裤子']" @tab-item-click="tabItemClick"></tab-control>
    <!-- 2.展示的内容 -->
    <h1>{{ products.pageContents[currentIndex] }}</h1>
  </div>
</template>

<style lang="less" scoped></style>