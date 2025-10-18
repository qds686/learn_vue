<script>
import eventBus from './utils/event-bus';
export default {
  methods: {
    bannerBtnClick() {
      // 发送事件
      console.log('bannerBtnClick');
      eventBus.emit("bannerEvent", 'hezi', 18, 1.88);
    }
  }
}
</script>

<template>
  <div class="banner">
    <button @click="bannerBtnClick">banner按钮</button>
  </div>
</template>

<style lang="less" scoped></style>