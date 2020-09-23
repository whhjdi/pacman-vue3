<template>
  <div class="ghost" style="left:100px">
    <GhostSvg :class="color" />
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import GhostSvg from "../assets/images/ghost.svg";
export default defineComponent({
  components: { GhostSvg },
  props: {
    color: String,
    position: {
      defult: {
        top: "20px",
        left: "50px"
      }
    }
  },
  setup(props) {
    const computedPosition = computed(() => {
      const { top, left } = props.position;
      return { top, left };
    });

    return {
      computedPosition
    };
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
