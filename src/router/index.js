import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue"
import App2 from "../views/App2.vue"

const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", name: "index", component:index},
      { path: "/App2", name: "App2", component: App2 },
    
    ],
  });
  export default router;