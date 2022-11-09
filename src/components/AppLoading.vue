<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="loading" :class="{ active: store.getters.isLoading }">
    Loading...
  </div>
</template>

<style lang="scss">
.loading {
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: $white;
  justify-content: center;
  align-items: center;
  display: none;
  &.active {
    display: flex;
  }
}
</style>
