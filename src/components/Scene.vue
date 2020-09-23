<template> <main class="scene"></main></template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.scene {
  height: calc(100vh - 120px);
  width: calc(100vw - 20px);
  background-color: $color1;
  position: relative;
  border: 10px $color3 solid;
}
</style>
