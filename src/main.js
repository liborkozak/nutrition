import Vue from "vue";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import i18n from "@/plugins/i18n";
import store from "@/store";
import router from "@/router";
import { auth } from "@/services/firebase";

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      router,
      vuetify,
      i18n,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
