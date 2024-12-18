import { createRouter, createWebHistory } from "vue-router";

import ReportsPage from "@/pages/reports/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ReportsPage,
    },
    {
      path: "/:id",
      name: "detail",
      component: ReportsPage,
    },
    {
      name: "new",
      path: "/new",
      component: ReportsPage,
    },
  ],
});

export default router;
