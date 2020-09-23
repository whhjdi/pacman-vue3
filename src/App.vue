<template>
  <div class="pacman-app">
    <Header></Header>
    <Scene />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "./components/Header";
import Scene from "./components/Scene";
export default defineComponent({
  components: {
    Header,
    Scene
  }
});
</script>

<style lang="scss">
.pacman-app {
  font-family: "Roboto Mono", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $color3;
}
</style>
