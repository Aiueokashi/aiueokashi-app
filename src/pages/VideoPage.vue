<template>
  <main>
    <video-player :videoURL="videoURL" />
  </main>
</template>

<script>
import VideoPlayer from "../components/VideoPlayer";
export default {
  components: {
    VideoPlayer,
  },
  data() {
      return {
        videoURL:"";
      }
    },
    async fetch() {
      this.videoURL = await fetch(`https://okashi.netlify.app/.netlify/functions/downloader/api/test/${$route.params.id}`).then(res =>
        res.json()
      )
    }
  methods: {
    changeVideoPlaying(url) {
      this.videoURL = url;
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
  padding-bottom: 50px;
}
</style>
