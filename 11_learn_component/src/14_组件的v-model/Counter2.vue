<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ""
    }
  },
  meits: ["update:counter", "update:name"],
  methods: {
    changeCounter() {
      this.$emit("update:counter", 999);
    },
    changeName(){
      this.$emit("update:name", "盒子");
    }
  }
}
</script>

<template>
  <div class="counter">
    <h2>Counter: {{ counter }}</h2>
    <button @click="changeCounter">修改Counter</button>
    
    <h2>name: {{ name }}</h2>
    <button @click="changeName">修改name的值</button>
  </div>
</template>

<style lang="less" scoped></style>