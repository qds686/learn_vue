<script>
import { CHANGE_NAME } from '@/store/mutation-types';
export default {
  methods: {
    changeName(){
      // this.$store.commit("changeName");
      // this.$store.commit("changeName", "小王");
      // this.$store.commit("changeName", {
      //   name: "小利"
      // })

      // 了解
      // this.$store.commit({
      //   type: 'changeName',
      //   name: '小周'
      // })

      // 常量
      this.$store.commit(CHANGE_NAME, "小王");
    }
  }
}
</script>

<template>
  <div class="home">
    <button @click="changeName">修改name</button>
    <h2>store name：{{ $store.state.name }}</h2>
  </div>
</template>