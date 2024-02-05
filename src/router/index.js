import { createRouter, createWebHistory } from "vue-router";
import index from "../views/index.vue"
import App2 from "../views/App2.vue"
import forum from "../views/forum.vue"
import activity from "../views/activity.vue"
import login from "../views/login.vue"
import room from "../views/room.vue"
import usercenter from "../views/usercenter.vue"
import userCenterSetting from "../components/userCenter/userCenterSetting.vue"
import mailbox from "../components/userCenter/mailbox.vue"
import activityList from "../components/userCenter/activityList.vue"
import articleCollect from "../components/userCenter/articleCollect.vue"

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "index", component: index },
    { path: "/forum", name: "forum", component: forum },
    { path: "/activity", name: "activity", component: activity },
    { path: "/App2", name: "App2", component: App2 },
    { path: "/login", name: "login", component: login },
    { path: "/room/:roomId", name: "room", component: room },
    {
      path: "/usercenter", name: "usercenter", component: usercenter, children: [
        {
          path: '/setting',
          component: userCenterSetting
        },
        {
          path: '/mailbox',
          component: mailbox
        },
        {
          path: '/activityList',
          component: activityList
        },
        {
          path: '/articleCollect',
          component: articleCollect
        },

      ]
    }

  ],
});
export default router;