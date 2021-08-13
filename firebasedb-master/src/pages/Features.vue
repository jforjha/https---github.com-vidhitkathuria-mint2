<template>
  <div class="nav-container">
    <Nav />
    <!-- <h1>This is Features Page</h1> -->
    
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  
  components: {
    Nav,
  },
};
</script>

<style scoped>
.nav-container {
  width: 85vw;
  margin: 5% auto;
}
</style>