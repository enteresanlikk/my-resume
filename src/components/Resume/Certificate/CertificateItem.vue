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
  <div class="certificate--item">
    <div class="certificate--item--left">
      <img
        v-if="item.company.logo"
        :src="item.company.logo"
        :alt="item.company.name"
        class="certificate--item--logo"
        loading="lazy"
      />
    </div>
    <div class="certificate--item--right">
      <h4 v-if="item.name" class="certificate--item--title">
        {{ item.name }}
      </h4>
      <span v-if="item.company.name" class="certificate--item--sub-title">
        {{ item.company.name }}
      </span>
      <span v-if="item.date" class="certificate--item--date">
        {{ item.date }}
      </span>
      <span v-if="item.uniqueId" class="certificate--item--unique-id">
        Certificate Id: {{ item.uniqueId }}
      </span>
      <a v-if="item.link" :href="item.link" target="_blank" class="certificate--item--link">
        Go to certificate
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.certificate--item {
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
