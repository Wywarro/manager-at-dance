import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import Notifications from "vue-notification";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
