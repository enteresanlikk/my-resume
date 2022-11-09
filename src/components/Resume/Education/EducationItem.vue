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
  <div class="education--item">
    <div class="education--item--left">
      <img
        v-if="item.school.logo"
        :src="item.school.logo"
        :alt="item.school.name"
        class="education--item--logo"
        loading="lazy"
      />
    </div>
    <div class="education--item--right">
      <h4 class="education--item--title">
        {{ item.school.name }} - {{ item.studyType }}
      </h4>
      <span class="education--item--date">
        {{ item.startYear }} - {{ item.endYear || "Recent" }}
      </span>
      <span class="education--item--area" v-if="item.area">
        {{ item.area }}
      </span>
      <span class="education--item--gpa" v-if="item.gpa">
        {{ item.gpa }}
      </span>
      <span class="education--item--note" v-if="item.note">
        <i>{{ item.note }}</i>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.education--item {
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
