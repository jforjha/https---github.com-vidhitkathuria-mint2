<template>
  <div id="nav">
    <Home />
    <router-view />
  </div>
</template>
<script>
import Home from "../src/views/Home.vue";
export default {
  name: "App",
  components: { Home },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
}

#nav {
  padding: 30px;
}
</style>
