import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/emit",
    name: "emit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EmitStudy.vue"),
  },
  {
    path: "/vmodel",
    name: "vmodel",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VmodelStudy.vue"),
  },
  {
    path: "/slot",
    name: "slot",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SlotStudy.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/lifeCycle",
    name: "lifeCycle",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
