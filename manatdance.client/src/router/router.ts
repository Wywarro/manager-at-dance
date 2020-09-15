import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import DeviceConnect from "../components/DeviceConnect.vue";
import DeviceInfo from "../components/DeviceInfo.vue";
import DeviceUsers from "../components/DeviceUsers.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Home,
    children: [
      {
        name: "Home",
        path: "",
        component: DeviceConnect,
      },
      {
        name: "deviceInfo",
        path: "/device-info",
        component: DeviceInfo,
      },
      {
        name: "users",
        path: "/users",
        component: DeviceUsers,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
