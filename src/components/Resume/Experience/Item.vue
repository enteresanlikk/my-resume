<script setup>
import { defineProps } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="experience--item">
    <h4 class="experience--item--title">
      {{ item.company }} - {{ item.position }}
    </h4>
    <span class="experience--item--date">
      {{ item.startDate }} - {{ item.endDate || "Recent" }}
    </span>
    <span class="experience--item--summary">
      {{ item.summary }}
    </span>
  </div>
</template>
