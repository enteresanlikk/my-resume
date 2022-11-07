<script setup>
import { defineProps } from "vue";

import Item from "./Item.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="education" id="education">
    <div class="education--container">
      <div class="educations">
        <Item v-for="(item, key) in items" :key="key" :item="item" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.education {
  .educations {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &--item {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &--title {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
