<template>
  <main>
    <div class="container" ontouchstart="">
    <div v-for="card in cards" :key="card.number" class="card">
       <div class="face face1">
         <div class="content">
            <ion-icon :name=card.icon></ion-icon>         
           <h3>{{card.title}}</h3>
         </div>
       </div>
       <div class="face face2">
         <div class="content">
           <p>{{card.description}}</p>
           <a v-if="card.insite === false" :href=card.link type="button" target="_blank">{{card.linkmsg}}</a>
           <router-link v-if="card.insite === true" :to=card.link>{{card.linkmsg}}</router-link>
         </div>
       </div>
    </div>
   </div>
  </main>
</template>

<script>
import anime from 'animejs';
export default {
  data () {
    return {
      cards: [{
          number:1,
          title: "Youtube Downloader",
          description: "製作中のプロジェクトです。まあ、ようつべから動画とってくるアレです。",
          icon: "logo-youtube",
          insite: true,
          link: "/video/a",
          linkmsg: "Go to Youtube Downloader"
      },{
          number:2,
          title: "GitHub",
          description: "コードおきば",
          icon:"logo-github",
          insite: false,
          link: "https://github.com/Aiueokashi",
          linkmsg: "Visit Github"
      },{
          number:3,
          title: "ColorfulDuck",
          description: "またまた製作中のプロジェクトです。discordの仲間たちとやってます。",
          icon: "game-controller",
          insite: false,
          link: "https://colorful-duck.netlify.app/",
          linkmsg: "Visit DUCK",
          image: "https://cdn.discordapp.com/attachments/934834607415754755/935217662403964968/1318_20220125020046.png"
      },{
          number:4,
          title: "テスト",
          description: "テスト用のページです。",
          icon: "construct",
          insite: true,
          link: "/test",
          linkmsg: "Go to DUCK",
          image: ""
      }]
    }
  },
  mounted() {
  anime({
    targets: '.card',
    scale: [0.3, 1],
    easing: 'easeInElastic(2, .6)'
  })
}
}
</script>

<style scoped>
main {
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
  padding-bottom: 50px;
}

.container{
  width: auto;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap:  wrap;
}

.container .card{
  position: relative;
  margin: 0.5rem;

}

.container .card .face{
  width:300px;
  height: 200px;
  transition: .4s;
  
}

.container .card .face.face1{
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-content:center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.container .card:hover .face.face1{
  transform: translateY(0);
  box-shadow:
    inset 0 0 60px whitesmoke,
    inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff,
    inset 20px 0 300px #f0f,
    inset -20px 0 300px #0ff,
    0 0 50px #fff,
    -10px 0 80px #f0f,
    10px 0 80px #0ff;
   
}


.container .card .face.face1 .content{
  opacity: .2;
  transition:  0.5s;
  text-align: center;
}

.container .card:hover .face.face1 .content{
  opacity: 1;
 
}

.container .card .face.face1 .content ion-icon{
  font-size: 3em;
  color: white;
  display: inline-block;
   
}

.container .card .face.face1 .content h3{
  font-size: 1em;
  color: white;
  text-align: center;
  

}

.container .card .face.face1 .content a{
   transition: .5s;
}

.container .card .face.face2{
   position: relative;
   background: whitesmoke;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0,0,0,.8);
  transform: translateY(-100px);
}

.container .card:hover .face.face2{
    transform: translateY(0);


}

.container .card .face.face2 .content p, a{
  font-size: 10pt;
  margin: 0 ;
  padding: 0;
  color:#333;
}

.container .card .face.face2 .content a{
  text-decoration:none;
  color: black;
  box-sizing: border-box;
  outline : 1px dashed #333;
  padding: 10px;
  margin: 15px 0 0;
  display: inline-block;
}

.container .card .face.face2 .content a:hover{
  background: #333 ;
  color: whitesmoke; 
  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);
}

</style>
