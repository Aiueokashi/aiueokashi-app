<template>
  <div id="app">
    <Header />
    <transition mode=”out-in”>
    <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/share/Header.vue";
import Footer from "./components/share/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  height: 100%;
  margin: 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  touch-action: manipulation;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(54, 51, 51);
}
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>
