<script setup>
import { defineProps } from "vue";

import NotFound from "@/components/Resume/ResumeNotFound.vue";
import Item from "./CertificateItem.vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="certificate-list">
    <div v-if="items.length > 0" class="certificates">
      <Item v-for="(item, key) in items" :key="key" :item="item" />
    </div>
    <div v-else>
      <NotFound title="Certificate" />
    </div>
  </section>
</template>

<style lang="scss">
.certificates {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
