<template>
  <div
    :class="'pacman ' + pacmanData.looking"
    :style="{
      left: pacmanData.position.left + 'px',
      top: pacmanData.position.top + 'px'
    }"
  >
    <PacmanSVG class="svg" />
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import PacmanSVG from "../assets/images/pacman.svg";
const BORDER = 20;
const FOODSIZE = 60;
const HEADERSIZE = 100;

export default defineComponent({
  components: {
    PacmanSVG
  },
  props: {
    speed: {
      default: 20
    }
  },
  setup(props) {
    const pacmanData = reactive({
      looking: "right",
      position: { top: 0, left: 0 }
    });

    const move = () => {
      const { looking } = pacmanData;
      const { top, left } = pacmanData.position;
      const currentLeft = left;
      const currentTop = top;
      if (looking == "left") {
        pacmanData.position.left = Math.max(currentLeft - props.speed, 0);
      } else if (looking === "right") {
        pacmanData.position.left = Math.min(
          currentLeft + props.speed,
          window.innerWidth - BORDER - BORDER - FOODSIZE
        );
      } else if (looking === "up") {
        pacmanData.position.top = Math.max(
          currentTop - props.speed,
          HEADERSIZE + BORDER
        );
      } else {
        pacmanData.position.top = Math.min(
          currentTop + props.speed,
          window.innerHeight - BORDER - BORDER - HEADERSIZE - FOODSIZE
        );
      }
      console.log("move");
    };
    const rotate = keyCode => {
      if (keyCode === 37) {
        pacmanData.looking = "left";
      } else {
        if (keyCode === 38) {
          pacmanData.looking = "up";
        } else {
          if (keyCode === 39) {
            pacmanData.looking = "right";
          } else {
            pacmanData.looking = "down";
          }
        }
      }
    };
    const handleKeyDown = event => {
      const { keyCode } = event;
      const arrows = [37, 38, 39, 40];
      if (arrows.includes(keyCode)) {
        rotate(keyCode);
      }
    };
    onMounted(() => {
      document.addEventListener("keydown", handleKeyDown);
      setInterval(move, 100);
    });

    return { pacmanData };
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
