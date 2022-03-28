<template>
  <div id="app">
    <Header />
    <router-view />
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
</style>