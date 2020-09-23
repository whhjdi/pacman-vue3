<template> <div class="ghost"></div></template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.ghost {
  width: 60px;
  height: 63px;
  position: absolute;
  &.red {
    .svg {
      fill: red;
    }
  }

  &.white {
    .svg {
      fill: white;
    }
  }

  &.green {
    .svg {
      fill: green;
    }
  }

  &.blue {
    .svg {
      fill: blue;
    }
  }

  &.orange {
    .svg {
      fill: orange;
    }
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
