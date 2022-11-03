<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Level from "@/components/Resume/Shared/Level.vue";

const store = useStore();
const skills = computed(() => store.getters["resume/getSkills"]);
</script>

<template>
  <section class="skills" id="skills">
    <h2 class="title">Skills ({{ skills.length }})</h2>
    <div class="skills--items">
      <div class="skills--item" v-for="(skill, key) in skills" :key="key">
        <span class="skills--item--name">
          >
          <b>
            {{ skill.name }}
          </b>
        </span>

        <Level v-if="skill.level" :level="skill.level" />

        <div
          class="skills--item--children"
          v-for="(child, childKey) in skill.children"
          :key="childKey"
        >
          <span class="skills--item--name">--> {{ child.name }}</span>

          <Level v-if="child.level" :level="child.level" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.skills {
  &--items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
