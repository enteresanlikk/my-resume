<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="not-found">
    <div class="container">
      <h1 class="not-found--title">
        {{ t("not_found.title") }}
      </h1>
      <p class="not-found--description">
        {{ t("not_found.description") }}
      </p>
      <router-link
        :to="{ name: 'home' }"
        class="not-found--link"
        :title="t('not_found.link.text')"
      >
        {{ t("not_found.link.text") }}
      </router-link>
    </div>
  </section>
</template>
