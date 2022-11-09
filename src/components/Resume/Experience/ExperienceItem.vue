<script setup>
import { defineProps } from "vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="experience--item">
    <div class="experience--item--left">
      <img
        v-if="item.company.logo"
        :src="item.company.logo"
        :alt="item.company.name"
        class="experience--item--logo"
        loading="lazy"
      />
    </div>
    <div class="experience--item--right">
      <h4 class="experience--item--title">
        {{ item.company.name }} - {{ item.position }}
      </h4>
      <span class="experience--item--date">
        {{ item.startDate }} - {{ item.endDate || "Recent" }}
      </span>
      <span class="experience--item--summary">
        {{ item.summary }}
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.experience--item {
  display: flex;
  gap: 10px;

  &--left {
    text-align: center;
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
    width: 50px;
    height: auto;
  }
}
</style>
