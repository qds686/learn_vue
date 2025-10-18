<script>
export default {
  props: {
    // reactive
    info: {
      type: Object,
      default: () => ({})
    },
    // readonlyInfo
    roInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["changeInfoName", "changeRoInfoName"],
  setup(props, context) {
    const showInfoBtnClick = () => {
      context.emit("changeInfoName", "kobe");
    };

    const roInfoBtnClick = () => {
      context.emit("changeRoInfoName", "james");
    }

    return {
      showInfoBtnClick,
      roInfoBtnClick
    }
  }
}
</script>

<template>
  <div class="show-info">
    <h2>ShowInfo：{{ info }}</h2>
    <!-- 1.单项数据流 -->
    <!-- 
    子组件修改了父组件的数据：可以实现，但是不规范
    子组件拿到数据只能用不能修改，可以发送自定义事件由父组件修改数据
    -->
    <!-- <button @click="info.name = 'kobe'">ShowInfo按钮</button> -->

    <!-- 符合单项数据流 -->
    <button @click="showInfoBtnClick">ShowInfo按钮</button>
    <hr>

    <!-- 2.使用readonly的数据 -->
    <h2>ShowInfo:{{ roInfo }}</h2>
    <!-- 代码报错 -->
    <button @click="roInfo.name = 'james'">ShowInfo按钮</button>
    <!-- 正确的做法 -->
    <button @click="roInfoBtnClick">roInfo按钮</button>
  </div>
</template>

<style lang="less" scoped></style>