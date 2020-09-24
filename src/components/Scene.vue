<template>
  <main class="scene">
    <Food
      v-for="(position, i) in positions"
      :key="'food-' + i"
      :top="position.top"
      :left="position.left"
      :ref="'food-' + i"
    ></Food>
    <Pacman :speed="20" ref="pacmanRef"></Pacman>
    <Ghost
      v-for="(color, i) in ghostColors"
      :key="'ghost-' + i"
      :color="color"
      :ref="'ghost-' + i"
    ></Ghost>
  </main>
</template>

<script>
import { defineComponent, inject, nextTick } from "vue";
import Pacman from "./Pacman.vue";
import Ghost from "./Ghost.vue";
import Food from "./Food.vue";
const BORDER = 20;
const FOODSIZE = 60;
const HEADERSIZE = 100;

export default defineComponent({
  components: {
    Pacman,
    Ghost,
    Food
  },
  data() {
    return {
      positions: [],
      timer: null,
      ghostColors: ["green", "red", "blue", "orange"],
      crashed: false
    };
  },
  setup() {
    const playing = inject("playing");
    return { playing };
  },
  async mounted() {
    this.renderFood(this.calcFoods());
    await nextTick();
    this.timer1 = setInterval(this.lookForEat, 200);
    this.timer2 = setInterval(this.collisionDetection, 200);
  },
  beforeUnmount() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  },
  methods: {
    getPacmanPosition() {
      const pacmanX = this.$refs.pacmanRef.position.left;
      const pacmanY = this.$refs.pacmanRef.position.top;
      // //中心位置的坐标
      const pacmanNewX = this.$refs.pacmanRef.position.left + FOODSIZE / 2;
      const pacmanNewY = this.$refs.pacmanRef.position.top + FOODSIZE / 2;
      return { pacmanX, pacmanY, pacmanNewX, pacmanNewY };
    },
    collisionDetection() {
      const {
        pacmanX,
        pacmanY,
        pacmanNewX,
        pacmanNewY
      } = this.getPacmanPosition();
      for (let i = 0; i < 4; i++) {
        const currentGhostX = this.$refs["ghost-" + i].position.left;
        const currentGhostY = this.$refs["ghost-" + i].position.top;
        //食物的中心位置
        const currentGhostNewX =
          this.$refs["ghost-" + i].position.left + FOODSIZE / 2;
        const currentGhostNewY =
          this.$refs["ghost-" + i].position.top + FOODSIZE / 2;
        if (
          (pacmanX >= currentGhostX && pacmanX <= currentGhostNewX) ||
          (pacmanNewX >= currentGhostX && pacmanNewX <= currentGhostNewX)
        ) {
          if (
            (pacmanY >= currentGhostY && pacmanY <= currentGhostNewY) ||
            (pacmanNewY >= currentGhostY && pacmanNewY <= currentGhostNewY)
          ) {
            this.crashed = true;
          }
        }
        if (this.crashed) {
          clearInterval(this.timer2);
          this.killGhost();
          this.playing = false;
          break;
        }
      }
    },
    killGhost() {
      for (let i = 0; i < 4; i++) {
        this.ghostColors[i] = "white";
      }
    },
    calcFoods() {
      return Math.floor(
        ((window.innerWidth - BORDER - FOODSIZE) *
          (window.innerHeight - BORDER - HEADERSIZE)) /
          (FOODSIZE * FOODSIZE)
      );
    },
    renderFood(allFoods) {
      let currentLeft = 0;
      let currentTop = 0;

      for (let i = 0; i < allFoods; i++) {
        //如果向右没有空间了，就向下排；
        if (currentLeft + FOODSIZE > window.innerWidth - BORDER) {
          currentTop += FOODSIZE;
          //从下一行第一个位置开始
          currentLeft = 0;
        }

        //如果不能向下了，结束；
        if (currentTop + FOODSIZE >= window.innerHeight - BORDER - HEADERSIZE) {
          break;
        }
        const poiItem = {
          top: currentTop,
          left: currentLeft
        };
        this.positions.push(poiItem);
        currentLeft += FOODSIZE;
      }
    },
    lookForEat() {
      const {
        pacmanX,
        pacmanY,
        pacmanNewX,
        pacmanNewY
      } = this.getPacmanPosition();
      const allFoods = this.calcFoods();

      for (let i = 0; i < allFoods; i++) {
        //获取每个食物的坐标
        const currentFoodX = this.$refs["food-" + i].left;
        const currentFoodY = this.$refs["food-" + i].top;
        //食物的中心位置
        const currentFoodNewX = this.$refs["food-" + i].left + FOODSIZE / 2;
        const currentFoodNewY = this.$refs["food-" + i].top + FOODSIZE / 2;
        if (
          (pacmanX >= currentFoodX && pacmanX <= currentFoodNewX) ||
          (pacmanNewX >= currentFoodX && pacmanNewX <= currentFoodNewX)
        ) {
          if (
            (pacmanY >= currentFoodY && pacmanY <= currentFoodNewY) ||
            (pacmanNewY >= currentFoodY && pacmanNewY <= currentFoodNewY)
          ) {
            if (this.$refs["food-" + i].foodVisible) {
              this.$refs["food-" + i].foodVisible = false;
              // eslint-disable-next-line vue/custom-event-name-casing
              this.$emit("handle_points");
            }
          }
        }
      }
    }
  }
});
</script>

<style lang="scss">
.scene {
  border: 10px $color3 solid;
  height: calc(100vh - 120px);
  width: calc(100vw - 20px);
  background-color: $color1;
  position: relative;
}
</style>
