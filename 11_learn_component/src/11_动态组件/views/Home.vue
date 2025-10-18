<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    age: {
      type: Number,
      default: 0
    }
  },
  emits: ['homeClick'],
  methods: {
    homeBtnClick() {
      console.log('homeClick');
      this.$emit('homeClick', 'home');
    }
  }
}
</script>

<template>
  <div class="home">
    <h2>This is a home page</h2>
    <hr>
    <h2>动态组件传值：{{ name }}-{{ age }}</h2>
    <hr>
    <button @click="homeBtnClick">homeBtn父子组件通信</button>
  </div>
</template>

<style lang="less" scoped></style>