import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import router from "./router";
import storage from "./storage";

Vue.config.productionTip = false;

Vue.prototype.$todos = storage;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
