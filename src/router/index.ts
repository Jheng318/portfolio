import { createRouter, createWebHistory } from "vue-router";
import ErrorView from "@/views/ErrorView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:notFound",
      component: ErrorView,
    },
  ],
});

export default router;
