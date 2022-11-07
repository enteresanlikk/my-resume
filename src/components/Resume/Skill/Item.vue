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
  <div class="skills--item">
    <span class="skills--item--name">
      <b>
        {{ item.name }}
      </b>
    </span>

    <Level v-if="item.level" :level="item.level" />

    <div
      class="skills--item"
      v-for="(child, childKey) in item.children"
      :key="childKey"
    >
      <span class="skills--item--name">{{ child.name }}</span>

      <Level v-if="child.level" :level="child.level" />
    </div>
  </div>
</template>
