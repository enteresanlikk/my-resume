<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Data",
  },
});
</script>

<template>
    <div class="resume-not-found">
        <h3>{{ title }} not found...</h3>
    </div>
</template>