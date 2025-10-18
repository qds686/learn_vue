<script>
import eventBus from './utils/event-bus';
export default {
  methods: {
    bannerEventHandler(){
      console.log('category:事件监听');
    }
  },
  created(){
    eventBus.on('bannerEvent', this.bannerEventHandler);
  },  
  unmounted(){
    console.log('category unmounted');
    // 移除监听
    eventBus.off('bannerEvent', this.bannerEventHandler);
  }
}
</script>

<template>
  <h2>Category</h2>
</template>

<style lang="less" scoped></style>