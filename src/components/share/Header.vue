<template>
  <header>
    <h1 class="neonText"><router-link to="/" >{{sitename}}</router-link></h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      sitename: "Aiueokashi"
    }
  }
}
</script>

<style scoped>
header {
  padding: 1em 0;
  height: 70px;
  background: #37383a;
  box-shadow: inset 0 0 60px whitesmoke,
    0 0 50px rgb(177, 176, 176),
    -10px 0 80px rgb(255, 0, 255),
    10px 0 80px rgb(0, 255, 255);
}
a {
  text-decoration: none;
  color: inherit;
}
router-link {
  color: none;
}
  .neonText {
    color: rgb(242, 248, 248);
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
  }


/* Additional styling */

h1 {
  font-size: 30px;
  text-align: left;
  padding-left: 30px;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  animation: blinker 4s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.2;
  }
}

</style>