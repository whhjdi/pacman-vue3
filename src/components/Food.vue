<template>
  <div
    class="food"
    :class="{ hidden: !foodVisible }"
    :style="{ top: top + 'px', left: left + 'px' }"
  >
    <div class="effective-food"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    }
  },
  watch: {
    top() {
      this.position.top = this.top;
    },
    left() {
      this.position.left = this.left;
    }
  },
  data() {
    return {
      position: { top: 0, left: 0 },
      foodVisible: true
    };
  },
  onMounted() {
    (this.position.top = this.top), (this.position.left = this.left);
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
