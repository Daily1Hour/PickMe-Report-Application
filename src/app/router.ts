import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/reports/index.vue"),
    },
    {
      path: "/:id",
      name: "detail",
      component: () => import("@/pages/reports/index.vue"),
    },
    {
      name: "new",
      path: "/new",
      component: () => import("@/pages/reports/index.vue"),
    },
  ],
});

export default router;
