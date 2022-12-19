import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      children: [
        {
          path: "/chats",
          name: "chats",
          component: () => import("@/layout/components/chats/index.vue"),
        },
        {
          path: "/contacts",
          name: "contacts",
          component: () => import("@/layout/components/contacts/index.vue"),
        },
        {
          path: "/discover",
          name: "discover",
          component: () => import("@/layout/components/discover/index.vue"),
        },
        {
          path: "/me",
          name: "me",
          component: () => import("@/layout/components/me/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login-reg/index.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/login-reg/index.vue"),
    },
  ],
});

export default router;
