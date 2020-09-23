<template>
  <main class="scene">
    <Pacman></Pacman>
    <Ghost color="green"></Ghost>
    <Ghost color="red"></Ghost>
    <Ghost color="blue"></Ghost>
    <Ghost color="orange"></Ghost>
    <Food></Food>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ghost from "./Ghost.vue";
import Pacman from "./Pacman.vue";
import Food from "./Food.vue";
export default defineComponent({
  components: {
    Ghost,
    Pacman,
    Food
  }
});
</script>

<style lang="scss">
.scene {
  height: calc(100vh - 120px);
  width: calc(100vw - 20px);
  background-color: $color1;
  position: relative;
  border: 10px $color3 solid;
}
</style>
