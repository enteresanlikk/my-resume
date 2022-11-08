<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <header class="header">
    <nav class="header--nav container">
      <button
        class="header--nav--mobile-btn"
        @click="store.dispatch('toggleMenuOpened')"
      >
        {{ store.getters.getMenuOpened ? "X" : "menu" }}
      </button>
      <ul
        class="header--nav--menu list-unstyled"
        :class="store.getters.getMenuOpened ? 'active' : ''"
      >
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'home' }"
            class="header--nav--menu--item--link"
            :title="$t('header.home')"
            @click="store.dispatch('toggleMenuOpened')"
          >
            {{ $t("header.home") }}
          </router-link>
        </li>
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'experiences' }"
            class="header--nav--menu--item--link"
            :title="$t('header.experiences')"
            @click="store.dispatch('toggleMenuOpened')"
          >
            {{ $t("header.experiences") }}
          </router-link>
        </li>
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'educations' }"
            class="header--nav--menu--item--link"
            :title="$t('header.educations')"
            @click="store.dispatch('toggleMenuOpened')"
          >
            {{ $t("header.educations") }}
          </router-link>
        </li>
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'skills' }"
            class="header--nav--menu--item--link"
            :title="$t('header.skills')"
            @click="store.dispatch('toggleMenuOpened')"
          >
            {{ $t("header.skills") }}
          </router-link>
        </li>
        <li class="header--nav--menu--item">
          <router-link
            :to="{ name: 'languages' }"
            class="header--nav--menu--item--link"
            :title="$t('header.languages')"
            @click="store.dispatch('toggleMenuOpened')"
          >
            {{ $t("header.languages") }}
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
  z-index: 10000;
  background: $white;
  &--nav {
    display: flex;
    width: 100%;
    height: inherit;
    align-items: center;
    justify-content: space-between;
    &--mobile-btn {
      z-index: 1;
      background: transparent;
      border: 0;
      outline: 0;
      color: $black;
      font-size: 1.7em;
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
      @include breakpoint(xs) {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding-top: $headerHeight;
        flex-direction: column;
        justify-content: center;
        background: rgba($white, 0.9);
      }
      &.active {
        display: flex;
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
