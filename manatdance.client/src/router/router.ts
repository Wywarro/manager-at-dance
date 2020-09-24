import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import DeviceConnect from "../views/DeviceConnect.vue";
import DeviceInfo from "../views/DeviceInfo.vue";
import DeviceUsers from "../views/DeviceUsers.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: "DeviceConnect",
    path: "/",
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
