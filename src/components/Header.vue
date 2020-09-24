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
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    points: {
      type: Number,
      default: 10
    },
    playing: {
      type: Boolean,
      default: true
    }
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
