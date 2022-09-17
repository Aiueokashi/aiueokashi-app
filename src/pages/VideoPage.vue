<template>
  <main>
  <div class="search" :class="{ open: isOpen }">
      <input
        v-model="message"
        type="text"
        class="search-box"
        v-bind:value="url"
        v-on:input="hoge"
      />
      <button type="button" v-on:click="clicked()" class="search-button">
        play
      </button>
    </div>  
  <div v-if="loading" class="loading"><spinner size="large" message="loading" line-fg-color="#ff00ff" /></div>
  <div v-if="videoready">
    <video-player :videoURL="video" />
   </div>
  </main>
</template>

<script>
import Spinner from 'vue-simple-spinner';
import VideoPlayer from "../components/VideoPlayer";
import axios from "axios";
export default {
  components: {
    VideoPlayer,
    Spinner,
  },
  data() {
      return {
        loading: false,
        videoready: false,
        video: null,
        error: null,
        isOpen: false, 
        show: false, 
        url: null,
      }
    },
  methods: {
    fetchData() {
      this.error = this.video = null
      this.loading = true
      let ID = this.url.split("v=")[1] || this.url;
      axios.get(`https://okashi.netlify.app/.netlify/functions/downloader/api/test/${ID}`).then(res => {
        this.loading = false   
        this.videoready = true
          this.video = res.data
      }).catch(err => {
      this.err = err.String()
      })
    },
    clicked: function () {
      if (this.url) {
        this.show = true;
        this.fetchData();
        }
    },
    hoge: function (e) {
      this.url = e.target.value;
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
