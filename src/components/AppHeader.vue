<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <header class="header">
    <nav class="header--nav container">
      <span class="header--nav--logo"> BD </span>
      <span
        class="header--nav--mobile-btn"
        @click="
          store.dispatch(store.getters.isMenuOpen ? 'closeMenu' : 'openMenu')
        "
      >
        <FontAwesomeIcon :icon="store.getters.isMenuOpen ? 'times' : 'bars'" />
      </span>
      <ul
        class="header--nav--menu list-unstyled"
        :class="store.getters.isMenuOpen ? 'active' : ''"
      >
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'home' }"
            class="header--nav--menu--item--link"
            :title="$t('header.home')"
          >
            {{ $t("header.home") }}
          </router-link>
        </li>
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'experiences' }"
            class="header--nav--menu--item--link"
            :title="$t('header.experiences')"
          >
            {{ $t("header.experiences") }}
          </router-link>
        </li>
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'educations' }"
            class="header--nav--menu--item--link"
            :title="$t('header.educations')"
          >
            {{ $t("header.educations") }}
          </router-link>
        </li>
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'skills' }"
            class="header--nav--menu--item--link"
            :title="$t('header.skills')"
          >
            {{ $t("header.skills") }}
          </router-link>
        </li>
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'languages' }"
            class="header--nav--menu--item--link"
            :title="$t('header.languages')"
          >
            {{ $t("header.languages") }}
          </router-link>
        </li>
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'certificates' }"
            class="header--nav--menu--item--link"
            :title="$t('header.certificates')"
          >
            {{ $t("header.certificates") }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: $headerHeight;
  position: sticky;
  top: 0;
  z-index: 10;
  background: $white;
  &--nav {
    display: flex;
    width: 100%;
    height: inherit;
    align-items: center;
    gap: 20px;
    @include breakpoint(xs) {
      justify-content: space-between;
    }

    &--logo {
      font-size: 2em;
    }

    &--mobile-btn {
      z-index: 1;
      background: transparent;
      border: 0;
      outline: 0;
      color: $black;
      font-size: 2em;
      display: none;
      @include breakpoint(xs) {
        display: flex;
      }
    }
    &--menu {
      display: flex;
      height: inherit;
      align-items: center;
      margin: 0;
      padding: 0;
      gap: 15px;
      overflow: auto;
      @include breakpoint(xs) {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: $headerHeight 0;
        flex-direction: column;
        justify-content: center;
        background: $white;
      }
      &.active {
        display: flex;
        justify-content: flex-start;
      }
    }
    &--menu--item {
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      @include breakpoint(xs) {
        margin: 0.5em 0;
        font-size: 1.5em;
      }
      &--link {
        height: inherit;
        color: $black;
        font-weight: bold;
        outline: none !important;
        &.active {
          text-decoration: none !important;
        }
      }
    }
  }
}
</style>
