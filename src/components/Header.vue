<template>
  <header class="header">
    <span class="title">PACMAN</span>
    <span class="score"
      >SCORE:{{ points }}
      <span class="points">{{ playing ? "" : "GAME OVER" }}</span>
    </span>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const points = ref<number>(0);
    const playing = ref<boolean>(false);

    return { points, playing };
  }
});
</script>

<style lang="scss">
.header {
  height: 100px;
  color: yellow;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  .title {
    font-size: 80px;
    width: 50%;
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;
    margin-left: 150px;
  }
  .score {
    font-size: 40px;
    width: 50%;
    text-align: right;
    margin-top: 10px;
  }
}
</style>
