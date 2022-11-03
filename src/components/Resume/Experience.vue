<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const experiences = computed(() => store.getters["resume/getExperiences"]);
</script>

<template>
  <section class="experience" id="experience">
    <h2 class="title">Experience ({{ experiences.length }})</h2>
    <div class="experience--container">
      <div class="experiences">
        <div
          class="experience--item"
          v-for="(experience, key) in experiences"
          :key="key"
        >
          <h4 class="experience--item--title">
            {{ experience.company }} - {{ experience.position }}
          </h4>
          <span class="experience--item--date">
            {{ experience.startDate }}-{{ experience.endDate || "Recent" }}
          </span>
          <span class="experience--item--summary">
            {{ experience.summary }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.experience {
  .experiences {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &--item {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &--title {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
