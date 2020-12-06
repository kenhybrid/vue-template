import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueMeta from "vue-meta";
require("vue2-animate/dist/vue2-animate.min.css");

Vue.config.productionTip = false;
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
