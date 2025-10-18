<script>
import Home from './Home.vue';
import eventBus from './utils/event-bus';
import Cagegory from './Cagegory.vue';
export default {
  components: {
    Home,
    Cagegory
  },
  data(){
    return {
      message: 'Hello App',
      isShowCategory: true
    }
  },
  created() {
    // 事件监听
    eventBus.on("bannerEvent", (name, age, height)=> {
      console.log("app:事件监听", name, age, height);
      this.message = `name:${name}, age:${age}, height:${height}`;
    });
  }
}
</script>

<template>
  <!-- 
    vue3从实例中移除了$on/$off/$once方法，继续用事件总线需要使用库
      + mitt / tiny-emitter 
  -->
  <home></home>
  <h2>{{ message }}</h2>
  <hr>
  <button @click="isShowCategory = false">是否显示category</button>
  <cagegory v-if="isShowCategory"></cagegory>
</template>

<style lang="less" scoped>

</style>