<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Experiences from "@/components/Resume/Experience/List.vue";

const store = useStore();
const experiences = computed(() => store.getters["resume/getExperiences"]);
</script>

<template>
  <section class="experiences">
    <div class="container">
      <h1 class="title">Experiences</h1>

      <Experiences :items="experiences" />
    </div>
  </section>
</template>
