<script>
import { reactive, readonly } from 'vue';
import ShowInfo from './ShowInfo.vue';
export default {
  components: {
    ShowInfo
  },  
  setup(){
    // 1.本地定义多个数据，都需要传递给子组件
    const info = reactive({
      name: "hezi",
      age: 18,
      height: 1.88
    });

    const changeInfoName = (payload) => {
      info.name = payload;
    }

    // 2.使用readonly包裹info
    // readonly：返回原生对象的只读代理(proxy的set方法被劫持不能对齐进行修改)
    // 作用：响应式对象在其他地方只能被使用不能被修改
    // 修改：父组件修改对应的响应式数据，readonly包裹的数据也会跟着改变
    //   + 如果修改readonly数据会触发Vue的警告
    const roInfo = readonly(info);
    const changeRoInfoName = (payload) => {
      info.name = payload;
    };

    return {
      info,
      changeInfoName,
      roInfo,
      changeRoInfoName
    }
  }
}
</script>

<template>
  <div class="home">
    <h2>App：{{ info }}</h2>
    <show-info :info="info" 
      @change-info-name="changeInfoName" 
      :ro-info="roInfo"
      @change-ro-info-name="changeRoInfoName"
    ></show-info>
  </div>
</template>

<style lang="less" scoped></style>