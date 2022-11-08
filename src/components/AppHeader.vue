<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <header class="header">
    <nav class="nav container">
      <ul class="menu list-unstyled">
        <li class="menu--item">
          <router-link :to="{ name: 'home' }" class="menu--item--link">
            {{ t("header.home") }}
          </router-link>
        </li>
        <li class="menu--item">
          <router-link :to="{ name: 'experiences' }" class="menu--item--link">
            {{ t("header.experiences") }}
          </router-link>
        </li>
        <li class="menu--item">
          <router-link :to="{ name: 'educations' }" class="menu--item--link">
            {{ t("header.educations") }}
          </router-link>
        </li>
        <li class="menu--item">
          <router-link :to="{ name: 'skills' }" class="menu--item--link">
            {{ t("header.skills") }}
          </router-link>
        </li>
        <li class="menu--item">
          <router-link :to="{ name: 'languages' }" class="menu--item--link">
            {{ t("header.languages") }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  background-color: var(--white);
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      overflow-x: auto;

      &--item {
        &--link {
          color: var(--black);
          font-weight: 600;

          &.active {
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
