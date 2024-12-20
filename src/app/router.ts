import { createRouter, createWebHistory } from "vue-router";

import ReportsPage from "@/pages/index.vue";
import { RouteName } from "@/shared/model/RouteName";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_URL),
  routes: [
    {
      path: "/",
      name: RouteName.Home,
      component: ReportsPage,
    },
    {
      path: "/:id",
      name: RouteName.Detail,
      component: ReportsPage,
    },
    {
      path: "/new",
      name: RouteName.New,
      component: ReportsPage,
    },
  ],
});

export default router;
