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
  <div class="skill--item">
    <div class="skill--item--top">
      <img
        v-if="item.icon"
        :src="item.icon"
        :alt="item.name"
        class="skill--item--logo"
      />

      <h2 class="skill--item--name">
        {{ item.name }}
      </h2>

      <Level v-if="item.level" :level="item.level" />
    </div>

    <div
      class="skill--item"
      v-for="(child, childKey) in item.children"
      :key="childKey"
    >
      <div class="skill--item--top">
        <img
          v-if="child.icon"
          :src="child.icon"
          :alt="child.name"
          class="skill--item--logo"
        />

        <h3 class="skill--item--name">
          {{ child.name }}
        </h3>

        <Level v-if="child.level" :level="child.level" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skill--item {
  display: flex;
  flex-direction: column;
  gap: 5px;

  &--top {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &--name {
    margin: 0;
    padding: 0;
  }

  &--logo {
    width: 20px;
    height: auto;
  }
}
</style>
