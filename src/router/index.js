import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/experiences",
      name: "experiences",
      component: () => import("@/views/ExperiencesView.vue"),
    },
    {
      path: "/educations",
      name: "educations",
      component: () => import("@/views/EducationsView.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("@/views/SkillsView.vue"),
    },
    {
      path: "/languages",
      name: "languages",
      component: () => import("@/views/LanguagesView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not_found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
