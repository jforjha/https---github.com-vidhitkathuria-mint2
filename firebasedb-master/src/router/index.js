import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cr from "../components/cr.vue";
import Error from "../pages/Error.vue";
import Schedule from "../pages/Schedule.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/vidhit/",
    name: "Home",
    component: Home,
  },
  { path: ":id", name: "Cr", component: Cr },
  {
    path: "/404",
    name: "Error",
    component: Error,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
