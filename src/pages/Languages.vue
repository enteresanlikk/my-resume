<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Languages from "@/components/Resume/Language/List.vue";

const store = useStore();

const languages = computed(() => store.getters["resume/getLanguages"]);
</script>

<template>
  <section class="languages">
    <div class="container">
      <h1 class="title">Languages</h1>

      <Languages :items="languages" />
    </div>
  </section>
</template>
