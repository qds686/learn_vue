<script setup>
import { toRefs } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const { counter } = toRefs(store.state);

</script>

<template>
  <div class="home">
    <h2>Home当前计数：{{ $store.state.counter }}</h2>
    <h2>setup当前计数：{{ counter }}</h2>
  </div>
</template>

<style lang="less" scoped>

</style>