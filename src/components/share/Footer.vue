<template>
    <div class="footer">
      <div class="wrap">
      <span class="copyright">&copy; -</span><h1> Aiueokashi </h1><span>- 2022</span>
      </div>
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
  background-color: rgb(74, 56, 75);
  color: white;
  text-align: center;
  height: 50px;
  display: grid;
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
@import url("https://fonts.googleapis.com/css?family=Sacramento&display=swap");

span{
  font-size: 10px;
  text-align: center;
  margin: 0;
}
h1 {
  font-size: 10px;
  
/*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
    0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
  color: #fccaff; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  font-family: "Sacramento", cursive;
  text-align: center;
  animation: blink 6s infinite;
  -webkit-animation: blink 6s infinite;
  display: inline-block;
}

@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
/*     color: #fccaff;
    text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

</style>