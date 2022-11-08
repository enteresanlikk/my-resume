<script setup>
import { defineProps } from "vue";

import NotFound from "@/components/Resume/ResumeNotFound.vue";
import Item from "./EducationItem.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="education-list">
    <div v-if="items.length > 0" class="educations">
      <Item v-for="(item, key) in items" :key="key" :item="item" />
    </div>
    <div v-else>
      <NotFound title="Education" />
    </div>
  </section>
</template>

<style lang="scss">
.educations {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
