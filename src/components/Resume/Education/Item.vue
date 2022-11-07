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
  <div class="education--item">
    <h4 class="education--item--title">
      {{ item.studyType }} - {{ item.school }}
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
</template>
