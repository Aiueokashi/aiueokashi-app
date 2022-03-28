import Top from "@/pages/Top";
import Radius from "@/pages/Radius";
import NotFound from "@/pages/NotFound";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Top",
      component: Top
    },{
      path: "/radius",
      name: "Radius",
      component: Radius
    },{
      path: "*",
      component: NotFound
    }
  ]
});