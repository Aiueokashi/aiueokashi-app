<template>
  <main>
  <div class="search" :class="{ open: isOpen }">
      <mu-text-field
        color="white"
        bg-color="grey"
        v-model="url"
        type="text"
        label="Youtube URL"
      />
      <mu-button color="blue" type="button" v-on:click="clicked()" class="search-button">
        <mu-icon value="play_circle_filled" right></mu-icon>Play
      </mu-button>
    </div>  
  <div v-if="loading" class="loading"><spinner size="large" message="loading" line-fg-color="#ff00ff" /></div>
  <div v-if="videoready">
    <video-player :videoURL="video" />
      <mu-button color="blue">
      <a :href="video" target="_blank">
        <mu-icon value="file_download" right></mu-icon>Download!
        </a>
      </mu-button>
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
      let ID = this.url.split("v=")[1];
      axios.get(`https://okashi.netlify.app/.netlify/functions/downloader/api/test/${ID}`).then(res => {
        this.loading = false   
        this.videoready = true
          this.video = res.data
      }).catch(err => {
      this.err = err.String()
      this.loading = false
      this.videoready = false
      })
    },
    clicked: function () {
      if (this.url.includes("youtube.com")) {
        this.show = true;
        
        this.fetchData();
        }
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
  padding-bottom: 50px;
  margin-top: 70px;
}
</style>
