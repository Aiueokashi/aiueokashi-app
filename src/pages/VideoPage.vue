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
  data: () => ({
    videoURL:
      `${process.env.VIDEO_DL_URL}/api/ytdl/qzWSvhXEcy8`,
  }),
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
