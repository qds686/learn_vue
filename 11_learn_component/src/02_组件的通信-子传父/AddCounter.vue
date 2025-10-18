<script>
export default {
  // 可以把发送的自定义组件都写在 emits 中
  // emits: ["add"],

  // 对自定义事件进行验证
  emits: {
    add(count) {
      if (count <= 10) return true;
      return false;
    }
  },
  methods: {
    btnClick(count) {
      // 让子组件发出一个自定义事件
      this.$emit("add", count);
    }
  }
}
</script>

<template>
  <div class="add">
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(5)">+5</button>
    <button @click="btnClick(10)">+10</button>
  </div>
</template>

<style lang="less" scoped></style>