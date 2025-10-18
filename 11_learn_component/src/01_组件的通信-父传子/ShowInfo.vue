<script>
export default {
  // 作用：接收父组件传递过来的属性
  // 1.props的数组语法
  // 弊端：1.不能对类型就行验证 2.没有默认值
  // props: ['name', 'age', 'height']

  // 2.props对象语法
  props: {
    name: {
      type: String,
      default: "我是默认的name"
    },
    age: {
      type: Number,
      required: true,
      default: 2
    },
    height: {
      type: Number,
      default: 1.6
    },

    // PS：对象类型写默认值时，需要编写default的函数，函数返回默认值
    friend: {
      type: Object,
      default: () => ({ name: "james" })
    },
    hobbies: {
      type: Array,
      default: () => ["篮球", "rap", "唱歌"]
    },
    // 父传子的时候，属性命名两种方式都可以，但是子组件中必须要用驼峰的方式接收
    showMessage: {
      type: String,
      default: "我是showMessage"
    }
  },
  created() {
    console.log(this.$attrs);
  }
}
</script>

<template>
  <div class="infos">
    <h2 :class="$attrs">姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>身高：{{ height }}</h2>

    <h2>Message：{{ showMessage }}</h2>
  </div>
  <div class="others" v-bind="$attrs"></div>
</template>

<style lang="less" scoped></style>