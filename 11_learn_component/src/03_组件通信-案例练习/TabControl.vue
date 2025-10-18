<script>
export default {
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  emits: ["tabItemClick"],
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabItemClick", index);
    }
  }
}
</script>

<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div class="tab-item" @click="itemClick(index)" :class="{ active: index === currentIndex }">{{ item }}</div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;

  .tab-item {
    flex: 1;

    &.active {
      color: red;
      border-bottom: 2px solid red;
      font-weight: bold;
    }
  }
}
</style>