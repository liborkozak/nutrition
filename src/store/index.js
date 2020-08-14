import Vue from "vue";
import Vuex from "vuex";
import nutrition from "./nutrition";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    nutrition,
  },
  plugins: [],
});
