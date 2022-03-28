<template>
  <main>
    <youtube :video-id="videoId" ref="youtube" @playing="playingVideo" :playerVars="playerVars"></youtube>
    <div>
      <button @click="pauseVideo" v-if="playing">pause</button>
      <button @click="playVideo" v-else>play</button>
    </div>
    <div>
        <h1>
            あああ
        </h1>
    </div>
  </main>
</template>

<script>
export default {
        data(){
            return{
                videoId: '-HBjrIq821s',
                playing: true,
                playerVars:{
                    autoplay: 0,
                    color: 'red',
                    controls: 0,
                    disablekb: 0,
                    iv_load_policy: 3,
                }
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
h1{
    font-size: 500px
}
</style>