<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Profile from "@/components/Resume/Profile.vue";

const store = useStore();

const profile = computed(() => store.getters["resume/getProfile"]);
</script>

<template>
  <section class="home">
    <div class="container">
      <Profile :profile="profile" />
    </div>
  </section>
</template>
