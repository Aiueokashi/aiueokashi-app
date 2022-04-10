<template>
  <main>
    <youtube
      :video-id="videoId"
      ref="youtube"
      @playing="playingVideo"
      :playerVars="playerVars"
    ></youtube>
    <div>
      <button @click="pauseVideo" v-if="playing">pause</button>
      <button @click="playVideo" v-else>play</button>
    </div>
    <div class="space">
    </div>
    <div class="box">
      <span style="--i: 0"></span>
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
      <span style="--i: 4"></span>
      <span style="--i: 5"></span>
      <span style="--i: 6"></span>
      <span style="--i: 7"></span>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      videoId: "-HBjrIq821s",
      playing: true,
      playerVars: {
        autoplay: 0,
        color: "red",
        controls: 0,
        disablekb: 0,
        iv_load_policy: 3,
      },
    };
  },
  methods: {
    playVideo() {
      this.player.playVideo();
      this.playing = true;
    },
    pauseVideo() {
      this.player.pauseVideo();
      this.playing = false;
    },
    playingVideo() {
      console.log("play start!");
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
  display: grid;
  overflow: hidden;
}
.space {
  height: 150px;
}
.box {
  position: relative;
  width: 500px;
  height: 500px;
}
.box span {
  position: absolute;
  inset: 0;
  transform: rotate(calc(var(--i) * 45deg));
}
.box span::before {
  content: "";
  position: absolute;
  left: 50%;
  width: 250px;
  height: 300px;
  background: url(../assets/off.png);
  background-size: cover;
  background-position: center;
  transform: translateX(-50%) translateY(-100px) scale(0.75);
  animation: animate 2s linear infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes animate {
    0%,100% {
         background: url(../assets/off.png);
    }
    50% {
         background: url(../assets/on.png);
    }
}
</style>