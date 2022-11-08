<script setup>
import { defineProps } from "vue";

const props = defineProps({
  level: {
    type: Number,
    required: true,
  },
});

let index = 1;
</script>

<template>
  <span class="levels" v-if="level">
    <span
      class="level level--p"
      v-for="(pl, k) in props.level"
      :key="k"
      :title="index++"
    ></span>
    <span
      class="level level--n"
      v-for="(nl, k) in 10 - props.level"
      :key="k"
      :title="index++"
    ></span>
  </span>
</template>

<style lang="scss">
.levels {
  display: inline-flex;
  gap: 3px;

  .level {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    &--p {
      background-color: $black;
    }

    &--n {
      background-color: $gray;
    }
  }
}
</style>
