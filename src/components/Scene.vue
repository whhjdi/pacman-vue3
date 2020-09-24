<template>
  <main class="scene">
    <Pacman :speed="20" ref="pacmanRef"></Pacman>
    <Ghost color="green"></Ghost>
    <Ghost color="red"></Ghost>
    <Ghost color="blue"></Ghost>
    <Ghost color="orange"></Ghost>
    <Food
      v-for="(position, i) in positions"
      :key="'food-' + i"
      :top="position.top"
      :left="position.left"
      :ref="'food-' + i"
    ></Food>
  </main>
</template>

<script>
import { defineComponent, nextTick } from "vue";
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
      timer: null
    };
  },

  async mounted() {
    this.renderFood(this.calcFoods());
    await nextTick();
    this.timer = setInterval(this.lookForEat, 200);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
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
      const pacmanX = this.$refs.pacmanRef.position.left;
      const pacmanY = this.$refs.pacmanRef.position.top;
      // //中心位置的坐标
      const pacmanNewX = this.$refs.pacmanRef.position.left + FOODSIZE / 2;
      const pacmanNewY = this.$refs.pacmanRef.position.top + FOODSIZE / 2;

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
