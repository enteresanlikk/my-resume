<script setup>
import { defineProps } from "vue";

import Level from "@/components/Resume/Shared/Level.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="languages--item">
    <span class="languages--item--name">
      <b>
        {{ item.name }}
      </b>
    </span>

    <Level v-if="item.level" :level="item.level" />

    <div class="languages--item--levels">
      <div v-for="(level, key) in item.levels" :key="key">
        {{ level.name }} <Level v-if="level.level" :level="level.level" />
      </div>
    </div>
  </div>
</template>
