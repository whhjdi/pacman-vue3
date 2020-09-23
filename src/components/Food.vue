<template>
  <div class="food"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    postion: () => []
  }
});
</script>

<style lang="scss">
.food {
  width: 60px;
  height: 60px;
  position: absolute;
  &.hidden {
    display: none;
  }
  .effective-food {
    border-radius: 50px;
    width: 10px;
    height: 10px;
    background-color: $color2;
    margin: 25px;
  }
}
</style>
