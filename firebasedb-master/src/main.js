import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";
import FlagIcon from 'vue-flag-icon';
import router from './router'
Vue.use(FlagIcon);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount("#app");
