import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/experiences",
      name: "experiences",
      component: () => import("@/pages/Experiences.vue"),
    },
    {
      path: "/educations",
      name: "educations",
      component: () => import("@/pages/Educations.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("@/pages/Skills.vue"),
    },
    {
      path: "/languages",
      name: "languages",
      component: () => import("@/pages/Languages.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not_found",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
