<template>
    <div class="footer">
      <p>footer</p>
    </div>
</template>

<script>
import MediaButton from '../reusable/MediaButton'
export default {
  data () {
    return {
    }
  },
  components: {
    MediaButton
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
  height: 50px;
  display: grid;
}
</style>