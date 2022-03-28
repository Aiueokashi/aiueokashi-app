<template>
  <main>
    <youtube :video-id="videoId" ref="youtube" @playing="playingVideo"></youtube>
    <div>
      <button @click="pauseVideo" v-if="playing">pause</button>
      <button @click="playVideo" v-else>play</button>
    </div>
  </main>
</template>

<script>
export default {
        data(){
            return{
                videoId: '-HBjrIq821s',
                playing: false,
            }
        },
        methods:{
            playVideo(){
                this.player.playVideo()
                this.playing = true
            },
            pauseVideo(){
                this.player.pauseVideo()
                this.playing = false
            },
            playingVideo(){
                console.log('play start!')
            }
        },
        computed:{
            player(){
                return this.$refs.youtube.player
            }
        }
}
</script>

<style scoped>

</style>