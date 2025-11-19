import { createStore } from 'vuex';
import { CHANGE_NAME } from './mutation-types';

const store = createStore({
  /* 
  vuex中的 状态存储 是响应式的
    + 在template中通过 $store.state.xx 访问
    + 在script中通过 this.$store.state.xx 访问
  */
  state: () => ({
    counter: 100,
    name: 'hezi',
    m: 0,
    n: 0,

    banners: [],
    recommends: []
  }),
  getters: {
    // 第二个参数getters可以访问其他的getters
    doubleCounter(state, getters) {
      return state.counter * 2;
    }
  },
  // mutations：存放所有同步修改store中状态信息的action行为
  //   + store中的状态只能通过mutations改变
  mutations: {
    handleN(state, payload) {
      // 同步修改容器中的状态信息
    },
    handleM(state, payload) {
      // 同步修改容器中的状态信息
    },
    incrementM(state){
      state.m++;
    },
    incrementCounter(state){
      state.counter++;
    },
    changeName(state, payload){
      state.name = payload;
    },
    [CHANGE_NAME](state, payload) {
      // state.name = 'kobe';
      // state.name = payload;
      state.name = payload.name;
    },
    changeBanners(state, banners){
      state.banners = banners;
    },
    changeRecommends(state, recomments){
      state.recommends = recomments;
    }
  },
  // actions：存放所有异步修改state的方法
  /* 
  如果先要异步获取数据就先在页面中执行actions中的方法获取数据
    + this.$store.dispatch('queryData')
    + 在queryData中 store.commit('handleN');
  如果不需要异步获取数据，则直接在mutations中同步修改状态
    + this.$store.commit('handleN')
  */
  actions: {
    queryData: (store) => {
      // 异步先获取数据
      store.commit('handleM');
    },
    // context表示当前上下文模块，store表示根模块
    incrementAction(context, payload){
      // console.log(context.commit) // 用于提交mutation
      // console.log(context.getters) // getters
      // console.log(context.state) // state
      context.commit('incrementCounter');
    },
    async fetchHomeMultidataAction(context){
      const res = await fetch("http://123.207.32.32:8000/home/multidata");
      const data = await res.json();
      context.commit("changeBanners", data.data.banner.list);
      context.commit("changeRecommends", data.data.recommend.list);
    }
  }
});

export default store;