<template>
  <div class="pacman" :style="{ top: '123px', left: '12px' }">
    <PacmanSVG class="svg" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PacmanSVG from "../assets/images/pacman.svg";
export default defineComponent({
  components: {
    PacmanSVG
  }
});
</script>

<style lang="scss">
.pacman {
  width: 60px;
  height: 63px;
  position: absolute;
  .svg {
    fill: $color2;
  }
  &.left {
    transform: rotateY(180deg);
  }

  &.up {
    transform: rotate(-90deg);
  }

  &.down {
    transform: rotate(90deg);
  }
}
</style>
