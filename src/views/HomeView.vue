<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import ResumeProfile from "@/components/Resume/ResumeProfile.vue";

const store = useStore();

const profile = computed(() => store.getters["resume/getProfile"]);
</script>

<template>
  <section class="home">
    <div class="container">
      <ResumeProfile :profile="profile" />
    </div>
  </section>
</template>
