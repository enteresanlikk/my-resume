<script setup>
import { defineProps } from "vue";

import NotFound from "@/components/Resume/ResumeNotFound.vue";
import Item from "./ExperienceItem.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="experience-list">
    <div v-if="items.length > 0" class="experiences">
      <Item v-for="(item, key) in items" :key="key" :item="item" />
    </div>
    <div v-else>
      <NotFound title="Experience" />
    </div>
  </section>
</template>

<style lang="scss">
.experiences {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
