<template>
  <main class="scene">
    <Pacman :speed="10"></Pacman>
    <Ghost color="green"></Ghost>
    <Ghost color="red"></Ghost>
    <Ghost color="blue"></Ghost>
    <Ghost color="orange"></Ghost>
    <Food
      v-for="(position, i) in positions"
      :key="'food-' + i"
      :style="{ top: position.top + 'px', left: position.left + 'px' }"
    ></Food>
  </main>
</template>

<script>
import { defineComponent, onBeforeMount, reactive } from "vue";
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

  setup() {
    const positions = reactive([]);

    const renderFood = () => {
      //总的个数
      const allFoods =
        ((window.innerWidth - BORDER - FOODSIZE) *
          (window.innerHeight - BORDER - HEADERSIZE)) /
        (FOODSIZE * FOODSIZE);
      let currentLeft = 0;
      let currentTop = 0;

      for (let i = 0; i < allFoods; i++) {
        //如果向左没有空间了，就向下排；
        if (currentLeft + FOODSIZE >= window.innerWidth - BORDER) {
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
        positions.push(poiItem);
        currentLeft += FOODSIZE;
      }

      return positions;
    };
    onBeforeMount(() => {
      renderFood();
    });
    return {
      positions
    };
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
