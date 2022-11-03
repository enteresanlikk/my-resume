<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Level from "@/components/Resume/Shared/Level.vue";

const store = useStore();
const languages = computed(() => store.getters["resume/getLanguages"]);
</script>

<template>
  <section class="languages" id="languages">
    <h2 class="title">Languages ({{ languages.length }})</h2>
    <div class="languages--items">
      <div
        class="languages--item"
        v-for="(language, key) in languages"
        :key="key"
      >
        <span class="languages--item--name">
          >
          <b>
            {{ language.name }}
          </b>
        </span>

        <Level v-if="language.level" :level="language.level" />

        <div class="languages--item--levels">
          <div v-for="(level, key) in language.levels" :key="key">
            --> {{ level.name }} <Level v-if="level.level" :level="level.level" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.languages {
  &--items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
