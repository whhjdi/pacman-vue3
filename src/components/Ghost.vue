<template>
  <div
    class="ghost"
    :style="{ top: position.top + 'px', left: position.left + 'px' }"
  >
    <GhostSvg :class="color" />
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  onMounted,
  toRefs,
  ref,
  onBeforeMount
} from "vue";
import GhostSvg from "../assets/images/ghost.svg";
const BORDER = 20;
const FOODSIZE = 60;
const HEADERSIZE = 100;

export default defineComponent({
  components: { GhostSvg },
  props: {
    color: String,
    speed: {
      default: 20
    }
  },
  setup(props) {
    const ghostData = reactive({
      direction: "right",
      position: { top: 200, left: 100 }
    });
    const dirTimer = ref(null);
    const moveTimer = ref(null);

    const move = () => {
      const { direction } = ghostData;
      const { top, left } = ghostData.position;
      const currentLeft = left;
      const currentTop = top;
      if (direction == "left") {
        ghostData.position.left = Math.max(currentLeft - props.speed, 0);
      } else if (direction === "right") {
        ghostData.position.left = Math.min(
          currentLeft + props.speed,
          window.innerWidth - BORDER - FOODSIZE
        );
      } else if (direction === "up") {
        ghostData.position.top = Math.max(currentTop - props.speed, 0);
      } else {
        ghostData.position.top = Math.min(
          currentTop + props.speed,
          window.innerHeight - BORDER - FOODSIZE - HEADERSIZE
        );
      }
    };
    const randonDirection = () => {
      const directions = ["left", "right", "up", "down"];
      const randomIndex = Math.floor(Math.random() * 4);
      const dir = directions[randomIndex];
      ghostData.direction = dir;
    };
    onMounted(() => {
      dirTimer.value = setInterval(randonDirection, 400);
      moveTimer.value = setInterval(move, 100);
    });
    onBeforeMount(() => {
      clearInterval(dirTimer.value);
      clearInterval(moveTimer.value);
    });
    const { direction, position } = toRefs(ghostData);
    return { direction, position };
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
