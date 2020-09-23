<template>
  <div class="ghost">
    <GhostSvg :class="color" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GhostSvg from "../assets/images/ghost.svg";
export default defineComponent({
  components: { GhostSvg },
  props: {
    color: String
  }
});
</script>

<style lang="scss">
.ghost {
  width: 60px;
  height: 63px;
  position: absolute;
  .red {
    fill: red;
  }

  .white {
    fill: white;
  }

  .green {
    fill: green;
  }

  .blue {
    fill: blue;
  }

  .orange {
    fill: orange;
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
