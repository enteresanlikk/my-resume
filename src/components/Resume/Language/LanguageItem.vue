<script setup>
import { defineProps } from "vue";

import Level from "@/components/Resume/ResumeLevel.vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="language--item">
    <div class="language--item--left">
      <img
        v-if="item.flag"
        :src="item.flag"
        :alt="item.name"
        class="language--item--logo"
        loading="lazy"
      />
    </div>

    <div class="language--item--right">
      <span class="language--item--name">
        <b>
          {{ item.name }}
        </b>
      </span>

      <Level v-if="item.level" :level="item.level" />

      <div class="language--item--levels">
        <div v-for="(level, key) in item.levels" :key="key">
          {{ level.name }} <Level v-if="level.level" :level="level.level" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.language--item {
  display: flex;
  gap: 10px;

  &--left {
  }

  &--right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &--title {
    margin: 0;
    padding: 0;
  }

  &--logo {
    width: 30px;
    height: auto;
  }
}
</style>
