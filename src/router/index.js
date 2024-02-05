import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue"
import App2 from "../views/App2.vue"
import forum from "../views/forum.vue"
import activity from "../views/activity.vue"
import login from "../views/login.vue"
import room from "../views/room.vue"

const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", name: "index", component:index},
      { path: "/forum", name: "forum", component: forum },
      { path: "/activity", name: "activity", component: activity },
      { path: "/App2", name: "App2", component: App2 },
      { path: "/login", name: "login", component: login },
      { path: "/room/:roomId", name: "room", component: room }
    
    ],
  });
  export default router;