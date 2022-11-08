<script setup>
import { computed } from "vue";
import LocaleSwitcher from "@/components/AppLocaleSwitcher.vue";

const startYear = 2022;
const currentYear = new Date().getFullYear();

const year = computed(() =>
  startYear === currentYear ? startYear : `${startYear}-${currentYear}`
);
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="footer--description">&copy; {{ year }} <LocaleSwitcher /></p>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 15px 0;

  &--description {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    gap: 10px;
  }
}
</style>
