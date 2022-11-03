<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const educations = computed(() => store.getters["resume/getEducations"]);
</script>

<template>
  <section class="education" id="education">
    <h2 class="title">Education ({{ educations.length }})</h2>
    <div class="education--container">
      <div class="educations">
        <div
          class="education--item"
          v-for="(education, key) in educations"
          :key="key"
        >
          <h4 class="education--item--title">
            {{ education.studyType }} - {{ education.school }}
          </h4>
          <span class="education--item--date">
            {{ education.startYear }}-{{ education.endYear || "Recent" }}
          </span>
          <span class="education--item--area" v-if="education.area">
            {{ education.area }}
          </span>
          <span class="education--item--gpa" v-if="education.gpa">
            {{ education.gpa }}
          </span>
          <span class="education--item--note" v-if="education.note">
             <i>{{ education.note }}</i>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.education {
  .educations {
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
