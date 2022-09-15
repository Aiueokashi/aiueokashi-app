<template>
  <main>
  <div v-if="loading" class="loading">Loading...</div>
    <video-player :videoURL="video" />
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
        loading: false,
        video: null,
        error: null,
      }
    },
    created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      { immediate: true }
    )
  },
  methods: {
    fetchData() {
      this.error = this.video = null
      this.loading = true
      axios.get(`https://okashi.netlify.app/.netlify/functions/downloader/api/test/${this.$route.params.id}`).then(res => {
        this.loading = false     
          this.video = res.data
      }).catch(err => {
      this.err = err.String()
      })
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
