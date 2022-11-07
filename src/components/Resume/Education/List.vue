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
  <section class="educations" id="educations">
    <Item
      v-if="items.length > 0"
      v-for="(item, key) in items"
      :key="key"
      :item="item"
    />
    <NotFound v-else title="Education" />
  </section>
</template>

<style lang="scss">
.educations {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
