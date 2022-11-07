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
  <section class="experiences" id="experiences">
    <Item
      v-if="items.length > 0"
      v-for="(item, key) in items"
      :key="key"
      :item="item"
    />
    <NotFound v-else title="Experience" />
  </section>
</template>

<style lang="scss">
.experiences {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
