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
      "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
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