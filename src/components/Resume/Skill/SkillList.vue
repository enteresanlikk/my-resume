<script setup>
import { defineProps } from "vue";

import NotFound from "@/components/Resume/ResumeNotFound.vue";
import Item from "./SkillItem.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="skill-list">
    <div v-if="items.length > 0" class="skills">
      <Item v-for="(item, key) in items" :key="key" :item="item" />
    </div>
    <div v-else>
      <NotFound title="Skill" />
    </div>
  </section>
</template>

<style lang="scss">
.skills {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
