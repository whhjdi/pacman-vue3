<template>
  <div class="pacman-app">
    <Header :points="points" :playing="playing"></Header>
    <Scene @handle_points="handlePoints" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Header from "./components/Header";
import Scene from "./components/Scene";
export default defineComponent({
  components: {
    Header,
    Scene
  },
  setup() {
    const points = ref(0);
    const playing = ref(false);
    const handlePoints = () => {
      console.log(1);
      points.value = points.value + 1;
    };
    return { points, playing, handlePoints };
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
