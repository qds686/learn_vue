<script>
// 父传子，通过props，子传父，通过$emit
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo
  }
}

</script>

<template>
  <!-- 1.展示个人信息 -->
  <!-- 属性默认是字符串类型，加上冒号就是对应的数据类型 -->
  <!-- 
    1.当我们传递给一个组件某个属性，但是该属性并没有定义对应的props或者emits时，就称之为非prop的Attribute
      + 如果当前的属性是一个非prop的attribute，那么该属性会默认添加到子组件的根元素上
      + 常见的包括class、style、id属性、自定义的属性和v-on监听器等
    2.Attribute的继承：
      + 当组件有单个根节点时，非prop的Attribute将自动添加到根节点的Attribute中
      + 如果一个子组件的根元素已经有了 class 或 style attribute，它会和从父组件上继承的值合并
      + 深层组件继承：在根节点上渲染另一个组件，这个组件可以把~注册或者继承在这个组件上
    3.子组件的根节点禁用~的时候，在子组件中添加属性 inheritAttrs: false
    4.$attrs：这些透传进来的 attribute 可以在模板的表达式中直接用 $attrs 访问到。
      + 这种属性会保留大小写 $attrs['foo-bar']
      + 想要把所有符合的属性绑定到元素上，通过v-bind="$attrs"，也可以单个绑定 :class="$attrs.xx"
    5.多根节点的 Attributes 继承：需要在子组件根节点显示的绑定，不然会抛出错误不确定绑定哪个根节点
    6.在JS中可以通过 this.$attrs 访问所有非prop的Attribute，是一个proxy对象
  -->
  <show-info name="hezi" :age="18" :height="1.88" address="广州市" abc="cba" class="active"></show-info>

  <!-- 2.展示科比的个人信息 -->
  <show-info name="kobe" :age="30" :height="1.87"></show-info>

  <!-- 3.展示默认的个人信息 -->
  <show-info :age="20" show-message="哈哈哈"></show-info>
</template>

<style lang="less" scoped></style>