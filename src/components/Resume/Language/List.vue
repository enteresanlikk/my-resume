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
  <section class="languages" id="languages">
    <div class="languages--items">
      <Item v-for="(item, key) in items" :key="key" :item="item" />
    </div>
  </section>
</template>

<style lang="scss">
.languages {
  &--items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
