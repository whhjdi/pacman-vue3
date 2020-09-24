<template>
  <div class="pacman-app">
    <Header :points="points"></Header>
    <Scene @handle_points="handlePoints" />
  </div>
</template>

<script>
import { defineComponent, onMounted, provide, reactive, ref, watch } from "vue";

import Header from "./components/Header";
import Scene from "./components/Scene";
export default defineComponent({
  components: {
    Header,
    Scene
  },
  setup() {
    const points = ref(0);
    const playing = ref(true);
    const audio = reactive(new Audio());

    provide("playing", playing);

    const handlePoints = () => {
      points.value = points.value + 1;
    };
    onMounted(() => {
      audio.src = require("./assets/start.mp3");
      audio.autoplay = true;
      // audio.loop = true;
      audio.play();
    });
    watch(playing, playing => {
      if (!playing.value) {
        audio.src = require("./assets/stop.mp3");
        audio.play();
      }
    });
    return { points, handlePoints };
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
  min-width: 800px;
}
</style>
