<template>
  <Pacman></Pacman>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pacman from "./views/Pacman.vue";

export default defineComponent({
  name: "App",
  components: {
    Pacman
  }
});
</script>

<style lang="scss">
#app {
  font-family: "Roboto Mono", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
