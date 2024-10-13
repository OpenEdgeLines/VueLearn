import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component:() => import("../view/home.vue")
    },
    {
      path: "/test",
      component:() => import("../view/test.vue")
    },
    {
      path: "/:error*",
      component:() => import("../view/NotFound.vue")
    }
  ],
});
export default router;
