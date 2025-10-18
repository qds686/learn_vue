<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue"],
  methods: {
    changeCounter(){
      // 如果是input 传递event.target.value给父组件
      this.$emit("update:modelValue", 1000);
    }
  }
}
</script>

<template>
  <div class="counter">
    <h2>Counter：{{ modelValue }}</h2>
    <button @click="changeCounter">修改Counter</button>
  </div>
</template>

<style lang="less" scoped></style>