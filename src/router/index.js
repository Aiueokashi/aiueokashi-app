import Top from "@/pages/Top";
import Radius from "@/pages/Radius";
import Test from "@/pages/Test";
import NotFound from "@/pages/NotFound";
import YoutubePlayer from "@/pages/YoutubePlayer";
import VideoPage from "@/pages/VideoPage";
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
      path: "/test",
      component: Test
    },{
      path: "/youtube",
      component: YoutubePlayer
    },{
      path: "/video",
      component: VideoPage
    },{
      path: "*",
      component: NotFound
    }
  ]
});
