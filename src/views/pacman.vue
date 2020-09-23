<template>
  <div class="pacman">
    <Header></Header>
    <Scene />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "../components/Header";
import Scene from "../components/Scene";
export default defineComponent({
  components: {
    Header,
    Scene
  }
});
</script>

<style lang="scss">
.pacman {
  background-color: $color3;
}
</style>
