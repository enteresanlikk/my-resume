<script setup>
import { defineProps } from "vue";

import NotFound from "@/components/Resume/Shared/NotFound.vue";
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
    <Item
      v-if="items.length > 0"
      v-for="(item, key) in items"
      :key="key"
      :item="item"
    />
    <NotFound v-else title="Language" />
  </section>
</template>

<style lang="scss">
.languages {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
