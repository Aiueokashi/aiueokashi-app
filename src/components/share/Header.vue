<template>
  <header>
  <svg width="25%" height="100px" class="logo" >
    <text  x="0" y="20" fill="none" class="animate"><router-link to="/" >{{name}}</router-link></text>
   </svg>
</header>
</template>

<script>
import anime from 'animejs';
import icon from "../../assets/icon.svg";
export default {
  data () {
    return {
      name: "Aiueokashi",
      icon: icon
    }
  },
  mounted() {
    anime({
      targets: '.animate',
      direction: 'alternate',
      strokeDashoffset: [anime.setDashoffset, 100],
      easing: 'easeInOutSine',
      loop:true,
      duration: 1500,
      delay: function(el, i) { return i * 250 },
    })
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  padding: 1em 0;
  width: 100%;
  height: 70px;
  box-shadow: inset 0 0 60px whitesmoke,
    inset 20px 0 80px rgba(255, 0, 255, 0.3),
    inset -20px 0 80px rgba(0, 255, 255, 0.3),
    inset 20px 0 300px rgba(255, 0, 255, 0.3),
    inset -20px 0 300px rgba(0, 255, 255, 0.3),
    0 0 50px rgba(255, 255, 255, 0.5),
    -10px 0 80px rgba(255, 0, 255, 0.5),
    10px 0 80px rgba(0, 255, 255, 0.5);
  mask: linear-gradient(black 70px, transparent);
  -webkit-mask: linear-gradient(black 70px, transparent);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1001;
  display: flex;
}
.logo {
  margin: 5px;
}
a {
  text-decoration: none;
  color: inherit;
}
router-link {
  color: none;
}


/* Additional styling */
@import url("https://fonts.googleapis.com/css?family=Sacramento&display=swap");
text {
  font-family: "Sacramento", cursive;
  font-size: 35px;
  text-align: left;
  padding-left: 30px;
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  fill: transparent;
  stroke: #fff6a9;
}
.animate{
  stroke-dasharray: 100px;
  stroke-dashoffset: 100px;
}

</style>
