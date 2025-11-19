import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";

// 路由的懒加载，对文件进行分包处理
const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");

// 创建路由，需要有映射关系routes
const router = createRouter({
  // 指定的模式：hash
  // history: createWebHashHistory(),
  // history
  history: createWebHistory(),
  // 映射关系
  routes: [
    // 默认路径匹配
    {path: "/", redirect: "/home"},
    {name: "home", path: "/home", component: Home, meta: { name: "hezi"}},
    {name: "about", path: "/about", component: About},
    {
      path: "/user/:id",
      component: () => import("@/views/User.vue")
    },
    // 如果匹配到一个不存在的路径，就自动显示下面的组件
    // /:pathMatch(.*) 这样写不会对路径解析
    // /:pathMatch(.*)* 会把路径通过/分隔成一个数组
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFound.vue")
    }
  ]
});

let isAdmin = true;
if(isAdmin) {
  router.addRoute({
    path: "/admin",
    component: () => import("../views/Admin.vue")
  });
}

// 进行任何的路由跳转之前，传入的beforeEach中的函数都会被回调
router.beforeEach((to, from) => {
  if(to.path !== "/login"){
    return "login"
  }
});

export default router;