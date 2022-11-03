<script setup>
import { computed } from "vue";
import LocaleSwitcher from "@/components/Shared/LocaleSwitcher.vue";

const startYear = 2022;
const currentYear = new Date().getFullYear();

const year = computed(() =>
  startYear === currentYear ? startYear : `${startYear}-${currentYear}`
);
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ year }}</p>
    </div>
  </footer>
</template>
