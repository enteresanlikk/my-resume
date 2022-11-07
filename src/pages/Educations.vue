<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Educations from "@/components/Resume/Education/List.vue";

const store = useStore();

const educations = computed(() => store.getters["resume/getEducations"]);
</script>

<template>
  <section class="educations">
    <div class="container">
      <h1 class="title">Educations</h1>

      <Educations :items="educations" />
    </div>
  </section>
</template>
