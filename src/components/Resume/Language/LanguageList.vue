<script setup>
import { defineProps } from "vue";

import NotFound from "@/components/Resume/ResumeNotFound.vue";
import Item from "./LanguageItem.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="language-list">
    <div v-if="items.length > 0" class="languages">
      <Item v-for="(item, key) in items" :key="key" :item="item" />
    </div>
    <div v-else>
      <NotFound title="Language" />
    </div>
  </section>
</template>

<style lang="scss">
.languages {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
