<template>
  <main>
    <div class="container">
    <h1 class="neonText">
          404 Not Found
    </h1>
 </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      title: "404"
    }
  }
}
</script>

<style scoped>
main {
  height: calc(100vh - 152px);
  padding: 3% 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
}
.neonText {
  animation: flicker 1.5s infinite alternate;
  color: #fff;
}
h1 {
  font-size: 4.2rem;    
}
@keyframes flicker {
    
  0%, 18%, 22%, 25%, 53%, 57%, 100% {

      text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  
  }
  
  20%, 24%, 55% {        
      text-shadow: none;
  }    
}
  
h2 {
 font-size: 1.8rem;
}
.container {
  margin-top: 20vh;
}

body {
  font-size: 18px;
  font-family: "Helvetica Neue", sans-serif;
  background-color: #010a01;
}  

h1, h2 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
}
</style>
