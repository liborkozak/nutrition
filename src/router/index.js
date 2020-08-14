import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});
