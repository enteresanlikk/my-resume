<script setup>
import { defineProps } from "vue";

import Item from "./Item.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="skills" id="skills">
    <div class="skills--items">
      <Item v-for="(item, key) in items" :key="key" :item="item" />
    </div>
  </section>
</template>

<style lang="scss">
.skills {
  &--items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
