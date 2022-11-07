<script setup>
import { watch } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
import i18nConstants from "@/constants/i18n";

const { locale, availableLocales } = useI18n();
const store = useStore();

watch(
  () => locale,
  (newLocale) => {
    store.dispatch("setLocale", newLocale.value);
  },
  { deep: true }
);
</script>

<template>
  <div class="locale-switcher" v-if="availableLocales.length > 1">
    <select v-model="locale">
      <option v-for="(lang, i) in availableLocales" :key="i" :value="lang">
        {{ i18nConstants.locales[lang] }}
      </option>
    </select>
  </div>
</template>

<style lang="scss">
.locale-switcher {
  select {
    border: 0;
    border-bottom: 1px solid var(--black);
    color: var(--black);
  }
}
</style>