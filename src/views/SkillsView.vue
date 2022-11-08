<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Skills from "@/components/Resume/Skill/SkillList.vue";

const store = useStore();

const skills = computed(() => store.getters["resume/getSkills"]);
</script>

<template>
  <section class="skills">
    <div class="container">
      <h1 class="title">Skills</h1>

      <Skills :items="skills" />
    </div>
  </section>
</template>
