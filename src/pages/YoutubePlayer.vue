<template>
  <main>
    <div class="search" :class="{ open: isOpen }">
      <input
        type="search"
        class="search-box"
        v-bind:value="url"
        v-on:input="hoge"
      />
      <span v-on:click="clicked()" class="search-button">
        <span class="search-icon"></span>
      </span>
    </div>
    <div v-if="show">
    <p>
      {{ url }}
    </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return { isOpen: false, show: false, url: "" };
  },
  methods: {
    clicked: function () {
      if (this.isOpen && this.url) {
        this.show = true;
      } else {
        this.isOpen = !this.isOpen;
      }
    },
    hoge: function (e) {
      this.url = e.target.value;
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
  padding-bottom: 50px;
}
.search {
  width: 100px;
  height: 100px;
  margin: 40px auto 0;
  background-color: #242628;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
}
.search:before {
  content: "";
  display: block;
  width: 3px;
  height: 100%;
  position: relative;
  background-color: #00fede;
  transition: all 0.5s ease;
}
.search.open {
  width: 420px;
}
.search.open:before {
  height: 60px;
  margin: 20px 0 20px 30px;
  position: absolute;
}
.search-box {
  width: 100%;
  height: 100%;
  box-shadow: none;
  border: none;
  background: transparent;
  color: #fff;
  padding: 20px 100px 20px 45px;
  font-size: 40px;
}
.search-box:focus {
  outline: none;
}
.search-button {
  width: 100px;
  height: 100px;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  cursor: pointer;
}
.search-icon {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 3px solid #00fede;
  display: block;
  position: relative;
  margin-left: 35px;
  transition: all 0.5s ease;
}
.search-icon:before {
  content: "";
  width: 3px;
  height: 15px;
  position: absolute;
  right: -2px;
  top: 30px;
  display: block;
  background-color: #00fede;
  transform: rotate(-45deg);
  transition: all 0.5s ease;
}
.search-icon:after {
  content: "";
  width: 3px;
  height: 15px;
  position: absolute;
  right: -12px;
  top: 40px;
  display: block;
  background-color: #00fede;
  transform: rotate(-45deg);
  transition: all 0.5s ease;
}
.open .search-icon {
  margin-left: 35px;
  width: 60px;
  height: 60px;
  border-radius: 60px;
}
.open .search-icon:before {
  transform: rotate(52deg);
  right: 22px;
  top: 23px;
  height: 18px;
}
.open .search-icon:after {
  transform: rotate(-230deg);
  right: 22px;
  top: 13px;
  height: 18px;
}
</style>